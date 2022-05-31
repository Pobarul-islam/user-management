import React, { useEffect, useState } from 'react';
import UserModal from './types/models';
import User from './User';



const Users = () => {

    const [users, setUsers] = useState<UserModal[]>([]);
    const [team, setTeam] = useState<UserModal[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleAddUser = (user: UserModal): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);

    }
    return (
        <div>
            <h2>My User</h2>
            <h2>Team size {team.length}</h2>
            {/* <User name="Rohomot" age={66} addUser={handleAddUser}></User> */}

            {
                users.map(user => <User
                    user={user}
                    addUser={handleAddUser}

                ></User>)
            }
        </div>
    );
};

export default Users;