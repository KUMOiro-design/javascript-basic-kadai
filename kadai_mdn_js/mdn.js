const date = new Date();

const outputDate = [date.getFullYear(),date.getMonth(), date.getDate()]

let i = 0

i = date.getMonth() + 1

console.log(outputDate[0] + '年' + i + '月' + outputDate[2] + '日');