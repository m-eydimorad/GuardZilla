package viewmodels

type EnvironmentStatusViewModel struct {
	Status        bool              `json:"Status"`
	LockedByUsers []UserLockViewModel `json:"LockedByUsers"`
}

func NewEnvironmentStatusViewModel(status bool, lockedByUsers []UserLockViewModel) *EnvironmentStatusViewModel {
	return &EnvironmentStatusViewModel{
		Status:        status,
		LockedByUsers: lockedByUsers,
	}
}
