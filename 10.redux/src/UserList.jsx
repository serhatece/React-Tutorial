import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from './redux/userSlice';
import User from './User';

function UserList() {

    const { users } = useSelector(store => store.user);
    console.log(users)

    const disppatch = useDispatch();

    useEffect(() => {
        disppatch(getAllUser());
    }, [])

    return (
        <div>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default UserList