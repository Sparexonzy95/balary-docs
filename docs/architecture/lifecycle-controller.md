---
title: Lifecycle Controller
sidebar_position: 6
---

# Lifecycle Controller

Balary's V2 lifecycle controller exists because confidential-compute identity is operational state that can change across TEE restarts.

## Inputs it validates

The implementation report describes checks for:

- chain and extension,
- TEE/proxy endpoint,
- code hash,
- state-volume fingerprint,
- state-key fingerprint,
- TEE and gateway roots,
- reserve solvency,
- contract bindings,
- registry cardinality,
- migration nonce freshness,
- state integrity.

## Safety sequence

The controller pauses before migration and submits nothing when a blocker is present. Registry, bootstrap, retirement and rotation operations are each state-tested before submission.

## Why this matters for reviewers

A TEE-based application is not secure merely because the application code is confidential. It must also prove which TEE is active, how that identity is bound on-chain and how recovery works if the machine identity changes.
