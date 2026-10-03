window.addEventListener("load", (event) => {

    const banner_slider = new Swiper('.banner_slider', {
        speed: 1000,
        // effect: 'fade',
        mousewheel: {
            releaseOnEdges: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        on: {
            slideChange: function () {
                const index_currentSlide = this.realIndex;
                let elm = document.querySelector('.banner_slider .swiper-scrollbar .swiper-scrollbar-drag .slide_index');

                elm.innerHTML = '/0' + (index_currentSlide + 1);
            },
        },
    });


    let scrollBarDrag = document.querySelector('.banner_slider .swiper-scrollbar .swiper-scrollbar-drag');
    let textNode = document.createElement('div');
    textNode.classList.add('slide_index');
    textNode.innerHTML = '/01';
    scrollBarDrag.appendChild(textNode);
    console.log(index_currentSlide);
});