for(let x=1;x<=200;x++){
    if (x % 3 == 0 && x % 5 == 0)
        console.log("Undecided");
    else if(x % 3 == 0)
        console.log("Leni");
    else if(x % 5 == 0)
        console.log("Bong Bong");
    else
        console.log(x);
}