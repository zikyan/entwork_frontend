import React from 'react'
import { Link } from 'react-router-dom'

export default function Table({data}) {
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  return (
    <div className='search-table'>
        <table className='search-result'>
      <tbody>
        {/* <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr> */}
        {data?.map((user) => (
          <tr key={user?.id}>
            <td><img style={{marginRight:"10px"}} className='navbar-post-dp' src={user?.profilePicture || defaultImage} alt="" /></td>
            <td><a style={{textDecoration:'none', color:'#000',fontWeight:'600'}} href={`/profile/${user?.username}`}>
                                    {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
                                    </a></td>
                                    <td>{user?.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
