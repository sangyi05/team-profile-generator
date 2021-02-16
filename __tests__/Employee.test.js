const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js')

test('creates an employee', () => {
    const employee = new Employee();
    
    expect(employee.name).toBe('Name')
    expect(employee.email).toBe('@gmail.com')
    expect(employee.id).toBe('123')

})


