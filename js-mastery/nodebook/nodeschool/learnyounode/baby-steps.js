const sum = process.argv.slice(2).reduce((s,c) => s + Number(c),0);
console.log(sum);
