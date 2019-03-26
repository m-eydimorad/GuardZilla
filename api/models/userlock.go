package models

type UserLock struct {
	UserId          int    `json:"UserId"`
	EnvironmentId          int    `json:"EnvironmentId"`
	Comment      string    `json:"Comment"`
}

func NewUserLock() *UserLock {

	return &UserLock{}
}

