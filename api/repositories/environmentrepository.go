package repositories

import (
	"../viewmodels"
)

func GetEnvironmentStatus(environmentid int) *viewmodels.EnvironmentStatusViewModel {
	userLocks := GetUserLockByEnvironmentId(environmentid)
	environmentStatus := viewmodels.NewEnvironmentStatusViewModel(len(*userLocks) == 0, *userLocks)
	return environmentStatus
}
