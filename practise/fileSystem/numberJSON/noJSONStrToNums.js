const numsArrOfObj = [
  {1: "one"},
  {2: "two"},
  {3: "three"},
  {4: "four"},
  {5: "five"},
  {6: "six"},
  {7: "seven"},
  {8: "eight"},
  {9: "nine"},
  {10: "ten"},
  {11: "eleven"},
  {12: "twelve"},
  {13: "thirteen"},
  {14: "fourteen"},
  {15: "fifteen"},
  {16: "sixteen"},
  {17: "seventeen"},
  {18: "eighteen"},
  {19: "nineteen"},
  {20: "twenty"},
  {21: "twenty-one"},
  {22: "twenty-two"},
  {23: "twenty-three"},
  {24: "twenty-four"},
  {25: "twenty-five"},
  {26: "twenty-six"},
  {27: "twenty-seven"},
  {28: "twenty-eight"},
  {29: "twenty-nine"},
  {30: "thirty"},
  {31: "thirty-one"},
  {32: "thirty-two"},
  {33: "thirty-three"},
  {34: "thirty-four"},
  {35: "thirty-five"},
  {36: "thirty-six"},
  {37: "thirty-seven"},
  {38: "thirty-eight"},
  {39: "thirty-nine"},
  {40: "forty"},
  {41: "forty-one"},
  {42: "forty-two"},
  {43: "forty-three"},
  {44: "forty-four"},
  {45: "forty-five"},
  {46: "forty-six"},
  {47: "forty-seven"},
  {48: "forty-eight"},
  {49: "forty-nine"},
  {50: "fifty"},
  {51: "fifty-one"},
  {52: "fifty-two"},
  {53: "fifty-three"},
  {54: "fifty-four"},
  {55: "fifty-five"},
  {56: "fifty-six"},
  {57: "fifty-seven"},
  {58: "fifty-eight"},
  {59: "fifty-nine"},
  {60: "sixty"},
  {61: "sixty-one"},
  {62: "sixty-two"},
  {63: "sixty-three"},
  {64: "sixty-four"},
  {65: "sixty-five"},
  {66: "sixty-six"},
  {67: "sixty-seven"},
  {68: "sixty-eight"},
  {69: "sixty-nine"},
  {70: "seventy"},
  {71: "seventy-one"},
  {72: "seventy-two"},
  {73: "seventy-three"},
  {74: "seventy-four"},
  {75: "seventy-five"},
  {76: "seventy-six"},
  {77: "seventy-seven"},
  {78: "seventy-eight"},
  {79: "seventy-nine"},
  {80: "eighty"},
  {81: "eighty-one"},
  {82: "eighty-two"},
  {83: "eighty-three"},
  {84: "eighty-four"},
  {85: "eighty-five"},
  {86: "eighty-six"},
  {87: "eighty-seven"},
  {88: "eighty-eight"},
  {89: "eighty-nine"},
  {90: "ninety"},
  {91: "ninety-one"},
  {92: "ninety-two"},
  {93: "ninety-three"},
  {94: "ninety-four"},
  {95: "ninety-five"},
  {96: "ninety-six"},
  {97: "ninety-seven"},
  {98: "ninety-eight"},
  {99: "ninety-nine"}
]


const strToNums = (str) => {
  const match = numsArrOfObj.find(obj => Object.values(obj).includes(str))
  if (match) {
    // console.log('match', match);
    return parseInt(Object.keys(match)[0]);
  } else if (str.split(' ').length === 3) {
    const words = str.split(' '); //split to words
    // const lastTwoNums = parseInt(words, 10);
    console.log('**********', words.slice(-1)[0]);
    const strNum = strToNums(words[0]).toString() + strToNums(words.slice(-1)[0]).toString();
    return parseInt(strNum);
  }
}

console.log(strToNums('one')) //1
console.log(strToNums('twenty')) //20
 console.log(strToNums('one hundred forty-six'))// 146
console.log(strToNums('nine hundred ninety-nine'))// 999


var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred": 100, "thousand": 1000, "million": 1000000 };

function usingThousandsMore(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}





console.log(usingThousandsMore("seven hundred eighty-three thousand nine hundred and nineteen")) //  783919