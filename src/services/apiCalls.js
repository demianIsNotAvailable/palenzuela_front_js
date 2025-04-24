
const API = "https://wrg-nrx.vercel.app/"

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${API}api/persons`, {
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
        const response = await fetch(`${API}api/persons`, {
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

export const updateUser = async (userId, userData) => {
    try {
        const response = await fetch(`${API}api/persons/${userId}`, {
        method: "PUT",
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
        console.error("Error updating user:", error);
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${API}api/persons/${userId}`, {
        method: "DELETE",
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
        console.error("Error deleting user:", error);
    }
}

export const createEvent = async (eventData) => {
    try {
        const response = await fetch(`${API}api/incidents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
        });
        if (!response.status === 200) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating event:", error);
    }
}

export const getAllEvents = async () => {
    try {
        const response = await fetch(`${API}api/incidents`, {
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
        console.error("Error fetching events:", error);
    }
}

export const updateEvent = async (eventId, eventData) => {
    try {
        const response = await fetch(`${API}api/incidents/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
        });
        if (!response.status === 200) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating event:", error);
    }
}

export const deleteEvent = async (eventId) => {
    try {
        const response = await fetch(`${API}api/incidents/${eventId}`, {
        method: "DELETE",
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
        console.error("Error deleting event:", error);
    }
}
