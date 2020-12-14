const xpTv = document.querySelector('#xpTv');
xpTv.addEventListener('click', jumpToPage);

function jumpToPage() {
    // alert("你移到一级菜单上了");
    // window.location.href = "tmall-detail-of-product.html";
    window.open("tmall-detail-of-product.html");
}