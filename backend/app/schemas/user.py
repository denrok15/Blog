from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class UserBase(BaseModel):
    login: str


class UserLogin(UserBase):
    password: str


class UserCreate(UserLogin):
    name: Optional[str] = None
    bio: Optional[str] = None
    location: Optional[str] = None
    birthday: Optional[str] = None
    phone: Optional[str] = None
    gender: Optional[str] = None


class UserOut(UserBase):
    id: int
    name: Optional[str] = None
    bio: Optional[str] = None
    location: Optional[str] = None
    birthday: Optional[str] = None
    phone: Optional[str] = None
    gender: Optional[str] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
