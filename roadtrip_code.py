import pandas as pd
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

import itertools
import math

url = 'https://raw.githubusercontent.com/KRMalaGrino/butterfly-brigade/refs/heads/sabrina/data_science/Landmark_Dataset_with_Visit_Time_and_Popularity_Factors.csv'
df = pd.read_csv(url)
df = df.drop(index=[1, 2, 5, 8], errors='ignore').reset_index(drop=True)
df.columns = df.columns.str.lower().str.replace(' ', '_').str.replace('/', '_')
df = df.map(lambda x: x.lower().replace(' ', '_').replace('/', '_') if isinstance(x, str) else x)
# Set the weights to value the degree of importance of each of the columns
w_r = 0.40 # weight for the ratings
w_p = 0.30 # weight for the reviews_photos
w_v = 0.30 # weight for the visitors
# Calculate max values 
max_reviews = df['reviews_photos'].max()
max_visitors = df['annual_visitors'].max()
# Feature engineering to score popularity out of 100
df['rating_factor'] = (df['average_user_rating'] / 5) * 100
df['reviews_factor'] = (df['reviews_photos'] / max_reviews) * 100
df['visitors_factor'] = (df['annual_visitors'] / max_visitors) * 100
# Calculate Popularity Score
df['popularity'] = (
    (df['rating_factor'] * w_r) +
    (df['reviews_factor'] * w_p) +
    (df['visitors_factor'] * w_v)
)
# Round the 'popularity' score up to a whole number and change the type to integer
df['popularity'] = df['popularity'].round(0).astype(int)



from geopy.geocoders import Nominatim

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

# Takes address as an input and outputs total distance and the best route based off the input
def best_route1(address): # Geocoder works best with street address, city, and state at a minimum

    
    
    # FIRST, Geocode the input for the address
    lat, lon = geocode_address(address) 
    
    best_dist = 1000000 #a million for comparison
    best_route = None #setting a variable for best route
    location_order = [] #blank list to append to later for neatness
    
    cols = df.columns #acquiring columns from location dataframe

    # SECOND, create dataframe row for home/starting point
    fill = [['home', 'home', 'home', lat, lon, 'home', 0, 0, 0, 0, 0, 0, 0, 0]] #list of values for dataframe creation
    home = pd.DataFrame(data=fill, columns=cols) #home dataframe
    home2 = home.copy() #copy
    
    # THIRD, check all permutations of landmark order
    permutations = list(itertools.permutations(df.index)) #all permutations of index
    for i, perm in enumerate(permutations): #for loop to try all permutations with home location at start and finish
        route = df.loc[list(perm)].reset_index(drop=True) #new order of df
        complete_route = pd.concat([home, route, home2], axis='index').reset_index(drop=True) #concat
        dist = compute_total_distance(complete_route) #calc total distance
        if dist < best_dist: #check if the distance is shorter
            best_dist = dist
            best_route = complete_route
    
    # FOURTH, extract order of landmark names for display
    for p in best_route['landmark']: #appending loactions for neatness
        location_order.append(p)
    
    return f"Total Distance: {best_dist}, Best Route {location_order}"