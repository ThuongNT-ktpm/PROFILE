document.getElementById("contactForm").addEventListener("submit", function (e) {
  let valid = true;

  const firstNameInput = document.getElementById("firstName");
  const firstName = firstNameInput.value.trim();
  if (!firstName || firstName.length < 3 || firstName.length > 30) {
    document.getElementById("firstNameError").textContent =
      "First name is required (3-30 chars)";
    firstNameInput.classList.add("input-error");
    valid = false;
  } else {
    document.getElementById("firstNameError").textContent = "";
    firstNameInput.classList.remove("input-error");
  }

  const lastNameInput = document.getElementById("lastName");
  const lastName = lastNameInput.value.trim();
  if (!lastName || lastName.length < 3 || lastName.length > 30) {
    document.getElementById("lastNameError").textContent =
      "Last name is required (3-30 chars)";
    lastNameInput.classList.add("input-error");
    valid = false;
  } else {
    document.getElementById("lastNameError").textContent = "";
    lastNameInput.classList.remove("input-error");
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Valid email is required";
    emailInput.classList.add("input-error");
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
    emailInput.classList.remove("input-error");
  }

  const mobileInput = document.getElementById("mobile");
  const mobile = mobileInput.value.trim();
  const mobilePattern = /^\d{10}$/;
  if (!mobile || !mobilePattern.test(mobile)) {
    document.getElementById("mobileError").textContent =
      "Phone must be 10 digits, no spaces";
    mobileInput.classList.add("input-error");
    valid = false;
  } else {
    document.getElementById("mobileError").textContent = "";
    mobileInput.classList.remove("input-error");
  }

  s;
  const interests = document.querySelectorAll(
    'input[name="interests"]:checked'
  );
  if (interests.length === 0) {
    document.getElementById("interestsError").textContent =
      "Select at least one interest";
    valid = false;
  } else {
    document.getElementById("interestsError").textContent = "";
  }

  const commentInput = document.getElementById("comment");
  const comment = commentInput.value.trim();
  if (!comment || comment.length < 20) {
    document.getElementById("commentError").textContent =
      "Comment must be at least 20 characters";
    commentInput.classList.add("input-error");
    valid = false;
  } else {
    document.getElementById("commentError").textContent = "";
    commentInput.classList.remove("input-error");
  }

  if (!valid) {
    e.preventDefault();
    alert(
      "Vui lòng kiểm tra lại các trường thông tin và điền đầy đủ, chính xác!"
    );

    const firstError = document.querySelector(".input-error");
    if (firstError) firstError.focus();
  }
});

document.getElementById("menuBtn").onclick = function () {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
};

window.onclick = function (e) {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("menuBtn");
  if (
    nav.style.display === "block" &&
    !nav.contains(e.target) &&
    e.target !== btn &&
    !btn.contains(e.target)
  ) {
    nav.style.display = "none";
  }
};
