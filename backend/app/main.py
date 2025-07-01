from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List


database = [
    {"login": "admin", "password": "1234"},
    {"login": "furry", "password": "oook"},
    {"login": "denis", "password": "lol"}
]


class UserSchema(BaseModel):
    login: str
    password: str


app = FastAPI()


@app.post("/login", tags=["Authorization"])
async def login(data: UserSchema):
    for user in database:
        if user["login"] == data.login:
            if user["password"] == data.password:
                return {"status": "ok"}
            raise HTTPException(
                status_code=401,
                detail="Incorrect password",
                headers={"WWW-Authenticate": "Bearer"}
            )
    raise HTTPException(
        status_code=404,
        detail="User not found",
        headers={"WWW-Authenticate": "Bearer"}
    )


@app.post("/register", tags=["Authorization"])
async def register(data: UserSchema):
    if any(user["login"] == data.login for user in database):
        raise HTTPException(
            status_code=400,
            detail="User already exists"
        )

    database.append({"login": data.login, "password": data.password})
    return {"status": "ok"}


@app.get("/users", tags=["Users"])
async def get_users() -> List[dict]:
    return [{"login": user["login"]} for user in database]