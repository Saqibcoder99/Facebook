let storyContainer = document.getElementById("story-container")
let postContainer = document.getElementById("postContainer")
let postSection = document.getElementById("postSection")
let currentUser=document.getElementById("current-user")
const user = JSON.parse(localStorage.getItem("userData"))
currentUser.innerHTML=`${user.name} ${user.surName}`;
function like(e) {
  if (e.classList.contains("fa-regular")) {
    e.classList.replace("fa-regular", "fa-solid");
    e.style.color = "#1a82f5"
  } else {
    e.classList.replace("fa-solid", "fa-regular");
    e.style.color = "#6d7073"
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
    reactions: 32,
    comments: 16,
    shares: 12
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Hamza Ali",
    time: "today at 09:05",
    content: "Samajhne wala koi nahi…",
    hiddenContent: "<br />Kabhi kabhi lagta hai<br />sab keh kar bhi kuch nahi kaha<br />",
    postImg: "https://picsum.photos/seed/302/600/400",
    reactions: 22,
    comments: 12,
    shares: 8
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/68.jpg",
    userName: "Sara Malik",
    time: "yesterday at 18:42",
    content: "Dil bojhal sa hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/303/600/400",
    reactions: 12,
    comments: 14,
    shares: 5
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/54.jpg",
    userName: "Usman Raza",
    time: "3 days ago at 23:01",
    content: "Ajeeb si tanhai hai…",
    hiddenContent: "<br />Is bheer mein bhi<br />khud ko akela mehsoos karta hoon<br />",
    postImg: "https://picsum.photos/seed/304/600/400",
    reactions: 42,
    comments: 26,
    shares: 18
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    userName: "Noor Fatima",
    time: "today at 01:18",
    content: "Khud se hi baatein…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/305/600/400",
    reactions: 9,
    comments: 16,
    shares: 12
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/77.jpg",
    userName: "Bilal Ahmed",
    time: "4 days ago at 16:55",
    content: "Sab theek hai… kehne ko.",
    hiddenContent: "<br />Par andar se<br />sab bikhar chuka hai<br />",
    postImg: "https://picsum.photos/seed/306/600/400",
    reactions: 62,
    comments: 46,
    shares: 26
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/39.jpg",
    userName: "Hira Shah",
    time: "yesterday at 11:09",
    content: "Andar kuch toot sa gaya hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/307/600/400",
    reactions: 82,
    comments: 66,
    shares: 52
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/19.jpg",
    userName: "Faizan Noor",
    time: "2 days ago at 07:30",
    content: "Neend bhi rooth gayi hai…",
    hiddenContent: "<br />Raat bhar jaag kar bhi<br />khud ko nahi samajh paaya<br />",
    postImg: "https://picsum.photos/seed/308/600/400",
    reactions: 98,
    comments: 76,
    shares: 85
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/52.jpg",
    userName: "Maryam Iqbal",
    time: "today at 13:47",
    content: "Bas chal raha hai…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/309/600/400",
    reactions: 2,
    comments: 0,
    shares: 0
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/41.jpg",
    userName: "Saad Hussain",
    time: "5 days ago at 20:22",
    content: "Dil thak sa gaya hai…",
    hiddenContent: "<br />Roz muskurana bhi<br />ek bojh ban jata hai<br />",
    postImg: "https://picsum.photos/seed/310/600/400",
    reactions: 52,
    comments: 46,
    shares: 32
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/women/60.jpg",
    userName: "Anum Sheikh",
    time: "yesterday at 00:59",
    content: "Khud ko sambhal rahe hain…",
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: "https://picsum.photos/seed/311/600/400",
    reactions: 12,
    comments: 6,
    shares: 2
  },
  {
    profilePhoto: "https://randomuser.me/api/portraits/men/88.jpg",
    userName: "Zeeshan Akram",
    time: "3 days ago at 10:14",
    content: "Dil bhi chup hai…",
    hiddenContent: "<br />Kuch baatein<br />lafzon mein nahi aati<br />",
    postImg: "https://picsum.photos/seed/312/600/400",
    reactions: 82,
    comments: 56,
    shares: 32
  }
];
//const dataPosts=[]
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
function posts() {
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || postData;
  postSection.innerHTML = ""
  allPosts.map((data) => {
    postSection.innerHTML += ` <div  class="post">
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
                                    <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" height="18px" width="18px">
                                     <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" height="18px" width="18px">
                                     
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
}
posts()
let postClear = (e) => {
  e.parentElement.parentElement.parentElement.remove()
}
const PopupBtn = document.getElementById("post-popup")
const postPopup = document.getElementById("post")
const popupClose = document.getElementById("close")
const createPostForm = document.getElementById("create-post-form");
const postBtn = document.getElementById("postBtn")
const postLink = document.getElementById("postLink")
const postCreate = document.getElementById("caption")
const loggedinUsername=document.getElementById("loggedin-username");
loggedinUsername.innerHTML=`${user.name} ${user.surName}`;
let popupDisplay = () => {
  postPopup.style.display = "flex"
}
let popupNone = () => {
  postPopup.style.display = "none"
}
PopupBtn.addEventListener("click", popupDisplay)
popupClose.addEventListener("click", popupNone)
postPopup.addEventListener("click", popupNone)
createPostForm.addEventListener("click", (e) => {
  e.stopPropagation();
});
const input = (e) => {
  text = e.target;
  //console.log(text.value)
  if (text.value.trim() !== "") {
    postBtn.disabled = false;
    postBtn.classList.add("active");
  } else {
    postBtn.disabled = true;
    postBtn.classList.remove("active")
  }
  text.style.height = "auto";
  text.style.height = text.scrollHeight + "px";
  //console.log("scrollHeight",text.scrollHeight)
}
const postImg = () => {
  //console.log(postLink.value)
  if (postLink.value.trim() !== "") {
    postBtn.disabled = false;
    postBtn.classList.add("active");
  } else {
    postBtn.disabled = true;
    postBtn.classList.remove("active")
  }
}
const handleCreatePost = (e) => {
  e.preventDefault();
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || postData;
  const newPost = {
    profilePhoto: "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg",
    userName: `${user.name} ${user.surName}`,
    time: "2 days ago at 21:10",
    content: postCreate.value,
    hiddenContent: "<br /> . <br /> . <br />",
    postImg: postLink.value,
    reactions: 0,
    comments: 0,
    shares: 0
  }
  allPosts.unshift(newPost)
  localStorage.setItem("allPosts", JSON.stringify(allPosts))
  posts()
  postCreate.value = "";
  postLink.value = "";
  postBtn.disabled = true;
  postBtn.classList.remove("active");
  postPopup.style.display = "none";
}

createPostForm.addEventListener("submit", (e) => handleCreatePost(e));
postCreate.addEventListener("input", (e) => input(e))
postLink.addEventListener("input", (e) => postImg(e))