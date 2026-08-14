---
title: Deployed Contracts
sidebar_position: 1
---

# Deployed Contracts

This page records the **current Balary Coston2 deployment used by the live hackathon application**.

## Current payroll deployment

| Component | Current value |
|---|---|
| Network | Flare Testnet Coston2 |
| Chain ID | `114` |
| Private payroll vault | `0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020` |
| Confidential gateway | `0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216` |
| Settlement token | `0xC1A5B41512496B80903D1f32d6dEa3a73212E71F` |
| Token symbol / decimals | `USD₮0 / 6` |
| FCC extension | `66209` |
| Active TEE identity | `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0` |
| FCC registry `teeProxyId` | `0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D` |
| Gateway signer epoch | `2` |
| TEE manager / registry integration | `0x1a9C4A0f9D76c0b1D91d22E24E573a9b377618aE` |

## Live service endpoints

| Service | URL |
|---|---|
| Balary app | `https://balary.lol` |
| Backend API | `https://zalary-api.104.237.9.230.sslip.io/api/v1` |
| FCC proxy | `https://payroll-fcc.balary.lol` |
| Coston2 RPC | `https://coston2-api.flare.network/ext/C/rpc` |
| Explorer | `https://coston2-explorer.flare.network` |

## Signer binding

For the current payroll lane, the signed FCC `ActionResult.signature` is produced by the **TEE machine identity**:

```text
0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
```

The registry value:

```text
teeProxyId = 0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D
```

is proxy/registry metadata. It is **not** the signer Balary expects for the `ActionResult`.

The Gateway is currently bound to:

```text
TEE:    0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Signer: 0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
Epoch:  2
Active: true
```

This distinction is important because earlier integration code incorrectly treated `teeProxyId` as the ActionResult signer.

Use the [Coston2 explorer](https://coston2-explorer.flare.network) to inspect public transaction evidence.
