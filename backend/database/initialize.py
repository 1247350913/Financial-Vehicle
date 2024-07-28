from index import get_db_connection

def initialize_database():
    local_mongo = get_db_connection()
    db_name = "fv"

    local_mongo.drop_database(db_name)
    db = local_mongo[db_name]
    print('Database initialized successfully')
    
    return db
