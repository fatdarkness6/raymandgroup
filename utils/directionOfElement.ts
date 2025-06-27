export function directionOfElement(lan : string) {
    let direction
    if (lan === 'fa') {
      direction =  'rtl'
    } else {
      direction =  'ltr'
    }
    return direction
}