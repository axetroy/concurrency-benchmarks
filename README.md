### TL; DR

> 各语言原生 HTTP 高并发测试性能
> 尽量排除其他因素的影响，例如各语言文件读写能力

结论: Golang > Deno > Nodejs > Python(异步IO) > Dart(异步IO) > PHP

### 不同语言实现的高并发测试

测试参数:

1. 持续请求 10 秒
2. 并发量 100

服务的的操作:

1. 返回一个 `test_file.js` 文件的内容

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
- [Dart](#dart)

### 测试机器

操作系统: macOS Mojave 10.14.4

处理器: 1.8 GHz Intel Core i5

内存: 8 GB 1600 MHz DDR3

测试工具: apache bench

#### NodeJs

1. Without cluster

```bash
> node -v
v10.15.3
> node nodejs/index.js
> bash run.sh

Transactions:		        9049 hits
Availability:		      100.00 %
Elapsed time:		        9.16 secs
Data transferred:	     2639.57 MB
Response time:		        0.10 secs
Transaction rate:	      987.88 trans/sec
Throughput:		      288.16 MB/sec
Concurrency:		       98.60
Successful transactions:        9049
Failed transactions:	           0
Longest transaction:	        0.37
Shortest transaction:	        0.00
```

2. With cluster

```bash
> node -v
v10.15.3
> node nodejs/cluster.js
> bash run.sh

Transactions:		        8431 hits
Availability:		      100.00 %
Elapsed time:		        9.12 secs
Data transferred:	     2459.30 MB
Response time:		        0.10 secs
Transaction rate:	      924.45 trans/sec
Throughput:		      269.66 MB/sec
Concurrency:		       95.72
Successful transactions:        8431
Failed transactions:	           0
Longest transaction:	        0.35
Shortest transaction:	        0.00
```

### Deno

```bash
> deno version
deno: 0.4.0
v8: 7.6.53
typescript: 3.4.1
> deno run --allow-all deno/index.ts
> bash run.sh

Transactions:		        9213 hits
Availability:		      100.00 %
Elapsed time:		        9.74 secs
Data transferred:	     2687.41 MB
Response time:		        0.10 secs
Transaction rate:	      945.89 trans/sec
Throughput:		      275.91 MB/sec
Concurrency:		       98.99
Successful transactions:        9213
Failed transactions:	           0
Longest transaction:	        0.30
Shortest transaction:	        0.06
```

### Golang

```bash
> go version
go version go1.11.2 darwin/amd64
> go run go/main.go
> bash run.sh

Transactions:		       11523 hits
Availability:		      100.00 %
Elapsed time:		        9.71 secs
Data transferred:	     3386.32 MB
Response time:		        0.05 secs
Transaction rate:	     1186.71 trans/sec
Throughput:		      348.75 MB/sec
Concurrency:		       61.55
Successful transactions:       11609
Failed transactions:	           0
Longest transaction:	        0.38
Shortest transaction:	        0.00
```

### Python

```bash
> python3 --version
Python 3.7.3
> python3 python3/index.py
> bash run.sh

Transactions:		        5532 hits
Availability:		       84.37 %
Elapsed time:		        9.54 secs
Data transferred:	        0.07 MB
Response time:		        0.10 secs
Transaction rate:	      579.87 trans/sec
Throughput:		        0.01 MB/sec
Concurrency:		       56.57
Successful transactions:        5532
Failed transactions:	        1025
Longest transaction:	        7.58
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

### Dart

```bash
> dart --version
Dart VM version: 2.1.0 (Tue Nov 13 18:22:02 2018 +0100) on "macos_x64"
> dart dart/main.dart
> bash run.sh

Transactions:		        1847 hits
Availability:		      100.00 %
Elapsed time:		        9.13 secs
Data transferred:	      538.77 MB
Response time:		        0.47 secs
Transaction rate:	      202.30 trans/sec
Throughput:		       59.01 MB/sec
Concurrency:		       94.18
Successful transactions:        1847
Failed transactions:	           0
Longest transaction:	        1.04
Shortest transaction:	        0.06
```

### 声明

这个测试并不是标准的基准测试，也不是都很熟悉这些语言。

而且是在服务的和客户端在同一台机器，有竞争状态不是很准确。

如有错误，欢迎指出。