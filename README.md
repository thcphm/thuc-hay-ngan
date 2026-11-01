# Thức, hay Ngân?

Trò đoán ý nhau cho hai người, dùng chung một điện thoại.

**Cách chơi:** mỗi câu hỏi về một người. Người đó bí mật chọn câu trả lời thật của mình, rồi đưa máy cho người kia đoán. Đoán trúng được 1 điểm. Một ván có 10 câu, mỗi người đoán 5 câu. Hết ván, app chấm "độ hiểu nhau" và lưu vào lịch sử để so điểm sau vài tháng.

## Tải app Android

Tải [ThucHayNgan.apk](../../releases/latest/download/ThucHayNgan.apk) ở mục Releases rồi mở file trên điện thoại để cài.

## Cấu trúc

- `www/index.html`: toàn bộ app, gồm 40 câu hỏi trắc nghiệm
- `assets/`: icon T&N nền xanh và màn hình chờ
- `.github/workflows/build-apk.yml`: mỗi lần đẩy code lên `main`, GitHub tự build APK và tạo bản release mới

Dự án cá nhân, phi thương mại.
