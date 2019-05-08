import http.server
import socketserver
from http import HTTPStatus
import asyncio

port = 3000

file_content = open("./test_file.js", "r").read()


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.end_headers()
        self.wfile.write(file_content.encode("utf-8"))


def main():
    try:
        server = http.server.HTTPServer(('127.0.0.1', port), Handler)
        print("listen http://127.0.0.1:%s" % port)
        server.serve_forever()
    except KeyboardInterrupt:
        print('^C received, shutting down server')
        server.socket.close()


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    # 在Python 3.7中用下面这句即可，不必再去获取事件循环
    asyncio.run(main())
