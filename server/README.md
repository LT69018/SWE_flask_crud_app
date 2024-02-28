# Flask Server
This backend runs on port 5000, as specified in the following files.
`.flaskenv`
`config.py`
To change the port number, change both of those.
Additionally, change the `../interface/src/package.json` variable called "proxy"

# 1.1 Initialize venv
When you clone the repo, you need to initialize your virtual environment.
Assuming you are already in this directory... Run the following.
```
`python3 -m venv venv`
```
# 2.0 Install Dependencies (1st time)
After activating the venv using the following system dependent command.
## Mac - Venv Activation Instructions
```
source venv/bin/activate
```
or 
```
. venv/bin/activate
```
## Windows - Venv Activation Instructions
```
.\venv\Scripts\activate
```

## Install requirements
Run the following command
```
pip install -r requirements.txt
``` 

# 2.1 Run the server!
`flask run`

# References
https://docs.python.org/3/library/sqlite3.html
https://www.sqlitetutorial.net/sqlite-python/creating-database/

https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

# Notes about utilizing database
If you want to extend this database, make sure to utilize the column names
specified as constants in `./database.py`