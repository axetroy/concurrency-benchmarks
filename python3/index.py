import http.server
import socketserver
from http import HTTPStatus
import time

port = 9000


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(HTTPStatus.OK)
        f = open("./test_data.json", "r")
        raw = f.read()
        time.sleep( 5 )
        self.end_headers()
        self.wfile.write(raw.encode())


print("listen http://localhost:%s" % port)

httpd = socketserver.TCPServer(('', port), Handler)
httpd.serve_forever()
