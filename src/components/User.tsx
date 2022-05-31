import React, { FC } from 'react';
import UserModal from './types/models';

// interface props {
//     name: string,
//     age?: number
//     addUser: () => void
// }

interface props {
    user: UserModal,
    addUser: (user: UserModal) => void
}

const User: FC<props> = ({ user, addUser }) => {


    return (
        <div>
            <h2>Hello from: {user.name} with Experience {user.email}</h2>
            <button onClick={() => addUser(user)}>addMe</button>
        </div>
    );
};

export default User;