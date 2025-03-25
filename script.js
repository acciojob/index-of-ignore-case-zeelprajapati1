function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase to ensure case insensitivity
  let lowerStr = s1.toLowerCase();
  let lowerSubStr = s2.toLowerCase();
  
  // Use indexOf to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
