const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item  bg-black">
                    <div class="row">
                        <div class="col-10">
                            <div class="text-secondary">${post.topic}</div>
                            <div class="fw-bolder text-white">${post.userName} <span class="fa-stack" style="vertical-align: top; transform: scale(0.5,0.5) translate(-15px,-7px);"><i class="fa-solid fa-certificate fa-stack-2x"></i><i class="fa-solid fa-check fa-stack-1x text-black"></i></span> <span class="text-secondary">${post.time}</span></div>
                            <div class="fw-bolder text-white">${post.title}</div>
                        </div>
                        <div class="col-2">
                            <img src=${post.image} width="80px" class="float-end" title=${post.userName}>
                        </div>
                    </div>
                    
                </li>
        `
    );
}
export default PostSummaryItem;