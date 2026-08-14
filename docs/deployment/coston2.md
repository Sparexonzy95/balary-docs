---
title: Coston2
sidebar_position: 1
---

# Coston2 Deployment

Balary currently runs on **Flare Testnet Coston2**.

## Network

| Setting | Value |
|---|---|
| Chain ID | `114` |
| RPC | `https://coston2-api.flare.network/ext/C/rpc` |
| Native token | `C2FLR` |
| Explorer | `https://coston2-explorer.flare.network` |
| Faucet | `https://faucet.flare.network/coston2` |

## Current confidential payroll lane

| Component | Address / ID |
|---|---|
| Private payroll vault | `0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020` |
| Confidential gateway | `0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216` |
| FCC extension | `66209` |
| USD₮0 | `0xC1A5B41512496B80903D1f32d6dEa3a73212E71F` |
| Active TEE | `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0` |
| Registry `teeProxyId` | `0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D` |
| Gateway signer epoch | `2` |
| TEE manager | `0x1a9C4A0f9D76c0b1D91d22E24E573a9b377618aE` |

The live FCC proxy is:

```text
https://payroll-fcc.balary.lol
```

The backend API is:

```text
https://zalary-api.104.237.9.230.sslip.io/api/v1
```

## Runtime lifecycle authority

TEE identity and signer epoch are runtime lifecycle values. Balary's lifecycle controller checks the registered TEE and keeps the Gateway signer binding synchronized.

The current ActionResult signer is the TEE identity itself:

```text
0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0
```

`teeProxyId` is registry metadata and must not be substituted for the ActionResult signer.

## No confidential-credits lane

The current Balary hackathon deployment uses the **confidential payroll vault/gateway architecture**. Earlier experimental confidential-credit reserve/ledger contracts are not part of the active application and should not be copied into the current configuration.
