# ice-cream
#link repo: https://github.com/truonghs/ice-cream
#git clone https://github.com/truonghs/ice-cream.git
#open folder chứa source code:open terminal
- Từ thư mục gốc cd BackEnd:
  + Chạy lệnh composer install
  + tạo file .env, sau đó copy toàn bộ nội dung trong file .envexample qua, và sửa DB_DATABASE=icecream_db
  + Mở xampp tạo database trong mysql có tên là icecream_db
  + Chạy lệnh php artisan migrate để tạo table tương ứng trong database
  + Chạy lệnh php artisan serve để khởi động server
- Từ thư mục gốc cd FrontEnd
  + Chạy lệnh npm install
  + Chạy npm start để khởi động giao diện
