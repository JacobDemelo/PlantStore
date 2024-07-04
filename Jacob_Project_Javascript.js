/*
 * Project: Final Project 
 * Author: Jacob Demelo
 * Date Of Submission: 2022-04-22
*/

//#1 Create some constructors of objects
/*
 * Constructor: Store Item
 * Purpose: The purpose of this constructor is to create a storeItem
*/
function StoreItem(id, name, price, quantityOnHand, maxPerCustomer, category, costOfShipping, reviews, description, image){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantityOnHand = quantityOnHand;
    this.maxPerCustomer = maxPerCustomer;
    this.category = category;
    this.costOfShipping = costOfShipping;
    this.reviews = reviews;
    this.description = description;
    this.image = image;

}//end of StoreItem

/*
 * Constructor: CartItem
 * Purpose: The purpose of this constructor is to create a CartItem
*/
function CartItem(id, price, quantity, shipping){
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.shipping = shipping;

}//end of CartItem

/*
 * Constructor: ReviewItem
 * Purpose: The purpose of this constructor is to create a ReviewItem
*/
function ReviewItem(review, rating){
    this.review = review;
    this.rating = rating;

}//end of ReviewItem

//#2 create empty global arrays for store items and cart arrays
var storeItemArray = [];
var cartItemArray = [];

//custom global variable for currency
var currencySelectedString = " CAD";

//custom global array for avg rating
var averageRating = 2;

//#3 Creating a statement to load the page
window.onload = function() {

    //calling our page load
    pageLoad();

};//end of page load

/*
 * pageLoad()
 * Purpose: 
   - A) Display the current Date And time to the screen
   - B) Populate the storeItemsArray with 15 store items
   - C) call displayStoreItems Function 
   - D) call displayCartItems Function
 * Parameters: None
 * Returns: Objects and Date/Time
 */
function pageLoad(){

    //A) Display the current date and time to the screen
    //get the current date
    var currentTime = new Date(); 
    
    //display the date to the screen
    document.getElementById("date").innerHTML = currentTime;

    //B) Populate the storeItemsArray with 15 store items
    //populate the storeItemArray wil at least 15 objects
                                    //ID       Name                 Price   Qty Max  Type       Shipping      Review         Description       IMG URL
    storeItemArray.push(new StoreItem ("PID01", "Monstera",          29.99, 45, 3,   "Tropical", 2.00,  ["Item was amazing", "It was okay"],"Green Plant", "img/monserta.jpg"));
    storeItemArray.push(new StoreItem ("PID02", "Banana Shrub",      299.99, 15, 1,   "Rare",     20.00, ["Item was amazing"],"A nice Banana bush","img/BananaShrub.jpg"));
    storeItemArray.push(new StoreItem ("PID03", "Tulip",             4.49, 200, 10, "Bulb",     2.00,  ["Item was amazing"],"A tulip garden","img/Tulip.jpg"));
    storeItemArray.push(new StoreItem ("PID04", "Bird Of Paradise",  54.99, 50, 5,   "Tropical", 2.00,  ["Item was amazing"],"The plant from paradise","img/BirdOfParadise.jpg"));
    storeItemArray.push(new StoreItem ("PID05", "Lily",              5.99, 200, 10,  "Bulb",     2.00,  ["Item was amazing"],"The Lily is a very filling plant","img/Lily.jpg"));
    storeItemArray.push(new StoreItem ("PID06", "Orchid",            19.99, 10, 1,  "Indoor",   2.00,  ["Item was amazing"],"Orchid is needed in every garden","img/Orchid.jpg"));
    storeItemArray.push(new StoreItem ("PID07", "Philodendron",      9.99, 100, 20,  "Indoor",   2.00,  ["Item was amazing"],"A plant that needs no description","img/Philodendron.jpg"));
    storeItemArray.push(new StoreItem ("PID08", "Ghost Orchid",      129.99, 5, 1,   "Rare",     2.00,  ["Item was amazing"],"Looks like a ghost","img/GhostOrchid.jpg"));
    storeItemArray.push(new StoreItem ("PID09", "Areca Palm",        80.00, 50, 5,   "Tropical", 2.00,  ["Item was amazing"],"Not a palm tree but close","img/ArecaPalm.jpg"));
    storeItemArray.push(new StoreItem ("PID010", "The Chilli Plant", 29.99, 60, 2,   "Rare",     2.00,  ["Item was amazing"],"Imported straight from chili","img/TheChilliPlant.jpg"));
    storeItemArray.push(new StoreItem ("PID011", "Alocasia Polly",   12.00, 45, 3,   "Rare",     2.00,  ["Item was amazing"],"Polly plant","img/AlocasiaPolly.jpg"));
    storeItemArray.push(new StoreItem ("PID012", "Spider Plant",     9.99, 200, 5,   "Indoor",   2.00,  ["Item was amazing"],"Not spiders but looks like one","img/SpiderPlant.jpg"));
    storeItemArray.push(new StoreItem ("PID013", "Large Calathea",   60.00, 10, 1,   "Bulb",     2.00,  ["Item was amazing"],"A big plant","img/LargeCalathea.jpg"));
    storeItemArray.push(new StoreItem ("PID014", "Foliage Bowl",     30.99, 150, 10, "Indoor",   2.00,  ["Item was amazing"],"The perfect indoor table plant","img/FoliageBowl.jpg"));
    storeItemArray.push(new StoreItem ("PID015", "Elephant Ear",     23.99, 30, 2,   "Rare",     2.00,  ["Item was amazing"],"Not an elephant ear but its a cool plant","img/ElephantEar.jpg"));

    //C) call displayStoreItems function
    displayStoreItems();

    //D) call displayCartItems function
    displayCartItems();

}//end of page load

