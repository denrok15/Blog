from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
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


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login", tags=["Authorization"])
async def login(data: UserSchema):
    for user in database:
        if user["login"] == data.login:
            if user["password"] == data.password:
                return {"status": "ok", "login": data.login}
            raise HTTPException(status_code=401, detail="Incorrect password")
    raise HTTPException(status_code=404, detail="User not found")

@app.post("/register", tags=["Authorization"])
async def register(data: UserSchema):
    if any(user["login"] == data.login for user in database):
        raise HTTPException(status_code=400, detail="User already exists")
    database.append({"login": data.login, "password": data.password})
    return {"status": "ok", "login": data.login}

@app.get("/users", tags=["Users"])
async def get_users() -> List[dict]:
    return [{"login": user["login"]} for user in database]
