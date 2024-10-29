// Dùng để hiển thị và ẩn một form địa chỉ khi người dùng nhấn vào một nút.
// Sự kiện click trên nút #adress-form được lắng nghe để hiển thị form địa chỉ.
// Sự kiện click trên nút #adress-close được lắng nghe để ẩn form địa chỉ.
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')


// console.log(adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})



let index = 0

phaithat.addEventListener("click", function(){
    index = index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})
traithat.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})



// -----------slider1-------------------------------
const imgnumberli = document.querySelectorAll('.slider-content-left-bottom li')

// console.log(imgnumberli)
imgnumberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector('.slider-content-left-top').style.right = index *100+"%"
        image.classList.add("active")
    })
})


//Hiển thị màu vàng cho từng slide 
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}


//Tự đổi ảnh sau 3 giây
function imgauto () {
    // indes += 1
    index = index + 1
    if(index>imgNuber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
    imgnumberli[index].classList.add("active")
    // console.log(index)
}
setInterval(imgauto,3000) //3000 là 3s



