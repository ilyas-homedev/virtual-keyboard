import { LANGUAGES } from './keys.js';

const KEYS = [
    {id: 'Backquote', width: '60px', class: 'button'},
    {id: 'Digit1', width: '60px', class: 'button'},
    {id: 'Digit2', width: '60px', class: 'button'},
    {id: 'Digit3', width: '60px', class: 'button'},
    {id: 'Digit4', width: '60px', class: 'button'},
    {id: 'Digit5', width: '60px', class: 'button'},
    {id: 'Digit6', width: '60px', class: 'button'},
    {id: 'Digit7', width: '60px', class: 'button'},
    {id: 'Digit8', width: '60px', class: 'button'},
    {id: 'Digit9', width: '60px', class: 'button'},
    {id: 'Digit0', width: '60px', class: 'button'},
    {id: 'Minus', width: '60px', class: 'button'},
    {id: 'Equal', width: '60px', class: 'button'},
    {id: 'Backspace', width: '90px', class: 'backspace'},
    {id: 'Tab', width: '90px', class: 'tab'},
    {id: 'KeyQ', width: '60px', class: 'button'},
    {id: 'KeyW', width: '60px', class: 'button'},
    {id: 'KeyE', width: '60px', class: 'button'},
    {id: 'KeyR', width: '60px', class: 'button'},
    {id: 'KeyT', width: '60px', class: 'button'},
    {id: 'KeyY', width: '60px', class: 'button'},
    {id: 'KeyU', width: '60px', class: 'button'},
    {id: 'KeyI', width: '60px', class: 'button'},
    {id: 'KeyO', width: '60px', class: 'button'},
    {id: 'KeyP', width: '60px', class: 'button'},
    {id: 'BracketLeft', width: '60px', class: 'button'},
    {id: 'BracketRight', width: '60px', class: 'button'},
    {id: 'Enter', width: '60px', class: 'enter-main'},
    {id: 'CapsLock', width: '120px', class: 'capsLock'},
    {id: 'KeyA', width: '60px', class: 'button'},
    {id: 'KeyS', width: '60px', class: 'button'},
    {id: 'KeyD', width: '60px', class: 'button'},
    {id: 'KeyF', width: '60px', class: 'button'},
    {id: 'KeyG', width: '60px', class: 'button'},
    {id: 'KeyH', width: '60px', class: 'button'},
    {id: 'KeyJ', width: '60px', class: 'button'},
    {id: 'KeyK', width: '60px', class: 'button'},
    {id: 'KeyL', width: '60px', class: 'button'},
    {id: 'Semicolon', width: '60px', class: 'button'},
    {id: 'Quote', width: '60px', class: 'button'},
    {id: 'Backslash', width: '60px', class: 'button'},
    {id: 'Enter', width: '30px', class: 'enter-part'},
    {id: 'ShiftLeft', width: '92px', class: 'shift'},
    {id: 'IntlBackslash', width: '60px', class: 'button'},
    {id: 'KeyZ', width: '60px', class: 'button'},
    {id: 'KeyX', width: '60px', class: 'button'},
    {id: 'KeyC', width: '60px', class: 'button'},
    {id: 'KeyV', width: '60px', class: 'button'},
    {id: 'KeyB', width: '60px', class: 'button'},
    {id: 'KeyN', width: '60px', class: 'button'},
    {id: 'KeyM', width: '60px', class: 'button'},
    {id: 'Comma', width: '60px', class: 'button'},
    {id: 'Period', width: '60px', class: 'button'},
    {id: 'Slash', width: '60px', class: 'button'},
    {id: 'ShiftRight', width: '120px', class: 'shift'},
    {id: 'fn', width: '60px', class: 'button'},
    {id: 'ControlLeft', width: '60px', class: 'ctrl'},
    {id: 'AltLeft', width: '60px', class: 'alt'},
    {id: 'MetaLeft', width: '75px', class: 'cmd'},
    {id: 'Space', width: '308px', class: 'button'},
    {id: 'MetaRight', width: '75px', class: 'cmd'},
    {id: 'AltRight', width: '60px', class: 'alt'},
    {id: 'ArrowUp', key: '\u02C4', width: '60px', class: 'arrow1'},
    {id: 'ArrowLeft', key: '\u003C', width: '60px', class: 'arrow2'},
    {id: 'ArrowDown', key: '\u02C5', width: '60px', class: 'arrow3'},
    {id: 'ArrowRight', key: '\u003E', width: '60px', class: 'arrow4'},
]

