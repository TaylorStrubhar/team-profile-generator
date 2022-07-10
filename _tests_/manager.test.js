const managerInfo = require('../lib/manager.js');
const manager = new managerInfo('ira', '0010', 'taylor.strubhar@gmail.com', '101');

test('whether the constructor data translates over', () => {
    expect(manager.name).toBe('ira');
    expect(manager.id).toBe('0010');
    expect(manager.email).toBe('taylor.strubhar@gmail.com');
    expect(manager.officeNum).toBe('101');
});

test('whether the getName() method works', () => {
    expect(manager.getName()).toBe('ira');
});

test('whether the getID() method works', () => {
    expect(manager.getId()).toBe('0010');
});

test('whether the getEmail() method works', () => {
    expect(manager.getEmail()).toBe('taylor.strubhar@gmail.com');
});

test('whether the getRole() method works', () => {
    expect(manager.getRole()).toBe('manager');
});

test('whether the getOfficeNum() method works', () => {
    expect(manager.getOfficeNum()).toBe('101');
});