# Password Generator

## frank-stallone

## Purpose
Can't think of a secure password? You don't have to! Let the computer do the work for you. Choose a password length, and what to include: lowercase letters, uppercase letters, numbers, or symbols.

## Preview
Here is a mock-up of how the page looks and functions.
<img src="assets\images\password-gen.gif"></img>

## Built With
* JavaScript
* HTML
* CSS

### This project focused on Javascript 
Given a foundation of HTML and CSS, I created the ```.js``` file from (mostly) scratch. This project utilizes the foundational tools of JavaScript like ```for loops```, ```functions```, and ```variables```.

This Password Generator runs mainly on one JavaScript function that inhabits less than 65 lines of code. In it are variables containing strings for lowercase letters, uppercase letters, numbers, and special characters. The most important variable contains an empty string that the letters will eventually pass through. The user is prompted to choose a password length between 8 and 128 characters, followed by prompts for what kind of characters they wish to include. Each prompt will run through a ```for loop``` that randomly chooses a number of characters based on the password length they have set. The function will break if they don't choose at least one character type prompt, and will alert them if they don't choose a valid password length between 8 and 128 characters.  

## Website
https://wolfgarb.github.io/frank-stallone/

## Contribution
Made by wolfgarb
