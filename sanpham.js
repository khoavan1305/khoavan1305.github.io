const datas = [
    {
        img: "././sp1.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
    },
    {
        img: "././sp2.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
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
            <a href="${data.link}"><div class="imgboxsp">
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
const datas1 = [
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
const htmls1 = datas1.map((data,index) => {
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
document.querySelector(".menu4").innerHTML = htmls.join('')
const datas2 = [
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
const htmls2 = datas2.map((data,index) => {
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
document.querySelector(".menu5").innerHTML = htmls.join('')
const datas3 = [
    {
        img: "././sp1.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
    },
    {
        img: "././sp2.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
    },
    {
        img: "././sp3.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nam Coolmax Thoáng Mát Bo Cổ Phối Màu",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
    },
    {
        img: "././sp4.jpg",
        iconsp : "./icon-tim.png",
        iconsp1: "./icon-giohang.png",
        tensp : "Áo Polo Nữ Cafe Phối Màu",
        giasp: "299.000đ",
        link:"./ChiTietSP.html",
    },
   
   
]
const htmls3 = datas3.map((data,index) => {
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
document.querySelector(".menu6").innerHTML = htmls.join('')
