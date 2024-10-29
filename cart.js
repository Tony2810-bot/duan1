
    //Hàm bấm xóa
   function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart && index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        hienThiGioHang(); 
    }
} 

// Tăng số lượng của một mặt hàng trong giỏ hàng
function increaseQuantity(index) {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart && index >= 0 && index < cart.length) {
        cart[index].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        hienThiGioHang();
    }
}

// Giảm số lượng của một mặt hàng trong giỏ hàng
function decreaseQuantity(index) {
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart && index >= 0 && index < cart.length && cart[index].quantity > 1) {
        cart[index].quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        hienThiGioHang();
    }
}

// Hàm tính tổng thanh toán
function tinhTongThanhToan() {
    var tongThanhToan = 0;
    var cart = JSON.parse(localStorage.getItem("cart"));
    
    if (cart) {
        cart.forEach(function(product) {
            var thanhTien = product.price * product.quantity;
            tongThanhToan += thanhTien;
        });
    }

    return tongThanhToan;
}


// Để tính tổng số lượng các mặt hàng trong giỏ hàng. 
function tinhTongSoLuong() {
    var tongSoLuong = 0;
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
        cart.forEach(function(product) {
            tongSoLuong += product.quantity;
        });
    }

    return tongSoLuong;
}


// Hàm hiển thị giỏ hàng và tổng thanh toán
function hienThiGioHang() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var tbody = document.getElementById("tb_cart");
    var totalPriceElement = document.getElementById("totalPrice");
    var tongThanhToan = tinhTongThanhToan();
    var tongSoLuong = tinhTongSoLuong(); 

    if (cart) {
        tbody.innerHTML = ""; // Xóa nội dung cũ của tbody

        cart.forEach(function(product, index) {
            var thanhTien = product.price * product.quantity;
            tbody.innerHTML += `
                <tr>
                    <td class="o1"><img src="image/${product.image}" alt="" style="width: 50px;">${product.name}</td>
                    <td>${product.name}</td>
                    <td>${product.price} VND</td>
                    <td>
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${product.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </td>
                    <td>${thanhTien} VND</td>
                    <td><button onclick="removeItem(${index})">Xóa</button></td>
                </tr>`;
        });
    }

    totalPriceElement.textContent = tongThanhToan + " VND";
    document.getElementById("cart-count").textContent = tongSoLuong; // Hiển thị số lượng sản phẩm
}

// Gọi hàm hiển thị giỏ hàng khi trang được tải
window.onload = hienThiGioHang;
