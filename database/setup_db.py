def initialize_database():
    db = get_db()

    # Create collections if they don't exist
    db.users.create_index([('username', pymongo.ASCENDING)], unique=True)
    db.posts.create_index([('title', pymongo.ASCENDING)], unique=True)

    print('Database initialized successfully')