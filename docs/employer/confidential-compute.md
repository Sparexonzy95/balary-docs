---
title: Request Confidential Computation
sidebar_position: 3
---

# Request Confidential Computation

Once the payroll is encrypted, HR moves the run onto Coston2 and then asks FCC to process the confidential payroll.

## 1. Prepare the draft transaction

```http
POST /api/v1/payrolls/{id}/draft/prepare/
Idempotency-Key: payroll-august-draft-1
```

The response contains a `prepared_transaction`. Broadcast its `to`, `data` and `value` exactly.

## 2. Confirm the draft transaction

```http
POST /api/v1/payrolls/{id}/draft/confirm/
Content-Type: application/json

{
  "prepared_transaction_id": "uuid",
  "tx_hash": "0x..."
}
```

Receipt synchronization validates the sender, target, calldata, value, expected event and resulting payroll state.

## 3. Prepare the FCC computation

```http
POST /api/v1/payrolls/{id}/computation/prepare/
Idempotency-Key: payroll-august-computation-1
```

The prepared transaction targets the configured confidential gateway and includes the FCC instruction fee.

## 4. Confirm the computation transaction

```http
POST /api/v1/payrolls/{id}/computation/confirm/

{
  "prepared_transaction_id": "uuid",
  "tx_hash": "0x..."
}
```

After receipt verification, the backend can record:

- instruction ID,
- request transaction hash,
- selected TEE identity,
- signer and signer epoch,
- request timestamp.

## 5. Process the instruction

```http
GET  /api/v1/fcc/instructions/
GET  /api/v1/fcc/instructions/{id}/
POST /api/v1/fcc/instructions/{id}/process/
```

Processing verifies the instruction and signed `ActionResult` before any finalization transaction is accepted.

See [Instruction flow](../fcc-integration/instruction-flow).
