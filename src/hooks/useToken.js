import { useEffect, useState } from 'react';
const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const role = 'user';
        const currentUser = { email: email, role };
        if (email) {
            fetch(`https://advanceautocar.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.token);
                    setToken(data);
                })
        }
    }, [user])

    return [token];
}

export default useToken;