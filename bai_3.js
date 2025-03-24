function isprime(n) {
    if (n < 2) return false;
    for (let i =2; i <= Math.sqrt(n);i++){
    if (n % i ===0) return false;
    }
    return true;
}

const n = 3;
if (isprime(n)){
    console.log("là số nguyên tố")
} else{
    console.log('Không là số nguyên tó')
}
