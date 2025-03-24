function DieuKien(){
    let a = 0;
    for (let i = 1;i<=100;i++){
        for(let j=i;j<=100;j++){
            for(let k=j;k<=100;k++){
                if((i+j+k)%5===0 &&(i+j)%k!==0){
                    a++
                }
            }
        }
    }
    return a;
}
console.log(DieuKien());