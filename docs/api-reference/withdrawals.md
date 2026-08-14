---
title: Withdrawals
sidebar_position: 4
---

# Withdrawals

## Core private-payroll withdrawals

```http
GET /api/v1/withdrawals/
GET /api/v1/withdrawals/available/
GET /api/v1/withdrawals/context/{payroll_pk}/
GET /api/v1/withdrawals/{uuid}/
```

Prepare:

```http
POST /api/v1/withdrawals/prepare/

{
  "payroll_id": 12
}
```

The current serializer rejects extra client-controlled fields.

Submit wallet signature:

```http
POST /api/v1/withdrawals/{uuid}/submit/

{
  "signature": "0x..."
}
```

Resume processing:

```http
POST /api/v1/withdrawals/{uuid}/process/
```

## Why the prepare payload is small

Earlier documentation examples allowed the client to supply destination and amount. The current source no longer does that. Authorization-sensitive fields are server-derived so an untrusted browser cannot alter the complete payroll withdrawal.
