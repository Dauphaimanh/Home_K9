// JS Script

const imageEl = document.querySelector(".img");
const windowEl = document.querySelector(".window");
const sideEl = document.querySelector(".side");

imageEl.addEventListener("mousemove", function (e) {
    const rect = imageEl.getBoundingClientRect();
    let mouseX = e.clientX - rect.left - windowEl.offsetWidth / 2;
    let mouseY = e.clientY - rect.top - windowEl.offsetHeight / 2;

    if (mouseX < 0) mouseX = 0;
    if (mouseY < 0) mouseY = 0;
    if (mouseX + windowEl.offsetWidth > imageEl.offsetWidth) {
    mouseX = imageEl.offsetWidth - windowEl.offsetWidth;
    }
    if (mouseY + windowEl.offsetHeight > imageEl.offsetHeight) {
    mouseY = imageEl.offsetHeight - windowEl.offsetHeight;
    }

    windowEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    windowEl.style.display = "block";
    sideEl.style.display = "block";
    sideEl.style.backgroundImage = imageEl.style.backgroundImage;
    const zoomX = ((e.clientX - rect.left) / imageEl.offsetWidth) * 100;
    const zoomY = ((e.clientY - rect.top) / imageEl.offsetHeight) * 100;
    sideEl.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
})

imageEl.addEventListener("mouseleave", function () {
    windowEl.style.display = "none";
    sideEl.style.display = "none";
});