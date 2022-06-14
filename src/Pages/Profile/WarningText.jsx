import React from 'react'

export default function WarningText({user}) {
  return (
//     <div className={`mainbar-box-design-lower`}>
//     <div className="mainbar-upper3">
//                     <div className="mainbar-post1"></div>
// <div className="mainbar-post-left">
// <div className="mainbar-post-username">
//             <div className="mainbar-post-belowname">
//             <p className='mainbar-post-time-tag'>Warnings : {user?.warning}</p>
//             </div>
//         </div>
// </div>
// </div>
// </div>

<div className="warning-text-parent">
    <p>You have given a <strong>Warning Number : {user?.warning}</strong> on some inappropriate content. After your 3rd warning all of your content will be erased</p>
</div>

  )
}
