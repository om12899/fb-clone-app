import React, { useState } from 'react'
import "./messagesender.css"
import { Avatar } from '@mui/material'
import { InsertEmoticon, Photo, PhotoLibrary, Videocam } from '@mui/icons-material';

function MessageSender() {

    const [input, setInput] = useState(' ')

    const handleSubmit = e=>{
        e.preventDefault();
    }
  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar/>
            <form>
                <input className='messageSender__input' value={input}
                onChange={e=>setInput(e.target.value)}
                 placeholder={"What's on your mind??"} style={{padding: "10px"}} type='text'/>
                <button name='ImageUploadButton' className='messageSender__image--upload' style={{padding: "10px"}} title='Upload Image'><PhotoLibrary style={{color: "Green"}}/></button>
                <button  name='SubmitButton' className='messageSender__Submit' onClick={handleSubmit} type='submit' title='Hidden Submit'>Hidden Submit</button>
            </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <Videocam style={{color: "red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className='messageSender__option'>
                <PhotoLibrary style={{color: "Green"}}/>
                <h3>Photo</h3>
            </div>
            <div className='messageSender__option'>
                <InsertEmoticon style={{color: "Orange"}}/>
                <h3>Activity</h3>
            </div>

        </div>
    </div>
  )
}

export default MessageSender