/*
 * displayStoreItems()
 * Purpose: 
   - A) display store items dynamically
   - B) display the currency selected
 * Parameters: None
 * Returns: Dynamic cards of products
 * Extra: Gets called onchange from html document when the user selects a category
 */
function displayStoreItems(){

    //get the selected category
    var selectedCategory = document.getElementById("displayFilter").value;

    //get the wrap div
    var wrapDiv = document.getElementById("wrap");

    //check if the selected category is all
    if(selectedCategory === "All"){

        //delete created div
        wrapDiv.innerHTML = "";

        //A) create for loop to create the amount of cards with the products
        for(var i = 0; i < storeItemArray.length; i++){

            //A) Creating the card div
            var cardDiv = document.createElement("div");
            var h2 = document.createElement("h2");
            var img = document.createElement("img");

            //declaring attributes for the card div
            cardDiv.className = "card";
            cardDiv.id = "card";

            //setting the h2 text to the item name
            h2.innerHTML = storeItemArray[i].name;

            //declaring attributes for our img and setting the src to the url in item
            img.alt = "Avatar";
            img.src = storeItemArray[i].image;

            //appending card- div to wrap
            wrapDiv.appendChild(cardDiv);

            //appending elements to the card div
            cardDiv.appendChild(h2);
            cardDiv.appendChild(img);

            //container div and labels in the container div
            var containerDiv = document.createElement("div");
            var label1 = document.createElement("label");
            var label2 = document.createElement("label");
            var label3 = document.createElement("label");
            var label4 = document.createElement("label");
            var itemDetailsButton = document.createElement("a");
            var h3 = document.createElement("h3");

            //delcaring attributes for container
            containerDiv.className = "container";
            containerDiv.id = "container";

            //appending the containerDiv to card-div
            cardDiv.appendChild(containerDiv);

            //declaring all the inner html with data from the items in store array
            label1.innerHTML = "Product Id: " + storeItemArray[i].id;
            label2.innerHTML = "Max Per Customer: " + storeItemArray[i].maxPerCustomer;
            label3.innerHTML = "Qty On Hand: " + storeItemArray[i].quantityOnHand;
            label4.innerHTML = "Category: " + storeItemArray[i].category;
            h3.innerHTML = "$" + currencySelection(storeItemArray[i].price) + currencySelectedString;//B) call currency

            //item details button attributes
            itemDetailsButton.className = "button-details";
            itemDetailsButton.id = [i];
            var ids = [i];
            itemDetailsButton.href = "javascript: displayItemDetails("+ids+");";
            itemDetailsButton.type = "button";
            itemDetailsButton.innerHTML = "Item Details";

            //appending labels to container
            containerDiv.appendChild(label1);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);
            containerDiv.appendChild(label2);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);
            containerDiv.appendChild(label3);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);
            containerDiv.appendChild(label4);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);
            containerDiv.appendChild(itemDetailsButton);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);
            containerDiv.appendChild(h3);
            linebreak = document.createElement("br");//need to declare line break
            containerDiv.appendChild(linebreak);

            //button div with element
            var buttonDiv = document.createElement("div");
            var a = document.createElement("a");

            //declaring attributes for button div
            buttonDiv.className = "button-div";
            buttonDiv.id = "button-div";

            //declaring attributes for a element
            a.className = "button";
            a.id = [i];
            ids = [i];
            a.href = "javascript:addToCart("+ids+");";
            a.type = "button";
            a.innerHTML = "Add To Cart";

            //appending the buttonDiv to the containerDiv
            containerDiv.appendChild(buttonDiv);

            //appending the a element to buttonDiv
            buttonDiv.appendChild(a);

        }//end of for

    //if the selectedCategory is in an item in the array
    }else{

        //clear the wrap div
        wrapDiv.innerHTML = "";

        //create for loop to create the amount of cards with the products
        for(var i = 0; i < storeItemArray.length; i++){

            if(storeItemArray[i].category === selectedCategory){

                //A) Creating the card div
                var cardDiv = document.createElement("div");
                var h2 = document.createElement("h2");
                var img = document.createElement("img");

                //declaring attributes for the card div
                cardDiv.className = "card";
                cardDiv.id = "card";

                //setting the h2 text to the item name
                h2.innerHTML = storeItemArray[i].name;

                //declaring attributes for our img and setting the src to the url in item
                img.alt = "Avatar";
                img.src = storeItemArray[i].image;

                //appending card- div to wrap
                wrapDiv.appendChild(cardDiv);

                //appending elements to the card div
                cardDiv.appendChild(h2);
                cardDiv.appendChild(img);

                //container div and labels in the container div
                var containerDiv = document.createElement("div");
                var label1 = document.createElement("label");
                var label2 = document.createElement("label");
                var label3 = document.createElement("label");
                var label4 = document.createElement("label");
                var itemDetailsButton = document.createElement("a");
                var h3 = document.createElement("h3");

                //delcaring attributes for container
                containerDiv.className = "container";
                containerDiv.id = "container";

                //appending the containerDiv to card-div
                cardDiv.appendChild(containerDiv);

                //declaring all the inner html with data from the items in store array
                label1.innerHTML = "Product Id: " + storeItemArray[i].id;
                label2.innerHTML = "Max Per Customer: " + storeItemArray[i].maxPerCustomer;
                label3.innerHTML = "Qty On Hand: " + storeItemArray[i].quantityOnHand;
                label4.innerHTML = "Category: " + storeItemArray[i].category;
                h3.innerHTML = "$" + currencySelection(storeItemArray[i].price) + currencySelectedString;//B) call currency

                //item details button attributes
                itemDetailsButton.className = "button-details";
                itemDetailsButton.id = [i];
                var ids = [i];
                itemDetailsButton.href = "javascript: displayItemDetails("+ids+");";
                itemDetailsButton.type = "button";
                itemDetailsButton.innerHTML = "Item Details";

                //appending labels to container
                containerDiv.appendChild(label1);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);
                containerDiv.appendChild(label2);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);
                containerDiv.appendChild(label3);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);
                containerDiv.appendChild(label4);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);
                containerDiv.appendChild(itemDetailsButton);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);
                containerDiv.appendChild(h3);
                linebreak = document.createElement("br");//need to declare line break
                containerDiv.appendChild(linebreak);

                //button div with element
                var buttonDiv = document.createElement("div");
                var a = document.createElement("a");

                //declaring attributes for button div
                buttonDiv.className = "button-div";
                buttonDiv.id = "button-div";

                //declaring attributes for a element
                a.className = "button";
                a.id = [i];
                ids = [i];
                a.href = "javascript:addToCart("+ids+");";
                a.type = "button";
                a.innerHTML = "Add To Cart";

                //appending the buttonDiv to the containerDiv
                containerDiv.appendChild(buttonDiv);

                //appending the a element to buttonDiv
                buttonDiv.appendChild(a);

            }//end of if

        }//end of for

    }//end of else
    
}//end of displayStoreItems

