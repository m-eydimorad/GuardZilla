package main

import (
	"./handlers"
	"github.com/gorilla/mux"
	"net/http"
	"./repositories"
)
const (
	connStr string= "user=postgres password=123 dbname=GuardZilla sslmode=disable"
)
func main() {
	repositories.InitDB(connStr)
	router := mux.NewRouter()
	handlers.Setup(router)
	http.ListenAndServe(":8099", router)
}
