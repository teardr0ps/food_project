function showModal(modal, timerId) {
    const modalWindow = document.querySelector(modal);

    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show', 'fade');
    document.body.classList.add('scroll-hidden');


    console.log(timerId);
    if (timerId) {
        clearTimeout(timerId);
    }

}

function closeModal(modal) {
    const modalWindow = document.querySelector(modal);

    modalWindow.classList.remove('show', 'fade');
    modalWindow.classList.add('hide');
    document.body.classList.remove('scroll-hidden');
}



function modal(triggerSelector, modalSelector, timerId) {
    const modalWindow = document.querySelector(modalSelector);
    const modalTrigger = document.querySelectorAll(triggerSelector);
    
    
    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            showModal(modalSelector, timerId);
        });
    });
    
    
    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
    
    
    
    //modal opens over some time
    
    
    
    function showModalByScroll() {
        
            if (window.pageYOffset + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
                showModal(modalSelector, timerId);
                window.removeEventListener('scroll', showModalByScroll);
            }
    }
    
    window.addEventListener('scroll', showModalByScroll);
    
    
    showModalByScroll();
}

export default modal;

export {closeModal};
export {showModal};