/*
 * displayCartItems()
 * Purpose: 
   - A) Dynamically display cartItems
   - B) Get Called When user Adds or Removes from cart(In add to cart and remove from cart functions)
   - C) If there is nothing in the cart report nothing is in cart
 * Parameters: None
 * Returns: Products in cart
 */
function displayCartItems(){

    //get the divs that we have set up to get the information
    var cart = document.getElementById("cart-value");
    var cartTitle = document.getElementById("popup");

    //create the cart output div
    var outputDiv = document.createElement("div");
    outputDiv.id = "cartOutput";
    cartTitle.appendChild(outputDiv);
   
    //C)------------------ check if there are items in the array
    if(cartItemArray.length === 0){

        //clear current inner html
        cart.innerHTML = "";

        //declare the innerhtml to no items in cart
        cart.innerHTML = "No Items In Cart";
        
    //else
    }else{

        //A)-------------------------------------------
        //get the cart output div
        var cartOutputDiv = document.getElementById("cartOutput");

        //clear the cart output div
        cartOutputDiv.innerHTML = "";

        //get the div
        var shoppingDiv = document.getElementById("shopping");

        //clear the shopping div
        shoppingDiv.innerHTML = "";

        //create a table to add to the shopping div
        var cartTable = document.createElement("table");
        cartTable.id = "cart-table";

        //create tr to have product titles in the table
        var tr = document.createElement("tr");

        //create the title elements
        var thOne = document.createElement("th");
        var thTwo = document.createElement("th");
        var thThree = document.createElement("th");
        var thFour = document.createElement("th");
        var thFive = document.createElement("th");

        //add the text to the th items
        thOne.innerHTML = "Product ID";
        thTwo.innerHTML = "Price";
        thThree.innerHTML = "Quantity";
        thFour.innerHTML = "Subtotal";
        thFive.innerHTML = "Remove Item";

        //append
        tr.appendChild(thOne);
        tr.appendChild(thTwo);
        tr.appendChild(thThree);
        tr.appendChild(thFour);
        tr.appendChild(thFive);
        cartTable.appendChild(tr);

        //create and append the products from cart array
        for(var i = 0; i < cartItemArray.length; i++){

            //createing the tr element
            var productTr = document.createElement("tr");

            //create the product ID
            var productId = document.createElement("td");
            productId.innerHTML = cartItemArray[i].id;

            //create the price
            var productPrice = document.createElement("td");
            productPrice.innerHTML = "$" + currencySelection(cartItemArray[i].price) + currencySelectedString;

            //create the qty
            var productQty = document.createElement("td");
            productQty.innerHTML = cartItemArray[i].quantity;

            //create the subtotal
            var productSubtotal = document.createElement("td");
            productSubtotal.innerHTML = cartItemArray[i].quantity * currencySelection(cartItemArray[i].price) + currencySelectedString;

            //create the remove button
            var productRemove = document.createElement("td");
            var productA = document.createElement("a");

            //a attributes
            productA.id = "remove-button";
            var ids = [i];
            productA.href = "javascript: removeFromCart("+ ids +")";
            productA.class = "button";
            productA.innerHTML = "Remove";

            //append to productRemove
            productRemove.appendChild(productA);

            //append to pruductTr
            productTr.appendChild(productId);
            productTr.appendChild(productPrice);
            productTr.appendChild(productQty);
            productTr.appendChild(productSubtotal);
            productTr.appendChild(productRemove);

            //append product to cart table
            cartTable.appendChild(productTr);

        }//end of for

        //append the table to the popupDiv
        shoppingDiv.appendChild(cartTable);

        //clear current inner html
        cart.innerHTML = "";

        //declare the innerhtml to no items in cart
        cart.innerHTML = "You Have " + cartItemArray.length + " Items in cart";

    }//end of if

}//end of display CartItems()

