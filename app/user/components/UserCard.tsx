import React from 'react';

interface PropsType {
    name: string
}

const UserCard = (props: PropsType) => {
    return (
        <div className="p-4 border rounded">
            <p>User: {props.name}</p>
        </div>
    )
}

export default UserCard