from pydantic import BaseModel
class UserSchema(BaseModel):
    login: str
    password: str

class UserInfoSchema(UserSchema):
    bio: str
    name: str
    location: str
    birthday: str
    phone: str
    gender: str

