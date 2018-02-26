module.exports = function longestConsecutiveLength(array) {
  // your solution here
    if(array.length < 2){return array.length;}

    array.sort((a, b) => {return a-b});

    arr = [];
    var count = 1;
    for (var i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] == 1) {
            count++;
        }else if(array[i] - array[i - 1] != 0){
            arr.push(count);
            count = 1;
        }
    }

    return Math.max.apply(null, arr);
}
