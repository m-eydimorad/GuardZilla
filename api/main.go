package main

import (
	"./handlers"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	handlers.Setup(router)
	http.ListenAndServe(":8099", router)
}
