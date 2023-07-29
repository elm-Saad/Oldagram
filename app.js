const posts = [
    {
        name: "StarGazerSam",
        username: "user1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-1.jpg",
        post: "images/post-1.jpg",
        comment: " A breathtaking view of our beloved Earth from space! 🚀",
        likes: 21
    },
    {
        name: "CyberspaceChris",
        username: "gus19",
        location: "Ornans, France",
        avatar: "images/avatar-2.jpg",
        post: "images/post-2.PNG",
        comment: "Stepping into a world of dreams and possibilities through VR! ",
        likes: 4
    },
        {
        name: "CodeWizard",
        username: "jd1735",
        location: "Marrakesh, Morocco",
        avatar: "images/avatar-3.jpg",
        post: "images/post-3.jpg",
        comment: " Lines of text bring ideas to life 💻📝",
        likes: 152
    }
]
const imgStaticIconsData =  ['images/icon-heart.png','images/icon-comment.png','images/icon-dm.png'];
const main = document.getElementById('main');
const dataArray = Object.values(posts);

function displayData(){
    for(let i =0;i<dataArray.length;i++){

        let sectionEl = document.createElement('section');
        let divEl = document.createElement('div');
        divEl.setAttribute('class','container bg-white');

        createUserInfoElement(i, divEl);
        createPostImageElement(i,divEl);
        createBodyinfo(i,divEl);

        sectionEl.appendChild(divEl);

        main.appendChild(sectionEl);
    }
}
function createUserInfoElement(i, container){

    let userInfo = document.createElement('div');
    userInfo.setAttribute('class','user-info d-flex');
    let newImg = document.createElement("img");
    newImg.setAttribute('src', dataArray[i].avatar);
    newImg.setAttribute('class', 'round');

    userInfo.appendChild(newImg);

    let divElement = document.createElement("div");
    divElement.setAttribute('id','avatar-info' );
    let newName = document.createElement("h4");
    newName.textContent = dataArray[i].name;

    divElement.appendChild(newName);

    let newLocation = document.createElement("p");
    newLocation.textContent = dataArray[i].location;

    divElement.appendChild(newLocation);
    userInfo.appendChild(divElement);
    container.appendChild(userInfo);
}
function createPostImageElement(i, container){

    let postImage = document.createElement('div');
    postImage.setAttribute('class','post-image');
    let newImg = document.createElement("img");
    newImg.setAttribute('src',dataArray[i].post);

    postImage.appendChild(newImg);
    container.appendChild(postImage);

}
function createBodyinfo(e, container){

    let bodyInfo = document.createElement('div');
    bodyInfo.setAttribute('class','body-info d-flex ');

    createStaticIcons(bodyInfo);
    createLikesDiv(e, bodyInfo);
    createUsernameCaption(e,bodyInfo)

    container.appendChild(bodyInfo);
}
function createLikesDiv(i,bodyInfo){
    let likes = document.createElement('div');
    let span = document.createElement('span');

    span.textContent = dataArray[i].likes + ' likes';
    likes.appendChild(span);
    bodyInfo.appendChild(likes);
}
function createUsernameCaption(i,bodyInfo){
    let newDivElement = document.createElement('div');

    let span = document.createElement('span');
    span.textContent=dataArray[i].username;
    
    let newComment =document.createElement('p');
    newComment.setAttribute('class','d-inline');
    newComment.textContent=dataArray[i].comment;

    newDivElement.appendChild(span);
    newDivElement.appendChild(newComment);
    bodyInfo.appendChild(newDivElement);
}
function createStaticIcons(bodyInfo){

    let icons = document.createElement('div');
    icons.setAttribute('class','icons d-flex');
    for(let i=0;i<3;i++){
        let imgHolder=document.createElement('div');
        imgHolder.setAttribute('class','img-holder');

        let newImg = document.createElement('img');
        newImg.setAttribute('src',imgStaticIconsData[i]);

        imgHolder.appendChild(newImg);
        icons.appendChild(imgHolder);
    }
    bodyInfo.appendChild(icons);    
}
displayData();
