---
title: Privacy Model
sidebar_position: 1
---

# Privacy Model

Balary's privacy model protects **payroll computation and private authorization state**, not every visible blockchain artifact.

## Private

Depending on the lane, private material includes:

- source payroll rows,
- employee salary allocations,
- deductions/tax calculation details processed in confidential compute,
- private employee balances,
- employer private capacity,
- pending private withdrawal locks,
- confidential engine state,
- TEE-held key material.

## Public or observable

- institution and contract interactions,
- token reserve deposits,
- final ERC-20 settlements,
- public commitment root,
- aggregate outstanding credits,
- transaction hashes and events,
- lifecycle/registry operations,
- Coston2 addresses involved in public transactions.

## Backend boundary


## Ledger boundary


## Marketing rule

Describe Balary as **confidential payroll powered by confidential compute**. Do not describe the system as anonymous, invisible or fully private settlement, because the source threat model says deposits and final token transfers remain public.
