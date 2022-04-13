import React from 'react'
import zikyan from '../../images/zikyan_dp.jpg';

export default function EachChatPerson() {
  return (
    <div className="chat-single-friend">
        <img style={{zIndex:'1'}} className='chat-user-dp' src={zikyan} alt="" />
        <div className="chat-below-image">
            <p>Zikyan</p>
        </div>
    </div>
  )
}
