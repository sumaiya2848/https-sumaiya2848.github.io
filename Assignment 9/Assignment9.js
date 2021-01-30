const john = {
    firstName: 'John',
    lastName: 'Willams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${this.calAge()} years old, and he has ${(this.calAge() >=16) ? 'a' : 'no'} driver's license.`
    }
}
console.log(`${john.firstName} ${john.lastName} has ${john.friends.length} friends, and his best friends is called ${john.friends[2]}.`);
console.log(john.getSummary());





var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal3");
var btn = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}