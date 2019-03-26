package repositories

import (
	"../models"
	"log"
)

func GetAllUsers() *[]models.User {
	rows, err := db.Query("SELECT id,username FROM users")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	users := make([]models.User, 0)
	for rows.Next() {
		user:=models.NewUser()
		err := rows.Scan(&user.Id, &user.Username)
		if err != nil {
			log.Fatal(err)
		}

		users=append(users,*user)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
	return &users
}

func GetUser(username string) *models.User {
	users:=GetAllUsers()
	for _, a := range *users {
		if a.Username == username {
			return &a
		}
	}
	return nil
}
