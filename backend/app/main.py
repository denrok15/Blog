from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine
from routers import auth as auth_router
from routers import posts as posts_router
from routers import users as users_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


@app.get("/")
def health() -> dict:
    return {"status": "ok"}


app.include_router(auth_router.router)
app.include_router(posts_router.router)
app.include_router(users_router.router)
