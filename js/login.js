const formlogin = document.getElementById("formlogin");
const dangnhap = document.getElementById("dangnhap");
// Validate dữ liệu đầu vào
formlogin.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị username và mật khẩu từ các input
    const usernameInput = document.getElementById("userName").value; // Cập nhật ID ở đây
    const passwordInput = document.getElementById("password").value;

    // Lấy dữ liệu người dùng từ local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem username và mật khẩu có tồn tại không
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        // Nếu tồn tại, đăng nhập thành công
        alert("Đăng nhập thành công!");
        // Chuyển hướng về trang chủ
        window.location.href = "/html/index2.html"; // Thay "trang-chu.html" bằng trang bạn muốn chuyển hướng đến
        dangnhap.style.dislay = none;
    } else {
        // Nếu không, thông báo cho người dùng
        alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng nhập lại!");
    }
});
