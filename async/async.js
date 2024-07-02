async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке данных пользователя: ${response.status}`);
        }

        const userData = await response.json();

        return userData;
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        throw error;
    }
}

fetchUserData(1)
    .then(userData => console.log('Данные о пользователе:', userData))
    .catch(error => console.error('Ошибка:', error));
