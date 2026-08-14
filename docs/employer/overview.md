---
title: Employer Overview
sidebar_position: 1
---

# Employer Overview

Employer operations are split between **Admin**, **HR** and **Finance** rather than giving one wallet every capability.

## Roles

| Role | Main responsibility |
|---|---|
| Admin | Institution registration and role management |
| HR | Employee records, payroll creation, CSV validation/encryption, confidential computation |
| Finance | Stablecoin approval and funding |
| Employee | Withdrawal/claim workflows only |

A wallet can hold more than one institution role.

## Prepared-transaction rule

The frontend does not re-encode privileged contract calls. For institution, payroll, computation, funding and role operations, the backend returns a prepared transaction containing the exact `to`, `data`, `value` and expected event. The connected wallet broadcasts that transaction, then sends the transaction hash back for receipt verification.

This keeps business validation and transaction construction in one trusted server path while leaving the actual signing action with the user wallet.

## Employer workflow

```text
Institution
  ↓
Roles
  ↓
Employees
  ↓
Payroll run
  ↓
Validate CSV
  ↓
Encrypt for selected TEE
  ↓
Create on-chain draft
  ↓
Request FCC computation
  ↓
Verify signed result
  ↓
Open funding
  ↓
Approve + fund
  ↓
Active payroll
```

Continue with [Create a payroll](./create-payroll).
