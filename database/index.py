from pymongo import MongoClient

# Function to establish MongoDB connection
def get_db_connection():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.fv
    return db