### 不同语言实现的高并发测试

测试参数:

1. 总请求量 1000
2. 并发量 100

服务的的操作:

1. 先睡 500 ms
2. 读取测试文件
3. 返回测试文件的内容

测试脚本
```bash
> ab -n 1000 -c 100 http://127.0.0.1:5001/
```

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
```

```
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            4000

Document Path:          /
Document Length:        18 bytes

Concurrency Level:      100
Time taken for tests:   5.867 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      93000 bytes
HTML transferred:       18000 bytes
Requests per second:    170.45 [#/sec] (mean)
Time per request:       586.691 [ms] (mean)
Time per request:       5.867 [ms] (mean, across all concurrent requests)
Transfer rate:          15.48 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.1      2      12
Processing:   503  528  14.1    526     557
Waiting:      502  524  12.0    522     550
Total:        503  530  15.0    528     560

Percentage of the requests served within a certain time (ms)
  50%    528
  66%    540
  75%    545
  80%    547
  90%    550
  95%    553
  98%    554
  99%    559
 100%    560 (longest request)
```

### Deno

```bash
> deno version
deno: 0.4.0
v8: 7.6.53
typescript: 3.4.1
> deno run --allow-all deno/index.ts
```

```
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)


apr_pollset_poll: The timeout specified has expired (70007)
```

### Golang

```bash
> go version
go version go1.11.2 darwin/amd64
> go run go/main.go
```

```
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            7000

Document Path:          /
Document Length:        18 bytes

Concurrency Level:      100
Time taken for tests:   5.603 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      135000 bytes
HTML transferred:       18000 bytes
Requests per second:    178.49 [#/sec] (mean)
Time per request:       560.253 [ms] (mean)
Time per request:       5.603 [ms] (mean, across all concurrent requests)
Transfer rate:          23.53 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.3      2      14
Processing:   501  506   4.2    505     520
Waiting:      501  505   3.6    504     518
Total:        502  508   5.4    506     529

Percentage of the requests served within a certain time (ms)
  50%    506
  66%    508
  75%    510
  80%    512
  90%    514
  95%    522
  98%    524
  99%    526
 100%    529 (longest request)
```

### Python

```bash
> python3 --version
Python 3.7.3
> python3 python3/index.py
```

```
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
apr_socket_recv: Operation timed out (60)
Total of 6 requests completed
```