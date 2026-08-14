---
title: API Overview
sidebar_position: 1
---

# API Overview

The Django API is namespaced under:

```text
/api/v1
```

JWT authentication is required unless an endpoint is explicitly public.

## Endpoint groups

| Prefix | Responsibility |
|---|---|
| `/auth/` | Wallet nonce/signature authentication |
| `/chains/` | Public Coston2 configuration |
| `/institutions/` | Institutions and on-chain role changes |
| `/employees/` | Employee records |
| `/payrolls/` | Payroll lifecycle and funding |
| `/fcc/` | FCC configuration and instruction processing |
| `/withdrawals/` | Confidential payroll withdrawal flow |
| `/tee-lifecycle/` | Lifecycle readiness |
| `/transactions/` | Prepared transaction receipt tracking |
| `/notifications/` | In-app/email notification operations |
| `/schedules/` | Recurring payroll shells |
| `/audit/` | Audit events and reports |
| `/health/` | Service readiness |

## Prepared transactions

When an API returns a prepared transaction, the browser should not rebuild the calldata. It should verify chain/wallet context, broadcast the returned transaction and call the matching confirmation endpoint with the transaction hash.

## Public configuration

```http
GET /api/v1/chains/coston2/
GET /api/v1/fcc/configuration/
GET /api/v1/health/ready/
GET /api/v1/tee-lifecycle/readiness/
```
