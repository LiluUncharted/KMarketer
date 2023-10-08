document.addEventListener("DOMContentLoaded", function () {
  // Code to be executed when the DOM is ready
  let videoButton = document.getElementById("button-video");
  let videoBanner = document.getElementById("banner-video");

  videoButton.onclick = function () {
    if (videoBanner.paused) {
      videoBanner.play();
    } else {
      videoBanner.pause();
    }
  };

  let appointmentForm = document.getElementById("appointmentForm");
  appointmentForm.addEventListener("submit", validationForm);
  function validationForm (e) {
    e.preventDefault();
    let fullName = document.querySelector("[name='fullname']").value;
    let email = document.querySelector("[name='email']").value;
    let message = document.querySelector("[name='message']").value;
    let date = document.querySelector("[name='date']").value;
    let time = document.querySelector("[name='time']").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let dateError = document.getElementById("dateError");
    let timeError = document.getElementById("timeError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    dateError.innerHTML = "";
    timeError.innerHTML = "";

    if (fullName.split(" ").filter(Boolean).length < 2) {
      nameError.innerHTML = "Full Name should content 2 words";
      nameError.classList.add("error-message");
      nameError.classList.remove("valid-message");
    } else {
      nameError.innerHTML = `Name ${fullName} was added`;
      nameError.classList.add("valid-message");
      nameError.classList.remove("error-message");
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailError.classList.add("error-message");
      emailError.classList.remove("valid-message");
    } else {
      emailError.innerHTML = `Email ${email} was added`;
      emailError.classList.add("valid-message");
      emailError.classList.remove("error-message");
    }

    if (message.split(" ").filter(Boolean).length < 3) {
      messageError.innerHTML = "Message should content min 3 words";
      messageError.classList.add("error-message");
      messageError.classList.remove("valid-message");
    } else {
      messageError.innerHTML = `${message} was added`;
      messageError.classList.add("valid-message");
      messageError.classList.remove("error-message");
    }

    if (date === "") {
      dateError.innerHTML = "Please select day";
      dateError.classList.add("error-message");
      dateError.classList.remove("valid-message");
    } else {
      dateError.innerHTML = `Day ${date} was selected`;
      dateError.classList.add("valid-message");
      dateError.classList.remove("error-message");
    }

    if (time === "") {
      timeError.innerHTML = "Please select time";
      timeError.classList.add("error-message");
      timeError.classList.remove("valid-message");
    } else {
      timeError.innerHTML = `Time ${time} was selected`;
      timeError.classList.add("valid-message");
      timeError.classList.remove("error-message");
    }
  }
});
