Alice and Bob's burgers
===============

Skills
---------
- Object Constructors
- Accessing Prototypes


Objective
----------
Define several constructors and prototype methods.

Resources
---------
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">Introduction to Object-Oriented JavaScript</a>
- <a href="http://www.phpied.com/3-ways-to-define-a-javascript-class/">3 ways to define a JavaScript class</a>
- <a href="http://eloquentjavascript.net/chapter8.html">Eloquent Javascript Ch8 - Object-Oriented Programming</a>

Requirements
----------

---------
Define a constructor function that produces objects representing a single food item. Add parameters to the constructor for the given properties and add them as instance variables.

FoodItem
    - name       : string 
    - calories   : number
    - vegan      : boolean
    - glutenFree : boolean 

For example, and object returned from the FoodItem constructor might look like this:

```javascript
var FoodItem = function(name, calories, vegan, glutenFree){
    // code goes here
}
var bacon = new FoodItem('bacon', 100, false, true)
console.log(bacon)
/* This object should print to your console:
{
    name: 'bacon',
    calories: 100,
    vegan: false,
    glutenFree: true
}
*/
```

- Define a `stringify` method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. `stringify` should not have any side effects.
Instantiate three different FoodItems and store each in a separate variable. Call `stringify()` on each instance and print the result to the console.

```javascript
FoodItem.prototype.stringify = function(){
    // code goes here
}
console.log(bacon.stringify())
/* Something like this should print to the console:
Bacon has 100 calories, is not vegan, and is gluten free.
*/
```

Part II
----------
Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.

- Plate
    - name        : string
    - description : string 
    - price       : number 
    - ingredients : Array of FoodItem objects

- Menu
    - name        : string (e.g. "The Lunch Menu", "Happy-hour Menu", etc)
    - plates      : Array of Plate objects

- Restaurant
    - name        : string
    - description : string 
    - menu        : Menu object


Define a `stringify` method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the `stringify` method of the contained objects. (e.g. the Menu object should call `stringify` on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).


- Instantiate all the FoodItems that you would need for a salad Plate and a burger Plate. 
- Instantiate a salad Plate and a burger Plate.
- Instantiate a Menu that contains each of the instantiated Plates.
- Instantiate a Restaurant that contains the instantiated Menu.
- Call the Restaurant's stringify method to have it print out all its information, including the name, description, price of each Plate, and the  the name, calories, and dietary information of each FoodItem in each of those Plates.


Part III (Bonus)
--------------

Add the following methods to the Plate prototype to determine if all the food items within it fit a specific dietary restriction:

```javascript 
    Plate.prototype.isVegan = function(){
        // should return true if all foodItems in the plate are vegan
    } 
    Plate.prototype.isGlutenFree = function(){
        // should return true if all foodItems in the plate are gluten free
    } 
```

