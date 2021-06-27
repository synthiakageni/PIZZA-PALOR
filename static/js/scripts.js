//BUSINESS LOGIC

//A function constructor
function Total(size, crust, topping, delivery) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.delivery = delivery;
}

//A function that executes when customers selects pick option
function validatePick() {
  let selectedCrust = parseFloat(document.getElementById("crust").value);
  let selectedToppings = parseFloat(document.getElementById("toppings").value);
  let selectedSize = parseFloat(document.getElementById("size").value);
  let quantity = document.getElementById("pizzaNumber").value;
  let selectedDelivery = parseFloat(document.getElementById("pick").value);

  const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

  var cost = pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery
  let totalCost = cost * quantity;

  if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
    alert('')
  } else {
      $(".summary").show();
      document.getElementById("pizzaQuantity").innerHTML = quantity;
      document.getElementById("pizzaSize").innerHTML = selectedSize;
      document.getElementById("pizzaCrust").innerHTML = selectedCrust;
      document.getElementById("pizzaTopping").innerHTML = selectedToppings;
      document.getElementById("totalValue").innerHTML = totalCost;

  }

}

//A function that executes when customers selects delivery option
function validateDeliver() {
  let selectedCrust = parseFloat(document.getElementById("crust").value);
  let selectedToppings = parseFloat(document.getElementById("toppings").value);
  let selectedSize = parseFloat(document.getElementById("size").value);
  let selectedDelivery = parseFloat(document.getElementById("deliver").value);
  let quantity = document.getElementById("pizzaNumber").value;

  const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

  var cost = deliver.size + deliver.crust + deliver.topping + deliver.delivery
  let totalCost = cost * quantity;
  if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
      $(".summary").show()
  } else {
      return false;
  }
}




//USER INTERFACE LOGIC


  //The code below executes customers inputs for those who are coming the pick their pizza
  $("#pick").on('click', function () {

      if (validatePick() != NaN) {
          validatePick();
      } else {

          $(".summary").show();
      }
  });

  //The code below executes customers inputs for those who need delivery their pizza

  $("#deliver").on('click', function () {

      if (validateDeliver() != NaN || validateDeliver() != null) {
          prompt("Provide your location")
          validateDeliver();
      } else {
          $(".summary").show();
      }
  });