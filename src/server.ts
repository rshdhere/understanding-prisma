import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.users.create({
    data: {
      username: "raashed",
      password: "halamadrid",
      age: 23,
      city: "hyd",
    },
  });
}

createUser();
