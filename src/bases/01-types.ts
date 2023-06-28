export let name: string = 'Ricardo';
export const age: number = 35;
export const isValid: boolean = true;

name = 'Melissa';
// name = 124;
// name = true;

export const templateString = `This is a multiline
  string
  can have
  " doubles
  ' simple
  use values ${name}
  expressions ${1 + 1}
  numbers: ${age}
  booleans: ${isValid}
`;

console.log(templateString);
