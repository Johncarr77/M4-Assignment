        const dice1 = 6;
        const dice2 = 3;

        if (dice1 === 6 || dice2 === 6) {
            console.log('You win!');
        } else {
            console.log('You lose');
        }

        const name = "John";
        const age = 24;

        const combined = name + age;

        console.log(typeof combined);

        console.log("Hello it's me" + name + " and my age is " + age + " and I like food");

        console.log(`Hello it's me ${name} and my age is ${age}`);

        let text1 = "Welcome to";
        let text2 = "my page!";
        let text3 = text1.concat(" ", text2);
        document.getElementById("demo").innerHTML = text3;

        const number = 5;
        const square = Math.pow(number, 2); // Using Math.pow() to square the number

        console.log(`The square of ${number} is ${square}`);

        const operation = 'add'; // You can change this to 'subtract', 'multiply', or 'divide'

        let result;
        let number1;
        let number2;

        switch (operation) {
            case 'add':
                number1 = 10; // Define number1
                number2 = 20; // Define number2
                result = number1 + number2;
                break;
            case 'subtract':
                number1 = 30; // Define number1
                number2 = 15; // Define number2
                result = number1 - number2;
                break;
            case 'multiply':
                number1 = 5; // Define number1
                number2 = 6; // Define number2
                result = number1 * number2;
                break;
            case 'divide':
                number1 = 40; // Define number1
                number2 = 8;  // Define number2
                result = number1 / number2;
                break;
            default:
                console.log('Invalid operation');
                break;
        }

        if (result !== undefined) {
            console.log(`Result of ${operation}: ${result}`);
        }