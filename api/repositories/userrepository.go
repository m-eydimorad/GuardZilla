package repositories

import (
	models "../Models"
)

func GetAllUsers() *[]models.User {
	return mockUsers()
}

func GetUser(username string) *models.User {
	users:=GetAllUsers()
	for _, a := range *users {
		if a.Name == username {
			return &a
		}
	}
	return nil
}

func mockUsers() *[]models.User {

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