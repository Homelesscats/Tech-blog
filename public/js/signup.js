const signupFormHandler = async function (event) {
  event.preventDefault();

  // Select the form input elements
  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");

  try {
    // Send a POST request to create a new user
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Redirect to the dashboard if signup is successful
      document.location.replace("/dashboard");
    } else {
      // Handle signup failure with a user-friendly message
      const responseData = await response.json();
      alert(responseData.message || "Failed to sign up");
    }
  } catch (error) {
    console.error("An error occurred during signup:", error);
    alert("Failed to sign up");
  }
};

// Add a submit event listener to the signup form
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
