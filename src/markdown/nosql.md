---
path: "/nosql"
date: "2019-07-21"
title: "NoSQL"
keywords: "NoSQL"
---

#NoSQL

## data warehouse
NoSQL is better suited to archival products, where data is stored, processed, analyzed in the background. Real-time activities like customer transactions may be better served by an SQL.

NoSQL is hierarchical. SQL is relational. ~= NoSQL will include multiple copies of the same string (like a JSON file). SQL will (?) link to an instance of the string.

NoSQL pre-computes projections of data in the form of indexes. NoSQL

Scaling SQL up means more CPU. Scaling NoSQL up means making multiple copies of data, each with light CPU load.

## Data types

There are a lot more data types in SQL than in NoSQL.
DynamoDB has:
1. String
2. Number
3. Buffer
and
4. Boolean
5. Null
Only the first three can be used in the PK.

## schema
Take an SQL schema. Pick a pivotal table. That's the root of the NoSQL object. FKs don't link to other tables, they are nested objects or arrays of objects. Data that cannot be nested for logical or physical (10GB) reasons goes into another table.

## aws-sdk methods

### scan
for backfilling data when schema is expanded. for updating attributes when schema changes. for data fetching during development.

### query
good for getting lists of things. works with base table and indexes. usually paginated.

#### Development concepts

##### Variables
Method params accept placeholder / variable names of attributes in the #name format and and placeholder / variable values in the :value format.

##### Response object
1. `ScannedCount` is the total number of matches (up to 1MB). `Count` is `ScannedCount` after filtration, if any.
2. `LastEvaluatedKey` means there are more results. `ScannedCount` needs to be ignored or tallied. `ExclusiveStartKey` is next query's start point, the start of the second installment of data.
3. `ReturnConsumedCapacity` allows monitoring resource usage during development.

##### versioning
Instead of creating an Item create a { v0: Item }. Then on update, do { v0: Current, v1: Previous }. v0 is current, the 1-n versions are a stack with most recent on top / last.

## Database
Consists of the base table, up to 5 local indexes (same PK) and up to 20 global indexes (different PK). A table, including local indexes, is max 10GB.

### Primary keys
PK consists of a hash key, and an optional sort key. No foreign keys, just query the other table by the FK. Or nest the FK entity, if it doesn't have multiple relationships.

### Indexes
A local secondary index has the same primary key but a sort key different to that of the base table. Local indexes can fetch unprojected attributes during a query, global indexes are unable to do that. Projecting ALL in an index doubles the storage & write cost.
[Slides 25-26 illustrate LSIs and GSIs nicely](https://de.slideshare.net/awskorea/amazon-dynamo-db)

### Transactions
Similar to Promise.all([transaction, transaction, transaction]).

### Consistency
Eventual = data will replicate, just don't assume it will replicate immediately. Indexes are updated about [every 6 hours](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GlobalSecondaryIndexDescription.html).
Immediate = data will be identical in all copies at all times. Reads cost twice as much. Writes probably also cost more.

### Streams
Streams emit events. Stream events are triggered by database activity. They in turn can trigger lambdas and others. Good for online / real-time cross-device syncs. Streams are 24 hours long.

### Cost
A read is worth 5 writes. 1 write is max 1KB - so keep your items small?