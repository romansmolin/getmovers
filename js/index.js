//DUMMY ROUTING
function navigateToURL(element) {
  const url = element.getAttribute("data-href");
  window.location.href = url;
}

//PROGRESS BAR
document.addEventListener("DOMContentLoaded", function () {
  function updateProgressBar(progress) {
    const progressBarItems = document.querySelectorAll(".progress__bar__item");
    for (let i = 0; i < progressBarItems.length; i++) {
      if (i < progress) {
        progressBarItems[i].style.backgroundColor = "#dc3545";
      } else {
        progressBarItems[i].style.backgroundColor = "#D9D9D9";
      }
    }
  }

  function getPageIdentifier() {
    const urlSegments = window.location.pathname.split("/");
    return urlSegments[urlSegments.length - 1];
  }

  const currentPageIdentifier = getPageIdentifier();

  // Determine progress based on the current page
  let progress;
  switch (currentPageIdentifier) {
    case "index.html": progress = 1; break;
    case "MovingFrom.html": progress = 2; break;
    case "CurrentHouseSize.html": progress = 3; break;
    case "CompareTo.html": progress = 4; break;
    case "WhenAreYouMoving.html": progress = 5; break;
    case "Destination.html": progress = 6; break;
    case "Email.html": progress = 7; break;
    case "EnterName.html": progress = 8; break;
    case "PhoneNumber.html": progress = 9; break;
    case "FinalPage.html": progress = 10; break;
    default: progress = 0;
  }

  updateProgressBar(progress);
});


