//document.getElementById("count").innerText=5

// let c=0;

// console.log(c);

// let myage=21;
// console.log(myage);

let c=0;

function increment(){
    c+=1;
    console.log("click");
    document.getElementById("count").innerText=c;
}
function decrement() {
    if(c>0){
    c-=1;
    }
    document.getElementById("count").innerText=c;
}

function save() {
    let a= document.getElementById("no-of-entries");
    console.log(c);
    a.textContent+= c +" - "
    c=0;
    document.getElementById("count").innerText=0;
}

