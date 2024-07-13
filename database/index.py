from pymongo import MongoClient

# Function to establish MongoDB connection
def get_db():
    db_name = "fv"
    client = MongoClient('mongodb://localhost:27017/')
    return (client[db_name],client,db_name)