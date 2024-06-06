const person = {
    sound:'helllo word1',
    name: 'tinh',
    eage: '24',
    job: 'student'
}
//obj.prevenExtensions
Object.preventExtensions(person);
person.girlFriend = 'tình';
console.log(person);

//
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); //false

//
Object.seal(person);

person.birrthday = '12/02/2002';
delete person.eage;
person.job = 'backend';
console.log(person);

//
Object.seal(person);
console.log(Object.isSealed(person));

//
Object.freeze(person);
person.eage = "3";
delete person.name;
person.girlFriend
console.log(person);

//
Object.freeze(person);
console.log(Object.isFrozen(person));