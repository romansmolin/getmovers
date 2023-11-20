function navigateToURL(element) {
    const url = element.getAttribute("data-href");
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    function updateProgressBar(progress) {
        const progressBarItems = document.querySelectorAll('.progress__bar__item');
        for (let i = 0; i < progressBarItems.length; i++) {
            if (i < progress) {
                progressBarItems[i].style.backgroundColor = '#dc3545';
            } else {
                progressBarItems[i].style.backgroundColor = '#D9D9D9';
            }
        }
    }

    function getPageIdentifier() {
        const urlSegments = window.location.pathname.split('/');
        return urlSegments[urlSegments.length - 1];
    }

    const currentPageIdentifier = getPageIdentifier();

    // Determine progress based on the current page
    let progress;
    switch (currentPageIdentifier) {
        case 'index.html':
        case 'MovingFrom.html':
        case 'CurrentHouseSize.html':
            progress = 1;
            break;
        case 'CompareTo.html':
        case 'WhenAreYouMoving.html':
        case 'Destination.html':
            progress = 2;
            break;
        case 'Email.html':
        case 'EnterName.html':
        case 'PhoneNumber.html':
            progress = 3;
            break;
        case 'FinalPage.html':
            progress = 4;
            break;
        default:
            progress = 0;
    }

    updateProgressBar(progress);
});


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