/*
 * createCartTotals()
 * Purpose:
   - A) Output the subtotal of the cart
   - B) Output the estimated shipping
   - C) Output the subtotal
   - D) Output the tax
   - E) Output the total
 * Parameters: None
 * Returns: Calculated cart value
 */
   function createCartTotals(){

    //create variables to calculate the cart total
    const TAX = 0.13;
    var itemSubtotal = 0;
    var estimatedShipping = 0;
    var subtotal = 0;
    var estimatedTax = 0;
    var orderTotal = 0;

    //create for loop to calculate all the items
    for(var i = 0; i < cartItemArray.length; i++){

        //A)Output subtotal
        itemSubtotal = itemSubtotal + currencySelection(cartItemArray[i].price) * cartItemArray[i].quantity;
        
        //B)Output estimated shipping //shipping is per quantity
        estimatedShipping = cartItemArray[i].shipping * cartItemArray[i].quantity;
        
        //C)Output the subtotal
        subtotal = subtotal + (itemSubtotal + estimatedShipping);
        
        //D)Output the estimated tax
        estimatedTax = estimatedTax + (subtotal * TAX);
        
        //C)Output the order total
        orderTotal = orderTotal + (subtotal + estimatedTax);
    
    }//end of for

    //creating a div element
    var newDiv = document.createElement("div");
   
    //getting the current div
    var theDIV = document.getElementById("cartCheckout");
    theDIV.innerHTML = "";
    theDIV.appendChild(newDiv);

    //outputing all of the totals to the cart
    newDiv.innerHTML = "Items Subtotal: $" + itemSubtotal.toFixed(2) + currencySelectedString + "<br>" 
                     + "Estimated Shipping: $" + estimatedShipping.toFixed(2) + "<br>" 
                     + "<br>" 
                     + "Subtotal: $" + subtotal.toFixed(2) + "<br>"
                     + "Estimated Tax: $" + estimatedTax.toFixed(2) + "<br>"
                     + "Order Total: $" + orderTotal.toFixed(2);

}//end of createCartTotals()

