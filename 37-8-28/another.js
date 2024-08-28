// JS Script


const imageEl = document.querySelector('.img');
const windowElement = document.querySelector('.window');
const sideElement = document.querySelector('.side');


function updatePosition(event) {
    const imageRect = imageEl.getBoundingClientRect();
    let mouseX = event.clientX - imageRect.left - windowElement.offsetWidth / 2;
    let mouseY = event.clientY - imageRect.top - windowElement.offsetHeight / 2;

    mouseX = Math.max(0, Math.min(mouseX, imageEl.offsetWidth - windowElement.offsetWidth));
    mouseY = Math.max(0, Math.min(mouseY, imageEl.offsetHeight - windowElement.offsetHeight));

    windowElement.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    windowElement.style.display = 'block';
    sideElement.style.display = 'block';

    sideElement.style.backgroundImage = imageEl.style.backgroundImage;
    const zoomX = (mouseX / imageEl.offsetWidth) * 100;
    const zoomY = (mouseY / imageEl.offsetHeight) * 100;
    sideElement.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
}

imageEl.addEventListener('mousemove', updatePosition);
imageEl.addEventListener('mouseleave', function() {
    windowElement.style.display = 'none';
    sideElement.style.display = 'none';
});