//Setting the variables to be called and put into personnelText box on click.
var staff1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet urna non turpis venenatis scelerisque. Suspendisse scelerisque vestibulum tempus. Vestibulum varius at urna porta malesuada. Nunc ac luctus nisl. Mauris vestibulum, augue quis suscipit scelerisque, mi lorem viverra libero, vel.";
var staff2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio quam. Proin aliquam vitae nulla tincidunt faucibus. Vestibulum semper libero ut justo vehicula volutpat. Maecenas quis sapien in nunc tempor finibus. Sed vel tincidunt ligula. Morbi accumsan odio eu.";
var staff3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum purus. Curabitur mollis ac nibh vitae aliquam. Curabitur ac rutrum lectus, nec rutrum mauris. Donec ante ligula, aliquam id dignissim varius, tempus non turpis. Phasellus eu tempus ex. Suspendisse.";
var staff4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui nisi, rhoncus a lacus at, sagittis mattis sapien. Sed quis maximus arcu. Donec in mauris et eros vehicula accumsan. Proin ut fringilla nibh, eget mattis nunc. Sed vehicula, justo a.";

//takes 'event' which is where you click and parses in the text associated with that 'event' (image id)
window.onclick = function (event) {

    if (event.target == staffIMG1) {
        document.getElementById("personnelText").innerHTML = staff1;
    }
    else if (event.target == staffIMG2) {
        document.getElementById("personnelText").innerHTML = staff2;
    }
    else if (event.target == staffIMG3) {
        document.getElementById("personnelText").innerHTML = staff3;
    }
    else if (event.target == staffIMG4) {
        document.getElementById("personnelText").innerHTML = staff4;
    }
}