/*
 * Function: currencySelection()
 * Purpose: the purpose of this function is to convert currency
 * Parameters: Accepts a price value
 * Returns: USD Or CAD price change 
 */
function currencySelection(price){

    //get the currencySelected Value
    var currencySelected = document.getElementById("currencySelector").value;

    //get the image of the currency selected
    var currencyImage = document.getElementById("currencyFlag");
    
    //check if currency selected is CAD
    if(currencySelected === "CAD"){

        //if it is CAD change the picture to CAD
        currencyImage.src = "img/CAD.png";

        //set the currency string to CAD
        currencySelectedString = " CAD";

        //return the price in CAD
        return (price).toFixed(2);

    //check if the currency selected is USD
    }else if(currencySelected === "USD"){

        //change the image to USD
        currencyImage.src = "img/USD.png";

        //set the currency string to USD
        currencySelectedString = " USD";

        //currency will be USD at current exchange rate of 1 cad = 80 cents american
        return (price * 0.80).toFixed(2);

    }//end of if statement

}//end of currencySelection()

/*
 * toggle()
 * Purpose: display the popup div in a card form
 * Parameters: none
 * Returns: card open or closed
 */
function toggle() {

    //call create carte totals
    createCartTotals();

    //blur the wrap
    var blur=document.getElementById('wrap');

    //set active
    blur.classList.toggle('active');

    //get the pop up div
    var popup = document.getElementById('popup');

    //set active
    popup.classList.toggle('active');

}//end of toggle

/*
 * toggleTwo()
 * Purpose: call the popup add div in card form
 * Parameters: none
 * Returns: card
 */
function toggleTwo(){

    //blur document
    var blur=document.getElementById('wrap');

    //set active
    blur.classList.toggle('active');

    //get the popup div
    var popup = document.getElementById('popup-add');

    //set active
    popup.classList.toggle('active');

    //call displayCartItems()
    displayCartItems();

    //call displayStoreItems
    displayStoreItems();
    
}//end of toggleTwo

/*
 * toggleThree()
 * Purpose: call the popup add div in card form
 * Parameters: none
 * Returns: card
 */
function toggleThree(){

    //blur document
    var blur=document.getElementById('wrap');

    //set active
    blur.classList.toggle('active');

    //get the popup div
    var popup = document.getElementById('popup-item');

    //set active
    popup.classList.toggle('active');

}//end of toggleThree

/*
 * toggleFour()
 * Purpose: call the popup add div in card form
 * Parameters: none
 * Returns: card
 */
function toggleFour(){

    //blur document
    var blur=document.getElementById('wrap');

    //set active
    blur.classList.toggle('active');

    //get the popup div
    var popup = document.getElementById('popup-review');

    //set active
    popup.classList.toggle('active');

}//end of toggleFour

/*
 * addToCart()
 * Purpose:
   - A) add button next to item
   - B) get the quantities before adding to the cart//quantity function
   - C) call displayCartItems()
   - D) call calculateCartTotals() //no need to call cart totals as it is called in quantity function that will add the product to the cart
 * 
 */
