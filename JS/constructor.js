function person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
    var myFather = new person("Fou", "Saechao", 54, "brown");
    document.getElementById("father").innerHTML = "My father is" +  myFather.firstName +  myFather.lastName + ".";
