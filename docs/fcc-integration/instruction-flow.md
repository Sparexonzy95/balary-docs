---
title: Instruction Flow
sidebar_position: 2
---

# FCC Instruction Flow

The confidential compute path is intentionally multi-stage so that a browser transaction alone cannot manufacture a trusted payroll result.

## Core payroll path

1. The backend prepares an exact gateway transaction.
2. The connected wallet broadcasts it on Coston2.
3. Receipt synchronization validates the transaction and expected event.
4. The gateway/FCC path selects and records a TEE identity.
5. The extension receives the confidential payload.
6. The TEE evaluates the request and returns an `ActionResult`.
7. The backend verifies the instruction ID, schema and signature envelope.
8. The recovered signer must match the signer bound to the selected TEE and epoch.
9. Result fields are checked against the payroll request context.
10. Only then may the relayer submit finalization.

## Root discipline


This gives the public chain a compact commitment to private state without publishing the employee records themselves.

## No local success fallback
