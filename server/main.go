package main

import (
	"fmt"
	"github.com/madhavarora03/todo-list/router"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("Starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", r))
}
