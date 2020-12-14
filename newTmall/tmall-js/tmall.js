const menuLinks = document.getElementsByClassName('menuLink');
const secondMenus = document.getElementsByClassName('subThreeDiv')
    /* 隐藏轮播图的小圆点 ，可以发现，bootstrap框架的轮播图这些样式也是基于基本元素li等来做的，它只是把这些元素魔改了，变成好看的一些样式*/
const thumbnaiImgs = document.getElementsByClassName('thumbnaiImg');
const detailDiv = document.querySelector('.detailDiv');
const commDiv = document.querySelector('.commDiv');

const manyImgsDiv = document.querySelector('.manyImgsDiv');
const commentDiv = document.querySelector('.commentDiv');
let temp = 0;

/////////////鼠标移入一级菜单上隐藏小圆点，移出再显示小圆点/////////////////////
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onmouseover = function() {
        // alert("你移到一级菜单上了");
        // 鼠标移入一级菜单时，隐藏小圆点，因为这时候二级菜单也显示了这样在二级菜单中就不会看到小圆点了
        document.querySelector('.test').style.display = "none";
    }
}


for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('mouseout', bannerDivDisplay);
}

function bannerDivDisplay() {
    document.querySelector('.test').style.display = "block"; /* 鼠标移出一级菜单恢复显示小圆点 */

}

//////二级菜单的鼠标移入移出事件，来隐藏和显示小圆点//////////////////
for (let i = 0; i < secondMenus.length; i++) {
    secondMenus[i].onmouseover = function() {
        document.querySelector('.test').style.display = "none";

    }
}

for (let i = 0; i < secondMenus.length; i++) {
    secondMenus[i].addEventListener('mouseout', bannerDivDisplay);
}


////////商品详情页缩略图 鼠标移入，在大图区域显示对应的图////////////////
// 每一次都对一个元素设置鼠标移入事件， 且每一个移入事件的内容都不一样（ 指载入不同的图片）
for (let i = 0; i < thumbnaiImgs.length; i++) {
    thumbnaiImgs[i].onmouseover = function() {
        temp = i + 1;
        document.querySelector('.bigImg').src = 'tmall-images-detail-of-product/main-Images/' + temp + '.jpg';
        // document.getElementById('myImg').src = 'tmall-images-detail-of-product/main-Images/' + temp + '.jpg';
    }
}




//////////////鼠标点击切换显示商品图片和用户评价///////////////////////

detailDiv.addEventListener('click', displayImage);
commDiv.addEventListener('click', displayComm);

function displayImage() {
    commentDiv.style.display = "none";
    manyImgsDiv.style.display = "block";
    detailDiv.style.backgroundColor = "#F5F5F5";
    commDiv.style.backgroundColor = "white";
    detailDiv.style.borderTop = "1px solid rgb(212, 47, 47)";
    commDiv.style.borderTop = "none";

}

function displayComm() {
    manyImgsDiv.style.display = "none"; /* 已存在的先隐藏，之后另一个再显示 */
    commentDiv.style.display = "block";
    detailDiv.style.backgroundColor = "white";
    commDiv.style.backgroundColor = "#F5F5F5";
    commDiv.style.borderTop = "1px solid rgb(212, 47, 47)";
    detailDiv.style.borderTop = "none"; /*  让上边框消失 ,不是设置空值*/
}