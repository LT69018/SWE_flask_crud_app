import sqlite3  # apparently part of standard python, so doesn't need to be installed?
from sqlite3 import Error as sqlite3Error

import os
from config import DATABASE_DIR_PATH, DATABASE_FILE_NAME

DB_FILE_PATH = os.path.join(DATABASE_DIR_PATH, DATABASE_FILE_NAME)
ID_KEY = "id"
NAME_KEY = "name"
POINTS_KEY = "points"
ALL_KEYS = [ID_KEY, NAME_KEY, POINTS_KEY]

def connect_to_db():
    assert os.path.exists(DB_FILE_PATH), \
        ("Cannot connect to nonexistent database. " + \
        f"Path doesn't exist: {DB_FILE_PATH}")
    db_connection = None
    try:
        db_connection = sqlite3.connect(DB_FILE_PATH)
        return db_connection
    except sqlite3Error as connectionError:
        print("Unable to connect to database.")
        # todo: consider better way to handle error if it occurs
        print(connectionError)
        
    return db_connection
        
# reference
# https://www.sqlitetutorial.net/sqlite-python/creating-tables/
def create_users_table():
    CREATE_USER_TABLE_SQL = f"""
                            CREATE TABLE IF NOT EXISTS users(
                                {ID_KEY} INTEGER NOT NULL,
                                {NAME_KEY} TEXT,
                                {POINTS_KEY} INTEGER,
                                
                                PRIMARY KEY ({ID_KEY})
                            );
                            """
    try:
        db_connection = connect_to_db()
        if db_connection is None:
            raise sqlite3Error
        
        db_cursor = db_connection.cursor()
        db_cursor.execute(CREATE_USER_TABLE_SQL)
        
        db_connection.commit()
        db_connection.close()
        
    except sqlite3Error as createTableError:
        print("Unable to create table `users`.")
        # todo: consider better way to handle error if it occurs
        print(createTableError)


def are_keys_matching_db(a_dict):
    """
    :param a_dict: Dictionary we want to see if matches our keys
    :type a_dict: dict
    """
    keys_list = list(a_dict.keys())
    if len(keys_list) != len(ALL_KEYS) or \
        set(keys_list) != set(ALL_KEYS):
        return False
    return True

def create_user(user_dict):
    """
    Add a row to our users database!

    :param user_dict: Example - {id: ..., name:..., points: ...}
        Make sure you supply the same keys that are constants in this file.
        [ID_KEY, NAME_KEY, POINTS_KEY]
    :type user_dict: dict
    :raises sqlite3Error: Unable to establish connection to database.
    """    
    
    assert are_keys_matching_db(user_dict), f"Incorrect user dictionary format. See documentation."
    CREATE_USER_SQL = f"""
                       INSERT INTO users 
                       VALUES ({', '.join(user_dict.values())})
                       """
    try:
        db_connection = connect_to_db()
        if db_connection is None:
            raise sqlite3Error("Unable to establish connection with database")
        
        db_cursor = db_connection.cursor()
        db_cursor.execute(CREATE_USER_SQL)
        
        db_connection.commit()
        db_connection.close()
        
    except sqlite3Error as createTableError:
        print("Unable to create table `users`.")
        # todo: consider better way to handle error if it occurs
        print(createTableError)
        
        
def read_all_users():
    """
    Return the rows of the database in a JSON format so that the backend can parse it.

    :raises sqlite3Error: Unable to establish connection to database.
    """    
    READ_ALL_USERS_SQL = f"""
                          SELECT * from users
                          """
    try:
        db_connection = connect_to_db()
        if db_connection is None:
            raise sqlite3Error("Unable to establish connection with database")
        
        db_cursor = db_connection.cursor()
        db_cursor.execute(READ_ALL_USERS_SQL)
        
        db_connection.commit()
        db_connection.close()
        
    except sqlite3Error as createTableError:
        print("Unable to read all users from table `users`.")
        # todo: consider better way to handle error if it occurs
        print(createTableError)