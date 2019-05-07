### TL; DR

高并发测试性能:

Golang > Nodejs > (Deno/PHP/Python)

### 不同语言实现的高并发测试

测试参数:

1. 持续请求 10 秒
2. 并发量 100

服务的的操作:

1. 模拟耗时 200 ms 的操作
2. 返回 hello world

测试脚本
```bash
> siege -c 100 -t 10s http://127.0.0.1:3000/
```

测试语言

- [Nodejs](#nodejs)
- [Deno](#deno)
- [Golang](#golang)
- [Python](#python)
- [PHP](#php)

### 测试机器

操作系统: macOS Mojave 10.14.4

处理器: 1.8 GHz Intel Core i5

内存: 8 GB 1600 MHz DDR3

测试工具: apache bench

#### NodeJs

```bash
> node -v
v10.15.3
> node nodejs/index.js
> bash run.sh

Transactions:		        4306 hits
Availability:		      100.00 %
Elapsed time:		        9.58 secs
Data transferred:	        0.07 MB
Response time:		        0.22 secs
Transaction rate:	      449.48 trans/sec
Throughput:		        0.01 MB/sec
Concurrency:		       98.74
Successful transactions:        4306
Failed transactions:	           0
Longest transaction:	        0.29
Shortest transaction:	        0.20
```

### Deno

```bash
> deno version
deno: 0.4.0
v8: 7.6.53
typescript: 3.4.1
> deno run --allow-all deno/index.ts
> bash run.sh

Transactions:		          47 hits
Availability:		      100.00 %
Elapsed time:		        9.85 secs
Data transferred:	        0.00 MB
Response time:		        4.98 secs
Transaction rate:	        4.77 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		       23.79
Successful transactions:          47
Failed transactions:	           0
Longest transaction:	        9.71
Shortest transaction:	        0.28
```

### Golang

```bash
> go version
go version go1.11.2 darwin/amd64
> go run go/main.go
> bash run.sh

Transactions:		        4509 hits
Availability:		      100.00 %
Elapsed time:		        9.51 secs
Data transferred:	        0.08 MB
Response time:		        0.21 secs
Transaction rate:	      474.13 trans/sec
Throughput:		        0.01 MB/sec
Concurrency:		       98.58
Successful transactions:        4509
Failed transactions:	           0
Longest transaction:	        0.24
Shortest transaction:	        0.20
```

### Python

```bash
> python3 --version
Python 3.7.3
> python3 python3/index.py
> bash run.sh

Transactions:		          47 hits
Availability:		       35.88 %
Elapsed time:		        9.80 secs
Data transferred:	        0.00 MB
Response time:		        1.16 secs
Transaction rate:	        4.80 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		        5.58
Successful transactions:          47
Failed transactions:	          84
Longest transaction:	        1.26
Shortest transaction:	        0.00
```

### PHP

```bash
> php -S 0.0.0.0:3000 php/index.php
PHP 7.1.23 Development Server started at Tue May  7 10:55:42 2019
Listening on http://0.0.0.0:10000
Document root is /Users/axetroy/gpm/github.com/axetroy/concurrency-benchmarks
Press Ctrl-C to quit.
> bash run.sh

Transactions:		          48 hits
Availability:		      100.00 %
Elapsed time:		        9.83 secs
Data transferred:	        0.00 MB
Response time:		        5.03 secs
Transaction rate:	        4.88 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		       24.55
Successful transactions:          48
Failed transactions:	           0
Longest transaction:	        9.81
Shortest transaction:	        0.24
```

### 声明

这个测试并不是标准的基准测试，也不是都很熟悉这些语言，如有错误，欢迎指出。