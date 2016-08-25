const a = {foo: 'bar'};
const b = a;
a.foo = 'foobar';
console.log(a.foo === b.foo);
console.log(a, b);
