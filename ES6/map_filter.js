const arr = [1,2,3];

const newArr = arr.map(x=> x * 2);
console.log(newArr); 

const users = [
  { name: 'Jerry', age: 25 },
  { name: 'Linda', age: 30 },
  { name: 'Tom', age: 35 }
];

console.log(users[0].name);

console.log(users[1].age);

const names = users.map(user => user.name);
console.log(names);

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(num => num % 2 == 0);

console.log(evens);

const adults = users.filter(user => user.age >= 30);
console.log(adults);

const adultNames = users.filter(user => user.age >= 30).map(user => user.name);
console.log(adultNames);

const userNames = [];
users.forEach(user => {
    userNames.push(user.name);
});

console.log(userNames);