---
title: Backend
sidebar_position: 3
---

# Backend Architecture

The backend is Django REST Framework with Celery-based asynchronous operations.

## Main domains

```text
accounts
chains
institutions
employees
payroll
transactions
fcc
withdrawals
confidential_credits
tee_lifecycle
notifications
scheduling
audit
```

## Why the backend matters

Balary uses the backend to centralize transaction preparation and verification. That gives the browser a narrow action surface:

1. request a prepared transaction,
2. sign/broadcast it,
3. return the hash,
4. let backend receipt logic verify the exact transaction and event.

## Confidential boundaries


## Asynchronous operations

Celery is used for operations that can outlive one HTTP request, such as:

- pending receipt synchronization,
- FCC polling,
- TEE result reconciliation,
- email delivery,
- recurring schedule work.

## API safety patterns

The current source uses:

- idempotency keys,
- row locking in critical reconciliation paths,
- strict serializers,
- role-based authorization,
- exact prepared-transaction confirmation,
- public readiness endpoints without private keys,
- encrypted recipient/private fields,
- explicit feature and lifecycle gates.
