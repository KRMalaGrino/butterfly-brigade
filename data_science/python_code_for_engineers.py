# Import the libraries used to run the code
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import time

import itertools
import math

from geopy.geocoders import Nominatim

# Link to read the landmarks csv file that is located in Sabrina's branch
url = 'https://raw.githubusercontent.com/KRMalaGrino/butterfly-brigade/refs/heads/sabrina/data_science/landmarks.csv'
landmarks = pd.read_csv(url)


# Filtering by preferences allows the user to pass any combination of filters — if they skip one, it simply won’t be applied.
def filter_landmarks(df, landmark_type=None, min_popularity=None, max_visit_time=None):
    """
    Filters the landmarks DataFrame based on any combination of:
    - landmark_type (exact match, case-insensitive)
    - minimum popularity score
    - maximum visit time in hours
    
    Users can pass one, two, or all three filters. If a filter is not provided, it will be ignored.
    
    Parameters:
        df (DataFrame): The landmarks DataFrame.
        landmark_type (str, optional): Type of landmark to filter by.
        min_popularity (float, optional): Minimum popularity score.
        max_visit_time (float, optional): Maximum visit time in hours.
    
    Returns:
        DataFrame: The filtered DataFrame.
    """
    filtered_df = landmarks.copy()
    
    if landmark_type:
        filtered_df = filtered_df[filtered_df['type'].str.lower() == landmark_type.lower()]
    
    if min_popularity is not None:
        filtered_df = filtered_df[filtered_df['popularity'] >= min_popularity]
    
    if max_visit_time is not None:
        filtered_df = filtered_df[filtered_df['visit time (hrs)'] <= max_visit_time]
    
    return filtered_df.reset_index(drop=True)

# Examples:

# Filter by type only
filter_landmarks(landmarks, landmark_type='architectural')

# Filter by popularity only
filter_landmarks(landmarks, min_popularity=70)

# Filter by visit time only
filter_landmarks(landmarks, max_visit_time=3)

# Filter by type and popularity
filter_landmarks(landmarks, landmark_type='architectural', min_popularity=40)

# Filter by all three
filter_landmarks(landmarks, landmark_type='amusement park', min_popularity=80, max_visit_time=8)





#  The functions distance, compute_total_distance, and geocode_address is the foundational logic required to run the final best_route_map function

#Takes two coordinates and finds the distance between them on Earth (kilometers)
def distance(lat1, lon1, lat2, lon2):
    lat1r = lat1*((math.pi)/180) #converts lats and lons to radians for formula
    lat2r = lat2*((math.pi)/180)
    lon1r = lon1*((math.pi)/180)
    lon2r = lon2*((math.pi)/180)
    delta_lat = lat2r - lat1r
    delta_lon = lon2r - lon1r
    R = 6378
    hav = ((math.sin((delta_lat)/2))**2) + (math.cos(lat1r))*(math.cos(lat2r))*((math.sin((delta_lon)/2))**2)
    distance = 2*R*math.asin(hav**0.5)
    return distance

# Calculates total distance
def compute_total_distance(route_df):
    total_distance = 0  #initialize total distance

    # Loop through each pair of consecutive locations in the route
    for i in range(len(route_df) - 1):
        lat1 = route_df.loc[i, 'latitude']
        lon1 = route_df.loc[i, 'longitude'] # Get the coordinates for the current location
        lat2 = route_df.loc[i+1, 'latitude']
        lon2 = route_df.loc[i+1, 'longitude'] # Get the coordinates of the next location in the route
        total_distance += distance(lat1, lon1, lat2, lon2) # Calculate the distance between loc1 and loc2 using haversine formula
    return total_distance  # Return total accumulated distance for the route

# Converts address to latitude & longitude using Geopy
def geocode_address(address):
    geolocator = Nominatim(user_agent="brute_force_route_optimizer")
    location = geolocator.geocode(address)
    if location:
        return location.latitude, location.longitude
    else:
        raise ValueError(f"Address not found: {address}")


