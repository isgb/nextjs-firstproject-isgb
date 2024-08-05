'use client'

import { useRouter } from "next/navigation";

const Users = ({users}) => {

    const router = useRouter();

  return (
    <div>
        <ul>
        {
          users.map(user => (
            <li key={user.id}
                onClick={() => {
                    router.push(`/users/${user.id}`);
                }}
            >
              <h5>{user.id} {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
              <img src={user.avatar} alt={user.email} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users