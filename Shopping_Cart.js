// *************************jQuery Code**************************************
$(".add-to-cart").click(function(event){
	event.preventDefault();  // links won't perform their normal functions
	var name = $(this).attr("data-name");  // "this" represents just the link that you click on
	var price = Number($(this).attr("data-price")); // converts value for price to a number

	BDO_shoppingCart.addItemToCart(name, price, 1);
	displayCart();
});

$("#clear-cart").click(function(event){
	BDO_shoppingCart.clearCart();
	displayCart();
});

function displayCart() {
	var cartArray = BDO_shoppingCart.listCart(); // get array from listCart
	var output = ""; //  starts as an empty string
	var itemCount = "";
	for (var i in cartArray) {  // loops through cart
		var taxed = (cartArray[i].price * .0685).toFixed(2);
		var taxedTotal = (parseFloat(cartArray[i].total) + parseFloat(taxed)).toFixed(2);
		output +=
			"<div class='productName'>"+cartArray[i].name+"</div>"
			+"<div class='productQuantity'>"+"Qty: "+cartArray[i].count+"</div>"
			+"<div class='productPrice'>"+"Price: "+cartArray[i].price+"</div>"
			+"<div class='productTax'>"+"Tax: "+taxed+"</div>"
			+"<div>"+"<hr class='priceDivider'>"+"</div>"
			+"<div class='productTotal'>"+"Total: "+taxedTotal+"</div>"
			+"</div>";
	}

	$("#show-cart").html(output);  // overwrite show-cart div with output text
	$("#count-cart").html(BDO_shoppingCart.countCart()); //returns number of items in cart
	$("#total-cart").html(BDO_shoppingCart.totalCart());  //overwrite total-cart id with return value
}

$("#show-cart").on("click", ".delete-item", function(event){  // event listens for show-cart advents
	var name = $(this).attr("data-name"); // "this" means the exact item that is clicked on
	BDO_shoppingCart.removeItemCartAll(name);
	displayCart();
	});  //defers the search for .delete-item until one actually appears

$("#show-cart").on("click", ".plus-item", function(event){  // event listens for show-cart advents
	var name = $(this).attr("data-name"); // "this" means the exact item that is clicked on
	BDO_shoppingCart.addItemToCart(name, 0, 1);
	displayCart();
	});  //defers the search for .delete-item until one actually appears

$("#show-cart").on("click", ".subtract-item", function(event){  // event listens for show-cart advents
	var name = $(this).attr("data-name"); // "this" means the exact item that is clicked on
	BDO_shoppingCart.removeItemFromCart(name);
	displayCart();
	});  //defers the search for .delete-item until one actually appears

$("#show-cart").on("change", ".item-count", function(event){  // event listens for show-cart advents
	var name = $(this).attr("data-name"); // "this" means the exact item that is clicked on
	var count = Number($(this).val());
	BDO_shoppingCart.setCountForItem(name, count);
	displayCart();
	});  //defers the search for .delete-item until one actually appears