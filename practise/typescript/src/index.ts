const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

const numRes: Array<number> = [];
const textRes: Array<string> = [];

type NumOrStr = number | string;
type SpecificObj = { val: number, timestamp: Date }

interface SpecificObjInterface {
  val: number;
  timestamp: Date;
}
// alias and interface interchangeable if just defininding an obj
// but interfaces can force classes to implement certain methods and functionalities though

function add(num1: NumOrStr, num2: NumOrStr) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2 
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2
  }
  return +num1 + +num2;
}

function printRes(resObj: SpecificObj) {
  console.log(resObj.val);
}

buttonElement?.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const res = add(+num1, + +num2);
  numRes.push(res as number);
  const stringRes = add(num1, num2);
  textRes.push(stringRes as string);
  console.log(res);
  printRes({ val: res as number, timestamp: new Date() });
  console.log(numRes, textRes);
});

const myPromise = new Promise<string>((resolve, reject) => { // not complaining cos it resolved to a str 'it worked'
  setTimeout(() => {
    resolve('it worked');
  }, 1000);
});

myPromise.then((res) => {
  console.log(res);
  console.log(res.split('w')) // its a string so can call split on it
});
// 'it worked'.split('w')
// [ 'it ', 'orked' ]
//  'it worked'.split('o')
// [ 'it w', 'rked' ]

// for typescript:
// $ sudo npm install -g typescript to install ts
// $ tsc --init in designated directory
// $ tsc app.ts after every file before compiling

