---
title: Private Withdrawals
sidebar_position: 2
---

# Private Withdrawals

This page describes the current core-payroll withdrawal API.

## List eligible payrolls

```http
GET /api/v1/withdrawals/available/
```

## Read withdrawal context

```http
GET /api/v1/withdrawals/context/{payroll_database_id}/
```

The context includes public and request-building information such as the opaque employee reference, nonce/root context, deadlines and contract addresses. It does not need to expose the employee's private ledger balance.

## Prepare

```http
POST /api/v1/withdrawals/prepare/
Content-Type: application/json

{
  "payroll_id": 12
}
```

The serializer rejects any additional fields. In particular, the browser is not allowed to provide its own withdrawal amount or authorization destination at this stage.

## Sign

The response includes an authorization digest. The connected employee wallet signs that digest using EIP-191 `personal_sign` semantics.

## Submit signature

```http
POST /api/v1/withdrawals/{withdrawal_uuid}/submit/

{
  "signature": "0x..."
}
```

The backend verifies the employee signer and the server-authorized request fields before encryption and relayer/FCC submission.

## Resume processing

```http
POST /api/v1/withdrawals/{withdrawal_uuid}/process/
```

This can safely resume a request that already has an on-chain transaction or is waiting on a TEE result.

## Important privacy boundary

The final stablecoin transfer remains a normal public token transfer. Balary protects the payroll authorization and private-balance computation. It does not make the final ERC-20 transfer invisible.
