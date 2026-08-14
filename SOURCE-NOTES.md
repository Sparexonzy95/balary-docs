# Source grounding notes

This documentation package reflects the current Balary hackathon deployment and the working end-to-end payroll flow.

## Current live values

- App: `https://balary.lol`
- Backend API: `https://zalary-api.104.237.9.230.sslip.io/api/v1`
- FCC proxy: `https://payroll-fcc.balary.lol`
- Coston2 chain ID: `114`
- Vault: `0xBBDDd3fFa53385c4149A0513F1E06FF36BC85020`
- Gateway: `0xf69CaAF395af6A7DeCB0ac2f86430E6c889A8216`
- USD₮0: `0xC1A5B41512496B80903D1f32d6dEa3a73212E71F`
- FCC extension: `66209`
- Active TEE: `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0`
- FCC registry `teeProxyId`: `0xFf92e0231756Ee0444694C80F459Bf69e5beCe6D`
- Gateway ActionResult signer: `0x144C0FFbF98C5029E94DA4F75F27f325d2BA1BB0`
- Gateway signer epoch: `2`
- TEE manager: `0x1a9C4A0f9D76c0b1D91d22E24E573a9b377618aE`

## Signer correction

The current FCC payroll integration recovers `ActionResult.signature` to the TEE identity itself. The registry `teeProxyId` is not the ActionResult signer.

## Architecture scope

The active application uses the confidential payroll vault/gateway architecture. Earlier confidential-credit reserve/ledger experiments are intentionally excluded from the current judge-facing architecture and deployment reference.

## Rebrand constraint

Some deployed/source identifiers retain the `Zalary` prefix. Documentation preserves those identifiers where changing them would make examples disagree with deployed code or ABI.
