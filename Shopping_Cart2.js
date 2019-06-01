// ******************SHOPPING CART FUNCTIONS**********************
var BDO_shoppingCart = {};
BDO_shoppingCart.cart = []; // the cart starts out as an empty array

// object to represent item(s) in the cart
BDO_shoppingCart.Item = function(name, price, count) {
	this.name = name
	this.price = price
	this.count = count
};

BDO_shoppingCart.addItemToCart = function(name, price, count) {
	for (var i in this.cart) { // loops through cart array
		if (this.cart[i].count === 1) { // checks for duplicate items
			this.saveCart();
			return;
		}

		// if (this.cart[i].name === name) { // checks for duplicate items
		// 	this.cart[i].count += count;  // adds count number for duplicates
		// 	this.saveCart();
		// 	return;
		// }

	}
	var item = new this.Item(name, price, count);  // adds a new Item to the cart array
	BDO_shoppingCart.cart.push(item);
	this.saveCart();
};

BDO_shoppingCart.setCountForItem = function(name, count) {
	for (var i in this.cart) {
		if (this.cart[i].name === name) {
			this.cart[i].count = count;
			break;
		}
	}
	this.saveCart();
};

BDO_shoppingCart.removeItemFromCart = function(name) { // removes one item by name
	for (var i in this.cart) { // loops through cart array
		if (this.cart[i].name === name) {
			this.cart[i].count --;
			if (this.cart[i].count === 0) { // loops through cart to see if count is 0
				this.cart.splice(i, 1); // if value is zero, remove item at position i
			}
			break;
		}
	}
	this.saveCart();
}

BDO_shoppingCart.removeItemCartAll = function(name) { // removes all items with same name
	for (var i in this.cart) {
		if (this.cart[i].name === name) {
			this.cart.splice(i, 1);  // removes items using splice
			break;
		}
	}
	this.saveCart();
}

BDO_shoppingCart.clearCart = function() {  // clears cart completely
	this.cart = [];
	this.saveCart();
}

BDO_shoppingCart.countCart = function() {  // returns total count
	var totalCount = 0;  // variable starts at zero
	for (var i in this.cart) {  // loops through the cart/items
		totalCount += this.cart[i].count; // take count of particular item and add it to totalCount
	}
	return totalCount;
}

BDO_shoppingCart.totalCart = function() {  // returns total cost
	var totalCost = 0;
	for (var i in this.cart) {
		totalCost += this.cart[i].price * this.cart[i].count; // multiply price by # of items
	}
	return totalCost.toFixed(2);
}

BDO_shoppingCart.listCart = function() {  // to help decouple the shopping cart code
	var cartCopy = [];
	for (var i in this.cart) {
		var item = this.cart[i];
		var itemCopy = {};
		for (var p in item) {  // loop through every property in item
			itemCopy[p] = item[p];  // and make it a property for the itemCopy
		}
		itemCopy.total = (item.price * item.count).toFixed(2);
		cartCopy.push(itemCopy); // add itemCopy to cartCopy
	}
	return cartCopy;
}

BDO_shoppingCart.saveCart = function() {
	localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
}

BDO_shoppingCart.loadCart = function() {
	this.cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
}

BDO_shoppingCart.myCartPanels = function() {
	var hideMarketing = document.getElementById("hiddenMarketing");
	var hideLogo = document.getElementById("hiddenLogo");
	var hideBusinessCard = document.getElementById("hiddenBusinessCard");
	var hideDefault = document.getElementById("hiddenDefault");
	for (var i in this.cart) {
		if (this.cart[i].name === "Marketing Package") {
			hideMarketing.style.display = "block";
			break;
		} else if (this.cart[i].name === "Logo Design") {
			hideLogo.style.display = "block";
			break;
		} else if (this.cart[i].name === "Business Cards") {
			hideBusinessCard.style.display = "block";
			break;
		}
		hideDefault.style.display = "block";
	}
}

BDO_shoppingCart.loadCart();
displayCart();
BDO_shoppingCart.myCartPanels();

console.log("Shopping Cart cart:" , BDO_shoppingCart.cart);