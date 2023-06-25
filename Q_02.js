// Q.02 First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


const arr = ['54gdgdfe3', '434ffd', '43frdf', '43fdhnh', 'wgcxhjny', 'fsdf34'];
const isUnique = str => {
   return str.split('').every(el => str.indexOf(el) === str.lastIndexOf(el));
};
const findUniqueString = arr => {
   for(let i = 0; i < arr.length; i++){
      if(isUnique(arr[i])){
         return arr[i];
      };
   };
   return false;
};
console.log(findUniqueString(arr));

