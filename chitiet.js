var n= products.length;

function loadchitiet() {
    var id = sessionStorage.getItem('id_chitiet');

    for(let i = 0; i < n; i++){
        let sp="";
        if(id == products[i].id){
            sp = ` <div class="noidungsanpham">
            <table>
               <caption>
                 <p>${products_chitiet[i].name}</p>
               </caption>

                <tr>
                    <td rowspan="2" class="vienanh">
                        <img src="image/${products_chitiet[i].img}" width="100%" height="100%" alt="">
                    </td>

                    <td class="nhanhieu">
                        <img src="image/285661_star_icon.png" width="30px">
                        <img src="image/285661_star_icon.png" width="30px">
                        <img src="image/285661_star_icon.png" width="30px">
                        <img src="image/285661_star_icon.png" width="30px">
                        <img src="image/285661_star_icon.png" width="30px">
            
                        <p><b>Nhãn hiệu</b>: 	Parour <br>
                            <b>Giới tính</b>:	Unisex <br>
                          <b>Xuất xứ</b>:	<br>
                            <b>Nồng độ</b>:	Eau de parfum <br>
                            <b>Nhà pha chế</b>:	<br>
                            <b>Nhóm hương</b>:	<br>
                            <b>Phong cách</b>:	</p>
                           
                    </td>

                </tr>

                <tr>
                    <td class="huongdactrung">
                        <p>
                            <h3>Hương đặc trưng</h3> <br>

                            <b>Hương đầu</b>: quýt, cam bergamote, gừng <br>
                            <b>Hương giữa</b>: hoa cam, hoa nhài tây <br>
                            <b>Hương cuối</b>: vani, đậu tonka, xạ hương, gỗ đàn hương, rêu sồi</p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="fb-comments" data-href="http://127.0.0.1:5500/chitietsanpham.html" data-width="100%" data-numposts="3"></div>

        <div class="thongtinsanpham">
            <table>
                <tr class="mauttsp" >
                    <th>THÔNG TIN SẢN PHẨM</th>
                </tr>

                <tr>
                    <td>
                        <p>
                            <b style="color:rgb(209, 48, 75);">La Vida En Rojo EDP</b> là một chai nước hoa unisex đến
                             từ thương hiệu nước hoa Pháp - Parour. La Vida En Rojo
                              EDP sở hữu làn hương gây nghiện, kết hợp từ sự tươi mát 
                              của cam quýt, ngọt ngào của hoa cỏ với cường độ mạnh mẽ của 
                              hương gỗ. Cùng  <b style="color:rgb(209, 48, 75);">SOMEHOW</b> giải mã sức hút của nước hoa La
                               Vida En Rojo ngay!
                        </p>
                    </td>
                </tr>

                <tr>
                    <td>
                       <p>
                        <h4>1. LA VIDA EN ROJO EDP - LÀN HƯƠNG MẠNH MẼ GÂY NGHIỆN</h4> 
                        <b style="color:rgb(209, 48, 75);">La Vida En Rojo EDP</b> được tiết lộ trong một bản hòa âm mạnh mẽ: 
                        một hương hoa gỗ, gây nghiện và mạnh mẽ bởi các nốt hương của vani 
                        và một sự kết hợp đáng ngạc nhiên của bọt pha lê.Mở đầu cho bản hòa âm 
                        là những nốt hương tươi mát đến từ cam bergamote và quýt. Vị cay, sắc, nhẹ
                         nhàng của gừng cho tầng hương đầu thêm bùng nổ. Tầng hương giữa là nơi hoa 
                         cam và hoa nhài tây bung tỏa vẻ dịu dàng, thanh lịch của mình. Những nốt hương
                          cuối mang đậm sự bí ẩn quyến rũ bởi những nốt hương gỗ đàn hương, rêu sồi, đậu 
                          tonka, xạ hương. Trong khi đó, vị ngọt ngào của va - ni khiến mùi hương thêm 
                          phần quyến rũ. Hai sắc thái ngọt ngào và mạnh mẽ được cân bằng một cách hài hòa 
                          cho một mùi hương trung tính, không chỉ gây ấn tượng cho phái nữ mà còn được yêu 
                          thích bởi cánh mày râu. 
                        </p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>
                            <h4>2. LA VIDA EN ROJO EDP - ẤN TƯỢNG TRONG MÀU ĐỎ</h4>
                            Bắt gặp <b style="color:rgb(209, 48, 75);">La Vida En Rojo EDP</b>, ấn tượng đầu tiên chắc hẳn là với màu
                             đỏ nổi bật và quyến rũ của nó. Mặc dù là một chai nước hoa unisex
                              nhưng thiết kế của La Vida En Rojo EDP gợi lên sự nữ tính, dịu dàng 
                              của một quý cô đúng chuẩn. Thân chai làm bằng thủy tinh trong suốt và 
                              được điểm thêm dải lụa mỏng giống như khăn lụa trên cổ của các quý cô. 
                              <br><br>
                              Trong thời trang, sự khác biệt về giới tính dần trở nên hẹp lại khi 
                              ngày càng có nhiều những bộ trang phục ấn tượng được diện bởi cả nam 
                              và nữ. Và thế giới mùi hương cũng không ngoại lệ. Chai nước hoa La Vida 
                              En Rojo EDP với những nốt hương unisex huyền bí đã xóa bỏ ranh giới của 
                              hai phái, tạo nên sự giao thoa để bạn thể hiện cá tính riêng của bản thân.
                              <br><br>
                              <i>Nhấn nút MUA HÀNG ngay!</i>
                        </p>
                    </td>
                </tr>
            </table>
        </div>

        <footer> 
            <table>
                 <tr>
                     <th><a href="gioithieu.html">GIỚI THIỆU</th></a>
                     <th>CHÍNH SÁCH CÔNG TY</th>
                     <th>TRỢ GIÚP</th>
                     <th>THÔNG TIN KHÁC</th>
                     <th><a href="lienhe.html">LIÊN HỆ</a></th>
                 </tr>
            </table>
            
            <hr>
    
            <div>
             <tr>
                 <td>
                     <p>Copyright © 2008 Công ty CPTM Thế Giới Nước Hoa & Mỹ Phẩm. <br>
                         Giấy chứng nhận ĐKKD số: 0317116620 do Sở Kế Hoạch và Đầu Tư TPHCM cấp lần đầu ngày 10/01/2022. <br>
                         Địa chỉ văn phòng: 10-10B Cách Mạng Tháng 8, Phường Bến Thành, Quận 1, TP HCM <br>
                         Điện thoại: 028 73020707 - Đặt Hàng: 18006047 - CSKH: 18006077</p>
                 </td>
             </tr>
            </div>
         </footer>`;
        }
        document.querySelector("#loaddetall").innerHTML += sp;
    }
}
loadchitiet();