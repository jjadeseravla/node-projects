function generateHashtag (str) {
  if (str === '' || str === " ") {
    return false
  } else if (str.split('').includes('')) {
    const arr = str.trim().split('').filter(elem => elem !== '');
    return arr;
    // str.split('').replace(/\s/g, '').length > 140
  }else {
    const arr = str.trim().split(' ');
    console.log('array', arr.length)
    if (arr.join('').trim().length === 0) {
      console.log(3)
      return false;
    }
    const newArr = arr.map((word) => word.charAt().toUpperCase() + word.slice(1))
    console.log(4, newArr.join('').length)
    if (newArr.join('').length >= 140) {
      return false
    } else {

      return `#${newArr.join('')}`  
    }
  }
}

console.log(generateHashtag(" ".repeat(200))) // false
console.log('-------', generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"
console.log(generateHashtag("Codewars")) // "#Codewars"
console.log(generateHashtag("Codewars is nice")); // #CodewarsIsNice"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); // false
console.log(generateHashtag("a".repeat(140)));

