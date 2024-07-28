import sys, os

# Add the project directory to the sys.path
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from server.index import app

if __name__ == '__main__':
    app.run(debug=True)