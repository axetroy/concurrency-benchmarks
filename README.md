### 不同语言实现的高并发测试

测试参数:

1. 持续请求 10 秒
2. 并发量 100

服务的的操作:

1. 模拟耗时 200 ms 的操作
2. 返回 hello world

测试脚本
```bash
> siege -c 100 -t 20s http://127.0.0.1:3000/
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

Transactions:		        1656 hits
Availability:		      100.00 %
Elapsed time:		        9.08 secs
Data transferred:	        0.03 MB
Response time:		        0.53 secs
Transaction rate:	      182.38 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		       96.72
Successful transactions:        1656
Failed transactions:	           0
Longest transaction:	        0.61
Shortest transaction:	        0.50
```

### Deno

```bash
> deno version
deno: 0.4.0
v8: 7.6.53
typescript: 3.4.1
> deno run --allow-all deno/index.ts
> bash run.sh

Transactions:		          18 hits
Availability:		      100.00 %
Elapsed time:		        9.19 secs
Data transferred:	        0.00 MB
Response time:		        4.84 secs
Transaction rate:	        1.96 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		        9.48
Successful transactions:          18
Failed transactions:	           0
Longest transaction:	        9.12
Shortest transaction:	        0.00
```

### Golang

```bash
> go version
go version go1.11.2 darwin/amd64
> go run go/main.go
> bash run.sh

Transactions:		        1800 hits
Availability:		      100.00 %
Elapsed time:		        9.50 secs
Data transferred:	        0.03 MB
Response time:		        0.51 secs
Transaction rate:	      189.47 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		       96.51
Successful transactions:        1800
Failed transactions:	           0
Longest transaction:	        0.55
Shortest transaction:	        0.50
```

### Python

```bash
> python3 --version
Python 3.7.3
> python3 python3/index.py
> bash run.sh

Transactions:		          46 hits
Availability:		       36.51 %
Elapsed time:		        9.44 secs
Data transferred:	        0.00 MB
Response time:		        1.17 secs
Transaction rate:	        4.87 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		        5.71
Successful transactions:          46
Failed transactions:	          80
Longest transaction:	        1.64
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

Transactions:		          45 hits
Availability:		      100.00 %
Elapsed time:		        9.21 secs
Data transferred:	        0.00 MB
Response time:		        4.71 secs
Transaction rate:	        4.89 trans/sec
Throughput:		        0.00 MB/sec
Concurrency:		       23.02
Successful transactions:          45
Failed transactions:	           0
Longest transaction:	        9.19
Shortest transaction:	        0.00
```