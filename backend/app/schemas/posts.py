from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class PostCreate(BaseModel):
    title: str
    content: str


class PostAuthor(BaseModel):
    id: int
    login: str
    name: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)


class PostOut(PostCreate):
    id: int
    likes: int
    created_at: datetime
    author: PostAuthor

    model_config = ConfigDict(from_attributes=True)
