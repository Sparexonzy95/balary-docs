---
title: Employee Overview
sidebar_position: 1
---

# Employee Overview

An employee uses the wallet stored on their employee record to authenticate and access only the payroll/claim data permitted for that identity.

## Core payroll withdrawal

The current withdrawal flow deliberately moved sensitive authorization choices off the untrusted client.

At preparation, the API accepts only:

```json
{
  "payroll_id": 12
}
```

The service derives the authoritative employee, destination, amount, nonce, expiry and root context. The browser signs the resulting digest and submits the signature.

## What the employee should verify

Before signing:

- the wallet is on Coston2,
- the wallet matches the employee authorization wallet,
- the request was created by the Balary backend,
- the payroll is eligible,
- the UI shows the expected institution/payroll context.

The wallet should never sign a raw private key or seed phrase.
