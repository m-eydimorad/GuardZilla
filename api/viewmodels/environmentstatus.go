package viewmodels

type EnvironmentStatusViewModel struct {
	Status        bool              `json:"Status"`
	LockedByUsers []UserLockViewModel `json:"LockedByUsers"`
	Environment string `json:"Environment"`
}

func NewEnvironmentStatusViewModel(status bool, lockedByUsers []UserLockViewModel,environment string) *EnvironmentStatusViewModel {
	return &EnvironmentStatusViewModel{
		Status:        status,
		Environment:environment,
		LockedByUsers: lockedByUsers,
	}
}
