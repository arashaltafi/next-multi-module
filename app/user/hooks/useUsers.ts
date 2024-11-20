
export const useUsers = async () => {
    const response = await fetch('http://localhost:3000/user/api/getUsers');
    const res = await response.json()
    return res
};