function addToCart(item){

    //call toggleTwo to display the pop up
    toggleTwo();

    //get the id when the user presses a certain button
    var itemId = item;

    //get the popup-add div
    var popupAddDiv = document.getElementById("popup-add");
    popupAddDiv.innerHTML = "";

    //create h1 element
    var h1 = document.createElement("h1");
    var a = document.createElement("a");

    //attributes for a element
    a.id="exit";
    a.href = "javascript:toggleTwo();";
    a.innerHTML = "X";

    //attributes for H1
    h1.innerHTML = "Add Item To Cart";

    //add h1 and a to popup
    popupAddDiv.appendChild(h1);
    popupAddDiv.appendChild(a);

    //get the add Item div
     var addItemDiv = document.createElement("div");

     //clear the shopping div
     addItemDiv.innerHTML = "";

     //create a table to add to the shopping div
     var cartTable = document.createElement("table");
     cartTable.id = "cart-table";

     //create tr to have product titles in the table
     var tr = document.createElement("tr");

     //create the title elements
     var thOne = document.createElement("th");
     var thTwo = document.createElement("th");
   
     //add the text to the th items
     thOne.innerHTML = "Product ID";
     thTwo.innerHTML = "Price";

     //append
     tr.appendChild(thOne);
     tr.appendChild(thTwo);
     cartTable.appendChild(tr);
     addItemDiv.appendChild(cartTable);
     popupAddDiv.appendChild(addItemDiv);

    //createing the tr element
    var productTr = document.createElement("tr");

    //create the product ID
    var productId = document.createElement("td");
    productId.innerHTML = storeItemArray[itemId].id;

    //create the price
    var productPrice = document.createElement("td");
    productPrice.innerHTML = "$" + currencySelection(storeItemArray[itemId].price) + currencySelectedString;

    //append to pruductTr
    productTr.appendChild(productId);
    productTr.appendChild(productPrice);
    cartTable.appendChild(productTr);

    //append the table to the popupDiv
    addItemDiv.appendChild(cartTable);

    //create div
    var quantityDiv = document.createElement("div");
    quantityDiv.id = "quantityDiv";

    //add quantity div to add item div
    addItemDiv.appendChild(quantityDiv);
    //create select quantity box
    var qtyLabel = document.createElement("label");
    qtyLabel.for = "quantity";
    qtyLabel.innerHTML = "Please Select Quantity";

    quantityDiv.appendChild(qtyLabel);

    //get the min and max a user can have
    var minumumQty = 1;
    var maximumQty = storeItemArray[itemId].maxPerCustomer;

    //create the input textfield for quantities
    var qtyText = document.createElement("input");

    //attributes for textfields
    qtyText.type = "number";
    qtyText.id = "quantity";
    qtyText.name = "quantity";
    qtyText.min = minumumQty;
    qtyText.max = maximumQty;

    //add textfield to div
    quantityDiv.appendChild(qtyText);

    //A)----------------------------------Add To Cart Button
    var addToCartButton = document.createElement("a");
    addToCartButton.id = "add-button";
    addToCartButton.href = "javascript: quantityAddRemove("+itemId+")";
    addToCartButton.class = "button";
    addToCartButton.enabled = "false";
    addToCartButton.innerHTML = "Add Item";

    //adding the cart button to the div
    quantityDiv.appendChild(addToCartButton);

    //C) -------------------------------call display cart items
    displayCartItems();

}//end of addToCart()

/*
 * quantityAddRemove
 * Purpose: validate quantities before adding item to the cart
 * Parameters: itemId
 * Returns: addedItem to cart
 */
