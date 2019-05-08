package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

var content []byte

func init() {
	b, _ := ioutil.ReadFile("./test_file.js")

	content = b
}

func handler(w http.ResponseWriter, req *http.Request) {
	w.Write(content)
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
