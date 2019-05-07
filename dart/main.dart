// Copyright (c) 2014, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// Replies "Hello, world!" to all requests.
// Use the URL localhost:4040 in your browser.
import 'dart:io';
import 'dart:async';

const t = Duration(milliseconds: 200);

Future main() async {
  var server = await HttpServer.bind(
    InternetAddress.loopbackIPv4,
    3000,
  );
  print('Listening on localhost:${server.port}');

  await for (HttpRequest request in server) {
    new Future.delayed(t, () {
      request.response
        ..write('Hello, world!')
        ..close();
    });
  }
}
