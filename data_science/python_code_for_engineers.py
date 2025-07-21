# Import the libraries used to run the code
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional, List
import pandas as pd
import itertools
import math
from geopy.geocoders import Nominatim

app = FastAPI()

# Link to read the landmarks csv file that is located in Sabrina's branch
url = 'https://raw.githubusercontent.com/KRMalaGrino/butterfly-brigade/refs/heads/sabrina/data_science/landmarks.csv'
landmarks = pd.read_csv(url)

#  The functions distance, compute_total_distance, and geocode_address is the foundational logic required to run the final best_route_map function

# Request model for route optimization
class RouteRequest(BaseModel):
    address: str
    landmark_type: Optional[str] = None
    min_popularity: Optional[float] = None
    max_visit_time: Optional[float] = None

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

# Filtering by preferences allows the user to pass any combination of filters — if they skip one, it simply won’t be applied.
def filter_landmarks(df, landmark_type=None, min_popularity=None, max_visit_time=None):

    filtered_df = landmarks.copy()
    
    if landmark_type:
        filtered_df = filtered_df[filtered_df['type'].str.lower() == landmark_type.lower()]
    
    if min_popularity is not None:
        filtered_df = filtered_df[filtered_df['popularity'] >= min_popularity]
    
    if max_visit_time is not None:
        filtered_df = filtered_df[filtered_df['visit time (hrs)'] <= max_visit_time]
    
    return filtered_df.reset_index(drop=True)

# This is the final function that requires an address as input and returns the best route with total distance, a list of the order of the landmarks based on the best route, and a visualization of the best route that includes a pop-up when hovering over each landmark. The pop-up includes the landmark name, type, visit time, popularity score, and the distance to the next destination.

@app.post("/best_route/")
def get_best_route(request: RouteRequest):
    try:
        lat, lon = geocode_address(request.address)
    except ValueError as e:
        return {"error": str(e)}

    filtered_landmarks = filter_landmarks(landmarks, request.landmark_type, request.min_popularity, request.max_visit_time)
    if filtered_landmarks.empty:
        return {"error": "No landmarks matched the filter criteria."}

    best_dist = float('inf')
    best_route_df = None

    cols = filtered_landmarks.columns
    home_data = [['home', 'home', 'home', lat, lon, 'home', 0, 0, 0, 0, 0, 0, 0, 0]]
    home = pd.DataFrame(home_data, columns=cols)
    home2 = home.copy()

    for perm in itertools.permutations(filtered_landmarks.index):
        route = filtered_landmarks.loc[list(perm)].reset_index(drop=True)
        complete_route = pd.concat([home, route, home2], ignore_index=True)
        dist = compute_total_distance(complete_route)
        if dist < best_dist:
            best_dist = dist
            best_route_df = complete_route

    location_order = best_route_df['landmark'].tolist()
    return {
        "total_distance_km": round(best_dist, 2),
        "best_route_order": location_order
    }

# Example request body in json
{
  "address": "1417 Columbus Drive St. Louis Mo",
  "landmark_type": "architectural",
  "min_popularity": 50,
  "max_visit_time": 5
}

#Run the API with:
uvicorn python_code_for_engineers:app


