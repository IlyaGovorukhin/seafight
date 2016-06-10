window.onload = function() {
    var solo = document.getElementById("text");
    solo.innerHTML = "Proverca";
    console.log(solo.innerHTML);
    solo.setAttribute("class", "ufa");
    var atr = solo.getAttribute("class"),
        test = {
            name: "Dima"
        };
    test.old = 50;
    console.log(test);
    console.log(test.old);
    console.log(atr);

}
