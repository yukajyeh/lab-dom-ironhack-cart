// ITERATION 1

function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  console.log(price)
  console.log(quantity)
  let subTotalPrice = price * quantity
  //console.log(subTotalPrice)
  let updateSubTotal = product.getElementsByClassName('subtotal')[0];
  updateSubTotal.innerHTML = subTotalPrice;
  return updateSubTotal;
}

/* function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2
  function calculateAll(){
    const products = document.getElementsByClassName('product')
    const productsArr = [...products];
    productsArr.forEach((element) => {
      updateSubtotal(element)
    })
  }
  console.log(calculateAll())
  
  

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})