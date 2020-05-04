var preScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (preScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-15vw";

    }
    preScrollpos = currentScrollpos;
    if (currentScrollpos >= 0 && currentScrollpos <= 500) {
        document.getElementById("navbar").style.backgroundColor = "Transparent";
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(32, 178, 171, 0.548)";
    }
    if (currentScrollpos > 500) {
        document.getElementById("menulogo").style.display = "block";
    } else {
        document.getElementById("menulogo").style.display = "none";
    }

}