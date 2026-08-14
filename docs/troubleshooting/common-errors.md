---
title: Common Errors
sidebar_position: 1
---

# Common Errors

## Browser CORS failure

Symptoms:

```text
blocked by CORS policy
preflight request failed
```

Check that the exact frontend origin is present in backend CORS/CSRF configuration and that `OPTIONS` allows the headers the browser sends, including `authorization`, `content-type`, `x-csrftoken` and `idempotency-key` when used.

## Wallet on wrong chain

Balary expects Coston2:

```text
chainId = 114
```

Switch the wallet before broadcasting a prepared transaction.

## Prepared transaction expired or stale

Request a fresh prepare response rather than editing `to`, `data` or `value` client-side.

## 401 after wallet connection

A connected wallet is not automatically an authenticated API session. Complete nonce → sign → verify and refresh JWTs when needed.

## Transaction hash exists but app is still pending

Broadcast is not finality. Trigger or wait for receipt synchronization:

```http
POST /api/v1/transactions/{id}/sync/
```
