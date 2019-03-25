package main

import (
	"../api/handlers"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/user",handlers.GetAllUsers )
	r.HandleFunc("/user/{username}",handlers.GetUser )
	http.ListenAndServe(":8099", r)
}


