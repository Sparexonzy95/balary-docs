---
title: Frontend
sidebar_position: 2
---

# Frontend Architecture

The Balary frontend is a React + TypeScript + Vite application using Viem for wallet interaction.

## Security boundary

The frontend is an untrusted presentation/signing client. It:

- authenticates through wallet signatures,
- enforces route UX based on backend role data,
- requests prepared transactions,
- checks wallet and chain context,
- broadcasts the exact transaction payload returned by the backend,
- sends transaction hashes back for receipt verification,
- signs server-generated withdrawal authorization digests.

It should **not**:

- reconstruct privileged contract calldata,
- choose private-ledger balances,
- invent a TEE result,
- mark a transaction final because `eth_sendTransaction` returned a hash.

## Current route model

The frontend contains role-specific workspaces for:

- Admin/institution management,
- HR payroll operations,
- Finance funding,
- employee confidential claims,
- transactions,
- notifications,
- account settings.

Role guards compare the authenticated wallet against active institution memberships.

## Environment

The frontend normalizes `VITE_API_BASE_URL` to `/api/v1`, defaults to Coston2 chain ID `114`, and uses the Flare public Coston2 RPC/explorer defaults.

Some environment variable names still carry the pre-rebrand `VITE_ZALARY_*` prefix. They are configuration identifiers, not the current product name.
