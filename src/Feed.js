import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
        <StoryReel/>
        {/*storysection*/}
        <MessageSender/>
        {/*Message Sender*/}
        <Post 
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg"
        message="Hi, I am Kohli!!"
        timestamp="12:49PM"
        username="Virat Kohli"
        image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Virat_Kohli_26_Feb_2012.jpg"
        />
        <Post 
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg"
        message="Hi, I am Kohli!!"
        timestamp="12:49PM"
        username="Virat Kohli"
        />
        <Post 
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg"
        message="Hi, I am Kohli!!"
        timestamp="12:49PM"
        username="Virat Kohli"
        image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Virat_Kohli_26_Feb_2012.jpg"
        />
    </div>
  )
}

export default Feed
