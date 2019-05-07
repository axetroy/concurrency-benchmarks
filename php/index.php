<?php
// FIXME: 这会阻塞整个线程，其他请求都得阻塞
usleep(200 * 1000);
echo "Hello, world!"
?>