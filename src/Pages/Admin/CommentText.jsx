import React from 'react'

export default function CommentText({comment}) {
  return (
    <div>
        {comment?.text}
    </div>
  )
}
