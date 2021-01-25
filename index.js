/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
})


// Write your code here 👇

const emoji = ['🤬', '☹️', '😐', '🙂', '😁']
let emojiVal

window.addEventListener("keypress", event => {
    if(document.activeElement === box && event.key >= 1 && event.key <= 5 ) {
        emojiVal = event.key - 1
        
        let counter = 0

        if(emojiVal < 2) {
            counter = 4
        }
        
        const interval = setInterval(() => {
            if(counter === emojiVal) {
                text.textContent = 'You are ' + emoji[emojiVal]
                clearInterval(interval)
            }
            if(emojiVal > counter) {
                text.textContent = 'You are ' + emoji[counter++]
            }
            if(emojiVal < counter) {
                text.textContent = 'You are ' + emoji[counter--]
            }
        }, 200)
        console.log(emojiVal)
    }
})

/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
