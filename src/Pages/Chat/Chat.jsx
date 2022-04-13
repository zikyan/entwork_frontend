import React from 'react'
import './chat.css'
import zikyan from '../../images/zikyan_dp.jpg';
import faizan from '../../images/faizan.jpg';
import abdullah from '../../images/abdullah.jpg';
import EachChatPerson from './EachChatPerson';
import Messages from './Messages';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function Chat() {
  return (
    <div className='chat-container'>
        <div className="chat-upper-parent">
        <div className="chat-upper">
        <p style={{fontWeight:'500'}}>All Friends</p>
            <div className="chat-flex">
                <EachChatPerson />
                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={faizan} alt="" />
                    <div className="chat-below-image">
                        <p>Faizan</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={abdullah} alt="" />
                    <div className="chat-below-image">
                        <p>Abdullah</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={zikyan} alt="" />
                    <div className="chat-below-image">
                        <p>Zikyan</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={faizan} alt="" />
                    <div className="chat-below-image">
                        <p>Faizan</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={abdullah} alt="" />
                    <div className="chat-below-image">
                        <p>Abdullah</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={abdullah} alt="" />
                    <div className="chat-below-image">
                        <p>Abdullah</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={abdullah} alt="" />
                    <div className="chat-below-image">
                        <p>Abdullah</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={faizan} alt="" />
                    <div className="chat-below-image">
                        <p>Faizan</p>
                    </div>
                </div>

                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={faizan} alt="" />
                    <div className="chat-below-image">
                        <p>Faizan</p>
                    </div>
                </div>
                
                <div className="chat-single-friend">
                    <img style={{zIndex:'1'}} className='chat-user-dp' src={faizan} alt="" />
                    <div className="chat-below-image">
                        <p>Faizan</p>
                    </div>
                </div>

            </div>
            </div>
        </div>

        <div className="chat-lower">
            <div className="chat-chatting-person">
                <img className='chat-chatting-dp' src={zikyan} alt="" />
                <p className='chat-chatting-name'>Zikyan Rasheed</p>
            </div>
            <div className="chatBoxTop">
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
            </div>
            <div className="chat-type-message">
                <textarea name="" id="" cols="30" rows="1" placeholder='Type Your Message...'></textarea>
                <SendRoundedIcon style={{fontSize:'30px', backgroundColor:'#4E426D', padding:'5px', borderRadius:'100%', color:'#EFF3FA'}} />
            </div>
        </div>
    </div>
  )
}
