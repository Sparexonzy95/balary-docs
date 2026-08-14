---
title: Blockchain and Funding
sidebar_position: 3
---

# Blockchain and Funding Troubleshooting

## Insufficient C2FLR

Coston2 transactions and FCC instruction submission need testnet gas/fees. Use the Coston2 faucet.

## Insufficient stablecoin

Funding preparation checks the Finance wallet balance and allowance. Use the funding context before retrying.

## Approval succeeded but funding fails

Receipt synchronization may not have updated the allowance/funding state yet, or the remaining required amount may have changed. Refresh funding context and prepare again.

## Stale root


## Settlement token behavior


## Explorer

Use:

```text
https://coston2-explorer.flare.network
```

for public transaction and contract evidence.
