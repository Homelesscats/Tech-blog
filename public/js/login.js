const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const usernameE1 = document.querySelector("#email-login").value.trim();
  const passwordE1 = document.querySelector("#password-login").value.trim();

  // Send a POST request to the API endpoint
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ usernameE1, passwordE1 }),
    headers: { "Content-Type": "application/json" },
  });

  // If successful, redirect the browser to the profile page
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to log in.");
  }
};

const signupFormHandler = async (event) => {};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

//
