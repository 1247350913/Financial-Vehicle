def seed_database():
    # Drop the entire database
    client.drop_database(db_name)

    # Recreate the database
    db = client[db_name]

    # Create the "saves" collection and add one "save" document object
    saves_collection = db['saves']
    save_document = {
        'id': 1,
        'name': 'Sample Save',
        'assets': []
    }
    saves_collection.insert_one(save_document)

    print('Database seeded successfully')