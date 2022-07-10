const internInfo = require('../lib/intern.js');
const intern = new internInfo('ira', '0010', 'taylor.strubhar@gmail.com', 'Tampa');

test('whether the constructor data translates over', () => {
    expect(intern.name).toBe('ira');
    expect(intern.id).toBe('0010');
    expect(intern.email).toBe('taylor.strubhar@gmail.com');
    expect(intern.school).toBe('Tampa');
});

test('whether the getName() method works', () => {
    expect(intern.getName()).toBe('ira');
});

test('whether the getID() method works', () => {
    expect(intern.getId()).toBe('0010');
});

test('whether the getEmail() method works', () => {
    expect(intern.getEmail()).toBe('taylor.strubhar@gmail.com');
});

test('whether the getRole() method works', () => {
    expect(intern.getRole()).toBe('intern');
});

test('whether the getSchool() method works', () => {
    expect(intern.getSchool()).toBe('Tampa');
});