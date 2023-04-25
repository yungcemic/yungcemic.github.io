const interval = setInterval(function() {
    if (document.getElementById("text").innerHTML == "OMG") {
        document.getElementById("text").innerHTML = "yungcemic";
        return;
    }
    document.getElementById("text").innerHTML = "OMG";
}, 5000);
