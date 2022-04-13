import React from 'react'
import zikyan from '../../images/zikyan_dp.jpg';


export default function Messages({own}) {
  return (
      <div className={own ?'chat-messages own':''}>
        <div className="chat-messages">
        <img className='chat-user-dp' src={zikyan} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur sample adipisicing elit. Dolorum modi ducimus</p>
        </div>
    </div>
  )
}
