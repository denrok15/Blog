from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from database.database import database,posts
from schemas.user import UserSchema
from schemas.posts import PostSchema



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


@app.post("/post", tags=["Posts"])
async def post(data: PostSchema):
    posts.append({"title": data.title, "content": data.content,'user': data.user, 'likes': data.likes})
    return {"status": "ok"}
@app.get("/posts", tags=["Posts"])
async def get_posts() -> List[dict]:
    return posts
@app.put('/like',tags=["Posts"])
async def like_post(data: PostSchema):
    for post in posts:
        if data.title == post["title"] and data.user == post["user"]:
            post["likes"] += 1

    raise HTTPException(status_code=404, detail="Post not found")


@app.put('/deletelike', tags=["Posts"])
async def deletelike_post(data: PostSchema):
    for post in posts:
        if data.title == post["title"] and data.user == post["user"]:
            post["likes"] -= 1

    raise HTTPException(status_code=404, detail="Post not found")
