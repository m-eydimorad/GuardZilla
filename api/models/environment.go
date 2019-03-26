package models


type Environment struct {
	Id          int    `json:"Id"`
	Name      string    `json:"Name"`
}

func NewEnvironment() *Environment {

	return &Environment{Id: 0}
}
