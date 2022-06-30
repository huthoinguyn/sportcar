const regEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const emailInput = document.querySelector(".form .form-ip .email");
emailInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    e.target.style.border = "3px solid transparent";
  } else if (regEmail.test(e.target.value)) {
    e.target.style.border = "3px solid #06d6a0";
  } else {
    e.target.style.border = "3px solid #f25c54";
  }
});

const regPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const phoneInput = document.querySelector(".form .form-ip .phone");
phoneInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    e.target.style.border = "3px solid transparent";
  } else if (regPhone.test(e.target.value)) {
    e.target.style.border = "3px solid #06d6a0";
  } else {
    e.target.style.border = "3px solid #f25c54";
  }
});

const regName =
  /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
const nameInput = document.querySelector(".form .form-ip .name");
nameInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    e.target.style.border = "3px solid transparent";
  } else if (regName.test(e.target.value)) {
    e.target.style.border = "3px solid #06d6a0";
  } else {
    e.target.style.border = "3px solid #f25c54";
  }
});
