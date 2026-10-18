/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 *
 * 6. Closures for me is like creating your own little living universes of code. In theory a function encloses or
 * remembers all variables that were in its lexical scope when created. For as long as that function is referenced
 * 'enclosed variables' cannot be gc'd. For efficiency most compilers will only "enclose" variables tha are used by the
 * function. The varibles it has access to in its lexical scope includes all across the scope chain.
 *
 * So in the example below we see that the 'calculateNetProfit' is referenced by the dom which will exists until the
 * tab is closed, therefore the enclosed scope chain of that function must be accessible. This includes all of its local
 * context in addition to the 'calculateNetSales' function and the taxRateCorporate global constant and its
 * scope chain, etc
 * The only thing that can be 'tagged' as overwriteable or reallocation (soft delete) is 'taxRateDividend'
 * 
 * GC - periodically scans the heap (what are code uses and usually sits in our RAM memory) and tags unreferenced
 * variables as 'free' memory
 */

const taxRateVAT = 0.19;
const taxRateCorporate = 0.19;
const taxRateDividendes = 0.25;

function calculateNetSales(salesAmount) {
  const netSales = salesAmount / (1 + taxRateVAT);
  return netSales;
}

function calculateNetProfit(salesAmount) {
  const salesAfterVat = calculateNetSales(salesAmount);
  const netProfit = salesAfterVat / (1 + taxRateCorporate);

  return netProfit;
}

document.getElementById("#myButton").onclick = calculateNetProfit();
