package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	models "FirstProject/Models"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/GetStatus",GetStatus )
	r.HandleFunc("/IsLock",IsLock )
	r.HandleFunc("/UserGateLock",UserGateLock )
	r.HandleFunc("/GetAll",GetAllUsers )
	r.HandleFunc("/CheckUser/{username}",CheckUserIsValid )
	http.ListenAndServe(":8099", r)
}
func GetStatus(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "در حال حاضر اپلیکیشن لاک نمی باشد")

}
func IsLock(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "در حال حاضر اپلیکیشن لاک نمی باشد")
}
func UserGateLock(w http.ResponseWriter, r *http.Request){

	fmt.Fprintf(w, "در حال حاضر اپلیکیشن لاک نمی باشد")
}
func CheckUserIsValid(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	username := vars["username"]
    mockUser:=MockUsers()
	if contains(*mockUser,username)  {
		fmt.Fprintf(w, "{result:true}")
	} else {
		fmt.Fprintf(w, "{result:false}")
	}
}
func GetAllUsers(w http.ResponseWriter, r *http.Request){

	mockUsers :=MockUsers()
	json.NewEncoder(w).Encode(mockUsers)


}

func MockUsers() *[]models.User {

	mockUsers := make([]models.User, 4)

	user1 := models.NewUser("1","m_eydimorad")
	user2 := models.NewUser("2","a_hojati")
	user3 := models.NewUser("3","ha_mousavi")
	user4 := models.NewUser("4","p_taghizade")

	mockUsers[0] = *user1
	mockUsers[1] = *user2
	mockUsers[2] = *user3
	mockUsers[3] = *user4
	return &mockUsers

}
func contains(users []models.User, item string) bool {
	for _, a := range users {
		if a.Name == item {
			return true
		}
	}
	return false
}