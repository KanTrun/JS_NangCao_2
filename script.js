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
//     console.log(history);

// // history.lenght: tổng số trang đã lưu trong history
//     console.log(history.length);
// // history.back(): trở về trang trước đó
//     const backPageIndex = () => {
//         history.back();
//     }
// // history.forward: đi tới trang kế tiếp
//     const forwardPage = () => {
//         history.forward();
//     }
// history.go(number): đi đến trang mà muốn đến
// nếu number âm thì tính từ trang hiện tại trừ đi number, còn dương thì cộng number
    // history.go(-1);

// ---------------------------------------------------
// BOM NAVIGATOR
// Dùng để lấy các thông tin liên quan đến trình duyệt người dùng
// Cú pháp: window.navigator hay navigator
//     console.log(navigator);

// //Có các loại navigator: 
// // navigator.cookieEnable: Kiểm tra trình duyệt có bật cookie không
//     console.log(navigator.cookieEnabled);
// // navigator.appName: Để kiểm tra tên trình duyệt
//     console.log(navigator.appName);
// // navigator.appCodeName: Để kiểm tra tên mã code trình duyệt
//     console.log(navigator.appCodeName);
// // navigator.appVersion: Kiểm tra phiên bản trình duyệt
//     console.log(navigator.appVersion);
// // navigator.platform: Xem hệ điều hành mà người dùng đang sử dụng
//     console.log(navigator.platform);
// // navigator.language: Để kiểm tra ngôn ngữ của trình duyệt
//     console.log(navigator.language);

// --------------------------------------------------------
// BOM POPUP
// Đều được viết sẵn (built-in) trong window
// alert("Nội dung"); confirm("Nội dung"); prompt("Nội dung", "Nội dung mặc định");

// ------------------------------------------------------
// BOM TIMING
// Dùng để chạy hàm theo một thời gian nào đó
// Bao gồm setTimeout(function, miliseconds); setInterval(function, miliseconds);

// ------------------------------------------------------------------
// COOKIES
// Dữ liệu được lưu trữ trong một file, được lưu trữ dưới dạng name = value
// Biến lưu trong cookie sẽ tồn tại trong một khoảng thời gian do bản thân thiết lập
// Biến thông thường khi load lại trang sẽ mất
//     const fullName = "Kan"
//     console.log(fullName);

// // Khi load lại trang nó sẽ biến mất, nên ta sẽ lưu dữ liệu vào cookie
// // vào DevTool => Application => Cookie => Link URL
// // Dữ liệu sẽ được lưu trữ tại đây thông qua
// // Cú pháp: document.cookie = "name = value"
// Ta có thể thiết lập thời gian cho cookie trong khoảng thời gian nhất định
//     document.cookie = `fullName = ${fullName}, expires = Mon, 01 Jan 2025 00:00:00 UTC`;

// Hay ta có thể gọi hàm theo thời gian sẽ hết hạn
    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = "expires=" + d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + "; " + expires;
    // }

    // const fullName = "KanTrun";
    // setCookie("fullName", fullName, 30);

// Lấy giá trị của cookie
// Cú pháp: var giaTri = document.cookie;
    // const cookie = document.cookie;
    // console.log(cookie);

// Hay ta có thể lấy từng giá trị trong cookie thông qua hàm
    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     for(var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while(c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if(c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }

    // const fullName = getCookie("fullName");
    // console.log(fullName);

// Đổi giá trị cho cookie
// Cũng cú pháp cũ nhưng thay thành một value khác
// document.cookie = "name = value";

// Xóa cookie
// Xét lại thời gian hết hạn expires về những ngày trước đây
    // document.cookie = "name=; expires = Thu, 01 Jan 1950 00:00:00 UTC"; 
// Hay có thể gọi hàm dựa vào name để xóa
    function deleteCookie(cname) {
        document.cookie = `${cname}=; expires = Thu, 01 Jan 1970 00:00:00 UTC`;
    }

    deleteCookie("fullName");








