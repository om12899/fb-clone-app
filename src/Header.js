import React from "react";
import "./Header.css"

import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from "@mui/icons-material";
import { Avatar, Icon, IconButton } from "@mui/material";
function Header() {
    return (
        <div className="header">
           <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt=""
                />
                <div className="header__input">
                    <Search/>
                    <input placeholder="Search" type="text"/>

                </div>
            </div>
            <div className="header__centre">

                <div className="header__option 
                header__option--active">
                    <Home fontSize="large"/>
                </div>
                <div className="header__option">
                    <Flag fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Om Thakkar</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>

            </div>
        </div>
        
        );
    
}

export default Header