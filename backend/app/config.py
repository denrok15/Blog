from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    database_url: str = Field(
        "postgresql+psycopg2://postgres:postgres@db:5432/blog",
        env="DATABASE_URL",
    )
    secret_key: str = Field("change-me-to-a-secret", env="SECRET_KEY")
    algorithm: str = Field("HS256", env="JWT_ALGORITHM")
    access_token_expires_minutes: int = Field(60, env="ACCESS_TOKEN_EXPIRE_MINUTES")

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
