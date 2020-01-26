// question 1
let cat ={
    name: "Cryo",
    age: 5,
    complain: function(){
        console.log("Meow!");
    }
}

// question 2

const heading = document.querySelector("h3");

console.dir(heading);

const heading = document.querySelector(".Subheading");

console.dir(heading);

console.log(heading);

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("Subheading");

document.querySelector(".h3").add("subheading")

// question 5

const paragraphs = document.querySelector("p");

console.dir(paragraphs);

// question 6

const resultContainer = document.querySelector(".results")

resultContainer.innerHTML = "New paragraphs";
// question 7
function cat (catArray){
    console.log(catArray);
    for (let i =0; i < catArray.length; i++) {
        console.log(catArray[i]);
    }
}
const cats = [{
    name: "Blob",
    age: 10
},
{
    name: "Harold",
},
{
    name: "Blurt",
    age: 21
}];
cat(cats);
// question 8
const cats = [{
    name: "Blob",
    age: 10
},
{
    name: "Harold",
},
{
    name: "Blurt",
    age: 21
}];

function cat(catArray) {
    let catName = "";

    for (let i = 0; i < catArray.length; i++){
        catName += "<h5>" + catArray[i].name + "</h5>";
    }

    return catName;

}
console.log(cat(cats));
// question 9 

resultContainer.innerHTML = cat (cats);

// question 10

function cat(catArray){
    let catNames = "";
    for (let i =0; i< catArray.length; i++){

        if (catArray[i].age === undefined){

            catArray[i].age = "Age unknown";
        }
        catNames += "<div>" + "<h5>" + catArray[i].name + "</h5>" + "<p>" + catArray[i].age + "</p>" + "</div>"
    }
    return catNames;
}



