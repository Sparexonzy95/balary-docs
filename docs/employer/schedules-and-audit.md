---
title: Schedules and Audit
sidebar_position: 5
---

# Schedules and Audit

Balary's operational backend includes recurring schedule shells, notifications and audit reports in addition to the on-chain payroll lifecycle.

## Recurring schedules

```http
GET    /api/v1/schedules/
POST   /api/v1/schedules/
GET    /api/v1/schedules/{id}/
PATCH  /api/v1/schedules/{id}/
DELETE /api/v1/schedules/{id}/
POST   /api/v1/schedules/{id}/run-now/
POST   /api/v1/schedules/{id}/pause/
POST   /api/v1/schedules/{id}/resume/
```

Example:

```json
{
  "institution": 1,
  "name": "Monthly payroll",
  "title_template": "Payroll - {period}",
  "period_label_template": "{month} {year}",
  "frequency": "monthly",
  "timezone_name": "Africa/Lagos",
  "next_run_at": "2026-08-25T08:00:00Z",
  "funding_start_offset_minutes": 10,
  "funding_window_hours": 24,
  "minimum_withdrawal_window_seconds": 86400,
  "settlement_grace_period_seconds": 3600
}
```

A schedule creates a fresh draft payroll shell. It does not bypass confidential computation or funding controls.

## Audit

```http
GET /api/v1/audit/events/?institution_id={id}&action=payroll_active
GET /api/v1/audit/events.csv?institution_id={id}
GET /api/v1/audit/payrolls/{payroll_database_id}/
GET /api/v1/audit/payrolls/{payroll_database_id}.csv
```

Reports can expose aggregate values, proof hashes, roots, nullifiers and transaction hashes. They are not intended to expose plaintext salary rows or FCC ciphertext.
