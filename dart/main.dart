import 'dart:io';
import 'dart:async';

Future main() async {
  var server = await HttpServer.bind(
    InternetAddress.loopbackIPv4,
    3000,
  );
  print('Listening on localhost:${server.port}');

  var file = new File("./test_file.js");

  var content = await file.readAsString();

  await for (HttpRequest request in server) {
    request.response
      ..write(content)
      ..close();
  }
}
