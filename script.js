//callback
function learnJs(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}
function done() {
  console.log('Я прошел этот урок!');
}
learnJs('JavaScript', done);
// методы объектов
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: ()=> 
    console.log('TEST')
};
options.makeTest();

const {border, background} = options.colors; //Деструктуризация
console.log(border);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(options.name);
delete options.name;
console.log(options);
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
