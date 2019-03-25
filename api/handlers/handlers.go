package handlers

import (
	"github.com/gorilla/mux"
)

func Setup(router *mux.Router) {
	router.HandleFunc("/users", GetAllUsers)
	router.HandleFunc("/users/{username}", GetUser)
}
