function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to legally and responsibly drink";
    }
    else {
        Vote = "You are not old enough to drink";
    }
    document.getElementById("How_old_are_you?").innerHTML= Vote;
}