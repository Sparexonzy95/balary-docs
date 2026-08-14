# Balary Documentation

Developer and product documentation for **Balary**, a confidential payroll computation application built on **Flare Coston2** with **Flare Confidential Compute (FCC)**.

## Live product

- App: https://balary.lol
- Docs: https://docs.balary.lol
- GitHub: https://github.com/Sparexonzy95/balary

## Current architecture

Balary encrypts sensitive payroll payloads, routes them through FCC to a registered TEE, verifies the signed ActionResult and connects the verified result to the on-chain payroll vault/gateway workflow.

The active hackathon architecture intentionally uses the confidential payroll lane only. Earlier confidential-credit reserve/ledger experiments are not part of the current deployment.

## Local development

```bash
npm ci
npm run start
```

## Production build

```bash
npm run build
```

Some deployed Solidity class names and environment keys still retain the `Zalary` prefix because they are protocol/source identifiers. The product and user-facing documentation use **Balary**.
