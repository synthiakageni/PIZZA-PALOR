

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

 var cost = pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery
  let totalCost = cost * quantity;

  if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {  alert('')
 } 
 else {
    $(".summary").show();
  document.getElementById("pizzaQuantity").innerHTML = quantity;
    document.getElementById("pizzaSize").innerHTML = selectedSize;
   document.getElementById("pizzaCrust").innerHTML = selectedCrust;
     document.getElementById("pizzaTopping").innerHTML = selectedToppings;
     document.getElementById("totalValue").innerHTML = totalCost;

  }

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
  switch (selectedDelivery) {
    case 200:
      prompt("enter your location..");
      alert("Your order will be delivered to your location..at a delivery fee of 200")
      break;
  }
  let quantity = document.getElementById("pizzaNumber").value;

  console.log(selectedCrust);
  console.log(selectedToppings);
  console.log(selectedSize);
  console.log(selectedDelivery);
  console.log(quantity);
  // location=prompt("enter location.")
      // alert('your order will be delivered to your location')

  const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

  var cost = selectedSize+selectedCrust+selectedToppings+selectedDelivery
  let totalCost = cost * quantity;
  // alert( 'Total cost is'+ selectedSize); 

 
  
  $("#pizzaSize").html(selectedSize );
  $("#pizzaCrust").html(selectedCrust );
  $("#pizzaTopping").html(selectedToppings )
  $("#totals").html(totalCost);




 
}
function reply() {
  let name = document.getElementById("name").value;
  let output =  "Hello " + name + ", we have received your message,thankyou for reaching out to us.";
  alert(output);
}