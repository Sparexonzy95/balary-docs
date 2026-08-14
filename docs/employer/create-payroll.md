---
title: Create a Payroll
sidebar_position: 2
---

# Create a Payroll

HR creates a payroll run in Django before any payroll-specific transaction is signed.

## Create fields

The current backend serializer accepts:

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

The backend generates the unique numeric `payroll_id`.

## Upload, validate and encrypt

```http
POST /api/v1/payrolls/{id}/validate/
POST /api/v1/payrolls/{id}/encrypt/
```

Both use a file upload serializer.

Validation records a checksum, row count, aggregate totals and validation errors. After encryption, the payroll can enter `encrypted_ready`.

The normal payroll serializer exposes `ciphertext_hash` and `ciphertext_available`, but does not return the ciphertext itself.

## State sequence before computation

Relevant backend statuses include:

```text
draft
validated
encrypted_ready
draft_tx_pending
draft_onchain
computation_tx_pending
tee_processing
computed
```

Do not skip states by editing the database. The services and receipt synchronizer are responsible for state transitions.
