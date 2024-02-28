# Flask Server
This backend runs on port 5000, as specified in the following files.
`.flaskenv`
`config.py`
To change the port number, change both of those.
Additionally, change the `../interface/src/package.json` variable called "proxy"

# 1.1 Initialize venv
When you clone the repo, you need to initialize your virtual environment.
Assuming you are already in this directory... Run the following.
`python3 -m venv venv`

# 2.0 Install Dependencies (1st time)
After activating the venv using the following system dependent command.
Mac: `source venv/bin/activate`
Windows: `.\venv\Scripts\activate`

Run `pip install -r requirements.txt` 
// ^ this is just according to the blog 
// https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
// that I was following

# 2.1 Run the server!
`flask run`