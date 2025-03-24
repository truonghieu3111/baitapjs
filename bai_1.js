function xepLoaiHocLuc() {
    let d = prompt();
    if (d < 0 || d > 10) {
        return "Điểm không hợp lệ!";
    } else if (d >= 9) {
        return "Xuất sắc";
    } else if (d >= 8) {
        return "Giỏi";
    } else if (d >= 6.5) {
        return "Khá";
    } else if (d >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}
    alert(xepLoaiHocLuc());
