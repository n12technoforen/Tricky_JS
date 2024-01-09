(function () {
  var objA = { foo: 'foo' };
  var objB = objA;
  objB.foo = 'bar';
  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
