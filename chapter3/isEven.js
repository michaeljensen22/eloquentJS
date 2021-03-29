const isEven = x => {
    if(x === 0){
        return true;
    }
    else if(x === 1){
        return false; 
    }
    else if(x < 0){
        return -x; 
    }
    else{
        x = x - 2; 
        return isEven(x);
    }
}



//sample usage
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(1));
console.log(isEven(20));