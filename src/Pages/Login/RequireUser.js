import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import Loading from '../Shared/Loading';

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [isUser, userLoading] = useUser(user);
    const location = useLocation();

    if (loading || userLoading) {
        return <Loading />
    }
    if (!user || !isUser) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default RequireUser;