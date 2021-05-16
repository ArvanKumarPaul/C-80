var names_of_people = [""];

function Submit() {
var Guest_name = document.getElementById("name_input").value;
names_of_people.push(Guest_name);
document.getElementById("submit_answer").innerHTML = names_of_people;
document.getElementById("sort_button").style.display = "inline";
}

function Show() {
    var Guest_name = document.getElementById("name_input").value;
    names_of_people.push(Guest_name);
    document.getElementById("show_answer").innerHTML = names_of_people;
}

function Sort() {
    Guest_name.sort();
    document.getElementById("sort_answer").innerHTML = Guest_name;
}

function Search() {
    var s = document.getElementById("search_input").value;
    var found = 0;
    var j;
    for(j=0, j<Guest_name.length; j++;) {

        if(s==Guest_name[j]) {
           
           found = found + 1;

        }

    }

    document.getElementById("search_answer").innerHTML = "name found" + found + "time/s";
    console.log("name found" + found + "time/s");
}