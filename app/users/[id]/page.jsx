'use client'

import { useParams } from "next/navigation"

const UsersPage = () => {

  const params = useParams();
  console.log(params);

  return (
    <h1>User Details</h1>
  )
}

export default UsersPage