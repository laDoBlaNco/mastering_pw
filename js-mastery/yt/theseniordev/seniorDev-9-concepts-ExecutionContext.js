/**
 * theSeniorDev -YouTube channel - 9 JavaScript Concepts That Got Me to Senior
 * 
 * 5. When the functions on are the calls stack each function needs an execution context (stack frome) to execute the function
 *     This context includes: 'this', function code, arg values, var mapping (scope  chain) or mem addresses in heap memory
 *      Everytime a function is pushed to the call stack a new execution context is created based on that function
 *       
 *      In example below for example in the 'calculateNetProfit' function we will have in our execution context:
 *          Global Context - global vars injected when we create the tab
 *          local Context - all the variables in the scope of this function, including the other function(s) in the scope
 *      Scope chain: In JS everything in {} is scope, so the chain is, from inner->outer whatever is accessible from
 *          innermost scope to global scope at a specific point in the code. For example from a nested for-loop to the else side of a parent If-else to
 *          a parent function to another parent function to the global scope. All of the variables in that chain of scopes. A
 *          sibling scope (maybe the other side of that If-else Statement, wouldn't be in that chain)
 *      SEEING AND RECOGNIZING SCOPE IS A SUPER-POWER TO DEVELOP. ITS LIKE NEO SEEING THE MATRIX IF YOU CAN GLANCE AT CODE
 *      AND SEE THE DIFFERENT SCOPES. ART OF THE MASTERS!
 * 
 * Things takes us right into the concept topic closures
 */

const taxRateVAT = 19;
const taxRateCorporate = 19;

function calculateNetSales(salesAmount){
    const netSales = salesAmount * (100 - taxRateVAT);

    return netSales;
}

function calculateNetProfit(salesAmount){
    const salesAfterVAT = calculateNetSales(salesAmount);
    const netProfit = salesAfterVAT * (100 - taxRateCorporate);

    return netProfit;
}

console.log(calculateNetProfit(500));

// the formula ain't right, but the concepts still hold, so I'm not going to worry about fixing
// his math