function nextId(data) {
    // your code here
    let tempArr = [];
    for (let arr of data) {
        tempArr.push(arr.id); //getting all the ids from the object inside the data array

    }
    // sorting the numbers in ascending order 
    let sortedArr = tempArr.sort((a, b) => {
        return a - b;
    })

    let result = sortedArr[sortedArr.length - 1] + 1;
    // checking if array has some value, then return result if not return 1
    return data.length > 0 ? result : 1;
}



module.exports = nextId