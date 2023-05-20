import { faker } from '@faker-js/faker';

const generateFakeUser = () => {
    
    const name = faker.person.firstName();
    const email = faker.internet.email({firstName: name}); // email generated via name
    const phone = faker.phone.number("+374-##-###-###");

    return {  // user have name, email and phone
        name,
        email,
        phone
    }
};

export default generateFakeUser;