// Part I
var FoodItem = function(name, calories, vegan, glutenFree){
    this.name = name
    this.calories = calories
    this.vegan = vegan
    this.glutenFree = glutenFree
}

FoodItem.prototype.stringify = function(){
    var nameString = this.name.charAt(0).toUpperCase() + this.name.slice(1)
    var caloriesString = this.calories.toString()
    var veganString = ""
    if (this.vegan === false ){
        veganString = "is not vegan"
    } else {
        veganString = "is vegan"
    }
    var glutenFreeString = ""
    if (this.glutenFree === false ){
        glutenFreeString = "is not gluten free"
    } else {
        glutenFreeString = "is gluten free"
    }

    return nameString + " has " + caloriesString + " calories, " + veganString + ", and " + glutenFreeString +"."
}

var bacon = new FoodItem('bacon', 100, false, true)
var sushi = new FoodItem('sushi', 250, false, false)
var sashimi = new FoodItem('sashimi', 90, false, true)
var quinoa = new FoodItem('quinoa', 20, true, true)
console.log(bacon.stringify())
console.log(sushi.stringify())
console.log(sashimi.stringify())
console.log(quinoa.stringify())
console.log("=-=-=-=-=-=-=-=-=-=-=")

// Part II
// Plate constructor and strinigy prototype
var Plate = function(name, description, price, ingredients){
    this.name = name
    this.description = description
    this.price = price
    this.ingredients = ingredients
}

Plate.prototype.stringify = function(){
    var nameString = this.name
    var descriptionString = this.description
    var priceString = this.price.toString()
    var ingredientsString = ""
    for (var i = 0; i < this.ingredients.length ; i++){
        if (i === this.ingredients.length - 1){
            ingredientsString = ingredientsString + "and " + this.ingredients[i]["name"]            
        } else {
            ingredientsString = ingredientsString + this.ingredients[i]["name"] + ", "
        }
    }
    return "The " + nameString + " is a " + descriptionString + ". Cost is $" + priceString + ". Ingredients include: " + ingredientsString +"."
}

var Menu = function(name, plates){
    this.name = name
    this.plates = plates
}

Menu.prototype.stringify = function(){
    var nameString = this.name
    var platesString = ""
    for (var i = 0 ; i < this.plates.length ; i++){
        if ( i === this.plates.length - 1){
            platesString = platesString + "and " + this.plates[i]["name"]
        } else {
            platesString = platesString + this.plates[i]["name"] + ", "
        }
    }

    return "The " + nameString + " lists the following plates: " + platesString + "."
}

var Restaurant = function(name, description, menu){
    this.name = name
    this.description = description
    this.menu = menu
}

Restaurant.prototype.stringify = function(){
    var nameString = this.name
    var descriptionString = this.description
    var menuString = this.menu["name"]
    var platesString = ""
    for (var i = 0 ; i < this.menu.plates.length ; i++){
        platesString = platesString + this.menu.plates[i].stringify() + " "
        for (var j = 0 ; j < this.menu.plates[i].ingredients.length ; j++){
            platesString = platesString + this.menu.plates[i].ingredients[j].stringify() + " "
        }

    }

    return "The restaurant called " + nameString + " is a " + descriptionString + " currently serving meals off the " + menuString + ". " + this.menu.stringify() + " " + platesString
    
}

// - Instantiate all the FoodItems that you would need for a salad Plate and a burger Plate. 
// Salad Plate Food Items
var lettuce = new FoodItem('lettuce', 0, true, true) // also on a burger
var dressing = new FoodItem('dressing', 90, true, true)
var tomato = new FoodItem('tomato', 20, true, true) // also on a burger
var eggs = new FoodItem('eggs', 25, false, true)
var croutons = new FoodItem('croutons', 10, true, false)

// Burger Plate Food Items
var buns = new FoodItem('buns', 50, true, false)
var fries = new FoodItem('fries', 200, true, true)
var pickle = new FoodItem('pickle', 50, true, true)

// - Instantiate a salad Plate and a burger Plate.
var SaladPlate = new Plate('Salad Plate', 'plate of salad', 24, [lettuce, dressing, tomato, eggs, croutons])
// console.log(SaladPlate)
var BurgerPlate = new Plate('Burger Plate', 'hamburger on a plate', 15, [lettuce, tomato, buns, fries, pickle])

// - Instantiate a Menu that contains each of the instantiated Plates.
var LunchMenu = new Menu('Lunch Menu', [SaladPlate, BurgerPlate])

// - Instantiate a Restaurant that contains the instantiated Menu.
var Snarfs = new Restaurant('Snarfs', 'sandwich shop', LunchMenu)

// - Call the Restaurant's stringify method to have it print out all its information, including the name, description, price of each Plate, and the  the name, calories, and dietary information of each FoodItem in each of those Plates.

// console.log(BurgerPlate)
// console.log(Snarfs)
// console.log(SaladPlate)
// console.log(SaladPlate.stringify())
// console.log(BurgerPlate.stringify())
// console.log(LunchMenu.stringify())
console.log(Snarfs.stringify())