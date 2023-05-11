/**
 * this function return total pracie new of order
 * @param {array} products cartProduct array of object 
 * @returns {number} total price
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach(product => sum += product.price);
  return sum;
}