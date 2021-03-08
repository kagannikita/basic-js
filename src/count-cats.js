module.exports = function countCats(matrix) {
  const arr=[].concat(...matrix)
  let counter=0
  for (let i=0;i<arr.length;i++){
     if(arr[i]==="^^") {
       counter++
     }
  }
  return counter

};
