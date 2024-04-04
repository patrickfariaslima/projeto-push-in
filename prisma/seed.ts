import { prisma } from "../src/lib/prisma";

async function seed () {
    await prisma.event.create({
        data: {
            id: '7d601118-a067-4268-ba57-fb06e6cd51d3',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados por código',
            maximumAttendees: 120,
        }

    })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
})