function mash(){
    let word = "house";
    return word
}
answer=mash()
console.log(answer)


// function getHome(){;
   // let array = ("Mansion", "Apartment", "Shack", "Home");
   // return array  
//}
//response=getHome()
//console.log(response)


function getHome(){
    let homes = ["Mansion", "Apartment", "Shack", "Home"];
    const list = process.argv[2];
    if(item == undefined || !isNaN(item)){
        throw "Home must be added to list"
    }
homes.push(item);
let random = Math.random() * 5;
let real = Math.floor(random);
let newHome = homes[real];
    return newHome;
}



function getChildrenCount(){
    const first = Math.random();
    console.log(first);
    const second = first * 100;
    console.log(second);
    const third = Math.floor(second);
    console.log(third)

}
getChildrenCount()


function mash(){
    let statement 
}