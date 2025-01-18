
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

    def get_description(self):
        return self.description

    def set_description(self, description: str):
        self.description = description

    def get_longitude(self):
        return self.longitude

    def set_longitude(self, longitude: float):
        self.longitude = longitude

    def get_latitude(self):
        return self.latitude

    def set_latitude(self, latitude: float):
        self.latitude = latitude

    def get_tags(self):
        return self.tags

    def set_tags(self, tags: list[str]):
        self.tags = tags

    def get_user(self):
        return self.user

    def set_user(self, user: str):
        self.user = user
