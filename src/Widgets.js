import React from 'react'
import "./Widgets.css"
function Widgets() {
  return (
    <div className='widgets' style={{ margin: '10px 0' }}>
  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbecharebachelor&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
  width="340" height="100%" 
  style={{ border: "none", overflow: "auto", scrollbarWidth: "thin", scrollbarColor: "#ccc #fff" }} 
  allow="encrypted-media"></iframe>
</div>
  )
}

export default Widgets
