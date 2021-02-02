window.onload = function () {
    showSummary();
}
//Adds the cost of each item plus delivery and shows the customer the total, also called on the submit button incase they make changes.
function price() {
    var itemPrice = document.getElementsByName("item");
    var total = 0.0;

    for (var i = 0; i < itemPrice.length; i++) {
        if (itemPrice[i].checked) {
            total = total + parseFloat(itemPrice[i].value);
        }
    }
    total = total + parseFloat(document.getElementById("delivery").value);
    document.getElementById("totalCost").value = total;
}
//Gets info from the URL parameters and prints them as a summary.
function showSummary() {
    let params = new URLSearchParams(location.search);
    document.getElementById("summary").innerHTML =
        "First name: " + params.get("fName") +
        "<br />Last name: " + params.get("lName") +
        "<br />Total cost: $" + params.get("totalCost") +
        "<br />Email address: " + params.get("email") +
        "<br />Comment: " + params.get("comments");
}