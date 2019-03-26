package handlers

import (
	"../repositories"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

func GetUser(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	username := vars["username"]
	user := repositories.GetUser(username)
	json.NewEncoder(w).Encode(user)
}

func GetAllUsers(w http.ResponseWriter, r *http.Request){
	allUsers :=repositories.GetAllUsers()
	json.NewEncoder(w).Encode(allUsers)
}


