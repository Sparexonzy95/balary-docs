---
title: FCC and TEE
sidebar_position: 2
---

# FCC and TEE Troubleshooting

## Wrong extension ID

A TEE/proxy tied to one extension cannot be assumed valid for another. Verify chain ID, extension ID and registry membership together.

## Unsupported command


## TEE identity changed

Do not simply overwrite the configured signer. A TEE restart can create a new identity. Use the lifecycle controller to pause, validate, register/retire/rotate and resume.

## More than one active TEE

The Balary lifecycle design expects a controlled singleton binding for its lane. Registry cardinality mismatch is a blocker.

## Signature mismatch

Verify:

- instruction ID,
- selected TEE,
- gateway signer,
- signer epoch,
- chain/extension,
- result envelope,
- old root,
- nonce/expiry.

Do not accept a result because the HTTP request to the proxy succeeded.

## Proxy reachable but credits blocked

Reachability is only one readiness dimension. Check lifecycle status and blocker code. State fingerprints, registry binding or root consistency may still fail.
