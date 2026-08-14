---
title: Fund and Activate
sidebar_position: 4
---

# Fund and Activate

Funding is intentionally separated from confidential computation.

## Funding context

```http
GET /api/v1/payrolls/{id}/funding/context/
```

The context is designed to expose public operational values such as:

- on-chain payroll status,
- total required,
- amount already funded,
- exact remaining amount,
- Finance wallet stablecoin balance,
- vault allowance,
- effective funding timestamps.

## Open funding

```http
POST /api/v1/payrolls/{id}/funding/open/prepare/
POST /api/v1/payrolls/{id}/funding/open/confirm/
```

HR/Admin opens funding with the prepared-transaction flow.

## Approve stablecoin

```http
POST /api/v1/payrolls/{id}/funding/approval/prepare/
POST /api/v1/payrolls/{id}/funding/approval/confirm/
```

The backend prepares approval for the current remaining amount rather than asking the frontend to invent an allowance.

## Fund

```http
POST /api/v1/payrolls/{id}/funding/fund/prepare/
POST /api/v1/payrolls/{id}/funding/fund/confirm/
```

Receipt synchronization verifies the funding events. The source flow expects payroll activation only after the required funding conditions are satisfied.

:::note Settlement asset
The current Coston2 source configuration uses a 6-decimal USD test token at `0xC1A5B41512496B80903D1f32d6dEa3a73212E71F`.
:::
