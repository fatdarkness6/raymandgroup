export function detectEvenNumber(number: number): boolean {
  let value 
  if(number % 2 === 0) {
    value = true
  } else {
    value = false
  }
  return value 
}