function quantityAddRemove(itemId){

    //Add boolean value to make sure we data check
    var addItemToCart = false;
    var qtyIsOkay = false;
    var inCart = false;

    //get the quantity the user wants
    var userQty = document.getElementById("quantity").value;
    
    //IF STATEMENT DATA VALIDATION!
    //if the user quantity is greater than the maximum per customer
    if(userQty > storeItemArray[itemId].maxPerCustomer){

        //alert you are over the max
        alert("You are over the maximum number allowed per customer");

        //reset the quantity textBox
        document.getElementById("quantity").value = "";

    //else if user quantity is greater than quantity on hand
    }else if(userQty >= storeItemArray[itemId].quantityOnHand){

        //alert we do not have enough
        alert("You have reached the maximum number of qauntities for this product");

        //clear the quantity textbox
        document.getElementById("quantity").value = "";

    //else of quantity on hand is 0
    }else if(storeItemArray[itemId].quantityOnHand === 0){

        //alert out of stock
        alert("We are out of stock");

    //else if user quantity is zero
    }else if(userQty === "" || userQty === "0"){

        //alert
        alert("quantity cannot be empty!");

    //else
    }else{

        //set qtyIsOkay boolean to true
        qtyIsOkay = true;

    }//end of if

    //if qtyIsOkay is true
    if(qtyIsOkay === true){

        //set addItemToCart boolean to true
        addItemToCart = true;

    }//end of if

    //FOR LOOP DATA VALIDATION!
    //for loop to see if an item is already in the cart
    for(var i = 0; i < cartItemArray.length; i++){

        //if item is already in the cart
        if(cartItemArray[i].id === storeItemArray[itemId].id){

            //set inCart boolean to true
            inCart = true;

        }//end of if

    }//end of for

    //if statement
    //if addItem is true
    if(addItemToCart === true){

        //if incart is true
        if(inCart === true){

            //match the id
            for(var i = 0; i < cartItemArray.length; i++){
                var id = cartItemArray[i].id;
                var cartQty = cartItemArray[i].quantity;
            }
            
            //match the quantity
            for(var i = 0; i < storeItemArray.length; i++){
                if(id === storeItemArray[i].id){
                    var max = storeItemArray[i].maxPerCustomer;
                }
            }
            

            //add the user quantity amount to the current quantity amount
            cartQty = +cartQty + +userQty;

            if(cartQty > max){
                alert("you Have reched the maximum amount of quatities for this item");
                document.getElementById("quantity").value = "";
               
                //call toggleTwo
                toggleTwo();
            
            //else all is good
            }else if(storeItemArray[itemId].maxPerCustomer === cartItemArray[itemId].quantity){

                alert("Maximum has been reached");

            //else
            }else{

                //set the quantity to the cart qty
                cartItemArray[itemId].quantity = cartQty;

                //minus the quantity on hand
                storeItemArray[itemId].quantityOnHand = storeItemArray[itemId].quantityOnHand - userQty;

                //create an alert that the item has been added
                alert("Item Has Been Added to cart");

                //call toggleTwo
                toggleTwo();

            }//end of if

        //else in cart is false
        }else{

            //create a new item to add to the cart array
            var item = storeItemArray[itemId].id
            var itemPrice = storeItemArray[itemId].price;
            var shipping = storeItemArray[itemId].costOfShipping;

            //add the new item to cartItemArray
            cartItemArray.push(new CartItem(item, itemPrice, userQty, shipping));

            //minus the quantity on hand
            storeItemArray[itemId].quantityOnHand = storeItemArray[itemId].quantityOnHand - userQty;
        
            //create an alert it has been added to cart
            alert("Item Has Been Added to cart");

            //call toggleTwo()
            toggleTwo();

        }//end of if

    }//end of if

}//end of quantityAddRemove()

/*
 * removeFromCart()
 * Purpose:
   - A) Remove qty from cart
   - B) When qty hits zero delete Item
   - C) call display cartItems
   - D) call cartPrice--- no need to do this as display cart items calls it
 * Parameters: itemId
 * Returns: removed qty value
 */
function removeFromCart(itemId){

    //minus the quantity from the selected it
    var remove = cartItemArray[itemId].quantity = cartItemArray[itemId].quantity - 1;

    //add to the quantity on hand after the user has minused qty
    //check to see where the id is equal to the store item id to make sure we add the right value
    for(var i = 0; i < storeItemArray.length; i++){

        //if cart id equals store id
        if(cartItemArray[itemId].id === storeItemArray[i].id){

            //add one to the quantity on hand
            storeItemArray[i].quantityOnHand = storeItemArray[i].quantityOnHand + 1;

        }//end of if

    }//end of for

    //call display cartItems
    displayCartItems();  

    //call displayStoreItems
    displayStoreItems();

    //call create cart totals
    createCartTotals();
    
    //if qty level hits zero
    if(remove === 0){

        //delete the item from the array
        cartItemArray.splice(itemId, 1);

        //clear the shopping innerHTML
        document.getElementById("shopping").innerHTML = "";

        //call display cartItems
        displayCartItems();

        //call displayStoreItems
        displayStoreItems();

    }//end of if

}//end of removeFromCart

