// 2.0

var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var items = document.querySelectorAll(".carousel .carousel-inner .item");
var dots = document.querySelectorAll(".carousel .dots li");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
var active = 0;

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index == active) {
                dot.classList.add("active");
            }
        });
    }

    updateActiveDot();

    carouselInner.style.transition = `transform 666ms linear`;
    function loopSlide(index) {
        active = index % items.length;
        position = -carouselWidth * active;
        carouselInner.style.transform = `translateX(${position}px)`;
        updateActiveDot();
    }

    nextBtn.addEventListener('click', function () {
        loopSlide(active + 1);
    });

    prevBtn.addEventListener('click', function () {
        loopSlide(active - 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            loopSlide(index);
        });
    });

    var isDrag = false;
    var offsetX,
        offsetY;
    function handleMouseDown(e) {
        isDrag = true;
        offsetX = e.clientX - this.offsetLeft;
        offsetY = e.clientY - this.offsetTop;
    }

    function handleMouseMove(e) {
        if (isDrag) {
            var toLeft = e.clientX - offsetX;
            toLeft = Math.min(0, Math.max(carouselWidth - carouselInner.offsetWidth, toLeft));
            this.style.transform = `translateX(${toLeft}px)`;
        }
    }

    function handleMouseUp() {
        isDrag = false;
    }

items.forEach(item => {
    item.addEventListener('mousedown', handleMouseDown);
    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseup', handleMouseUp);
});