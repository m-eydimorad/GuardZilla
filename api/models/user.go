package models

type User struct {
	Id          int    `json:"Id"`
	Username      string    `json:"Username"`
}

func NewUser() *User {

	return &User{Id: 0}
}