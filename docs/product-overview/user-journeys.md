---
title: User Journeys
sidebar_position: 3
---

# User Journeys

Balary separates institution administration, HR preparation, Finance funding and employee settlement.

## Institution admin

1. Connect wallet and authenticate.
2. Create a local institution record.
3. Prepare the on-chain registration transaction.
4. Broadcast exactly the transaction returned by the backend.
5. Confirm the transaction hash so the backend can validate the receipt.
6. Add HR and Finance role wallets through the same prepare/confirm pattern.

The backend checks role membership before exposing privileged actions.

## HR

1. Create or import employee records.
2. Create a payroll run with funding and withdrawal windows.
3. Upload the payroll CSV.
4. Validate the file.
5. Encrypt the payroll for the selected TEE.
6. Prepare and broadcast the payroll draft.
7. Prepare and broadcast the FCC computation request.
8. Track the instruction until the signed confidential result is verified.
9. Open funding when the payroll reaches the correct on-chain state.

## Finance

1. Open the funding context.
2. Review the exact remaining payroll amount, balance and allowance.
3. Approve only the amount currently required.
4. Fund the payroll vault.
5. Wait for receipt synchronization and activation evidence.

## Employee, core payroll lane

1. Authenticate using the wallet registered for the employee.
2. List eligible payrolls.
3. Request withdrawal preparation using only the payroll ID.
4. The backend authorizes destination, amount, nonce, root and expiry.
5. Sign the returned authorization digest.
6. Submit the signature.
7. The approved relayer submits the encrypted withdrawal request.
8. FCC/TEE verifies the private balance and signs the state transition.
9. The gateway/vault validates the result and settles.

The current serializer rejects client-supplied authorization fields at withdrawal preparation time.
