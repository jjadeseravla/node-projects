function arrOfObjs(arr) {
  let res = [];
  arr.map((obj) => {
    return obj.language
  }).forEach((language) => {
    const existingLanguage = res.find((item) => { item.language === language });
    if (existingLanguage) {
      existingLanguage.count++;
    } else {
      res.push({ language: language, count: 1 })
    }
  });
  return res;
}


const exampleArray = [
  { language: 'JavaScript' },
  { language: 'JavaScript' },
  { language: 'TypeScript' },
  { language: 'C++' }
] 
console.log(arrOfObjs(exampleArray));
//[
// { language: 'JavaScript', count: 2 },
// { language: 'C++', count: 1 },
// { language: 'TypeScript', count: 1 }
// ]





