# How to start

## You need to add information to your MongoDb database

### Two collections must be created:

1. coins

```json
[
  {
    "name" : "Dolar",
    "description" : "Dolar",
    "code" : "USD",
    "symbol" : "$",
    "date" : "2019-07-30T19:16:39.080Z"
  },
  {
    "name" : "Euro",
    "description" : "Euro",
    "code" : "EUR",
    "symbol" : "€",
    "date" : "2019-07-30T19:16:39.080Z"
  }
]
```

2. coinsconversions

```json
[
  {
    "base" : "USD",
    "to" : "EUR",
    "conversionFactor" : 0.90,
    "date" : 1564581391869.0,
    "createdAt" : "2019-07-31T13:56:31.873Z",
    "__v" : 0
  }
]
```

## Once you have added the data to your database, you must configure the config file to connect to the database

#### Path: /config/default.json
#### Var: DB.url
#### For example: "mongodb://localhost/moneyExchange"

## Now, you can install and start the server


```bash
npm install & npm start
```
