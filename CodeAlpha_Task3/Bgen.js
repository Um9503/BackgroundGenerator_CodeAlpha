document.addEventListener('DOMContentLoaded', function () {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const generateButton = document.getElementById('generate');
    const gradientBox = document.querySelector('body');
    const randomGradientButton = document.getElementById('randomGradient');
    const randomColorButton = document.getElementById('randomColor');

    function setGradient() {
        gradientBox.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    }

    function generateRandomGradient() {
        const randomColor1 = getRandomColor();
        const randomColor2 = getRandomColor();
        color1.value = randomColor1;
        color2.value = randomColor2;
        setGradient();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function generateRandomSolidColor() {
        const randomColor = getRandomColor();
        gradientBox.style.background = randomColor;
    }

    generateButton.addEventListener('click', setGradient);
    randomGradientButton.addEventListener('click', generateRandomGradient);
    randomColorButton.addEventListener('click', generateRandomSolidColor);
});

