const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
jest.mock('../lib/Employee.js')

test('creates school', () => {
    const intern = new Intern('Name', '@gmail.com', '123', 'school');
    
    expect(intern.school).toBe('school')

})