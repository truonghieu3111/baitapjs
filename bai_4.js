function Fibonacci(n){
    if(n===0||n===1){
        return 1;
    }
    let a =1, b=1;
    for (let i = 2; i<=n; i++){
        let temp = a+b;
        a=b;
        b=temp;
    }
    return b;
}
alert(Fibonacci(n));