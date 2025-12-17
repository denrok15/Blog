from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth.dependencies import get_db
from auth.utils import create_access_token, get_password_hash, verify_password
from models.user import User
from schemas.token import TokenSchema
from schemas.user import UserCreate, UserLogin, UserOut

router = APIRouter(prefix="/auth", tags=["Authentication"])


def authenticate_user(db: Session, login: str, password: str) -> User | None:
    user = db.query(User).filter(User.login == login).first()
    if not user:
        return None
    if not verify_password(password, user.password_hash):
        return None
    return user


@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    if db.query(User).filter(User.login == user_in.login).first():
        raise HTTPException(status_code=400, detail="Login already taken")
    user = User(
        login=user_in.login,
        password_hash=get_password_hash(user_in.password),
        name=user_in.name,
        bio=user_in.bio,
        location=user_in.location,
        birthday=user_in.birthday,
        phone=user_in.phone,
        gender=user_in.gender,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=TokenSchema)
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    user = authenticate_user(db, credentials.login, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect login or password")
    token = create_access_token(
        {"sub": user.login, "user_id": user.id},
    )
    return TokenSchema(access_token=token)
