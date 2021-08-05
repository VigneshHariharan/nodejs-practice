import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   console.log("prisma : ", await prisma.resources.findMany());
  // create user
  // await prisma.user.create({
  //   data: {
  //     email: "zenitsu@slayer.com",
  //     name: "Zenitsu Agatsumu",
  //     password: "DemonSlayer",
  //   },
  // });
  //   console.log("users created : ", await prisma.user.findMany());
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
