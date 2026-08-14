---
title: Frontend
sidebar_position: 3
---

# Frontend Deployment

The frontend is a Vite application and is deployed on Vercel for the current Balary project.

## Public production settings

```text
VITE_APP_NAME=Balary
VITE_API_BASE_URL=https://<api-host>/api/v1
VITE_COSTON2_CHAIN_ID=114
VITE_COSTON2_RPC_URL=https://coston2-api.flare.network/ext/C/rpc
VITE_COSTON2_EXPLORER_URL=https://coston2-explorer.flare.network
VITE_COSTON2_NATIVE_SYMBOL=C2FLR
```


## Do not expose

Never put server secrets in `VITE_*` variables. Vite bundles those values into client JavaScript.

## Chain guard

Before broadcasting a prepared transaction, the frontend should verify that the wallet is connected to Coston2 chain ID `114`.

## Contract configuration


## Custom domain

The production application domain is:

```text
https://balary.lol
```
