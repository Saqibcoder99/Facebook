import React, { useRef } from 'react'
import { useState } from 'react';
import { useUser } from '../../component/UserContext';
import { uploadImageToCloudinary } from '../../firebase/config';
import app, { db } from '../../firebase/config.js';
import { getFirestore, doc, setDoc, serverTimestamp, addDoc, collection } from "firebase/firestore";
import { userId } from '../../component/protected.jsx';

const createpost = ({ setPostPopup, getUsersData }) => {
    const { userData } = useUser();
    const fileInputRef = useRef(null);

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };
    const [postDisabled, setPostDisabled] = useState(true);
    const [postForm, setPostForm] = useState({
        postDescripton: "",
        postImg: ""
    })

    const saveDataIntoDB = async (url, data) => {
        try {
            await addDoc(collection(db, "posts"), {
                blogImgUrl: url,
                name: userData.firstName + " " + userData.lastName,
                description: data.postDescripton,
                authorId: userId,
                createdAt: serverTimestamp(),
            });

        } catch (error) {
            console.log(error);
        }
    };
    const postHandler = async () => {

        try {
            const img = postForm.postImg
                ? await uploadImageToCloudinary(postForm.postImg)
                : ""; 
            saveDataIntoDB(img, postForm)
            await getUsersData();
            setPostPopup(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="create-post-popup" >
            <div className="create-post-form">
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
                        setPostForm((prev) => ({ ...prev, "postDescripton": e.target.value }))
                        setPostDisabled(e.target.value.trim() == "")
                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                    }} placeholder="What's on your mind, L?"></textarea>
                    <div className="post-obj">
                        Add to your post
                        <div class="img">
                            <img src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png" alt="Photo" height="24px" width="24px" onClick={handlePhotoClick} />
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Friends" height="24px" width="24px" />
                            <img src="https://cdn-icons-png.flaticon.com/512/742/742751.png" alt="Feeling" height="24px" width="24px" />
                            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" height="24px" width="24px" />
                            <img src="https://cdn-icons-png.flaticon.com/512/126/126293.png" alt="Video" height="24px" width="24px" />
                            <i class="fa-solid fa-ellipsis"></i>

                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*,video/*"
                                onChange={(e) => { setPostForm((prev) => ({ ...prev, "postImg": e.target.files[0] })) }
                                }
                                hidden
                            />

                        </div>
                    </div>
                    <button onClick={postHandler} id="postBtn" disabled={postDisabled} className={!postDisabled ? "active" : ""} >Post</button>
                </div>
            </div>
        </div>
    )
}

export default createpost
