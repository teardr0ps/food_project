function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slides = document.querySelectorAll(container);
    const slider = document.querySelector(slide);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;
    
    let slideIndex = 1;
    let offset = 0;

    if (slides.length > 10) {
        total.textContent = `${slides.length}`;
        current.textContent = `${slideIndex}`;
    } else {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == deletePxStr(width) * (slides.length - 1)) { //'500px'
            offset = 0;
        } else {
            offset += deletePxStr(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentSlideNumber(slides, current);

        addOpacity(dots);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) { //'500px'
            offset = deletePxStr(width) * (slides.length - 1);
        } else {  
            offset -= deletePxStr(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        currentSlideNumber(slides, current);

        addOpacity(dots);

        console.log(deletePxStr(width) * (slides.length - 1));
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deletePxStr(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            currentSlideNumber(slides, current);

            addOpacity(dots);
        });
    });

    function addOpacity(elem) {
        elem.forEach(dot => {
            dot.style.opacity = '.5';
        });
        elem[slideIndex - 1].style.opacity = 1;
    }
    
    function currentSlideNumber(slider, current) {
        if (slider.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function deletePxStr(str) {
        return +str.replace(/px/g, '');
    }
}

export default slider;