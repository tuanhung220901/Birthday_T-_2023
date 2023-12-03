
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Em à!",      
        "Cảm ơn em đã đến bên anh",  
        "Hôm nay là ngày em được sinh ra",
        "Cảm ơn em vì tất cả",
        "Chúc em có ngày sinh nhật thật tuyệt vời",
        "Tuổi mới bớt đanh đá rùm",
        "Yêu anh hơn nữa!",
        "Hihi!",
        "Mong cho chúng ta luôn luôn bên nhau!",
        "Chẹp chẹp",
        "TĐ True Love",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Cảm ơn em đã đến bên anh": "./imgs/td.png",
        "Hôm nay là ngày em được sinh ra": "./imgs/d.png",
        "Cảm ơn em vì tất cả": "./imgs/c.png",
        "Tuổi mới bớt đanh đá rùm": "./imgs/b.png",
        "TĐ True Love": "./imgs/a.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Sẵn sàng chưa nào, Bắt đầu nhé!",
        play: "Một chút nhạc nhé!",
        bannar_coming: "Tiếp nhé!",
        balloons_flying: "Có vẻ như thiếu một cái gì đó nhỉ!",
        cake_fadein: "Bánh sinh nhật chăng?",
        light_candle: "Nến nữa nhỉ?",
        wish_message: "Chúc mừng sinh nhật baby",
        story: "Đôi lời nhắn nhủ :v",
    }
};
