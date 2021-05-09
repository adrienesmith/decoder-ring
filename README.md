# decoder-ring
Decoder ring project for Thinkful software engineering curriculum. 
---
Added JavaScript functionality to a static decoder app, pre-built in the curriculum using Bootstrap. 

There are 3 cipher options, and each can either encode or decode. This app is useful for playing an escape room, or for sending / recieving secret messages.

1. Caesar Shift
2. Polybius Square
3. Substitution Cipher 

---

## Caesar Shift

The Caesar Shift is a cipher where each character in the message is 'shifted' a certain number of places either up or down in the alphabet. 
- The user first determines whether they are encoding or decoding. 
- They then enter the message to be either encoded or decoded. 
- They then enter the amount by which the alphabet should shift. A positive number will shift forward in the alphabet, a negative number will shift backward in the alphabet. 
- Upon the user clicking "submit", the message outputs at the bottom of the form.

For example: A shift number of 3 will turn "A" into "D". A shift number of -3 will turn "A" into "X".

![Alt text](/screenshots/caesar-shift-screenshot.png?raw=true "caesar-shift-screenshot")
---

## Polybius Square

The Polybius Square is cipher where each character in the message is encoded as the 2 characters that indicate where in the grid the letter is located.

``|---| 1 | 2 | 3 | 4 | 5 |``  
``| 1 | A | B | C | D | E |``  
``| 2 | F | G | H |I/J| K |``  
``| 3 | L | M | N | O | P |``  
``| 4 | Q | R | S | T | U |``  
``| 5 | V | W | X | Y | Z |``
 
- The user first determines whether they are encoding or decoding. 
- They then enter the message to be either encoded or decoded. 
- Upon the user clicking "submit", the message outputs at the bottom of the form.

For example: The letter "A" encodes as "11".  The code "24" decodes to "R". "I" and "J" both encode to "42". 

![Alt text](/screenshots/polybius-square-screenshot.png?raw=true "polybius-square-screenshot")
---

## Substitution Cipher

The substitution cipher takes each letter of the message, and replaces it with the character at the same position in a cipher alphabet.

Standard alphabet: abcdefghijklmnopqrstuvwxyz
Example cipher alphabet: plmoknijbuhvygctfxrdzeswaq

- The user first determines whether they are encoding or decoding. 
- They then enter the message to be either encoded or decoded. 
- They then enter the cipher alphabet.
- Upon the user clicking "submit", the message outputs at the bottom of the form.

For example: "A" would encode to "P".  "L" would decode to "B".

![Alt text](/screenshots/substitution-cipher-screenshot.png?raw=true "substitution-cipher-screenshot")
---

This app was created using Test Driven Development. Throughout development, I ran a series of unit tests using Mocha and Chai. 

Languages used in this app are: HTML, CSS, and JavaScript.
