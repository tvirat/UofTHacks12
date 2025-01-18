import sqlite3
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
        tags = i[4]
        user = i[5]
        memory_list.append(Memory(description, longitude, latitude, tags, user))
    connection.close()
    return memory_list

def main():
    # Your main code here
    create_table()
    insert_element(Memory("this is the first entry", 1.0, 1.0,[], "arm"))
    slay = fetch_data()
    print(slay[0].description, slay[0].longitude, slay[0].latitude)

if __name__ == "__main__":
    main()
