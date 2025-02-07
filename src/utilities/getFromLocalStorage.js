
function getFromLocalStorage(key, defaultValue = null) {
    const storedValue = localStorage.getItem(key);
    try {
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return defaultValue;
    }
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
}


export {getFromLocalStorage, saveToLocalStorage};