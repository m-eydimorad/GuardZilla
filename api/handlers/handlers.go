package handlers

import (
	"github.com/gorilla/mux"
)

func Setup(router *mux.Router) {
	router.HandleFunc("/user", GetAllUsers)
	router.HandleFunc("/user/{username}", GetUser)
}
