// Make sure baseUrl is defined
const baseUrl = "http://localhost:3001"; // Replace with your actual API URL
// or use environment variable: const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
