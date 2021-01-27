const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true}
];
console.log(users);
//var premium = users.filter(user => user.premium = 'true');
//console.log(premium);

console.log(users.map(user => user.premium === true));
const sonPremium = users.filter(user => user.premium === true);
console.log(sonPremium);
console.log(sonPremium.username);

const noPremium = users.filter(user => user.premium === false);
console.log(noPremium);