-- Tạo bảng và chèn dữ liệu mẫu
CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    university VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO User (name, gender, university) VALUES ('Lê Minh Việt Anh', 'male', "Đại học Bách Khoa Hà Nội");
INSERT INTO User (name, gender, university) VALUES ('Phạm Quang Bách', 'male', "VinUniversity");
INSERT INTO User (name, gender, university) VALUES ('Hoàng Bá Bảo', 'male', "Đại học Bách Khoa Hà Nội");
INSERT INTO User (name, gender, university) VALUES ('Phạm Minh Cường', 'male', "Đại học Công nghệ - Đại học Quốc gia Hà Nội");
INSERT INTO User (name, gender, university) VALUES ('Trương Văn Độ', 'male', "Đại học Công nghệ - Đại học Quốc gia Hà Nội");
INSERT INTO User (name, gender, university) VALUES ('Hoàng Việt Dũng', 'male', "ITMO University");
INSERT INTO User (name, gender, university) VALUES ('Bùi Hoàng Dũng', 'male', "Đại học Bách Khoa Hà Nội");
INSERT INTO User (name, gender, university) VALUES ('Bùi Trọng Dũng', 'male', "Đại học Bách Khoa Hà Nội");