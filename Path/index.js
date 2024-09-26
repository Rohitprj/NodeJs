const path = require("path");

const filePath = "/text.txt";
// const pathName = path.basename(filePath)
// console.log(pathName)

// const dir = path.dirname(filePath)
// console.log(dir)

// const ext = path.extname(filePath)
// console.log(ext)

// const res = path.resolve(filePath)
// console.log(res)

const nor = path.normalize(filePath)
console.log(nor)