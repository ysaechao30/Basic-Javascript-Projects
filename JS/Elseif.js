function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}