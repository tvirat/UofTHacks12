import sqlite3
import pandas as pd
from MemoryPin import Memory


def connection_make():
    connection = sqlite3.connect("database/uofthacks.db")
    cursor = connection.cursor()
    return (connection,cursor)

def create_table():

    sql_command = """CREATE TABLE memorydbne (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description VARCHAR(255),    
        longitude FLOAT,             
        latitude FLOAT,               
        tags TEXT,                    
        user VARCHAR(100)
    )"""

    connection, cursor = connection_make()
    cursor.execute(sql_command)
    connection.close()


def insert_element(item: Memory):

    tags_string = ','.join(item.tags)

    description = item.description
    longitude = item.longitude
    latitude = item.latitude
    tags = tags_string
    user = item.user

    connection, cursor = connection_make()

    cursor.execute('''
        INSERT INTO memorydbne (description, longitude, latitude, tags, user)
        VALUES (?, ?, ?, ?, ?)
    ''', (description, longitude, latitude, tags, user))

    connection.commit()
    connection.close()

def fetch_data():

    connection, cursor = connection_make()
    cursor.execute("SELECT * FROM memorydbne")
    result = cursor.fetchall()
    memory_list = []
    for i in result:
        description = i[1]
        longitude = i[2]
        latitude = i[3]
        tags = i[4].split(",")
        user = i[5]
        memory_list.append(Memory(description, longitude, latitude, tags, user))
    connection.close()
    return memory_list


def filter_data(row, tag):
    
    connection, cursor = connection_make()
    query=f"SELECT TAGS FROM database/uofthacks WHERE {row} = ?;"
    cursor.execute(query, (tag,))
    data = pd.DataFrame(cursor.fetchall())
    data.row = [x[0] for x in cursor.description]
    connection.close()
    return data

def main():
    # Your main code here

    slay = fetch_data()
    print(slay[0].description, slay[0].longitude, slay[0].latitude)

if __name__ == "__main__":
    main()
