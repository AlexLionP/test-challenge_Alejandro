// You already have the methods imported
const users = require('../users.js');
const {getUserById, getUserByUsername, validatePassword} = require('../users.js');

describe('User functions test', () => {
    it('Should get the user by its id', () => {
        const user = getUserById(1);
        expect(user).toEqual({
            id: 1, 
            username: 'hpLover4',
            email: 'sirious90@gmail.com',
            password: 'hArrydotCo9m'
    })
})
})

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation