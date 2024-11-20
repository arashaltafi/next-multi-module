import React from 'react'
import { useUsers } from './hooks/useUsers'
import UserList from './components/UserList'

const UserPage = async () => {
    const users = await useUsers()

    return (
        <div>
            <h1>Users</h1>
            <UserList users={users} />
        </div>
    )
}

export default UserPage