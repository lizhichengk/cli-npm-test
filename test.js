// const str = JSON.stringify({a:1,b:2,c:3},['a','b']);
const str = JSON.stringify({a:1,b:2,c:3}, function(key,value) {
  console.log(typeof key + '----key' + key);
  console.log(typeof value + '----value'+value);
  return typeof value === 'number' ? value+1 : value;
}, 2);
console.log(str);


const obj = JSON.parse('{"a":1,"b":2,"c":3}',function(key,value) {
  if (key === '') return value;
  return value * 2;
});
console.log(obj);