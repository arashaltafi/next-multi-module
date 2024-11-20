import React from 'react';
import UserCard from './UserCard';

interface PropsType {
    users: {
        id: number,
        name: string,
    }[]
}

const UserList = (props: PropsType) => {
    return (
        <div>
            {props.users.map(user => (
                <UserCard key={user.id} name={user.name} />
            ))}
        </div>
    )
}

export default UserList