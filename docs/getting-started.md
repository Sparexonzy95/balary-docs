---
title: Getting Started
sidebar_position: 2
---

# Getting Started

This guide gets a developer oriented around the current Balary stack. The app is a multi-service system, so start by understanding the boundaries before running individual components.

## Prerequisites

| Tool | Purpose |
|---|---|
| Node.js 20+ | Frontend, contracts and docs |
| npm | JavaScript package management |
| Python 3.11+ | Django backend |
| Redis | Celery queue and coordination |
| Docker / Docker Compose | FCC proxy/TEE and deployment stack |
| Git | Source control |
| Coston2 wallet | User transactions and testnet gas |

For Coston2:

- RPC: `https://coston2-api.flare.network/ext/C/rpc`
- Chain ID: `114`
- Native currency: `C2FLR`
- Explorer: `https://coston2-explorer.flare.network`
- Faucet: `https://faucet.flare.network/coston2`

## Run these docs

```bash
cd balary-docs
npm ci
npm start
```

Open `http://localhost:3000`.

## Frontend

The current frontend uses Vite. Its API base normalizer expects a host or `/api` URL and resolves it to `/api/v1`.

```bash
npm install
npm run dev
```

Important public configuration:

```text
VITE_APP_NAME=Balary
VITE_API_BASE_URL=http://127.0.0.1:8000/api/v1
VITE_COSTON2_CHAIN_ID=114
VITE_COSTON2_RPC_URL=https://coston2-api.flare.network/ext/C/rpc
VITE_COSTON2_EXPLORER_URL=https://coston2-explorer.flare.network
VITE_COSTON2_NATIVE_SYMBOL=C2FLR
```

The current frontend source still reads legacy-named public keys such as `VITE_ZALARY_VAULT`, `VITE_ZALARY_GATEWAY`, `VITE_ZALARY_USDT0_TOKEN` and `VITE_ZALARY_USDT0_DECIMALS`. Keep those names until the application source itself is migrated.

## Backend

Typical local setup:

```bash
python -m venv venv
source venv/bin/activate
# Windows: venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

The API root is:

```text
http://127.0.0.1:8000/api/v1
```

Use Redis and Celery for asynchronous receipt synchronization, FCC polling, notification delivery and reconciliation.

## Wallet authentication

Balary does not use a password as the primary blockchain identity. The browser requests a nonce, signs the backend-provided message, then exchanges that signature for JWT tokens.

```http
POST /api/v1/auth/nonce/
POST /api/v1/auth/verify/
POST /api/v1/auth/refresh/
GET  /api/v1/auth/me/
```

## Readiness before a browser test

Check:

```http
GET /api/v1/health/ready/
GET /api/v1/tee-lifecycle/readiness/
GET /api/v1/fcc/configuration/
GET /api/v1/chains/coston2/
```

The lifecycle endpoint intentionally exposes only lane status, blocker code and check time. Sensitive lifecycle material stays server-side.

## Next

- [What is Balary?](./product-overview/what-is-balary)
- [Architecture](./architecture/overview)
- [FCC integration](./fcc-integration/overview)
- [Coston2 deployment](./deployment/coston2)
