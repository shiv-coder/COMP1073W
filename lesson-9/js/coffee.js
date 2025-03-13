const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    size;
    isDecaf;
    constructor(size,isdecaf){
        this.size = size;
        this.isdecaf;
    }
    serveIt(){
        //Generate image of coffee cup
        const cup = document.createElement('img');
        //set the source of image
        let cupImage = 'images/coffee-cup.svg';
        //Determine whether coffee is Decaf
        let decaf;
        if(this.isDecaf === true){
            decaf= 'decaffeinated';
            cupImage = 'images/coffee-cup-green.svg';
        }else{
            decaf = 'caffeinated';
        }
        cup.setAttribute('src',cupImage);
        //set the image size according to coffee size
        let cupsize;
        switch(this.size){
            case 'small':
                cupsize='100';
                break;
                
            case 'medium':
                cupsize='125';
                break;

            case 'large':
                cupsize='150';
                break;
            case 'ExtraLarge':
                cupsize='200';
                break;
                default:
                    cupsize='100';

        }
        cup.setAttribute('height',cupsize);
        //Generate descrition of coffee as IMG title
        let description = `A ${this.size} ${decaf} coffee`;
        //cup.setAttribute('title',description);
        const descElement = document.createElement('p');
        descElement.textContent = description;

        output.appendChild(cup);
        output.appendChild(descElement);

    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee('ExtraLarge',false);
let megansCoffee = new Coffee('small',false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milktype;
    constructor(size,isDecaf,milktype){
        super(size,isDecaf);
        this.milktype = milktype;
    }
    latteeDesc(){
        alert(`A ${this.size} ${(this.Decaf === true?"decaffeinated":"caffeinated")} lattee with ${this.milktype} milk`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let scottsLatte = new Latte('medium',true,'almond');
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
