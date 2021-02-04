function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);
    
    function showTabs(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
    
        tabs[i].classList.add(activeClass);
    }
    
    function hideTabs() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    
    hideTabs();
    showTabs();
    
    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
    
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                 if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });    
}

export default tabs;