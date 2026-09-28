import React, { useEffect, useState } from 'react'
import Profilemenu from './profilemenu';
import Createpost from './createPost';
import Post from './fbPost';
import { useUser } from '../../component/UserContext';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


const home = () => {
    const stories = [
        {
            fullName: "Hasan Ashraf",
            profilePic: "https://avatars.githubusercontent.com/u/140997677?v=4",
            storyFile: "https://picsum.photos/400/700?random=1",
        },
        {
            fullName: "Liam Carter",
            profilePic: "https://i.pravatar.cc/150?img=2",
            storyFile: "https://picsum.photos/400/700?random=2",
        },
        {
            fullName: "Sophia Martinez",
            profilePic: "https://i.pravatar.cc/150?img=3",
            storyFile: "https://picsum.photos/400/700?random=3",
        },
        {
            fullName: "Noah Williams",
            profilePic: "https://i.pravatar.cc/150?img=4",
            storyFile: "https://picsum.photos/400/700?random=4",
        },
        {
            fullName: "Ava Brown",
            profilePic: "https://i.pravatar.cc/150?img=5",
            storyFile: "https://picsum.photos/400/700?random=5",
        },
        {
            fullName: "Olivia Anderson",
            profilePic: "https://i.pravatar.cc/150?img=6",
            storyFile: "https://picsum.photos/400/700?random=6",
        },
        {
            fullName: "Ethan Miller",
            profilePic: "https://i.pravatar.cc/150?img=7",
            storyFile: "https://picsum.photos/400/700?random=7",
        },
        {
            fullName: "Isabella Garcia",
            profilePic: "https://i.pravatar.cc/150?img=8",
            storyFile: "https://picsum.photos/400/700?random=8",
        },
        {
            fullName: "James Wilson",
            profilePic: "https://i.pravatar.cc/150?img=9",
            storyFile: "https://picsum.photos/400/700?random=9",
        },
        {
            fullName: "Mia Thompson",
            profilePic: "https://i.pravatar.cc/150?img=10",
            storyFile: "https://picsum.photos/400/700?random=10",
        },
        {
            fullName: "Benjamin Moore",
            profilePic: "https://i.pravatar.cc/150?img=11",
            storyFile: "https://picsum.photos/400/700?random=11",
        },
        {
            fullName: "Charlotte Taylor",
            profilePic: "https://i.pravatar.cc/150?img=12",
            storyFile: "https://picsum.photos/400/700?random=12",
        },
        {
            fullName: "Lucas Hernandez",
            profilePic: "https://i.pravatar.cc/150?img=13",
            storyFile: "https://picsum.photos/400/700?random=13",
        },
        {
            fullName: "Amelia Clark",
            profilePic: "https://i.pravatar.cc/150?img=14",
            storyFile: "https://picsum.photos/400/700?random=14",
        },
        {
            fullName: "Henry Lewis",
            profilePic: "https://i.pravatar.cc/150?img=15",
            storyFile: "https://picsum.photos/400/700?random=15",
        }
    ];
    const users = [
        {
            name: "Meta AI",
            profilePic: "https://pngimg.com/uploads/meta/meta_PNG4.png"
        },

        {
            name: "Ali Khan",
            profilePic: "https://i.pravatar.cc/150?img=2"
        },
        {
            name: "Ahmed Raza",
            profilePic: "https://i.pravatar.cc/150?img=3"
        },
        {
            name: "Usman Tariq",
            profilePic: "https://i.pravatar.cc/150?img=4"
        },
        {
            name: "Hamza Ahmed",
            profilePic: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Bilal Shah",
            profilePic: "https://i.pravatar.cc/150?img=6"
        },
        {
            name: "Saad Malik",
            profilePic: "https://i.pravatar.cc/150?img=7"
        },
        {
            name: "Hassan Ali",
            profilePic: "https://i.pravatar.cc/150?img=8"
        },
        {
            name: "Ayan Khan",
            profilePic: "https://i.pravatar.cc/150?img=9"
        },
        {
            name: "Danish Ahmed",
            profilePic: "https://i.pravatar.cc/150?img=10"
        },
        {
            name: "Zain Malik",
            profilePic: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Fahad Khan",
            profilePic: "https://i.pravatar.cc/150?img=12"
        },
        {
            name: "Arham Raza",
            profilePic: "https://i.pravatar.cc/150?img=13"
        },
        {
            name: "Shahzaib Ali",
            profilePic: "https://i.pravatar.cc/150?img=14"
        },
        {
            name: "Waleed Ahmed",
            profilePic: "https://i.pravatar.cc/150?img=15"
        },
        {
            name: "Talha Khan",
            profilePic: "https://i.pravatar.cc/150?img=16"
        }
    ];
    const menuItems = [
        {
            name: "Meta AI",
            image: "https://pngimg.com/uploads/meta/meta_PNG4.png"
        },
        {
            name: "Friends",
            image: "https://icons.iconarchive.com/icons/icojam/blueberry-basic/32/friends-group-icon.png"
        },
        {
            name: "Memories",
            image: "https://img.icons8.com/fluency/48/time-machine.png"
        },
        {
            name: "Saved",
            image: "https://img.icons8.com/fluency/48/bookmark-ribbon.png"
        },
        {
            name: "Groups",
            image: "https://tse1.mm.bing.net/th/id/OIP.YS_9wm4vNQMwa8JPVlFsrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            name: "Reels",
            image: "https://img.icons8.com/color/48/instagram-reel.png"
        },
        {
            name: "Feeds",
            image: "https://freepngimg.com/download/mark_zuckerberg/70423-feed-web-mark-zuckerberg-facebook-newsfeed-news.png"
        },
        {
            name: "See more",
            image: "https://icons.iconarchive.com/icons/pictogrammers/material/128/chevron-down-icon.png"
        }
    ];

    const shortcuts = [
        {
            name: "8 ball pool",
            image: "https://tse1.mm.bing.net/th/id/OIP.N68URf7zchnPAy58Kmx5XQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            name: "Candy crush",
            image: "https://tse4.mm.bing.net/th/id/OIP.0rKmxC1vD4wF0NUrW5sfAgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            name: "Subway Surfers",
            image: "https://i1.sndcdn.com/artworks-BF3U0mIFWlLTzBzp-1cgQ6w-t500x500.jpg"
        },
        {
            name: "Talking Tom",
            image: "https://m.media-amazon.com/images/I/71LUpZPpKBL.png"
        },
        {
            name: "Traffic Rider",
            image: "https://th.bing.com/th/id/R.8b2d747ea2447c861ada12811966d8d8?rik=1IS40MU%2bpomMmQ&pid=ImgRaw&r=0"
        },
        {
            name: "PUBG",
            image: "https://tse1.mm.bing.net/th/id/OIP.2Ct2m2GOy2NoN9-2mtSFkwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ];
    const [logout, setLogout] = useState(false)
    const [postPopup, setPostPopup] = useState(false)
    const [allUsers, setAllUsers] = useState([]);
    const { userData } = useUser();
    const getUsersData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            let allPost = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            setAllUsers(allPost);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUsersData();
    }, []);
    return (
        <div>
            <header>
                <div className="left-side">
                    <div className="logo"><i className="fa-brands fa-facebook"></i></div>
                    <div className="searchInput">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search  Facebook' />
                    </div>
                </div>
                <div className="middle-side">
                    <i className="fa-solid fa-house"></i>
                    <i className="fa-solid fa-circle-play"></i>
                    <i className="fa-solid fa-user-group"></i>
                    <i className="fa-solid fa-gamepad"></i>
                </div>
                <div className="right-side">
                    <i className="fa-solid fa-bars" id="notification"></i>
                    <i className="fa-brands fa-facebook-messenger" id="notification"></i>
                    <i className="fa-solid fa-bell" id="notification"></i>
                    <div>  <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                        alt="" height="40px" width="43px" className="profile" onClick={() => { setLogout(!logout) }} />
                    </div>
                </div>
            </header>
            <div className="layout">
                <div className="c-1">
                    <div className="pf"> <img
                        src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                        alt="" height="36px" width="36px" class="profile" style={{ marginBottom: "0px" }} />
                        <p style={{ paddingTop: "11px", paddingLeft: "10px" }} > {userData && `${userData.firstName} ${userData.lastName}`}</p>
                    </div>
                    {menuItems.map((item,index) => (<div class="c-1-item"><img
                        src={item.image}
                        alt="" height="36px" width="36px" />
                        <p>{item.name}</p>
                    </div>))}
                    <hr />
                    <h3>Your shortcuts</h3>
                    {shortcuts.map((shortcut) => (<div className="c-1-item"><img
                        src={shortcut.image}
                        alt="" height="36px" width="36px" className='rounded-[12px]' />
                        <p>{shortcut.name}</p>
                    </div>))}

                </div>
                <div className="c-2">
                    <div className="postupload-box" >
                        <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                            alt="" height="40px" width="43px" className="profile" />
                        <div className="post-box" onClick={() => { setPostPopup(true) }}>What's on your mind, L?</div>
                        <div className="icons"><i class="fa-solid fa-video"></i>
                            <i className="fa-solid fa-photo-film"></i>
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                    </div>
                    <div className="story-container" >
                        <div className="user-story">
                            <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                                alt="" />
                            <span><i className="fa-solid fa-circle-plus"></i></span>
                            <p>Create Story</p>
                        </div>
                        {stories.map((story, index) => (
                            <div className="story" style={{ backgroundImage: `url(${story.storyFile})` }}
                            >
                                <div className="profile-pic">
                                    <img src={story.profilePic} alt="" />
                                </div>
                                <div className="story-content">
                                    <p>{story.fullName}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div>
                        <Post data={allUsers}  />
                    </div>
                </div>


                <div className="c-3">
                    <div className="padding-left: 30px;">
                        <h3>Birthdays</h3>
                        <p><b>Afzal </b> and <b>5 others </b> have their birthdays today.</p>
                    </div>
                    <hr className="margin-top: 10px; margin-left: 8%;" />
                    <h3 className="margin-left: 25px">Contacts</h3>
                    {users.map((user) => (<div className="c-1-item"><img
                        src={user.profilePic}
                        alt="" height="36px" width="36px" class="profile" />
                        <p>{user.name}</p>
                    </div>))}

                </div>
            </div>
            {logout ? <Profilemenu /> : null}
            {postPopup ? <Createpost setPostPopup={setPostPopup} getUsersData={getUsersData} /> : null}

        </div>
    )
}

export default home
