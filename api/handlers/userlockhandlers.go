package handlers

import (
	"../models"
	"../repositories"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func GetUserLock(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	username := vars["username"]
	user := repositories.GetUser(username)
	userlocks:=repositories.GetUserLock(user.Id)
	json.NewEncoder(w).Encode(userlocks)
}
func GetUserLockByEnviroment(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	username := vars["username"]
	environmentid := vars["environmentid"]
	environmentidInt, _ := strconv.Atoi(environmentid)
	user := repositories.GetUser(username)
	userlocks:=repositories.GetUserLockByEnvironmentId(user.Id,environmentidInt)
	json.NewEncoder(w).Encode(userlocks)
}
func PostUserLock(w http.ResponseWriter, r *http.Request) {
	// Read body
	convertedBody, err := ConvertBody(r)
	userLock := convertedBody.(models.UserLock)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	result := repositories.PostUserLock(userLock)
	if !result {
		w.WriteHeader(http.StatusInternalServerError)
	}
}
