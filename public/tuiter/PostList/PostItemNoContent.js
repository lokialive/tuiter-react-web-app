const PostItem = (postNoContent) => {
    return(`
    
    <link href="../HomeScreen/index.css" rel="stylesheet">
    <li class="list-group-item  bg-black">
<div class=" wd-border-bottom">

            <img src=${postNoContent.icon}  align="top" style="display: inline-block" class="wd-avatar wd-margin-top wd-margin-left float-start"/>
            <div style="display: inline-block" class="wd-margin-left-12 wd-margin-top">

                <div>
                    <h3 style="display: inline-block" class="wd-font-size-15 text-white">${postNoContent.name}<span class="fa-stack" style="vertical-align: top; transform: scale(0.5,0.5) translate(-15px,-11px);"><i class="fa-solid fa-certificate fa-stack-2x"></i><i class="fa-solid fa-check fa-stack-1x text-black"></i></span></h3>
                    <p style="display: inline-block" class="text-secondary wd-font-size-15">${postNoContent.userName} ${postNoContent.time}</p>
<!--                    <a class="wd-color-gray" style=" margin-left: 100%;"> ... </a>-->
                </div>

                <div>
                    <p class="wd-content-width wd-margin-bottom-12 wd-margin-right-16 text-white">${postNoContent.topic}</p>
                </div>
                <img class="wd-content-img" src=${postNoContent.image} style="border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;"/>
                <div class="wd-font-size-13 wd-icon-list">
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-regular fa-comment"></i> ${postNoContent.comment}</a>
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-solid fa-repeat"></i> ${postNoContent.retweet}</a>
                    <a href="#" class="wd-color-lightgray  text-secondary wd-font-size-15"><i class="fa-regular fa-heart"></i> ${postNoContent.like}</a>
                    <a href="#" class="wd-color-lightgray  text-secondary wd-font-size-15"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                </div>
                <br/>
<!--                <div class="wd-border-bottom"></div>-->
            </div>
        `
    );
}
export default PostItem;