// Your code here

const mapToNegativize = (sourceArray) => sourceArray.map(ele => -ele)

const mapToNoChange = (array) => array.map(ele => ele)

const mapToDouble = (array) => array.map(ele => ele * 2)

const mapToSquare = (array) => array.map(ele => ele ** 2)

// console.log(mapToSquare([1, 2, 3, -9]))


const reduceToTotal = (arr, num=0) => arr.reduce((total, ele) => ele + total, num)

const reduceToAllTrue = (arr) => arr.map(ele => ele ? true:false).every(ele => ele === true)


const reduceToAnyTrue = (arr) => arr.some(ele => ele === true)
