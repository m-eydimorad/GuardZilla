package viewmodels

type UserLockViewModel struct {
	UserId          int    `json:"UserId"`
	EnvironmentId          int    `json:"EnvironmentId"`
	Comment      string    `json:"Comment"`
	Firstname      string    `json:"Firstname"`
	Lastname      string    `json:"Lastname"`
}
func NewUserLockViewModel() *UserLockViewModel {

	return &UserLockViewModel{}
}