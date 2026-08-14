---
title: Auth and Institutions
sidebar_position: 2
---

# Auth and Institutions

## Request login nonce

```http
POST /api/v1/auth/nonce/

{
  "wallet_address": "0x..."
}
```

Response includes the normalized wallet, nonce, exact message to sign and expiry.

## Verify wallet signature

```http
POST /api/v1/auth/verify/

{
  "wallet_address": "0x...",
  "nonce": "...",
  "signature": "0x..."
}
```

A valid response returns access and refresh JWTs plus the account record.

## Current account

```http
GET /api/v1/auth/me/
```

## Institutions

```http
GET  /api/v1/institutions/
POST /api/v1/institutions/
GET  /api/v1/institutions/{id}/
```

Create fields:

```json
{
  "name": "Example Institution",
  "notification_email": "payroll@example.com",
  "treasury_address": "0x...",
  "tax_vault_address": "0x..."
}
```

## On-chain registration

```http
POST /api/v1/institutions/{id}/registration/prepare/
POST /api/v1/institutions/{id}/registration/confirm/
```

Confirm body:

```json
{
  "prepared_transaction_id": "uuid",
  "tx_hash": "0x..."
}
```

## Role changes

```http
POST /api/v1/institutions/{id}/roles/{role}/prepare/
POST /api/v1/institutions/{id}/roles/confirm/
```

Supported roles are defined by the backend institution-member model and enforced by route permissions.

## Employees

```http
GET  /api/v1/employees/?institution_id={id}
POST /api/v1/employees/
PATCH /api/v1/employees/{id}/status/
```

Create fields include `institution_id`, `auth_wallet`, optional name and optional email. Employee private fields are encrypted through the backend's private-field handling.
