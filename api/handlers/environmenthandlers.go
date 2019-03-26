package handlers

import (
	"../repositories"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

func GetEnvironmentStatus(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	environmentid, _ := strconv.Atoi(vars["environmentid"])
	userlocks := repositories.GetEnvironmentStatus(environmentid)
	json.NewEncoder(w).Encode(userlocks)
}
