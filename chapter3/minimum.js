const minimum = (x, y) => {
    let minimum = 0; 
    if(x > y)
        minimum = y; 
    if(y > x)
        minimum = x;
    return minimum;
}
//debug
console.log(minimum(10,2));
console.log(minimum(5, 20));