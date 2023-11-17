function navigateToURL(element) {
    const url = element.getAttribute("data-href");
    window.location.href = url;
}
