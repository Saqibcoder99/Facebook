function like(e) {
        if (e.classList.contains("fa-regular")) {
                e.classList.replace("fa-regular", "fa-solid");
                e.style.color="#1a82f5"
            } else {
                e.classList.replace("fa-solid", "fa-regular");
                e.style.color="#6d7073"
            }
}
const postData = [
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    userName: "Areeba Khan",
    time: "2 days ago at 21:10",
    content: "Khamoshi…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/301/600/400",
    reactions:32,
    comments:16,
    shares:12
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Hamza Ali",
    time: "today at 09:05",
    content: "Samajhne wala koi nahi…",
    hiddenContent: "<br />Kabhi kabhi lagta hai<br />sab keh kar bhi kuch nahi kaha<br />",
    postImg: "https://picsum.photos/seed/302/600/400",
     reactions:22,
    comments:12,
    shares:8
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/68.jpg",
    userName: "Sara Malik",
    time: "yesterday at 18:42",
    content: "Dil bojhal sa hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/303/600/400",
     reactions:12,
    comments:14,
    shares:5
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/54.jpg",
    userName: "Usman Raza",
    time: "3 days ago at 23:01",
    content: "Ajeeb si tanhai hai…",
    hiddenContent: "<br />Is bheer mein bhi<br />khud ko akela mehsoos karta hoon<br />",
    postImg: "https://picsum.photos/seed/304/600/400",
     reactions:42,
    comments:26,
    shares:18
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    userName: "Noor Fatima",
    time: "today at 01:18",
    content: "Khud se hi baatein…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/305/600/400",
     reactions:9,
    comments:16,
    shares:12
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/77.jpg",
    userName: "Bilal Ahmed",
    time: "4 days ago at 16:55",
    content: "Sab theek hai… kehne ko.",
    hiddenContent: "<br />Par andar se<br />sab bikhar chuka hai<br />",
    postImg: "https://picsum.photos/seed/306/600/400",
     reactions:62,
    comments:46,
    shares:26
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/39.jpg",
    userName: "Hira Shah",
    time: "yesterday at 11:09",
    content: "Andar kuch toot sa gaya hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/307/600/400",
     reactions:82,
    comments:66,
    shares:52
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/19.jpg",
    userName: "Faizan Noor",
    time: "2 days ago at 07:30",
    content: "Neend bhi rooth gayi hai…",
    hiddenContent: "<br />Raat bhar jaag kar bhi<br />khud ko nahi samajh paaya<br />",
    postImg: "https://picsum.photos/seed/308/600/400",
     reactions:98,
    comments:76,
    shares:85
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/52.jpg",
    userName: "Maryam Iqbal",
    time: "today at 13:47",
    content: "Bas chal raha hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/309/600/400",
     reactions:2,
    comments:0,
    shares:0
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/41.jpg",
    userName: "Saad Hussain",
    time: "5 days ago at 20:22",
    content: "Dil thak sa gaya hai…",
    hiddenContent: "<br />Roz muskurana bhi<br />ek bojh ban jata hai<br />",
    postImg: "https://picsum.photos/seed/310/600/400",
     reactions:52,
    comments:46,
    shares:32
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/60.jpg",
    userName: "Anum Sheikh",
    time: "yesterday at 00:59",
    content: "Khud ko sambhal rahe hain…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/311/600/400",
     reactions:12,
    comments:6,
    shares:2
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/88.jpg",
    userName: "Zeeshan Akram",
    time: "3 days ago at 10:14",
    content: "Dil bhi chup hai…",
    hiddenContent: "<br />Kuch baatein<br />lafzon mein nahi aati<br />",
    postImg: "https://picsum.photos/seed/312/600/400",
     reactions:82,
    comments:56,
    shares:32
  }
];
const stories = [
  {
    fullName: "Emma Johnson",
    profilePic: "https://i.pravatar.cc/150?img=1",
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

function expand(e) {
  let content = e.previousElementSibling;
  let contents = content.previousElementSibling;
  let postHeight = content.parentElement.parentElement;
  let btn = e;
  if (btn.innerHTML.toLowerCase() == "see more") {
    e.previousElementSibling.classList.remove("hidden")
    e.previousElementSibling.classList.add("show");
    contents += e.previousElementSibling
    btn.innerHTML = "See less"
  }
  else {
    e.previousElementSibling.classList.remove("show")
    e.previousElementSibling.classList.add("hidden")
    contents += e.previousElementSibling;
    btn.innerHTML = "See more"
  }
}
let storyContainer = document.getElementById("story-container")
stories.map((data) => {
  storyContainer.innerHTML += `<div class="story" style="background-image:url(${data.storyFile}) ;">
                    <div class="profile-pic">
                        <img src=${data.profilePic} alt="">
                    </div>
                    <div class="story-content">
                        <p>${data.fullName}</p>
                    </div>
                </div>`
})
let postContainer = document.getElementById("postContainer")
postData.map((data) => {
  postContainer.innerHTML += ` <div  class="post">
                    <div class="channel-name">
                    <div class="user">  
                     <img src=${data.profilePhoto}
                            alt="" height="40px" width="37px" class="profile">
                          <p>${data.userName}<span class="follow">.Follow</span> <br /> <span class="time">${data.time}</span></p>
                     </div>
                           <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark" onclick="postClear(this)"></i>
                            </div>

                        </div>
                    <div id="content">
                        <span> ${data.content}</span><span
                            class="hidden">${data.hiddenContent} </span> <span id="expand"
                            onclick="expand(this)">See more</span>
                    </div>
                    <hr / class="line">
                    <div class="post-img"><img
                            src=${data.postImg}
                            alt="" height=""></div>
                                             <div class="post-reactions">
                                <div>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                    <p>${data.reactions}</p>
                                </div>
                                <div>
                                    <p>${data.comments} comments</p>
                                    <p>${data.shares} share</p>
                                </div>
                            </div>
           
                    <hr class="line">
                    <div class="user-reaction">
                        <i   class="fa-regular fa-thumbs-up" class="fa-solid fa-thumbs-up" onclick="like(this)"></i> Like
                        <i class="fa-regular fa-comment"></i> Comment
                        <i class="fa-solid fa-share"></i> Share
                    </div>
                </div>`
})
let postClear=(e)=>{
  e.parentElement.parentElement.parentElement.remove()
}

