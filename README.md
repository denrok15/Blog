# Blog project

## Backend API

1. Copy the template config: `cp .env.example .env` and adjust `DATABASE_URL` / `SECRET_KEY` if needed.
2. Install Python deps: `pip install -r backend/requirements.txt`.
3. Start the API: `cd backend && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`.

The FastAPI backend now exposes authentication and post management routes using PostgreSQL. Swagger docs live at `http://localhost:8000/docs`.

## Docker

To run the API with Postgres in containers:

```
docker compose up --build
```

This brings up Postgres (`db`) and the backend (`backend`) on ports 5432 and 8000 respectively.

## Frontend

```
cd frontend
npm install
npm run dev
```
