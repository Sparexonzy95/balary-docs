---
title: Why Confidential Payroll?
sidebar_position: 2
---

# Why Confidential Payroll?

Balary demonstrates why Confidential Compute matters: sensitive inputs can remain private while blockchain systems still receive usable, verifiable results.

Payroll is unusually sensitive financial data. Simply moving a payroll process onto a public chain can make settlement easier to verify while making compensation information much easier to infer.

## Data worth protecting

| Information | Why it matters |
|---|---|
| Per-employee salary | Compensation privacy and negotiation sensitivity |
| Payroll rows and deductions | Reveals employee-specific financial data |
| Remaining private balance | Can reveal earnings and withdrawal behavior |
| Employee allocation mapping | Connects organization data to wallets |
| Payroll source CSV | Contains a concentrated view of the payroll run |
| Private ledger state | Encodes employer capacity and employee balances |

## What Balary protects

The current architecture is designed so that:

- payroll ciphertext is not returned by the normal payroll-detail serializer,
- employee payroll inputs are processed through the confidential engine,
- raw FCC result data and TEE signatures are not exposed by the public API serializer,
- private-credit employee balances are account-scoped and read through authenticated confidential computation,
- the Django database is orchestration state, not the authority for private-credit balances.

## What Balary deliberately does not hide

The source security model is explicit: reserve deposits and final token settlements are public. A normal ERC-20 transfer on Coston2 exposes amount and destination.

That means Balary should be described as **confidential payroll computation and private balance authorization**, not as private money or anonymous settlement.

## Why a TEE here?

The supplied Flare FCC documentation describes TEEs as hardware-isolated environments that can execute verifiable custom code while protecting sensitive data from the host operator. A Flare Compute Extension binds supported code versions and registered TEE machines to on-chain infrastructure.

For Balary, the TEE is the place where private payroll logic and private ledger transitions can be evaluated without moving those values into normal public contract storage.

## Verification still matters

Privacy by itself is not enough. Balary also binds confidential results to:

- chain ID,
- extension ID,
- selected TEE identity,
- signer and signer epoch,
- gateway/reserve or vault context,
- request/instruction ID,
- nonce and expiry,
- expected old root,
- signed result envelope.

This is how the system combines confidentiality with verifiable settlement controls.
