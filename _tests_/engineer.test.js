const engineerInfo = require('../lib/engineer.js');
const engineer = new engineerInfo('ira', '0010', 'taylor.strubhar@gmail.com', 'TaylorStrubhar');

test('whether the constructor data translates over', () => {
    expect(engineer.name).toBe('ira');
    expect(engineer.id).toBe('0010');
    expect(engineer.email).toBe('taylor.strubhar@gmail.com');
    expect(engineer.gitHubUser).toBe('TaylorStrubhar');
});

test('whether the getName() method works', () => {
    expect(engineer.getName()).toBe('ira');
});

test('whether the getID() method works', () => {
    expect(engineer.getId()).toBe('0010');
});

test('whether the getEmail() method works', () => {
    expect(engineer.getEmail()).toBe('taylor.strubhar@gmail.com');
});

test('whether the getRole() method works', () => {
    expect(engineer.getRole()).toBe('engineer');
});

test('whether the getGitHubUser() method works', () => {
    expect(engineer.getGitHubUser()).toBe('TaylorStrubhar');
});