import tuits from "../data/tuits.json";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'like-tuit':
                return state.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });
            case 'delete-tuit':
                return state.filter(tuit => tuit._id !== action.tuit._id);
            case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "Tom Hiddleston",
                        "handle": "@Tom",
                    },
                    handle: "Tom",
                    time: "now",
                    logo_image: "../img/thavatar.jpg",
                    avatar_image: "../img/thavatar.jpg",
                    stats: {
                        comments: 213,
                        retuits: 143,
                        likes: 190237,
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }

export default tuitsReducer;
