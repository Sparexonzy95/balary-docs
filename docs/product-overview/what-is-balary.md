---
title: What is Balary?
sidebar_position: 1
---

# What is Balary?

Balary is a **Flare Confidential Compute application** that uses payroll as a real-world demonstration of private off-chain execution connected to verifiable on-chain workflows.

Sensitive payroll inputs are encrypted and processed inside a Trusted Execution Environment instead of being published as ordinary smart-contract state. Verified results are then consumed by the Coston2 contracts that coordinate payroll lifecycle, funding and settlement.

## The problem

A conventional public payroll system can expose:

- individual salary amounts,
- recurring payment patterns,
- employee-wallet relationships,
- treasury behavior,
- payroll timing,
- internal financial structure.

Blockchain settlement is useful, but payroll needs a stronger privacy boundary than public execution alone provides.

## Balary's architecture

Balary coordinates five layers:

1. **Browser and wallet** for user intent and transaction signatures.
2. **Django API** for authenticated orchestration, roles, prepared transactions and receipt tracking.
3. **Flare Confidential Compute** for delivery of encrypted instructions to the registered TEE.
4. **TEE confidential execution** for sensitive payroll computation.
5. **Coston2 contracts** for verifiable lifecycle state, funding, replay protection and settlement.

## Current on-chain components

```text
Vault:     0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020
Gateway:   0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216
Extension: 66209
USD₮0:     0xC1A5B41512496B80903D1f32d6dEa3a73212E71F
```

The currently selected TEE and ActionResult signer are both:

```text
0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
```

with Gateway signer epoch `2`.

## What remains public

Balary is not an anonymity network. Contract interactions, funding and final token settlement remain observable on Coston2.

The privacy goal is precise: **sensitive payroll inputs and confidential computation should not need to become ordinary public smart-contract state or events.**
