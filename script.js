onload = () => {
    document.body.classList.remove("container");
};

let text = document.querySelector('h1');

let typewriter = new Typewriter(text, {
    loop: false
});

typewriter.typeString('I LOVE YOU BABY <img src="./1993288-f44336.svg" alt="coração" >')
    .start();