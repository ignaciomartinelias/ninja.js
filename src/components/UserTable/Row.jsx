import React from 'react'

const UserRow = ({ row }) => {
  console.log(row)
  return (
    <tr>
      <td>
        <a href={row.website}>
          {row.name}
        </a><br />
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

export default UserRow