// Creating div container for text field and keyboard
const containerDiv = document.createElement('div');
containerDiv.className = 'containerDiv';
document.body.appendChild(containerDiv);


// Creating field for text input
let textarea = document.createElement('textarea');
textarea.setAttribute('rows', '15');
textarea.style.width = '100%';
textarea.innerHTML = '';
containerDiv.appendChild(textarea);

// Crating pointer of current languages
let lang = document.createElement('div');
lang.className = 'lang'
containerDiv.appendChild(lang);

// Creating div container for keyboard
const keysContainer = document.createElement('div');
keysContainer.className = 'keysContainer';
containerDiv.appendChild(keysContainer);


// Creating and adding buttons to the keyboard container
// div container for arrows
const arrowsContainer = document.createElement('div');
arrowsContainer.className = 'arrows';

KEYS.forEach((keyElem) => {
    const button = document.createElement('button');

    button.id = keyElem.id;
    button.className = keyElem.class;
    button.style.width = keyElem.width;
    keysContainer.appendChild(button);
    keysContainer.appendChild(arrowsContainer);

    if (keyElem.id === 'ArrowUp' || keyElem.id === 'ArrowRight' || keyElem.id === 'ArrowDown' || keyElem.id === 'ArrowLeft') {
        button.className = keyElem.class;
        button.innerHTML = keyElem.key;
        arrowsContainer.appendChild(button);
    } 
})


// Createing hover effect for both Enter parst
const enterPart = document.querySelector('.enter-part');
const enterMain = document.querySelector('.enter-main');

enterPart.addEventListener('mouseenter', function() {
    enterMain.style.backgroundColor = '#bff5ff';
    enterPart.style.backgroundColor = '#bff5ff';
})

enterPart.addEventListener('mouseout', function() {
    enterMain.style.backgroundColor = 'rgb(239, 239, 239)';
    enterPart.style.backgroundColor = 'rgb(239, 239, 239)';
})

enterMain.addEventListener('mouseenter', function() {
    enterPart.style.backgroundColor = '#bff5ff';
    enterMain.style.backgroundColor = '#bff5ff';
})

enterMain.addEventListener('mouseout', function() {
    enterPart.style.backgroundColor = 'rgb(239, 239, 239)';
    enterMain.style.backgroundColor = 'rgb(239, 239, 239)';
})


// Creating hover effect for all the other buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', function() {
        button.style.backgroundColor = '#bff5ff';
    })

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = 'rgb(239, 239, 239)';
    })

    button.addEventListener('click', function() {
        button.style.backgroundColor = '#8fffad'
    })
})

enterMain.addEventListener('click', function() {
    enterMain.style.backgroundColor = '#8fffad';
    enterPart.style.backgroundColor = '#8fffad';
})

enterPart.addEventListener('click', function() {
    enterMain.style.backgroundColor = '#8fffad';
    enterPart.style.backgroundColor = '#8fffad';
})

// Class Keyboard for handling events----------------------------------------------------------------
class Keyboard {
    constructor(languages, textarea, lang, keys) {
        this.languages = languages;
        this.textarea = textarea;
        this.lang = lang;
        this.keys = keys
        this.langindex = 0;
        this.shiftActive = false;
        this.capsLock = false;
    }

    // Setting default language 'english'
    setLanguage() {
        this.language = this.languages[this.langindex];
        let l = Object.keys(this.language);
        this.lang.innerHTML = l[0];

        this.languageKeysArray = this.language[l[0]];
        buttons.forEach((button) => {
            this.languageKeysArray.forEach((key) => {
                if (this.shiftActive === false && button.id === key.id) {
                    button.innerHTML = key.key;
                }
                if (this.shiftActive === true && button.id === key.id) {
                    button.innerHTML = key.shiftKey;
                }
                if (this.capsLock === true && button.id === key.id) {
                    if (key.id.includes('Key')) {
                        button.innerHTML = key.key.toUpperCase();
                        if (this.shiftActive === true) {
                            button.innerHTML = key.shiftKey.toLowerCase();
                        }
                    }
                }
            })
        })
    }

