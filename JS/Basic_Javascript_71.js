function get_Date() { 
    alert(new Date().getHours());
    if (new Date().getHours() <20) {
        document.getElementById("Greeting").innerHTML="How are you today"
    }
}

