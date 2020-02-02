var menuIcon = document.getElementById("menuIcon");
var menuItem = document.getElementsByClassName("menuItem");
var menu = document.getElementById("menu");
var circleItems = document.getElementsByClassName("circle");
var closeIcon = document.getElementById("menuClose");

menu.style.display = "none";


menuIcon.addEventListener("click", switchMenu);
closeIcon.addEventListener("click", switchMenu);
for (var i = 0; i < menuItem.length; i++)
    menuItem[i].addEventListener("click", closeMenu);


for (var i = 0; i < circleItems.length; i++)
    circleItems[i].addEventListener("click", changePerson)

function changePerson() {
    for (var i = 0; i < circleItems.length; i++)
        circleItems[i].classList.remove("active");

    this.classList.add("active");
    var str = this.id;
    str = str.slice(1, str.length);
    var persons = document.getElementsByClassName("person");
    for (var i = 0; i < persons.length; i++)
        persons[i].style.display = "none";

    persons[str - 1].style.display = "block";


}

function switchMenu() {



    if (menu.style.display == "none") {
        menu.style.display = "block";
        closeIcon.style.visibility = "visible";
        menuIcon.style.visibility = "hidden";

    } else {
        menu.style.display = "none";
        menuIcon.style.visibility = "visible";
        closeIcon.style.visibility = "hidden";
    }
}

function closeMenu() {
    menu.style.display = "none";
    menuIcon.style.visibility = "visible";
    closeIcon.style.visibility = "hidden";
}