/*
 * itemDetails()
 * Purpose: display all the details of the selected item
 * Parameters: itemId
 * Returns: pop-up
 */
function displayItemDetails(itemId){

    //call toggleThree
    toggleThree();

    //get the popup item div
    var popupItemDiv = document.getElementById("item-details");

    //clear div
    popupItemDiv.innerHTML = "";

    //create all of the labels
    var idLabel = document.createElement("label");
    var nameLabel = document.createElement("label");
    var priceLabel = document.createElement("label");
    var qtyLabel = document.createElement("label");
    var maxLabel = document.createElement("label");
    var typeLabel = document.createElement("label");
    var shippingLabel = document.createElement("label");
    var descriptionLabel = document.createElement("label");
    var reviewLabel = document.createElement("label");

    //add all the inner html to the labels
    idLabel.innerHTML = "Id: " + storeItemArray[itemId].id;
    nameLabel.innerHTML = "Name: " + storeItemArray[itemId].name;
    priceLabel.innerHTML = "Price: $" + currencySelection(storeItemArray[itemId].price) + currencySelectedString;
    qtyLabel.innerHTML = "Quantity on Hand: " + storeItemArray[itemId].quantityOnHand;
    maxLabel.innerHTML = "Max Per Person: " + storeItemArray[itemId].maxPerCustomer;
    typeLabel.innerHTML = "Type: " + storeItemArray[itemId].category;
    shippingLabel.innerHTML = "Cost Of Shipping: $" + storeItemArray[itemId].costOfShipping.toFixed(2);
    descriptionLabel.innerHTML = "Description: " + storeItemArray[itemId].description;
    reviewLabel.innerHTML = "Reviews:";

    //add all the elemnts to the screen with line breaks
    popupItemDiv.appendChild(idLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(nameLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(priceLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(qtyLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(maxLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(typeLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(shippingLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(descriptionLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);
    popupItemDiv.appendChild(reviewLabel);
    linebreak = document.createElement("br");//need to declare line break
    popupItemDiv.appendChild(linebreak);

    //create a counter variable to get the review number
    var count = 1;

    //create for loop to get all the reviews
    for(var i = 0; i < storeItemArray[itemId].reviews.length; i++){

        //get the review
        var review = document.createElement("label");
        review.innerHTML = "Review " + count + ": " + storeItemArray[itemId].reviews[i];

        //add all the elements needed
        popupItemDiv.appendChild(review);
        linebreak = document.createElement("br");//need to declare line break
        popupItemDiv.appendChild(linebreak);
        count = count + 1;

    }

    //add the average label to the screen
    var avgLabel = document.createElement("label");
    avgLabel.innerHTML = "average rating: " + averageRating;
    popupItemDiv.appendChild(avgLabel);

}//end of displayItemDetails()

/*
 * reviewItem()
 * Purpose: let the user review an item
 * Parameters: none
 * Returns: Arrays of ratings
 */
function reviewItem(){

    //get the textfields data
    var productTb = document.getElementById("productId").value;
    var review = document.getElementById("reviewtb").value;
    var rating = document.getElementById("ratingtb").value;

    //save index of id found
    var indexFound = 0;

    //data validation
    var exists = false;

    //data validation
    for(var i = 0; i < storeItemArray.length; i++){

        //if store item has an id the user has inputed
        if(storeItemArray[i].id === productTb){

            //save the index found
            indexFound = [i];

            //set exists to true
            exists = true;

            //break;
            break;

        }//end of if

    }//end of for

    //if exists = false
    if(exists === false){

        //clear the textField
        document.getElementById("productId").value = "";

        //alert
        alert("There is no product with this id");

    }//end of if

    //make sure the fields are not null
    if(productTb === "" || review === "" || rating === ""){

        //create an alert
        alert("One of the textfields are empty");


    //check if rating is higher than 5 or below zero
    }else if(rating > 5){

        //alert
        alert("rating cannot be bigger than five")

    //else if rating is below zero
    }else if(rating < 0){

        //alert
        alert("rating cannot be below zero");

    //everything is good append the information 
    }else{

        //alert
        alert("Review has been submitted");

        //call toggle four
        toggleFour();

        //append the information to create a review
        storeItemArray[indexFound].reviews.push(review);
        averageRating = rating;
    
    }//end of else
  
}//end of reviewItem()
