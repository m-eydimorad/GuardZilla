package Models

type User struct {
	Id          string    `json:"Id"`
	Name      string    `json:"Name"`
}


func NewUser(id string, name string) *User {

	return &User{Id: id, Name: name}
}
