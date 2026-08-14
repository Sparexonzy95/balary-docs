---
title: Threat Model
sidebar_position: 2
---

# Threat Model


| Threat | Control |
|---|---|
| Unbacked private credit | Credit requires a real uncredited reserve deposit and solvency checks |
| Duplicate/replay | Unique request IDs, nonces, processed mappings, consumed actions and nullifiers |
| Forged TEE result | Selected TEE + signer epoch + signature verification + registry binding |
| Malicious relayer | Relayer can submit but cannot change a signed authoritative result |
| Client alters withdrawal | Sensitive fields are rejected; amount/destination come from authoritative state |
| Concurrent withdrawals | Private balance moves to a pending lock before settlement |
| Stale root | TEE and gateway both verify the expected old root |
| Failed token transfer | EVM revert restores root/outstanding/nullifier changes |
| Balance disclosure | No public Solidity balance getter for private employee balances; account-scoped reads |
| Backend compromise | Database is not authoritative for private-credit balances |
| Cross-domain replay | Chain, extension, contracts, request, nonce, expiry and roots are bound |
| Admin abuse | Pause/role controls; no arbitrary credit mint path in the stated design |

## Required invariant


```text
```

Allocation preserves aggregate outstanding credit. Successful redemption decreases reserve backing and outstanding credit by the same amount.

## Residual risks

The source explicitly calls out:

- FCC maturity,
- TEE image rollout risk,
- need for independent contract review,
- deterministic-build verification,
- registry/proxy monitoring,
- token-behavior validation,
- key custody review,
- global-root write contention.

These are part of the design story, not footnotes to hide.
