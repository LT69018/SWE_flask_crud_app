import sqlite3
from sqlite3 import Error as sqlite3Error

import os
from config import DATABASE_DIR_PATH, DATABASE_FILE_NAME

DB_FILE_PATH = os.path.join(DATABASE_DIR_PATH, DATABASE_FILE_NAME)

def connect_to_db():
    assert os.path.exists(DB_FILE_PATH), \
        ("Cannot connect to nonexistent database. " + \
        f"Path doesn't exist: {DB_FILE_PATH}")
    db_connection = None
    try:
        db_connection = sqlite3.connect(r"{DB_FILE_PATH}")
        return db_connection
    except sqlite3Error as connectionError:
        print("Unable to connect to database.")
        # todo: consider better way to handle error if it occurs
        print(connectionError)
        
    return db_connection
        
# reference
# https://www.sqlitetutorial.net/sqlite-python/creating-tables/
def create_users_table(db_connection):
    CREATE_USER_TABLE_SQL = """
                            CREATE TABLE IF NOT EXISTS users(
                                id INTEGER NOT NULL,
                                name TEXT,
                                points INTEGER,
                                
                                PRIMARY KEY (id)
                            );
                            """
    try:
        db_cursor = db_connection.cursor()
        db_cursor.execute(CREATE_USER_TABLE_SQL)
        
    except sqlite3Error as createTableError:
        print("Unable to create table `users`.")
        # todo: consider better way to handle error if it occurs
        print(createTableError)
