import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "tradinglab";

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

// Reuse the client across hot-reloads in dev and across invocations in prod
const globalForMongo = global as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = globalForMongo._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}
