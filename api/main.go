package main

import (
	"./handlers"
	"./repositories"
	"github.com/gorilla/mux"
	"github.com/heppu/simple-cors"
	"net/http"
)

const (
	connStr string = "user=postgres password=123 dbname=GuardZilla sslmode=disable"
)

func main() {
	repositories.InitDB(connStr)
	router := mux.NewRouter()
	handlers.Setup(router)
	http.ListenAndServe(":8099", cors.CORS(router))
}
