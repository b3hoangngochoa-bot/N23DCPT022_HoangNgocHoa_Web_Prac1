## Thông tin sinh viên

| Thông tin       | Chi tiết       |
| --------------- | -------------- |
| Họ và tên       | Hoàng Ngọc Hoà |
| Mã số sinh viên | N23DCPTT022    |
| Lớp             | D23CQPTUD01-N  |

## Mô tả dự án

MYBLOG là website hiển thị các bài viết công nghệ. Danh sách bài viết và nội dung chi tiết được lấy từ JSONPlaceholder API. Giao diện sử dụng phong cách _industrial tech_ với nền mạch điện tinh tế, các bề mặt bán trong suốt và khả năng hiển thị phù hợp đa dạng trên desktop, tablet và mobile.

## Chức năng chính

- Hiển thị danh sách 12 bài viết mới nhất theo dạng lưới responsive.
- Xem trang chi tiết bài viết theo route động `/blog/[id]`.
- Tạo metadata SEO động theo nội dung từng bài viết.
- Điều hướng Home, About và Articles; làm nổi bật trang đang được truy cập.
- Trang About giới thiệu ngắn về blog.
- Thiết kế responsive và tối ưu thao tác chạm trên thiết bị di động.

## Công nghệ sử dụng

- [Next.js 16](https://nextjs.org/) với App Router.
- [React 19](https://react.dev/).
- [Tailwind CSS 4](https://tailwindcss.com/) cho giao diện.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) làm nguồn dữ liệu mẫu.

## Cài đặt và chạy dự án

### Yêu cầu môi trường

- Node.js `20.9.0` trở lên.
- npm.

### Các bước thực hiện

````bash
# Di chuyển vào thư mục dự án
cd project

# Cài đặt dependencies
npm install

# Khởi động môi trường phát triển
npm run dev


## Các lệnh hữu ích

| Lệnh | Mục đích |
| --- | --- |
| `npm run dev` | Chạy ứng dụng ở môi trường phát triển. |
| `npm run lint` | Kiểm tra quy tắc mã nguồn bằng ESLint. |
| `npm run build` | Tạo bản build production. |
| `npm run start` | Chạy bản build production. |

## Cấu trúc thư mục chính

```text
project/
├── app/
│   ├── about/             # Trang giới thiệu
│   ├── blog/[id]/         # Trang chi tiết bài viết
│   ├── globals.css        # Kiểu dáng dùng chung
│   ├── layout.js          # Layout gốc
│   └── page.js            # Trang chủ
├── components/            # Các React component tái sử dụng
├── public/                # Tài nguyên tĩnh
└── package.json           # Cấu hình scripts và dependencies
````
