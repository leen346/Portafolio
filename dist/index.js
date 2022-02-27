const fullName = "Leenkim Altamirano"
let textPosition = 0;
const speed = 100;

const typeWriter = () => {
    const elementName = document.querySelector('#name');
    elementName.innerHTML = fullName.substring(0, textPosition)
    if (textPosition++ !== fullName.length) {
        setTimeout(typeWriter, speed)
    }
}

window.addEventListener('load', typeWriter);