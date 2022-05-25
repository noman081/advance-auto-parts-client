import { useEffect, useState } from "react"

const useUser = u => {
    const [user, setUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        const email = u?.email;
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data.user);
                    setUserLoading(false);
                })
        }
    }, [u])
    return [user, userLoading];
}
export default useUser;