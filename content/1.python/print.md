---
title: "[CSB] Hàm print()"
description: Cú pháp và cách sử dụng hàm print() trong Python
author: quanph
date: 2021-07-01
author_avatar: https://i.pinimg.com/736x/0f/35/db/0f35db4bf56a044fd6818af581c45bc6.jpg
#image: https://cdn.analyticsvidhya.com/wp-content/uploads/2023/05/comments-python.jpg
category: Thông báo
tags:
  - thông báo
---

# Hàm print()

> Hàm `print()` trong Python được sử dụng để in ra màn hình console nội dung mà chúng ta muốn hiển thị.

## Cú pháp

```python
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
```

## Tham số

- `value`: giá trị cần in ra console
- `sep`: chuỗi ngăn cách giữa các giá trị, mặc định là khoảng trắng (' ')
- `end`: chuỗi kết thúc, mặc định là xuống dòng ('\n')
- `file`: xác định nơi mà nội dung cần in sẽ được gửi đến. Mặc định, hàm print() in ra đầu ra tiêu chuẩn (standard output), thường là màn hình console
- `flush`: kiểm soát xem output có được đẩy ngay lập tức ra màn hình hay không

## Ví dụ

```python
print("Hello, world!") # Hello, world!
print("Hello", "world", sep=", ", end="!\n") # Hello, world!
```

## print() với F-string

```python
name = "Alice"
age = 20

print(f"My name is {name} and I am {age} years old.")
# My name is Alice and I am 20 years old.
```
