import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { Avatar, Icon } from '@mui/material'
import { Chat, EmojiFlags, EmojiPeople, ExpandMoreOutlined, Group, People, Person, Storefront, VideoLibrary } from '@mui/icons-material'
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow title = "Om Thakkar" src={Person}/>
      <SidebarRow title="Groups" 
      Icon = {People}/>
      <SidebarRow Icon = {EmojiFlags} title="Pages" />
      <SidebarRow title = "Friends" Icon = {EmojiPeople}/>
      <SidebarRow title="Messenger" Icon={Chat}/>
      <SidebarRow title="Market Place" Icon={Storefront}/>
      <SidebarRow title="Videos" Icon={VideoLibrary}/>
      <SidebarRow  title ="Expand" Icon={ExpandMoreOutlined} />
    </div>
  )
}

export default Sidebar
