from pydantic import BaseModel, ConfigDict


class TokenSchema(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenPayload(BaseModel):
    login: str | None = None
    exp: int | None = None

    model_config = ConfigDict(extra="ignore")
