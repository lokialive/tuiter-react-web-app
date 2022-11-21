const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item bg-dark text-white  border-0">

            <img src=${who.avatarIcon} width="50px" class="float-start me-3 rounded-circle">
            <div class="float-start">
                 <span class="fw-bolder fw-bold">${who.userName}</span> <span class="fa-stack" style="vertical-align: top; transform: scale(0.5,0.5) translate(-15px,-7px);"><i class="fa-solid fa-certificate fa-stack-2x"></i><i class="fa-solid fa-check fa-stack-1x text-black"></i></span>
                 <div class="text-secondary" style="transform: translate(0px,-7px)">@${who.handle}</div>
            </div>
            <button class="btn btn-primary rounded-pill m-1 float-end w-auto text-white border-0" style="background-color: rgb(29,161,242);">Follow</button>
        `
    );
}
export default WhoToFollowListItem;