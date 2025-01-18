from MemoryPin import Memory
import DatabaseManager
import json


def fetch_memory_data_as_json():
    memory_list = DatabaseManager.fetch_data()
    return json.dumps([to_dict(memory) for memory in memory_list])


def to_dict(memory: Memory):
    return {
            "description": memory.description,
            "longitude": memory.longitude,
            "latitude": memory.latitude,
            "tags": memory.tags,
            "user": memory.user
        }
