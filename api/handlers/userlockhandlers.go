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
	userId, _ := strconv.Atoi(vars["userid"])
	userlocks := repositories.GetUserLock(userId)
	json.NewEncoder(w).Encode(userlocks)
}
func GetUserLockByEnviroment(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId, _ := strconv.Atoi(vars["userid"])
	environmentid, _ := strconv.Atoi(vars["environmentid"])
	userlocks := repositories.GetUserLockByUserIdEnvironmentId(userId, environmentid)
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

	result := repositories.AddOrUpdateUserLock(userLock)
	if !result {
		w.WriteHeader(http.StatusInternalServerError)
	}
}

func DeleteUserLock(w http.ResponseWriter, r *http.Request) {
	// Read body

	vars := mux.Vars(r)
	userId, _ := strconv.Atoi(vars["userid"])
	environmentid, _ := strconv.Atoi(vars["environmentid"])

	result := repositories.DeleteUserLock(userId, environmentid)
	if !result {
		w.WriteHeader(http.StatusInternalServerError)
	}
}
