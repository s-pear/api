import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("start seeding");
  //clear all collections
  await prisma.enrollment.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.student.deleteMany({});

  await prisma.course.createMany({
    data: [
      {
        courseNo: "001101",
        title: "FUNDAMENTAL ENGLISH 1",
      },
      {
        courseNo: "261103",
        title: "BASIC COMPUTER ENGINEERING",
      },
    ],
  });

  await prisma.student.createMany({
    data: [
      {
        studentId: "650610001",
        firstName: "Peanut",
        lastName: "Butter",
      },
      {
        studentId: "650610003",
        firstName: "Winnie",
        lastName: "Pooh",
      },
      {
        studentId: "650610002",
        firstName: "Charlie",
        lastName: "Brown",
      },
      {
        studentId: "987654321",
        firstName: "s",
        lastName: "s",
      },
      {
        studentId: "666666666",
        firstName: "pantagon",
        lastName: "Barrowsasdasd",
      },
      {
        studentId: "654668453",
        firstName: "asdasdasd",
        lastName: "asdasdasdasd",
      },
      {
        studentId: "640612098",
        firstName: "Suphanath",
        lastName: "Wangtip",
      },
      {
        studentId: "640612088",
        firstName: "Thatthana",
        lastName: "Sringeon",
      },
      {
        studentId: "640610672",
        firstName: "sawit",
        lastName: "cha",
      },
      {
        studentId: "640610657",
        firstName: "Winnie",
        lastName: "Winnieagain",
      },
      {
        studentId: "640610631",
        firstName: "ณฐพงศ์",
        lastName: "พงศาวลีศรี",
      },
      {
        studentId: "640610631",
        firstName: "ณฐพงศ์",
        lastName: "พงศาวลีศรี",
      },
      {
        studentId: "640610625",
        firstName: "Chonlanan",
        lastName: "Test",
      },
      {
        studentId: "640610622",
        firstName: "plub",
        lastName: "soiwicha",
      },
      {
        studentId: "630615099",
        firstName: "aqqa",
        lastName: "bzz",
      },
      {
        studentId: "630615098",
        firstName: "Santi",
        lastName: "Potikanond",
      },
      {
        studentId: "630615024",
        firstName: "Peanutaawd",
        lastName: "Butteraasd",
      },
      {
        studentId: "630615000",
        firstName: "asd",
        lastName: "qwe",
      },
      {
        studentId: "630610753",
        firstName: "phurin",
        lastName: "prasit",
      },
      {
        studentId: "630610720",
        firstName: "konthakarns",
        lastName: "fukam",
      },
      {
        studentId: "630610720",
        firstName: "konthakarn",
        lastName: "fukam",
      },
      {
        studentId: "630610657",
        firstName: "suwichada",
        lastName: "pongkanmoon",
      },
      {
        studentId: "620610176",
        firstName: " Test",
        lastName: "Thian",
      },
      {
        studentId: "620610175",
        firstName: "Thian",
        lastName: "sdfdf",
      },
      {
        studentId: "333222111",
        firstName: "event",
        lastName: "horizon",
      },
      {
        studentId: "123456789",
        firstName: "kk",
        lastName: "kk",
      },
      {
        studentId: "123456780",
        firstName: "eiei",
        lastName: "hi",
      },
      {
        studentId: "123321123",
        firstName: "test",
        lastName: "1",
      },
      {
        studentId: "123123123",
        firstName: "23",
        lastName: "123",
      },
      {
        studentId: "111111111",
        firstName: "oo",
        lastName: "pp",
      },
    ],
  });

  await prisma.enrollment.createMany({
    data: [
      {
        studentId: "650610001",
        courseNo: "001101",
        createdAt: new Date("2023-06-02T07:23:27.767Z"),
      },
      {
        studentId: "650610001",
        courseNo: "261103",
        createdAt: new Date("2023-10-03T08:23:27.767Z"),
      },
      {
        studentId: "650610002",
        courseNo: "001101",
        createdAt: new Date("2023-09-03T08:23:27.767Z"),
      },
    ],
  });
  console.log("seeding is complete");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


