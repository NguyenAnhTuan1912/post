function renderPost(root, data) {
    root.innerHTML += `
    <section class="post">

        <header class="post__user-setting">
            <div class="user-setting__user">
                <div class="user__image"></div>
                <h1 class="user__username">Nguyen Anh Tuan</h1>
                <p class="user__user__create-at">
                    <span class="create-at__time">Vừa xong</span>
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
        </header>

        <div class="post__content">
            <div class="content__text-container">
                <p class="text" id="js-textData">${data}</p>
            </div>
        </div>

        <hr>
        <div class="post__interaction">
            <button class="interaction__like" id="js-likeButton"><i class="fa-regular fa-thumbs-up"></i>Thích</button>
            <button class="interaction__comment" id="js-commentButton"><i class="fa-regular fa-message"></i>Bình luận</button>
        </div>
        <hr>

        <div class="post__comment">
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
        </div>
    </section>
    `;
}

export { renderPost };