from pymongo import MongoClient

# Function to establish MongoDB connection
def get_db_connection():
    return MongoClient('mongodb://localhost:27017/')