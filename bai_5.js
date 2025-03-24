function TamGiac(n){
    for(let i =1;i<=n;i++){
        let res = ' ';
        for(let j =1;j<=i;j++){
            let res = j + ' ';
        }
        console.log(res.trim());
    }
}
alert(TamGiac(5));