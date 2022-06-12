import {
    createPostHeader,  
    createPostContent,
    createPostInteractButtonContainer,
    createPostRule,
    createPostCommentContainer
} from './createElement.js';

function createPost(data, selectorName) {
    const postContainerTag = document.createElement('section');
    const postHeaderContainerComplete = createPostHeader('post__user-setting');
    const postContentContainerComplete = createPostContent(data, 'post__content');
    const [hRule1, hRule2] = createPostRule(2);
    const postInteractButtonContainerComplete = createPostInteractButtonContainer('post__interaction');
    const postCommentContainerComplete = createPostCommentContainer('post__comment');

    try {
        if(selectorName[0] === '.' || selectorName[0] === '#') {
            if(selectorName[0] === '.') postContainerTag.classList.add(selectorName.slice(1));
            if(selectorName[0] === '#') postContainerTag.id = selectorName.slice(1);
        } else {
            throw 'Type Error: Selector name is invalid!';
        }
    } catch (error) {
        console.error(error);
    }

    postContainerTag.append(
        postHeaderContainerComplete, postContentContainerComplete, hRule1, postInteractButtonContainerComplete, hRule2,
        postCommentContainerComplete
    );

    return postContainerTag;
}

function renderPost(root, data) {
    const postComplete = createPost(data, '.post');
    root.append(postComplete);
}

export { renderPost };