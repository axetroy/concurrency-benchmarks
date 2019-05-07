### 不同语言实现的高并发测试

测试参数:

1. 总请求量 1000
2. 并发量 100

服务的的操作:

1. 先睡 500 ms
2. 读取测试文件
3. 返回测试文件的内容

### 测试机器

MacOS

#### NodeJs

```bash
> node -v
v10.15.3
> node nodejs/index.js
```

### Golang

```bash
> go version
go version go1.11.2 darwin/amd64
> go run go/main.go
```

### Python

```bash
> python3 --version
Python 3.7.3
> python3 python3/index.py
```