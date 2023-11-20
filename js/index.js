function navigateToURL(element) {
    const url = element.getAttribute("data-href");
    window.location.href = url;
}

window.onload = () => {
    const transitionElements = document.querySelector('.transition')
    const anchorsElements = document.querySelectorAll('a');

    setTimeout(() => {
        transitionElements.classList.remove('is-active')
    }, 500)

    for (let i = 0; i < anchorsElements.length; i++) {
        const anchor = anchorsElements[i]

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.currentTarget.href

            transitionElements.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target;
            }, 500)
        })
    }
    
}


