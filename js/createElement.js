function createPostHeader(selectorName) {
    const headerTag = document.createElement('header');
    const time = new Date();
    const createdTime = time.getSeconds();
    headerTag.classList.add(selectorName);

    headerTag.innerHTML = `
    <div class="user-setting__user">
        <div class="user__image"></div>
            <h1 class="user__username">Nguyen Anh Tuan</h1>
            <p class="user__user__create-at">
                <span class="create-at__time" data-second="${createdTime}">Vừa xong</span>
                <i class="fa-solid fa-earth-americas" id="js-privacyStatus"></i>
            </p>
    </div>
    <div class="user-setting__setting" id="js-postSettingButton">
        <i class="fa-solid fa-ellipsis"></i>
        <div class="setting__delete display--off" id="js-postDeleteButton">
            <i class="fa-regular fa-trash-can"></i>
            <p>Chuyển vào thùng rác</p>
        </div>
    </div>
    `;

    return headerTag;
}

function createPostContent(data, selectorName) {
    const contentDivTag = document.createElement('div');
    contentDivTag.classList.add(selectorName);
    contentDivTag.innerHTML = `
        <div class="content__text-container">
            <p class="text" id="js-textData">${data}</p>
        </div>
    `;

    return contentDivTag;
}

function createPostInteractButtonContainer(selectorName) {
    const interactButtonDivTag = document.createElement('div');
    interactButtonDivTag.classList.add(selectorName);
    interactButtonDivTag.innerHTML = `
        <button class="interaction__like" id="js-likeButton"><i class="fa-regular fa-thumbs-up"></i>Thích</button>
        <button class="interaction__comment" id="js-commentButton"><i class="fa-regular fa-message"></i>Bình luận</button>
    `;
    
    return interactButtonDivTag;
}

function createPostRule(amount) {
    const hrTagCollection = [];
    for(let i = 0; i < amount; i++) {
        const hrTag = document.createElement('hr');
        hrTagCollection.push(hrTag);
    }

    return hrTagCollection;
}

function createPostCommentContainer(selectorName) {
    const commentDivTag = document.createElement('div');
    commentDivTag.classList.add(selectorName);
    commentDivTag.innerHTML = `
        <div class="comment__avatar"></div>
        <div class="comment__input-comment">
            <div class="input-comment__input-box">
                <div class="data" contenteditable="true" data-text="Viết bình luận..."></div>
            </div>
            <ul class="input-comment">
                <li class="input-comment"><i class="fa-regular fa-face-smile"></i></li>
                <li class="input-comment"><i class="fa-solid fa-camera"></i></li>
            </ul>
        </div>
    `;

    return commentDivTag;
}

export { 
    createPostHeader,  
    createPostContent,
    createPostInteractButtonContainer,
    createPostRule,
    createPostCommentContainer
};