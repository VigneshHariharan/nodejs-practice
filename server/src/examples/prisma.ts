import { Prisma, PrismaClient } from "@prisma/client";
import faker from "faker";

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

  interface INote {
    content: string;
    title: string;
    study_resources: string;
    created_by: 1;
  }

  const constructData = (): INote[] => {
    const notesData: INote[] = [];
    for (let i = 0; i < 10; i++) {
      const note: INote = {
        content: faker.lorem.paragraphs(),
        title: faker.name.jobTitle(),
        study_resources: faker.lorem.paragraphs(),
        created_by: 1,
      };
      notesData.push(note);
    }
    return notesData;
  };

  // await prisma.notes.create({
  //   data: {
  //     content: faker.lorem.paragraphs(),
  //     title: faker.name.jobTitle(),
  //     study_resources: faker.lorem.paragraphs(),
  //     created_by: 1,
  //   },
  // });
  await prisma.notes.createMany({
    data: constructData(),
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
