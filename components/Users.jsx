'use client'

import { useRouter } from "next/navigation";

const Users = ({users}) => {

    const router = useRouter();

  return (
    <div>
        <ul className="list-group">
        {
          users.map(user => (
            <li key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                onClick={() => {
                    router.push(`/users/${user.id}`);
                }}
            >
              <h5>{user.id} {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
              <img src={user.avatar} alt={user.email} style={{ borderRadius: "50%"}}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users