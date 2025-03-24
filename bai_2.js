function kiemTraNamNhuan() {
    nam = prompt();
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
        return true; 
    }
    return false; 

    }

if(kiemTraNamNhuan()){
    console.log("Năm Nhuận");
} else{
    console.log("Không Phải Năm Nhuận");
}
