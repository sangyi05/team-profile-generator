const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
jest.mock('../lib/Employee.js')

test('creates office', () => {
    const manager = new Manager('Name', '@gmail.com', '123', '321');
    
    expect(manager.office).toBe('321')

})