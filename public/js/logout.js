// Create a function to handle logout
const logout = async function () {
  try {
    const response = await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log out");
    }
  } catch (error) {
    console.error("An error occurred during logout:", error);
    alert("Failed to log out");
  }
};

// Add an event listener to the logout link
document.querySelector("#logout-link").addEventListener("click", logout);
