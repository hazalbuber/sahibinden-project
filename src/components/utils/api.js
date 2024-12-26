// src/api.js
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

// GET Request
export const get = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST Request
export const post = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

// PUT Request
export const put = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`PUT request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

// DELETE Request
export const del = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`DELETE request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};
