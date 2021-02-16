const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Employee.js')

test('creates github', () => {
    const engineer = new Engineer('Name', '123', '@gmail.com', 'github');
    
    expect(engineer.github).toBe('github')

})