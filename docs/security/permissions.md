---
title: Permissions
sidebar_position: 3
---

# Permissions

Balary combines off-chain role checks with on-chain contract roles.

## Application roles

| Role | Typical capabilities |
|---|---|
| Admin | Institution setup and role assignment |
| HR | Employee and payroll preparation, FCC processing |
| Finance | Token approval and funding |
| Employee | Claim/withdrawal actions tied to employee wallet |

The frontend role guard improves UX, but the backend remains responsible for authorization.

## Contract roles

The Solidity source includes administrative, relayer and lifecycle roles. Exact role constants should be read from the deployed contract ABI/source when building governance automation.

## Relayer trust

The relayer is a transaction submitter, not the authority for the private balance. A valid private withdrawal still depends on the bound TEE result and on-chain validation.

## Last-admin and recovery controls

The core vault source includes safeguards such as preventing removal of the final institution admin and using time-delayed institution-admin recovery.

## Secrets

Never place these in browser-exposed environment variables:

- relayer private key,
- lifecycle controller private key,
- TEE state-encryption key,
- governance credentials,
- SMTP/API provider secret,
- backend field-encryption key.
