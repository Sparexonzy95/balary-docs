---
title: Payrolls
sidebar_position: 3
---

# Payrolls

## Collection

```http
GET  /api/v1/payrolls/
POST /api/v1/payrolls/
GET  /api/v1/payrolls/{id}/
```

Create fields:

```json
{
  "institution_id": 1,
  "title": "August payroll",
  "period_label": "August 2026",
  "funding_starts_at": "2026-08-20T08:00:00Z",
  "funding_deadline": "2026-08-21T08:00:00Z",
  "minimum_withdrawal_window_seconds": 86400,
  "settlement_grace_period_seconds": 3600
}
```

## File lifecycle

```http
POST /api/v1/payrolls/{id}/validate/
POST /api/v1/payrolls/{id}/encrypt/
```

## On-chain draft

```http
POST /api/v1/payrolls/{id}/draft/prepare/
POST /api/v1/payrolls/{id}/draft/confirm/
```

## Confidential computation

```http
POST /api/v1/payrolls/{id}/computation/prepare/
POST /api/v1/payrolls/{id}/computation/confirm/
```

## Funding

```http
GET  /api/v1/payrolls/{id}/funding/context/
POST /api/v1/payrolls/{id}/funding/open/prepare/
POST /api/v1/payrolls/{id}/funding/open/confirm/
POST /api/v1/payrolls/{id}/funding/approval/prepare/
POST /api/v1/payrolls/{id}/funding/approval/confirm/
POST /api/v1/payrolls/{id}/funding/fund/prepare/
POST /api/v1/payrolls/{id}/funding/fund/confirm/
```

## Payroll status values

The backend model includes:

```text
draft
validated
encrypted_ready
draft_tx_pending
draft_onchain
computation_tx_pending
tee_processing
computed
open_funding_tx_pending
funding_ready
approval_tx_pending
funding_tx_pending
active
closed
failed
```
