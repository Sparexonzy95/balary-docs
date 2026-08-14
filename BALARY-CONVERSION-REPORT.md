# Balary documentation current-state report

Date: 2026-08-14

## Current deployment reflected in this docs package

- Flare Coston2, chain ID `114`
- Vault `0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020`
- Gateway `0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216`
- FCC extension `66209`
- USD₮0 `0xC1A5B41512496B80903D1f32d6dEa3a73212E71F`
- Active TEE `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0`
- Registry `teeProxyId` `0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D`
- Gateway ActionResult signer `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0`
- Gateway signer epoch `2`
- FCC proxy `https://payroll-fcc.balary.lol`
- Backend API `https://zalary-api.104.237.9.230.sslip.io/api/v1`
- App `https://balary.lol`

## Important lifecycle correction

Earlier code treated `teeProxyId` as the expected ActionResult signer. The working integration verifies that the FCC `ActionResult.signature` is produced by the TEE identity itself. The lifecycle controller now reconciles the Gateway against that signer and the current on-chain signer epoch is `2`.

## Encryptor integration

The backend uses the installed `zalary-encrypt` executable to encrypt confidential payroll payloads before FCC submission.

## Scope correction

Experimental confidential-credit reserve/ledger material has been removed from the active navigation and current deployment pages. The hackathon application uses the confidential payroll vault/gateway architecture.

## Branding

User-facing documentation uses **Balary**. Deployed/source identifiers that still contain `Zalary` remain unchanged where they are technical compatibility identifiers.
