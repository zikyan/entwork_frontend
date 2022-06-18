import React from 'react'

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
          
          user?.first?
          <>
          <tr key={user?.id}>
          
          <td><img style={{marginRight:"10px"}} className='navbar-post-dp' src={user?.profilePicture || defaultImage} alt="" /></td>
            <td>
              <a className='search-post'  href={`/profile/${user?.username}`}>
                {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
              </a>
            </td>
          </tr>
          </>: user?.text?
          <tr>
              <a className='search-post' href={`/post/${user?._id}`}>
                <td>{user?.text}</td>
              </a>
          </tr>
        :
          <tr>
              <a className='search-post' href={`/job/${user?._id}`}>
                <td>{user?.caption}</td>
              </a>
          </tr>
          
            
            
                                    
          
        ))}
      </tbody>
    </table>
    </div>
  )
}
