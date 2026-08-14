---
title: FCC Overview
sidebar_position: 1
---

# Flare Confidential Compute in Balary

Balary is designed around the core Confidential Compute principle: private execution with public verification.

The supplied Flare Developer Hub describes **Flare Confidential Compute (FCC)** as an extension of Flare that uses Trusted Execution Environments (TEEs) for secure off-chain computation. Custom applications are organized as **Flare Compute Extensions (FCEs)**.

## What FCC provides

From the supplied Flare documentation, FCE infrastructure provides:

- supported and reproducible code versions,
- registered TEE machines,
- TEE identities,
- on-chain registration and attestation,
- instruction relaying,
- signed result verification,
- private-key support inside confidential machines.

Balary uses this infrastructure for confidential payroll computation and private state transitions.

## Where Balary fits

```text
User wallet
   │
   ▼
Balary frontend
   │
   ▼
Django orchestration
   │
   ├── prepares user transaction
   │
   ▼
Balary Coston2 gateway
   │
   ├── emits FCC instruction
   ▼
Flare FCC / extension proxy
   │
   ▼
Registered Balary TEE
   │
   ├── validates + computes private state
   └── signs ActionResult
   │
   ▼
Backend / gateway verification
   │
   ▼
Coston2 finalization or settlement
```

## TEE identity is not just a hostname

The project lifecycle work discovered an important operational property: the pinned `tee-node` generates its secp256k1 machine key at process start. V2 therefore treats a changed TEE identity as an expected but **untrusted** replacement that must be detected, verified and migrated safely.

See [TEE lifecycle](./tee-lifecycle).

:::caution FCC maturity
The supplied Flare Developer Hub warns that FCC is not yet a fully public production system. Balary's Coston2 deployment should be evaluated as hackathon/testnet infrastructure.
:::
