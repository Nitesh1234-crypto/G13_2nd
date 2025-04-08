document.addEventListener("DOMContentLoaded", async () => {
    const usersList = document.getElementById("usersList");

    try {
        const response = await fetch("/users"); // Fetch users from the server
        const users = await response.json();

        // Populate user list
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            usersList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
