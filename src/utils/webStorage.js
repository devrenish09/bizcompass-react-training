export function getItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error("Failed to set item in localStorage");
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    console.error("Failed to remove item from localStorage");
  }
}

export function clearAll() {
  try {
    localStorage.clear();
  } catch {
    console.error("Failed to clear localStorage");
  }
}
