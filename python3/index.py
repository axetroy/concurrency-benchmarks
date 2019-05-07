import http.server
import socketserver
from http import HTTPStatus
import time

port = 3000


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        time.sleep( 0.2 )
        self.send_response(HTTPStatus.OK)
        self.end_headers()
        self.wfile.write("hello world".encode("utf-8"))

try:
    server = http.server.HTTPServer(('127.0.0.1', port), Handler)
    print("listen http://127.0.0.1:%s" % port)
    server.serve_forever()
except KeyboardInterrupt:
    print('^C received, shutting down server')
    server.socket.close()