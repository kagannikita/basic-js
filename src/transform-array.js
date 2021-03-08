module.exports = function transform(arr) {

  if(!(arr instanceof Array)) {throw new Error()}
  let array = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i]==="--discard-next") {
        if(i + 1 < arr.length){
          i++;
        }
      }
    else if (arr[i]==="--discard-prev"){
        if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
          array.pop();
        }
      }

      else if(arr[i]==='--double-next') {
        if(i + 1 < arr.length){
          array.push(arr[i + 1]);
        }

      }

      else if(arr[i]=== '--double-prev') {
        if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
          array.push(arr[i - 1]);
        }
      }

      else {
        array.push(arr[i]);
      }
    }
  return array
  }
