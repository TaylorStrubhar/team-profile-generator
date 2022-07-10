const employeeInfo = require('../lib/employee.js');
const employee = new employeeInfo('ira', '0010', 'taylor.strubhar@gmail.com');

test('whether the constructor data translates over', () => {
    expect(employee.name).toBe('ira');
    expect(employee.id).toBe('0010');
    expect(employee.email).toBe('taylor.strubhar@gmail.com');
});

test('whether the getName() method works', () => {
    expect(employee.getName()).toBe('ira');
});

test('whether the getID() method works', () => {
    expect(employee.getId()).toBe('0010');
});

test('whether the getEmail() method works', () => {
    expect(employee.getEmail()).toBe('taylor.strubhar@gmail.com');
});

test('whether the getRole() method works', () => {
    expect(employee.getRole()).toBe('employee');
});