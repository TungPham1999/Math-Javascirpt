// theory
// 1. map is a collection of keyed data items, just like an Object
// 2. set  is a special type collection – “set of values” (without keys), where each value may occur only once.

// Threads :  are words that have the same number of same letters, but diff order
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// "nap,teachers,ear" or "PAN,cheaters,era"
// sort them with anpha
function acclean(arr) {
  // init map
  const map = new Map();

  for (const word of arr) {
    // split , sort and join it
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
    //       {"anp" => "PAN"}
    //       {"aceehrst" => "hectares"}
    //       {"aer" => "era"}
  }
}
acclean(arr);

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);
