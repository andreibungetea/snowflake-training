const arrayPlusArray = (arr1, arr2) => {
  
    let sum1 = 0;
    let sum2 = 0;
  totalArray = [];
  
  for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
  };
  
   for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
  };
  return totalArray = sum1 + sum2;
};
console.log(arrayPlusArray([1,2,3,], [4,5,6,]));