# This is the final function that requires an address as input and returns the best route with total distance, a list of the order of the landmarks based on the best route, and a visualization of the best route that includes a pop-up when hovering over each landmark. The pop-up includes the landmark name, type, visit time, popularity score, and the distance to the next destination.

def best_route_map(address, df):
    # Step 1 — Geocode address
    lat, lon = geocode_address(address)
    
    best_dist = float('inf')
    best_route_df = None
    
    cols = df.columns
    home_data = [['home', 'home', 'home', lat, lon, 'home', 0, 0, 0, 0, 0, 0, 0, 0]]
    home = pd.DataFrame(data=home_data, columns=cols)
    home2 = home.copy()
    
    # Step 2 — Brute-force all permutations
    permutations = list(itertools.permutations(df.index))
    for perm in permutations:
        route = df.loc[list(perm)].reset_index(drop=True)
        complete_route = pd.concat([home, route, home2], ignore_index=True)
        dist = compute_total_distance(complete_route)
        if dist < best_dist:
            best_dist = dist
            best_route_df = complete_route

    # Step 3 — Create hover text with next leg distance
    hover_texts = []
    for i in range(len(best_route_df)):
        row = best_route_df.loc[i]
        if i < len(best_route_df) - 1:
            loc1 = (row['latitude'], row['longitude'])
            loc2 = (best_route_df.loc[i + 1, 'latitude'], best_route_df.loc[i + 1, 'longitude'])
            next_leg_distance = haversine(loc1, loc2)
            next_leg_info = f"Next Leg Distance: {next_leg_distance:.2f} km"
        else:
            next_leg_info = "End of Route"
        
        hover_texts.append(
            f"<b>{row['landmark']}</b><br>"
            f"Type: {row['type']}<br>"
            f"Visit Time: {row['visit_time_(hrs)']} hrs<br>"
            f"Popularity Score: {row['popularity']}<br>"
            f"{next_leg_info}"
        )

    # Step 4 — Plotting with Plotly
    fig = go.Figure()

    # Add lines between landmarks with distance info
    for i in range(len(best_route_df) - 1):
        loc1 = (best_route_df.loc[i, 'latitude'], best_route_df.loc[i, 'longitude'])
        loc2 = (best_route_df.loc[i + 1, 'latitude'], best_route_df.loc[i + 1, 'longitude'])
        fig.add_trace(go.Scattermap(
            mode="lines",
            lon=[loc1[1], loc2[1]],
            lat=[loc1[0], loc2[0]],
            line={'width': 2, 'color': 'green'},
            text=[f"{best_route_df.loc[i, 'landmark']} → {best_route_df.loc[i + 1, 'landmark']}<br>Distance: {haversine(loc1, loc2):.2f} km"],
            hoverinfo='text',
            showlegend=False
        ))

       # Add markers with hover text
    fig.add_trace(go.Scattermap(
        mode="markers",  # Only markers, no always-visible text
        lon=best_route_df['longitude'],
        lat=best_route_df['latitude'],
        text=hover_texts,
        marker={'size': 10, 'color': 'green'},
        hoverinfo='text',
        name='Optimized Route'
    ))
    
    fig.update_layout(
        mapbox_style="open-street-map",
        mapbox_zoom=4,
        mapbox_center={"lat": best_route_df['latitude'].mean(), "lon": best_route_df['longitude'].mean()},
        title=f"Optimized Route — Total Distance: {best_dist:.2f} km",
        height=600
    )

    fig.show()

    # Step 5 — Return route summary
    location_order = best_route_df['landmark'].tolist()
    return f"Total Distance: {best_dist:.2f} km, Best Route: {location_order}"

# Geocoder works best with street address, city and state at a minimum for input
address = '1417 Columbus Drive St. Louis Mo'

result = best_route_map(address, df)