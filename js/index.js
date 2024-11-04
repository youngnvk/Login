// Lấy thông tin người dùng từ local storage
const userLogin = JSON.parse(localStorage.getItem("userlogin")); 
const userloginelement = document.getElementById("user-login");
const loginItem = document.querySelector(".nav-item a[href='login.html']");
const logoutItem = document.getElementById("logout-item");

// Kiểm tra xem có người dùng hay không
if (userLogin) {
    // Nếu có, gán username vào phần tử DOM
    userloginelement.innerHTML = `Chào mừng, ${userLogin.username}!`;
    // Ẩn liên kết Đăng Nhập
    loginItem.style.display = "none";
    // Hiện nút Đăng Xuất
    logoutItem.style.display = "block";
} else {
    // Nếu không, xóa nội dung của phần tử
    userloginelement.innerHTML = "";
}

// Thêm sự kiện cho nút Đăng Xuất
document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("userlogin"); // Xóa thông tin đăng nhập
    userloginelement.innerHTML = ""; // Xóa tên người dùng
    loginItem.style.display = "block"; // Hiện lại liên kết Đăng Nhập
    logoutItem.style.display = "none"; // Ẩn nút Đăng Xuất
});
