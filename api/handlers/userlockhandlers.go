package handlers

import (
	"../models"
	"../repositories"
	"net/http"
)

func GetUserLock(w http.ResponseWriter, r *http.Request) {

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
	convertedBody, err := ConvertBody(r)
	userLock := convertedBody.(models.UserLock)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	result := repositories.DeleteUserLock(userLock)
	if !result {
		w.WriteHeader(http.StatusInternalServerError)
	}
}
