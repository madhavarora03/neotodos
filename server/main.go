package main

import (
	"fmt"
	"github.com/madhavarora03/todo-list/router"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	handler := corsMiddleware(r)
	fmt.Println("Starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", handler))
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
