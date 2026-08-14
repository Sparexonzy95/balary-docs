---
title: Contracts
sidebar_position: 5
---

# Contract Architecture

The current Balary application uses the confidential payroll contract pair:

- `ZalaryPrivatePayrollVault`
- `ZalaryConfidentialGateway`

The `Zalary` prefix remains in the Solidity class names because these are deployed/source identifiers. The product itself is Balary.

## Private payroll vault

Current deployment:

```text
0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020
```

The vault is responsible for:

- institution registration and roles,
- payroll draft lifecycle,
- computation commitments,
- funding windows,
- USD₮0 custody,
- pending withdrawal tracking,
- TEE-authorized withdrawal settlement,
- pause and recovery controls.

## Confidential gateway

Current deployment:

```text
0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216
```

The gateway is responsible for:

- FCC instruction submission,
- selected TEE binding,
- ActionResult signer validation,
- signer epoch validation,
- success/failure result verification,
- replay protection,
- communication with the payroll vault.

## Current FCC binding

```text
Extension:    66209
TEE identity: 0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Signer:       0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Epoch:        2
```

The FCC registry `teeProxyId` is:

```text
0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D
```

That value is registry/proxy metadata. It is not the current ActionResult signer.

## Settlement asset

```text
USD₮0: 0xC1A5B41512496B80903D1f32d6dEa3a73212E71F
Decimals: 6
```

Final token settlement remains a public Coston2 transaction. Confidential Compute protects the sensitive computation leading to that settlement.