    texting(key) {
        this.startOfTheString = this.textarea.selectionStart;
        this.endOfTheString = this.textarea.selectionEnd;

        this.start = this.textarea.innerHTML.slice(0, this.startOfTheString);
        this.end = this.textarea.innerHTML.slice(this.startOfTheString, this.endOfTheString);
        console.log('start: ' + this.start);

        console.log('added key: ' + key);
        console.log('input: ' + this.textarea.innerHTML)
        // this.start += key;
        // this.textarea.innerHTML = this.start + this.end;
        return this.textarea.innerHTML += key;
    }

    backspace() {
        this.texting();
        console.log(this.startOfTheString);
        console.log(this.endOfTheString);
    }

    changeLanguage() {
        if (this.langindex >= this.languages.length - 1) {
            this.langindex -= this.languages.length;
        }
        this.langindex += 1;
        this.setLanguage();
    }

    shift() {
        this.shiftActive = !this.shiftActive;
        this.setLanguage();
    }

    caps() {
        this.capsLock = !this.capsLock;
        this.setLanguage()
    }
}

let keyboard = new Keyboard(LANGUAGES, textarea, lang, KEYS);
keyboard.setLanguage();
// ---------------------------------------------------------------------------------------------------

let keys = document.getElementsByClassName('button');
keys = new Array(...keys)

// Creating fucntion for displaying key which was pressed on the real keyboard
document.addEventListener('keydown', function(event) {
    keys.forEach((key) => {
        if (key.id === event.code) {
            keyboard.texting(key.innerHTML)
            key.style.backgroundColor = '#8fffad';
        }
    })
})

document.addEventListener('keyup', function() {
    keys.forEach((key) => {
        key.style.backgroundColor = 'rgb(239, 239, 239)';
    })
})

document.addEventListener('click', function(event) {
    keys.forEach((key) => {
        if (key.innerHTML === event.target.innerHTML) {
            keyboard.texting(key.innerHTML);
        }
    })
})



// Creating an array of all meta buttons and adding buttons inside it
const metaButtons = [];

buttons.forEach((button) => {
    if (button.className !== 'button') {
        metaButtons.push(button);
    }
})

// Displaying, which metabutton was pressed
document.addEventListener('keydown', function(event) {
    metaButtons.forEach((mbutton) => {
        if (mbutton.id === event.code) {
            mbutton.style.backgroundColor = '#8fffad';
        }
    })
})

document.addEventListener('keyup', function() {
    metaButtons.forEach((mbutton) => {
        mbutton.style.backgroundColor = 'rgb(239, 239, 239)';
    })
})


// Changing language with lang div click
lang.addEventListener('click', function() {
    keyboard.changeLanguage()
})

// Changing language with pressing ctrl+space on real keyboard
function switchLanguage(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear();
        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    })
}

switchLanguage(() => {keyboard.changeLanguage()}, 'ControlLeft', 'AltLeft');


// SHIFT
// Click shift 
const shiftLeft = document.getElementById('ShiftLeft');
shiftLeft.addEventListener('click', function() {keyboard.shift()});
const shiftRight = document.getElementById('ShiftRight');
shiftRight.addEventListener('click', function() {keyboard.shift()});

// Press shift
document.addEventListener('keydown', function(event) {
    if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.shift();
    }
})

document.addEventListener('keyup', function(event) {
    if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.shift();
    }
})


// CAPSLOCK
// Click CapsLock
const capsLock = document.getElementById('CapsLock');
capsLock.addEventListener('click', function() {keyboard.caps()})

// Press CapsLock
document.addEventListener('keydown', function(event) {
    if (event.code === 'CapsLock') {
        keyboard.caps();
    }
})

document.addEventListener('keyup', function(event) {
    if (event.code === 'CapsLock') {
        keyboard.caps();
    }
})


// ENTER
// Click Enter
enterMain.addEventListener('click', function() {keyboard.texting('\n')});
enterPart.addEventListener('click', function() {keyboard.texting('\n')});

// Press Enter
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        keyboard.texting('\n');
    }
})


// BACKSPACE
const backspace = document.getElementById("Backspace");
backspace.addEventListener('click', function() {
    keyboard.backspace();
})

