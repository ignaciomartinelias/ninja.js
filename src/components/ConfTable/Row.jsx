import React from 'react'

const Row = ({ row }) => {
  return (
    <tr>
      <td>
        <span>
          {row.title}
        </span><br />
        <div className="conf-data">
        <small>{row.location || 'Online'}</small>
        <small>{row.date}</small>
        </div>
      </td>
    </tr>
  )
}

export default Row
