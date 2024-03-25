
// do you have enough ingredients to make a cake from the recipe
// and  if so, how many cakes

// let recipe = { flour: 500, sugar: 200, eggs: 1 };
// let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
let recipe = { eggs: 1, flour: 500, sugar: 200 }
let available = { eggs: 5, flour: 1200, milk: 200, sugar: 1200 }

function sorted(obj) {
  // Get the keys of the object and sort them alphabetically
  const sortedKeys = Object.keys(obj).sort();
  // Create a new object with the sorted keys
  const sortedObj= {};
  sortedKeys.forEach(key => {
    sortedObj[key] = obj[key];
  });
  console.log(sortedObj)
  return sortedObj;
}
 
function cakes(recipeObj, availableObj) {
  const recipeKeys = Object.keys(recipeObj);
  // Check if all keys of obj1 are present in obj2 and returns boolean with every
  if (recipeKeys.every((key) => availableObj.hasOwnProperty(key))) {
    const recipeSortedObj = sorted(recipeObj);
    const availableSortedObj = sorted(availableObj);
    // Get the values of obj1
    const recipeSortedValues = Object.values(recipeSortedObj);

    for (const key in availableSortedObj) {
      if (!(key in recipeSortedObj)) {
          delete availableSortedObj[key];
      }
  }
    // Get the values of obj2 and slice them to match the length of obj1
    const availableSortedValues = Object.values(availableSortedObj).slice(0, recipeKeys.length);
    // Compare the values using map
    const dividedVals = recipeSortedValues.map((value, index) => {
      return (Math.floor(availableSortedValues[index] / value));
    })
   
      return Math.min(...dividedVals);
    
  } else {
    return 0
    };
  }

console.log(cakes(recipe, available));



// way easier if recipe is needs and available is has:
const cakes = (recipe, available) => Math.min(
  ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
)