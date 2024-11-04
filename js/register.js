const formRegister = document.getElementById("register");
const username = document.getElementById("userName");
const password = document.getElementById("password");
const Repassword = document.getElementById("Repassword");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const userlocal = JSON.parse(localStorage.getItem("users")) || [];

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ẩn các thông báo lỗi trước khi kiểm tra
    error1.style.display = "none";
    error2.style.display = "none";
    error3.style.display = "none";

    let valid1 = false;
    let valid2 = false;
    let valid3 = false;

    // Kiểm tra tên người dùng
    if (!username.value) {
        error1.style.display = "block";
        error1.innerHTML = "Tên người dùng không được để trống.";
    } else if (userlocal.some(user => user.username === username.value)) {
        error1.style.display = "block";
        error1.innerHTML = "Tên người dùng đã tồn tại.";
    } else {
        valid1 = true;
    }

    // Kiểm tra mật khẩu
    if (!password.value) {
        error2.style.display = "block";
        error2.innerHTML = "Mật khẩu không được để trống.";
    } else {
        valid2 = true;
    }

    // Kiểm tra xác nhận mật khẩu
    if (!Repassword.value) {
        error3.style.display = "block";
        error3.innerHTML = "Vui lòng nhập lại mật khẩu.";
    } else if (password.value !== Repassword.value) {
        error3.style.display = "block";
        error3.innerHTML = "Mật khẩu không khớp.";
    } else {
        valid3 = true;
    }

    // Kiểm tra tất cả các trường hợp hợp lệ
    if (valid1 && valid2 && valid3) {
        const user = {
            userID: Math.ceil(Math.random() * 1000000000),
            username: username.value,
            password: password.value, // Chỉ lưu mật khẩu, không lưu Repassword
        };
        userlocal.push(user);
        localStorage.setItem("users", JSON.stringify(userlocal));
        // Chuyển hướng đến trang chính
        window.location.href = "/html/login.html";
    }
});
