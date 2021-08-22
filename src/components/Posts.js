import Post from './Post';

const Posts = () => {
    const posts = [{
        name: "modestmouse",
        postPic: "skate.jpg",
        mainLike: "electricpants",
        date: "4 DE JULHO",
        likeCount: 250523,
        commentCount: 3987,
        authorComment: "The Golden Casket Rider",
        comments: [
            { name: "glauco", text: "show" },
            { name: "username-not-found-skatista", text: "quero um 😍😍" },
        ]
    },
    {
        name: "spacetoday1",
        postPic: "lua.jpg",
        mainLike: "respondeai",
        date: "3 DE MAIO",
        likeCount: 11235,
        commentCount: 185,
        authorComment: "Uma das regiões mais lindas da Lua, um local muito fotogênico, tanto para ser observado como para ser registrado.",
        comments: [
            { name: "oficialjon", text: "Espero em breve poder passear por aí 🙌" },
            { name: "g7.santos", text: "Ué gente, mas a terra não era plana" },
        ]
    },
    {
        name: "respondeai",
        postPic: "planta.jpg",
        mainLike: "theavettbrothers",
        date: "1 DIA ATRÁS",
        likeCount: 23785,
        commentCount: 43,
        authorComment: "Hahahaah",
        comments: [
            { name: "pessoa", text: "kkkkkkkkkkkkkk" },
            { name: "otako", text: "quero um 😍😍" },
        ]
    },
    {
        name: "modestmouse",
        postPic: "planta.jpg",
        mainLike: "spacetoday1",
        date: "HÁ 3 HORAS",
        likeCount: 4787,
        commentCount: 127,
        authorComment: "",
        comments: [
            { name: "kurrrrt", text: "Polar opposites don't push away, It's the same On the weekends as the rest of the days." },
            { name: "ambientcloud", text: "this new album is so insanely good. thank you guys 🙏" },
        ]
    },
    ]

    return (
        <ul class="container-posts">
            {posts.map((post) => <Post {...post} />)}
        </ul>
    )
}

export default Posts;