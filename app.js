const arrayOfNumbers= [1, 12, 13, 34, 50];

function sumArrayOfNumbers (arrayOfNumbers = []){
  let count = 0;

  arrayOfNumbers.forEach((num) => {
    count = count + num;
  })

  return count
}


const total = sumArrayOfNumbers(arrayOfNumbers)
console.log(total)