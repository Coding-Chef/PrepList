//Setting the accordions to open when clicked
(function () {
    var accordionButton = document.getElementsByClassName("accordion");
    var panel, i;

    for (i = 0; i < accordionButton.length; i++) {
        accordionButton[i].onclick = function () {
            this.classList.toggle("active");
            panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        };
    }
})();