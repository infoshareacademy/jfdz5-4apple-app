const createDetailsList = (results, filterName) => {
  return results.reduce((productFirst, productNext) => {
    return productNext[filterName].concat(productFirst[filterName])
  }).filter((value, index, inputArray) => {
    return inputArray.indexOf(value) === index
  }).sort()
};
//array.indexOf finds 1st occurrence of argument passed. If certain value is doubled, next occurrence index will be different then indexOf(argument). That's why filter returns only one of any values to array.

export default createDetailsList