---
title: Operations API
sidebar_position: 6
---

# Operations API

## Transactions

```http
GET  /api/v1/transactions/
GET  /api/v1/transactions/{id}/
POST /api/v1/transactions/{id}/sync/
```

Receipt synchronization is where prepared transactions are matched against sender, target, calldata, value and expected events.

## FCC

```http
GET  /api/v1/fcc/configuration/
GET  /api/v1/fcc/instructions/
GET  /api/v1/fcc/instructions/{id}/
POST /api/v1/fcc/instructions/{id}/process/
```

## Notifications

```http
GET  /api/v1/notifications/
GET  /api/v1/notifications/unread-count/
POST /api/v1/notifications/{id}/read/
POST /api/v1/notifications/read-all/
GET  /api/v1/notifications/preferences/
PATCH /api/v1/notifications/preferences/
GET  /api/v1/notifications/email-deliveries/
POST /api/v1/notifications/email-deliveries/{id}/retry/
POST /api/v1/notifications/provider-webhooks/resend/
```

The Resend webhook is authenticated by provider signature rather than JWT. The source is designed to reject stale, invalid and replayed webhook events.

## Audit

```http
GET /api/v1/audit/events/
GET /api/v1/audit/events.csv
GET /api/v1/audit/payrolls/{id}/
GET /api/v1/audit/payrolls/{id}.csv
```

## Readiness

```http
GET /api/v1/health/
GET /api/v1/health/ready/
GET /api/v1/tee-lifecycle/readiness/
```
