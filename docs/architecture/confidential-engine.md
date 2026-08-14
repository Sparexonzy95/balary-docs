---
title: Confidential Engine
sidebar_position: 4
---

# Confidential Engine

The confidential engine is the private execution layer that allows Balary to move sensitive computation away from public execution while preserving verifiable blockchain coordination.

The confidential engine is a Go application executed through the Flare TEE/FCC stack.

## Responsibilities


- domain/version,
- chain ID,
- extension ID,
- reserve and gateway,
- selected TEE,
- nonce,
- old root,
- expiry,
- request identifiers.

Malformed or unknown command/version combinations fail closed.

## Deterministic root

The private state is committed into a canonical Keccak-256 root derived from versioned, sorted, ABI-compatible fields. Any authoritative mutation to balance, ownership, nonce, pending withdrawal or nullifier changes the root.

## Storage and concurrency

State-changing operations use an expected old root and unique request ID. The encrypted store updates under a process mutex and atomic replace. This pairs with gateway old-root checks to make stale concurrent transitions explicit rather than silently merge them.

## Result authority

A locally computed answer is not enough. The result must return through the FCC `ActionResult` path and satisfy signer, TEE, epoch and context checks before settlement logic trusts it.
