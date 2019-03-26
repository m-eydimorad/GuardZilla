package viewmodels

import (
	"../models"
)

type EnvironmentStatusViewModel struct {
	Status        bool              `json:"Status"`
	LockedByUsers []models.UserLock `json:"LockedByUsers"`
}

func NewEnvironmentStatusViewModel(status bool, lockedByUsers []models.UserLock) *EnvironmentStatusViewModel {
	return &EnvironmentStatusViewModel{
		Status:        status,
		LockedByUsers: lockedByUsers,
	}
}
