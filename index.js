// function takeANumber(line, customer) {
//     line.push(customer);
//     return `Welcome, ${customer}. You are number ${line.length} in line.`;
// }
let counter = 0;

function takeANumber(line) {
  counter++;
  line.push(counter);
  return `You are number ${counter}.`;
}


// function nowServing(line) {
//   if(!line.length) {
//     return `There is nobody waiting to be served!`;
//   }
  
//   return `Currently serving ${ line.shift()}.`;
// }

function nowServing(line) {
  if(!line.length) {
    return `The line is empty`;
  }
  
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if(!line.length) {
    return `The line is currently empty.`;
  }
  
  let result = `The line is currently: `;
  for(let i = 0; i < line.length - 1; i++) {
    result += `${i+1}. ${line[i]}, `;
  }
  
  return result + `${line.length}. ${line[line.length-1]}`;
}