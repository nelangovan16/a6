import axios from "axios";
export async function fetchUsers() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?results=30&exc=login"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
