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
  appointmentForm.addEventListener("submit", handleSubmit);

  let fullName = document.querySelector("[name='fullname']");
  let email = document.querySelector("[name='email']");
  let message = document.querySelector("[name='message']");
  let date = document.querySelector("[name='date']");
  let time = document.querySelector("[name='time']");

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function handleSubmit(event) {
    event.preventDefault();

    const validationElements = [
      {
        label: document.getElementById("nameError"),
        validLabelText: `Name ${fullName.value} was added`,
        errorLabelText: "Full Name should content 2 words",
        condition: fullName.value.split(" ").filter(Boolean).length >= 2,
      },
      {
        label: document.getElementById("emailError"),
        validLabelText: `Email ${email.value} was added`,
        errorLabelText: "Please enter a valid email address",
        condition: email.value.match(mailformat),
      },
      {
        label: document.getElementById("messageError"),
        validLabelText: "",
        errorLabelText: "Message should content min 3 words",
        condition: message.value.split(" ").filter(Boolean).length >= 3,
      },
      {
        label: document.getElementById("dateError"),
        validLabelText: "",
        errorLabelText: "Please select day",
        condition: date.value !== "",
      },
      {
        label: document.getElementById("timeError"),
        validLabelText: "",
        errorLabelText: "Please select time",
        condition: time.value !== "",
      },
    ];

    validationElements.forEach((element) => {
      validateFormElement(element);
    });
  }

  function toggleClass(element, classToAdd, classToRemove) {
    element.classList.add(classToAdd);
    element.classList.remove(classToRemove);
  }
  
  function validateFormElement({ label, validLabelText, errorLabelText, condition }) {
    if (condition) {
      label.textContent = validLabelText;
      toggleClass(label, "valid-message", "error-message");
    } else {
      label.textContent = errorLabelText;
      toggleClass(label, "error-message", "valid-message");
    }
  }
});
