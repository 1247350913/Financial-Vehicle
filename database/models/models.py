# def get_users():
#     users = db.users.find()
#     user_list = [user for user in users]  # Convert cursor to list of dictionaries
#     return jsonify({'users': users}), 200