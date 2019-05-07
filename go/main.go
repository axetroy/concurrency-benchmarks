package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

func handler(w http.ResponseWriter, req *http.Request) {

	time.Sleep(time.Millisecond * 200)

	w.Write(byte("Hello, world!"))
}

func main() {
	var (
		port = "3000"
	)

	http.HandleFunc("/", handler)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	} else {
		fmt.Println("Listen on port: " + port)
	}
}
