import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// testing pre-commit

async function createUser() {
  await client.users.create({
    data: {
      username: "shazeb",
      password: "fc barcelona",
      age: 23,
      city: "hyd",
    },
  });
}

createUser();
