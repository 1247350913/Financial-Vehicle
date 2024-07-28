from initialize import initialize_database

def seed_database():
    db = initialize_database()

    saves = db['saves']
    save = {
        'id': 1,
        'name': 'Sample Save',
        'assets': []
    }
    saves.insert_one(save)
    
    print('Database seeded successfully')