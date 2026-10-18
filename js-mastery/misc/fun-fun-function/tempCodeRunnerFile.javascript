import fs from 'node:fs'

const output = fs.readFileSync('data.txt','utf8')

console.log(output)