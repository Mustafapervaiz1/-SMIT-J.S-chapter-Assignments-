//1 Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 25
alert(age)


// 2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visiters = alert("you have visit 14 times ")

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

let birth = "My  birth year is 1998 \n "
document.write(birth)

/*4 Page 2 of 3
4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

var visitorName = prompt("what is your name")
var visitorProduct = prompt("which product you want to buy")
var productquantity = prompt(` how many ${visitorProduct} you want to buy`)

 document.write(`${visitorName} ordered ${productquantity} ${visitorProduct} on Saylani Clothing store”`)