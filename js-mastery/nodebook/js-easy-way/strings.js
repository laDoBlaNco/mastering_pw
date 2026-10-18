function strings() {
  // String creation: "", '', ``
  const str1 = "Hello";
  const str2 = "World";
  const str3 = `Hello, ${str2}`;
  console.log(`String using Double Quotes: ${str1}`);
  console.log(`String using Single Quotes: ${str2}`);
  console.log(`String using Template Literals: ${str3}`);

  // String length
  console.log(`String Length: ${str1.length}`);

  // String Concatenation - using either '+' or the concat() method
  const concatenated = str1 + " " + str2;
  const concatenatedWithMethod = str1.concat(" ", str2);
  console.log(`Concatenated with +: ${concatenated}`);
  console.log(`Concatenated with .concat(): ${concatenatedWithMethod}`);

  // Common String Methods: indexOf, slice, toUpperCase, toLowerCase
  const index = str1.indexOf("e");
  const sliced = str1.slice(1, 4);
  const upper = str1.toUpperCase();
  const lower = str1.toLowerCase();
  console.log(`Index of "e": ${index}`);
  console.log(`Slice from index 1 to 3, not including 4: ${sliced}`);
  console.log(`Uppercase: ${upper}`);
  console.log(`Lowercase: ${lower}`);

  // Template Literals - string interpolation, expressions, and multiline support
  const multiLine = `This is a
  multiline
  string.`;
  console.log(`Multiline String: \n${multiLine}`);

  // Sub-strings and Character Access
  // substring, substr, charAt
  const subString = str1.substring(1, 4); //? chars from 1 to 3, excluding 4
  const subStr = str1.substr(1, 3); //? extracts starting at index 1, 3 chars (deprecated)
  const char = str1.charAt(1); //? gets character at index 1
  console.log(`Substring (1,4): ${subString}`);
  console.log(`Substr (1,3): ${subStr}`);
  console.log(`Char at index 1: ${char}`);

  // String split and join
  const splitString = str1.split(""); //?
  const joinedString = splitString.join("-"); //?
  console.log(`Split String: ${splitString}`);
  console.log(`Joined String: ${joinedString}`);

  // String immutability - strings cannot be changed once created. Any method that appears to alter
  // a string will actually only return a new string
  const newStr = str1.replace("H", "Y"); //?
  console.log(`Original String: ${str1}`);
  console.log(`New String: ${newStr}`);
}

strings();
