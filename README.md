# note-taker

A simple MERN-style note taking app (minimal backend + React frontend).

This repo contains a small Express + MongoDB backend and a React frontend used to create, read, update and delete notes.

## Features

- Create, read, update and delete notes (CRUD)
- REST API served from the backend
- Frontend UI with list and detail pages
- Basic rate limiting middleware on the API

## Tech stack

- Backend: Node.js, Express, Mongoose (MongoDB)
- Frontend: React, Vite, axios
- Icons: lucide-react
- Notifications: react-hot-toast
- Rate limiting / cache: Upstash (Upstash Redis + @upstash/ratelimit)
- UI Components: DaisyUI (Tailwind CSS plugin)
- Routing: react-router / react-router-dom
- Dev tooling: nodemon (backend auto-reload)

## API Endpoints (summary)

- GET /api/notes — list all notes
- POST /api/notes — create a new note (body: { title, content })
- GET /api/notes/:id — get a single note
- PUT /api/notes/:id — update a note (body: { title, content })
- DELETE /api/notes/:id — delete a note

## Next steps / improvements

- Add authentication and per-user notes
- Add more robust input validation and tests
- Improve UI/UX and add pagination/search

## License

MIT

## Environment variables

Copy the `.env.example` to `.env` in the project root (or backend folder if you prefer) and update values as needed:

```bash
cp .env.example .env
```

Common variables:

- `MONGO_URI` — MongoDB connection string
- `PORT` — backend port (defaults to 5001)
- `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN` — Upstash credentials when using Upstash for rate limiting
- `CORS_ORIGIN` — the frontend origin during development (e.g. `http://localhost:5173`)

## Dependency checklist

Backend (check these are installed in `backend/package.json`):

- express
- mongoose
- cors
- dotenv
- @upstash/redis
- @upstash/ratelimit
- nodemon (devDependency)

Frontend (check these are installed in `frontend/package.json`):

- react, react-dom
- axios
- react-router, react-router-dom
- lucide-react
- react-hot-toast
- tailwindcss, daisyui, postcss, autoprefixer
- vite
