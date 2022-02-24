import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import "./twittervirals.css"
export default function TwitterVirals() {
  return (
    <div className="twitterPosts">
      <div className='posts'>
      <TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>
 <TwitterTweetEmbed
 tweetId='1494763670974480395'
 />

<TwitterTweetEmbed
 tweetId='1270093417922560002'
 />
 </div>
    </div>
  )
}