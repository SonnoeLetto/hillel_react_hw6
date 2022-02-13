import faker from '@faker-js/faker'

const generateNewsItem = () => {
     return {
        id: faker.datatype.uuid(),
        title: faker.commerce.product(),
        text: faker.lorem.paragraph(),
        description: faker.lorem.sentences(1),
        photo: faker.image.image(),
        author: faker.name.findName()
    }
}

export const data = Array(6).fill('').map(newsItem => generateNewsItem())