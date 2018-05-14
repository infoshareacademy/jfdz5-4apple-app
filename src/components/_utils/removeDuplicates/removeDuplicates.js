const removeDuplicates = (arr) => {
  return arr.filter((value, index, inputArray) => {
    return inputArray.indexOf(value) === index
  })
};

export default removeDuplicates