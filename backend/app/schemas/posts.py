from pydantic import BaseModel
class PostSchema(BaseModel):
    title: str
    content: str
    user: str
    likes: int
