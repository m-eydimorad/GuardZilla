package models

type User struct {
	Id          int    `json:"Id"`
	Username      string    `json:"Username"`
	FirstName string    `json:"FirstName"`
	LastName string    `json:"LastName"`
}

func NewUser() *User {

	return &User{Id: 0}
}