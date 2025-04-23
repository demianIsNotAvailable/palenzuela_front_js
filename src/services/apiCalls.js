
const API = "https://wrg-nrx.vercel.app/"

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${API}api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        });
        if (!response.status === 200) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

export const getAllUsers = async () => {
    try {
        const response = await fetch(`${API}api/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });
        if (!response.status === 200) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
