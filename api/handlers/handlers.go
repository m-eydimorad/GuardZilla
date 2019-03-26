package handlers

import (
	"github.com/gorilla/mux"
)

func Setup(router *mux.Router) {
	router.HandleFunc("/users", GetAllUsers).Methods("Get")
	router.HandleFunc("/users/{username}", GetUser).Methods("Get")
	router.HandleFunc("/userlock/{userid}", GetUserLock).Methods("Get")
	router.HandleFunc("/userlock/{userid}/{environmentid}", GetUserLockByEnviroment).Methods("Get")
	router.HandleFunc("/userlock", PostUserLock).Methods("Post")
	router.HandleFunc("/userlock/{userid}/{environmentid}", DeleteUserLock).Methods("Delete")
}
