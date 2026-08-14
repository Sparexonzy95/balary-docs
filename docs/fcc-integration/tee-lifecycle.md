---
title: TEE Lifecycle
sidebar_position: 3
---

# TEE Lifecycle

TEE lifecycle management is part of Balary's security boundary, not just deployment plumbing.

## Why lifecycle recovery exists

The project source records that the pinned Flare `tee-node` generates its machine secp256k1 identity on every process start. Persistent application state and the state-encryption key do not restore that machine identity.

Balary V2 therefore treats an identity change as a controlled migration event.

## Lifecycle states

The backend models two lanes, `original` and `credits`, with these statuses:

```text
healthy
recovery_required
recovering
paused
failed
```

Public readiness:

```http
GET /api/v1/tee-lifecycle/readiness/
```

Example shape:

```json
{
  "original": {
    "status": "healthy",
    "blocker": "",
    "checked_at": "..."
  },
  "credits": {
    "status": "healthy",
    "blocker": "",
    "checked_at": "..."
  }
}
```

The public endpoint does not expose private keys or lifecycle credentials.

## V2 recovery model

The V2 controller is designed to:

1. detect identity or configuration drift,
2. pause before migration,
3. validate chain, extension, endpoint, code hash and state fingerprints,
4. validate registry cardinality and contract bindings,
5. register/approve the replacement identity through the reviewed path,
6. retire the stale identity,
7. rotate the gateway signer,
8. verify root/epoch/state consistency,
9. resume only when all checks pass.

Interrupted recovery steps are state-tested before submission so a restart can resume without blindly duplicating writes.

## Fail closed
