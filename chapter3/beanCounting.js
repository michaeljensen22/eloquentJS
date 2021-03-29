const charCount = (string, ch) => {
    let count = 0;
    for(let i = 0; i <= string.length; i++)
        if(string[i] === ch){
            count++;  
        }
    return count;
}

console.log(charCount("How many Big Bears are there in Big Bear, CA?", "m"));