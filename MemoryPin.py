
class Memory:

    description: str
    longitude: float
    latitude: float
    tags: list[str]
    user: str

    def __init__(self, description: str, longitude: float, latitude: float, tags: list[str], user: str):
        self.description = description
        self.longitude = longitude
        self.latitude = latitude
        self.tags = tags
        self.user = user
