---
title: Backend and FCC
sidebar_position: 2
---

# Backend and FCC Deployment

The live Balary stack places Django, Celery, Redis, the FCC proxy, simulated hackathon TEE and lifecycle controller behind server-controlled configuration.

## Public boundaries

| Service | URL |
|---|---|
| App | `https://balary.lol` |
| API | `https://zalary-api.104.237.9.230.sslip.io/api/v1` |
| FCC proxy | `https://payroll-fcc.balary.lol` |

## Health checks

```http
GET https://zalary-api.104.237.9.230.sslip.io/api/v1/health/
GET https://zalary-api.104.237.9.230.sslip.io/api/v1/health/ready/
```

The readiness response should confirm database, field encryption, Redis, FCC configuration and Celery worker availability.

## Confidential runtime

Current TEE:

```text
0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
```

Current FCC registry `teeProxyId`:

```text
0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D
```

Current Gateway signer:

```text
0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
```

Current signer epoch:

```text
2
```

## Lifecycle reconciliation

The lifecycle controller automatically checks the live FCC TEE and reconciles the Gateway signer binding.

For this payroll integration, `ActionResult.signature` is produced by the TEE machine identity. The registry `teeProxyId` is metadata and must not be used as the ActionResult signer.

## Encryptor

The backend uses the installed encryptor executable to encrypt payroll payloads for the configured FCC/TEE path before confidential computation.

## Secrets

Keep private keys, TEE state keys and backend encryption keys out of the browser and Vite environment.
