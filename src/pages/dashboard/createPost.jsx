import React from 'react'
import { useState } from 'react';
const createpost = ({ setPostPopup }) => {
    const [postDisabled, setPostDisabled] = useState(true);
    return (
        <div className="create-post-popup" >
            <form id="create-post-form">
                <div className="header">
                    <p>Create Post</p>

                    <i class="fa-solid fa-xmark" onClick={() => { setPostPopup(false) }}></i>

                </div>

                <div className="create-post-content">
                    <div className="username">
                        <div class="user-pf"> <img
                            src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                            alt="" height="40px" width="43px" class="profile" /></div>
                        <div class="name">
                            <p id="loggedin-username"></p>
                            <p> <i class="fa-solid fa-user-group"></i>Friends<i class="fa-solid fa-caret-down"></i></p>
                        </div>
                    </div>
                    <textarea name="caption" onInput={(e) => {
                        setPostDisabled(e.target.value.trim() == "")
                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                    }} placeholder="What's on your mind, L?"></textarea>
                    <div className="post-obj"><input type="text" id="postLink" placeholder="Add to your post" />
                        <div class="img">
                            <img src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png" alt="Photo"  height="24px" width="24px"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Friends"  height="24px" width="24px"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/742/742751.png" alt="Feeling"  height="24px" width="24px"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location"  height="24px" width="24px"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/126/126293.png" alt="Video"  height="24px" width="24px"/>                         
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <button id="postBtn" disabled={postDisabled} className={!postDisabled ? "active" : ""}>Post</button>
                </div>
            </form>
        </div>
    )
}

export default createpost
