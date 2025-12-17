from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, joinedload

from auth.dependencies import get_current_user, get_db
from models.post import Post
from models.user import User
from schemas.posts import PostCreate, PostOut

router = APIRouter(tags=["Posts"])


@router.post("/posts", response_model=PostOut, status_code=status.HTTP_201_CREATED)
def create_post(
    post_in: PostCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    post = Post(
        title=post_in.title,
        content=post_in.content,
        author_id=current_user.id,
    )
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


@router.get("/posts", response_model=list[PostOut])
def list_posts(db: Session = Depends(get_db)):
    return (
        db.query(Post)
        .options(joinedload(Post.author))
        .order_by(Post.created_at.desc())
        .all()
    )


@router.put("/posts/{post_id}/like")
def like_post(
    post_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
):
    post = db.get(Post, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    post.likes += 1
    db.commit()
    db.refresh(post)
    return {"post_id": post.id, "likes": post.likes}


@router.put("/posts/{post_id}/dislike")
def dislike_post(
    post_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
):
    post = db.get(Post, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    post.likes = max(post.likes - 1, 0)
    db.commit()
    db.refresh(post)
    return {"post_id": post.id, "likes": post.likes}
