# Responsive Web Design

- Thiết kế web thích ứng với các thiết bị khác nhau
- Trước khi có responsive đa số sẽ dùng > adaptive
- Sử dụng CSS để thay đổi giao diện dựa vào kích thước màn hình

## Breakpoint

- Điểm dừng kích thước màn hình mà tại đó giao diện sẽ thay đổi
- Không có breakpoint cố định cho mọi dự án
- Chỉ có breakpoint phổ biến (có thể thay đổi theo từng dự án)
  . 576px
  . 768px
  . 992px
  . 1200px
  . 1400px

## Media Queries

- At-rule có sẵn của CSS

```css
@media all|screen|print and (min-width: value) and (max-width: value) {
    selector {
        code css
    }
}

@media screen and (max-width: 1399px) {
    //selector css
}
```
