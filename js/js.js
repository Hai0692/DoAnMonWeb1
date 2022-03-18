const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function check() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var checkemail = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == "" || pass == "" || user == "" || address == "" || phone == "") {
        alert("Vui lòng điền đầy đủ các thông tin")
    } else if (pass.length < 8) {
        alert("Mật khẩu phải có tối thiểu 8 kí tự")
    } else if (!filter.test(checkemail.value)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        checkemail.focus;
        return false;
    } else {
        alert('Đăng kí thành công')
    }

}