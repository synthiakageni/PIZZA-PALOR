

function Total(size, crust, topping, delivery) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.delivery = delivery;
}
 
function validatePick() {
  let selectedCrust = parseFloat(document.getElementById("crust").value);
  let selectedToppings = parseFloat(document.getElementById("toppings").value);
  let selectedSize = parseFloat(document.getElementById("size").value);
  let quantity = document.getElementById("pizzaNumber").value;
  let selectedDelivery = parseFloat(document.getElementById("pick").value);

  const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

   let order = selectedCrust
  // let totalCost = cost * quantity;
alert('order')
  
  }



function validateDeliver() {
  let selectedCrust = parseFloat(document.getElementById("crust").value);
  //let selectedToppings = parseFloat(document.getElementsByTagName("toppings").value);
  //console.log("Bacon value:" +document.getElementById("Bacon").checked);
  var selectedToppings = 0;
  if(document.getElementById("Bacon").checked)
    selectedToppings += 50;
  if(document.getElementById("Sausage").checked)
    selectedToppings += 50;
  if(document.getElementById("Mushrooms").checked)
    selectedToppings += 50;

  let selectedSize = parseFloat(document.getElementById("size").value);
  let selectedDelivery = parseFloat(document.getElementById("deliver").value);
  let quantity = document.getElementById("pizzaNumber").value;

  console.log(selectedCrust);
  console.log(selectedToppings);
  console.log(selectedSize);
  console.log(selectedDelivery);
  console.log(quantity);
  location=prompt("enter location.")

  const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

  var cost = selectedSize+selectedCrust+selectedToppings+selectedDelivery
  let totalCost = cost * quantity;
  alert( 'Total cost is'+ totalCost)
 
}