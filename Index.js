const datas = [
    {
        img: "././sp1.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát",
        giasp: "299.000đ",
    },
    {
        img: "././sp2.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí",
        giasp: "299.000đ",
    },
    {
        img: "././sp3.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nam Coolmax Thoáng Mát Bo Cổ Phối Màu",
        giasp: "299.000đ",
    },
    {
        img: "././sp4.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nữ Cafe Phối Màu",
        giasp: "299.000đ",
    },
   
   
]
const htmls = datas.map((data,index) => {
    return `
            <div class="boxsp">
            <a href=""><div class="imgboxsp">
                <img src="${data.img}" alt="">
                <div class="iconboxsp"><img src="${data.iconsp}" alt=""></div>
                <div class="iconboxsp1"><img src="${data.iconsp1}" alt=""></div>
            </div></a>
            <a href=""><div class="tensp">${data.tensp}</div></a>
            <div class="giasp">${data.giasp}</div>
        </div>
    `
})
document.querySelector(".menu3").innerHTML = htmls.join('')

