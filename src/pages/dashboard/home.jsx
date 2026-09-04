import React from 'react'

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
    return (
    <>
            <div className="container">
                <header>
                    <div className="left-side">
                        <div className="logo"><i class="fa-brands fa-facebook"></i></div>
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
                        <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                            alt="" height="40px" width="43px" className="profile" />
                    </div>
                </header>
                <div className="layout">
                    <div className="c-1">
                        <div className="pf"> <img
                            src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                            alt="" height="36px" width="36px" class="profile" style={{ marginBottom: "0px" }} />
                            <p style={{ paddingTop: "11px", paddingLeft: "10px" }} id="current-user">Saqib</p>
                        </div>
                        <div className="c-1-item"><img
                            src="https://tse1.mm.bing.net/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="" height="36px" width="36px" />
                            <p>Meta AI</p>
                        </div>
                        <div className="c-1-item"><i class="fa-solid fa-user-group"></i>
                            <p> Friends</p>
                        </div>
                        <div className="c-1-item"><i class="fa-regular fa-clock"></i>
                            <p> Memories</p>
                        </div>
                        <div class="c-1-item">
                            <i className="fa-solid fa-bookmark"></i>
                            <p>Saved</p>
                        </div>
                        <div className="c-1-item"><img
                            src="https://tse1.mm.bing.net/th/id/OIP.YS_9wm4vNQMwa8JPVlFsrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="" height="36px" width="36px" />
                            <p> Groups</p>
                        </div>
                        <div className="c-1-item"><img src="https://img.icons8.com/color/452/instagram-reel.png" alt=""
                            height="36px" width="36px" />
                            <p> Reels</p>
                        </div>

                        <div className="c-1-item"><img
                            src="https://freepngimg.com/download/mark_zuckerberg/70423-feed-web-mark-zuckerberg-facebook-newsfeed-news.png"
                            alt="" height="36px" width="36px" />
                            <p> Feeds</p>
                        </div>

                        <div className="c-1-item"><i class="fa-solid fa-circle-chevron-down"></i>
                            <p> See more</p>
                        </div>
                        <hr />
                        <h3>Your shortcuts</h3>
                        <div className="c-1-item"><img style={{ borderRadius: "8px" }}
                            src="https://tse1.mm.bing.net/th/id/OIP.N68URf7zchnPAy58Kmx5XQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="" height="36px" width="36px" />
                            <p> 8 ball pool</p>
                        </div>
                        <div className="c-1-item"><img style={{ borderRadius: "8px" }}
                            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Candy-Crush-Saga-Logo.jpg"
                            alt="" height="36px" width="36px" />
                            <p> Candy crush</p>
                        </div>
                        <div className="c-1-item"><img
                            src="https://tse1.mm.bing.net/th/id/OIP.Dm-bJie2e03ugW09R2KqogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="" height="36px" width="36px" />
                            <p>Subway Surfers</p>
                        </div>
                        <div className="c-1-item"><img
                            src="https://th.bing.com/th/id/OIP.62GxNL0Tbl5HMgqytlcqlwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="" height="36px" width="36px" />
                            <p>Talking Tom</p>
                        </div>
                        <div className="c-1-item"><img
                            src="https://th.bing.com/th/id/R.8b2d747ea2447c861ada12811966d8d8?rik=1IS40MU%2bpomMmQ&pid=ImgRaw&r=0"
                            alt="" height="36px" width="36px" />
                            <p>Traffic Rider</p>
                        </div>
                        <div className="c-1-item"><img src="https://wallpapercave.com/wp/wp9784149.jpg" alt="" height="36px"
                            width="36px" />
                            <p>PUBG</p>
                        </div>
                    </div>
                    <div className="c-2" id="postContainer">
                        <div className="postupload-box">
                            <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                                alt="" height="40px" width="43px" className="profile" />
                            <div className="post-box" id="post-popup">What's on your mind, L?</div>
                            <div className="icons"><i class="fa-solid fa-video"></i>
                                <i className="fa-solid fa-photo-film"></i>
                                <i className="fa-regular fa-face-smile"></i>
                            </div>
                        </div>
                        <div className="story-container" id="story-container">
                            <div className="user-story">
                                <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                                    alt="" />
                                <span><i className="fa-solid fa-circle-plus"></i></span>
                                <p>Create Story</p>
                            </div>

                            <div className="story">
                                <div className="profile-pic">
                                    <img src="https://avatars.githubusercontent.com/u/140997677?v=4" alt="" />
                                </div>
                                <div className="story-content">
                                    <p>Hasan Ashraf</p>
                                </div>


                            </div>
                        </div>
                        <div id="postSection"></div>
                        <div class="post">
                            <div class="channel-name">
                                <div class="user">
                                    <img src="https://randomuser.me/api/portraits/women/45.jpg"
                                        alt="" height="40px" width="37px" class="profile" />
                                    <p>Areeba Khan<span class="follow">.Follow</span> <br /> <span class="time">2 days ago at 21:10</span></p>
                                </div>
                                <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark" ></i>
                                </div>

                            </div>
                            <div id="content">
                                <span> Khamoshi…</span><span
                                    class="hidden"><br /> . <br /> . <br /> </span> <span id="expand"
                                        onclick="expand(this)">See more</span>
                            </div>
                            <hr class="line" />
                            <div class="post-img"><img
                                src="https://picsum.photos/seed/301/600/400"
                                alt="" height="" /></div>
                            <div class="post-reactions">
                                <div>
                                    <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" height="18px" width="18px"/>
                                        <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" height="18px" width="18px"/>

                                            <p>32</p>
                                        </div>
                                        <div>
                                            <p className='font-medium'>16 comments</p>
                                            <p className='font-medium'>12 share</p>
                                        </div>
                                </div>

                                <hr class="line"/>
                                    <div class="user-reaction">
                                        <i class="fa-regular fa-thumbs-up"  onclick="like(this)"></i> Like
                                        <i class="fa-regular fa-comment"></i> Comment
                                        <i class="fa-solid fa-share"></i> Share
                                    </div>
                            </div>          </div>
                        <div className="c-3">
                            <div className="padding-left: 30px;">
                                <h3>Birthdays</h3>
                                <p><b>Afzal </b> and <b>5 others </b> have their birthdays today.</p>
                            </div>
                            <hr className="margin-top: 10px; margin-left: 8%;" />
                            <h3 className="margin-left: 25px">Contacts</h3>
                            <div className="c-1-item"><img
                                src="https://tse1.mm.bing.net/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="" height="36px" width="36px" />
                                <p>Meta AI</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" class="profile" />
                                <p>Hasan</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Kamil</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Fareed</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Asad</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Adeel</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Maqsood</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Aqib</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Abdullah</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Daniyal</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Afzal</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Ahmed</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Haroon</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Ali</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://www.bing.com/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?w=181&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Taha</p>
                            </div>
                            <div className="c-1-item"><img
                                src="https://th.bing.com/th/id/OIP.Zfa1pSMXpN7vMztZDxuSdQHaLI?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="" height="36px" width="36px" class="profile" />
                                <p>Umer</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="create-post-popup" id="post">
                    <form id="create-post-form">
                        <div className="header">
                            <p>Create Post</p>

                            <i class="fa-solid fa-xmark" id="close"></i>

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
                            <textarea name="caption" id="caption" placeholder="What's on your mind, L?"></textarea>
                            <div className="post-obj"><input type="text" id="postLink" placeholder="Add to your post" />
                                <div class="img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeG49wBjTffQb5zI-mRmj7XukBVQC4m7dx6QFVALibt3HhZCYA0ZYVzz5e3r0bQCSoGv1GldkgYYt59nMcvRIFsm"
                                        alt="" height="24px" width="24px" />
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/b37mHA1PjfK.png?_nc_eui2=AeHdFiYuagW6y83b_bp3stUIc9ExYuivsM1z0TFi6K-wzdDoVBQEFVPzwYaJeWXul3O8Z2RVnycH8SRQsj-ERFbZ"
                                        alt="" height="24px" width="24px" />
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeGzlZWM--qo0b7LEGyamp9yfPQ6N5_OUfV89Do3n85R9XZAIdkBFAAmGZ7DmDrmx2-vVDNCoZn_QmpitHen9KWq"
                                        alt="" height="24px" width="24px" />
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/8zlaieBcZ72.png?_nc_eui2=AeHWlFkUAGiDxfGyj6JEXkwLu7QmHo__KE27tCYej_8oTetz36nyWmcI13p6y4TfgwsBSceXad_poPQ87qEvYcbG"
                                        alt="" height="24px" width="24px" />
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeGl7SNSdYrb21aBPMfSgpdpP2l9fgE6icQ_aX1-ATqJxJlflTs6JYcvTl1APCTrV_MD5Sc6Q7xDXAxZxM0hiAz-"
                                        alt="" height="24px" width="24px" />
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <button id="postBtn" disabled>Post</button>
                        </div>
                    </form>
                </div>

            </>
    )
}

 export default home
