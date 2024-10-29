   
    //Để cập nhật thông báo về số lượng sản phẩm trong giỏ hàng trên giao diện người dùng. 
    function updateCartNotification(cart) {
        var cartCount = 0;
        cart.forEach(item => {
            cartCount += item.quantity;
        });
        var cartNotification = document.getElementById('cart-notification');
        var cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cartCount;
        cartNotification.style.display = 'block'; // Hiển thị thông báo
    }

    //Tải số lượng sản phẩm trong giỏ hàng từ local storage 
    function loadCartCount() {
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            updateCartNotification(cart);
        }
    }

    //Hiển thị sản phẩm chi tiết
    function arr_Detall(id) {
        sessionStorage.setItem('id_chitiet', id);
        location.href = "chitietsanpham.html";
    }
    
    //Gọi hàm thêm vào giỏ hàng
    function themvaogio(id, ten, hinh, gia) {
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart == null) {
            cart = [];
            cart.push({ id: id, name: ten, image: hinh, price: gia, quantity: 1 });
        } else {
            let item = cart.find(item => item.id === id);
            if (item) {
                item.quantity++;
                alert("Sản phẩm đã được thêm vào giỏ hàng.");
            } else {
                cart.push({ id: id, name: ten, image: hinh, price: gia, quantity: 1 });
                alert("Thêm thành công!");
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartNotification(cart);
    }
    
    // Gọi hàm loadCartCount() khi trang được tải để cập nhật số lượng sản phẩm hiện có trong giỏ hàng
    loadCartCount();
    var n= products.length;
    function loadsanpham() {
        for(let i = 0; i<n; i++){
            let sp= `<div class="slider-product-one-content-item">
            <a href="#" onclick = "arr_Detall(${products_chitiet[i].id})" ><img src="image/${products[i].image[0]}" alt=""></a>
                <div class="slider-product-one-content-item-text">
                    
                    <li>${products[i].name}</li>
                    <li>Oline giá rẻ</li>
                    <li><del style="color: gray;">${products[i].pricegoc}</del>đ <span>-95%</span></li>
                    <li>${products[i].pricegiam}<sub>đ</sub></li>
                    <li>Quà 40.000 <sub>đ</sub></li>
                    <li class="sao">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </li>
                </div>
                <button onclick="themvaogio(${products[i].id},'${products[i].name}','${products[i].image[0]}',${products[i].pricegiam})">Thêm Giỏ Hàng</button>

            </div>`

            //Liên kết tới nơi chứa đựng sản phẩm
            document.querySelector("#loadsp").innerHTML+=sp;
        }
    }
    loadsanpham();



