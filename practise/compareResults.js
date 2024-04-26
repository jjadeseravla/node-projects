// function generateBC(url, separator) {
//   const atBeginning = '<a href="/">HOME</a>'+ separator;
//   const wordsArr = url.split('/');
//   const removedFirstArr = wordsArr.slice(1);


//   //  return removedFirstArr;
//   // --> ['important', 'confidential', 'docs'];

//   const noDotsInWords = removedFirstArr.filter(word => !word.includes('.'));
  
//   const theARef = noDotsInWords.map((word, index) => {
//     let hrefLink;
//     if (word !== noDotsInWords[noDotsInWords.length -1] && index > 0) {
//       const extraWord = noDotsInWords.slice(0, index).join('/') + '/' + word;
//       hrefLink = `<a href="/${extraWord}/">`
//     } else {
      
//       hrefLink = `<a href="/${word}/">`
//     }
    
//     return `${hrefLink}${word.toUpperCase()}</a>${separator}`;
//   });
//   // const theFirstRef = `<a href="/${wordsArr[1]}/">${wordsArr[1].toUpperCase()}</a>` + separator;

//   // return theARef;

//   let lastRef;
//   let res;
//   const removeAnytingAfterDot = wordsArr[wordsArr.length - 1].split('.')[0];
  
//   if (removeAnytingAfterDot === 'index') {
//     theARef.pop()
//     lastRef = `<span class="active">${wordsArr[wordsArr.length - 2].toUpperCase()}</span>`
//     res =  atBeginning + theARef.join('') + lastRef;
//   } else {
//     lastRef = `<span class="active">${removeAnytingAfterDot.toUpperCase()}</span>`
//     res = atBeginning + theARef.join('') + lastRef;
//   };

//     // return res;


//   console.log('res', res);
//   // console.log('rel', '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>');
//   console.log('rel', '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>');
//   //console.log('rel', '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>');
//   return res == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>';
// }

function generateBC(url, separator) {
  const atBeginning = '<a href="/">HOME</a>' + separator;
  const pathSegments = url.split('/').filter(segment => segment.trim() !== ''); // Remove empty segments
  const lastSegment = pathSegments[pathSegments.length - 1].split('.')[0]; // Remove file extension if present
  const breadcrumbs = pathSegments.slice(1, -1); // Exclude first and last segments

  const breadcrumbLinks = breadcrumbs.map((segment, index) => {
    const path = '/' + pathSegments.slice(1, index + 2).join('/') + '/';
    return `<a href="${path}">${segment.toUpperCase()}</a>`;
  });

  let lastRef;
  if (lastSegment.toLowerCase() === 'index') {
    lastRef = `<span class="active">${breadcrumbs[breadcrumbs.length - 1].toUpperCase()}</span>`;
    breadcrumbLinks.pop(); // Remove last breadcrumb link if last segment is 'index'
  } else {
    lastRef = `<span class="active">${lastSegment.toUpperCase()}</span>`;
  }

  return atBeginning + breadcrumbLinks.join(separator) + separator + lastRef;
}





// console.log(
//   generateBC(
//     "mysite.com/pictures/holidays.html", " : "
//   )
// );

console.log(
  generateBC(
    "www.codewars.com/users/GiacomoSorbi", " / "
  )
)

// console.log(
//   generateBC(
//     "www.microsoft.com/important/confidential/docs/index.htm#top", " * "
//   )
// )
// '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>');

