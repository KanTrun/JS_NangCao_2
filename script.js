// BOM
// Các loại BOM
// BOM WINDOW (cấp độ cao nhất)
// Đối tượng window bao gồm các hàm hay phương thức và thuộc tính có thể lấy 
//     console.log(window);
// Không cần gọi window nếu hàm đó đứng trước đối tượng window trước đó
//     window.alert("Yes");
//     //alert("OK");

// ----------------------------------------
// BOM WINDOW
// innerHeight và innerWidth 
// innerHeight lấy kích thước chiều cao của tài liệu (tài liệu: khoảng giấy màu trắng của trình duyệt);
// innerWidth lấy kích thước chiều rộng của tài liệu
//     console.log(window.innerHeight);
//     console.log(window.innerWidth);

// -------------------------------------------
// BOM WINDOW
// window.open()
// Dùng để mở một cửa sổ mới
// Cú pháp: window.open(url, name, options)
// url: đường dẫn website muốn mở
// name: tên cửa số này
// options: chuỗi thông số muốn điều chỉnh (height, width, top, left) ( sử dụng px: pixels )
// height: chiều cao cửa số, width: chiều rộng, top: vị trí hiển thị so với lề trên, left: so với lề trái

// Gọi một biến bên ngoài để hàm close có thể gọi nó để đóng lại
//     var win;
//     const openTab = () => {
//         win = window.open("https://www.youtube.com/",
//              "_blank",
//               "width = 1200, height = 600, left = 100, top = 50");
//     }

// // window.close()
// // Dùng để đóng cửa sổ
//     const close = () => {
//         win.close();
//     }

// -----------------------------------------------
// BOM SCREEN
// Bao gồm screen.width và screen.height (lấy kích thước màn hình máy tính không phải màn hình trình duyệt)
// screen.width: lấy kích thước chiều rộng máy tính
// screen.height: lấy kích thước chiều dài máy tính
// Có thê sử dụng window.screen.width vì window chứa cả 2 thuộc tính này
    // console.log(screen.width);
    // console.log(screen.height);

// ----------------------------------------------------
// BOM LOCATION
// Đối tượng dùng để xử lý các vấn đề liên quan đến URL của trang web
// Cú pháp: window.location hay location
    // console.log(location);

// --------------------------------------------------------
// reload()
// Nằm trong đối tượng location dùng để load lại trang web
// Cú pháp: location.reload()
// Thường dùng để load lại trang sau một khoảng thời gian nào đấy
    // const reloadPage = setInterval(() => {
    //     location.reload();
    // }, 3000);

// Sử dụng các thuộc tính bao gồm trong location
// hash: lấy phần sau dấu # của URL
// host: lấy hostname và port của URL
// hostname: lấy tên host ( không lấy port )
// href: lấy toàn bộ URL
// origin: trả về protocol, hostname và port của URL
// pathname: lấy pathname của URL
// port: lấy port của URL
// search: lấy phần query của URL (sau dấu ?)
    // console.log(location);

// -------------------------------------------------------------
// BOM HISTORY
// Dùng để truy vết lịch sử lướt web
// Cú pháp: window.history hay history
    console.log(history);

// history.lenght: tổng số trang đã lưu trong history
    console.log(history.length);
// history.back(): trở về trang trước đó
    const backPageIndex = () => {
        history.back();
    }
// history.forward: đi tới trang kế tiếp
    const forwardPage = () => {
        history.forward();
    }


