---
title: Architecture Overview
sidebar_position: 1
---

# Architecture Overview

Balary separates **private computation** from **public verification and settlement**.

```text
┌─────────────────────────┐
│ Browser + wallet        │
│ React / Vite / Viem     │
└────────────┬────────────┘
             │ HTTPS + wallet signatures
             ▼
┌─────────────────────────┐
│ Django API              │
│ auth / roles / workflow │
└───────┬─────────┬───────┘
        │         │
        │         ├──────────────► Redis / Celery
        │         │                 polling / receipts / notifications
        │         │
        │         ▼
        │   FCC proxy
        │   https://payroll-fcc.balary.lol
        │         │
        │         ▼
        │   Registered TEE
        │   private execution
        │         │ signed ActionResult
        ▼         ▼
┌─────────────────────────────────┐
│ Flare Coston2                   │
│ Vault + Confidential Gateway    │
│ FCC extension 66209       │
│ USD₮0 settlement               │
└─────────────────────────────────┘
```

## Private vs public boundary

| Layer | Responsibility |
|---|---|
| Wallet | User intent and transaction signatures |
| Django | Authenticated orchestration and workflow metadata |
| FCC proxy | Routes confidential instructions to the registered TEE |
| TEE | Sensitive payroll computation and signed ActionResult production |
| Gateway | TEE/request/signer/epoch binding, replay protection and FCC result acceptance |
| Vault | Institution roles, payroll lifecycle, funding custody and withdrawals |
| Coston2 receipt | Public transaction inclusion and emitted events |

## Current deployment

```text
Vault:       0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020
Gateway:     0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216
Extension:   66209
TEE:         0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Signer:      0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Signer epoch:2
```

## Design principle

The browser cannot invent confidential withdrawal data, the backend cannot forge a registered TEE signature, and a transaction broadcast is not treated as final settlement until the expected on-chain result is confirmed.
