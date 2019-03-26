package repositories

import (
	"../models"
	"log"
)

func DeleteUserLock(userId int, environmentid int) bool {
	vals := []interface{}{}
	vals = append(vals, &userId, &environmentid)
	result := ExecuteSqlStatement("delete FROM userlock where userid=$1 and environmentid=$2", vals)
	return result
}

func AddOrUpdateUserLock(userlock models.UserLock) bool {
	isExists := GetUserLockByUserIdEnvironmentId(userlock.UserId, userlock.EnvironmentId) != nil
	if !isExists {
		addUserLock(userlock)
	} else {
		updateUserLock(userlock)
	}
	return true
}

func addUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId, &userlock.Comment)
	result := ExecuteInsertSqlStatement("INSERT INTO userlock(userid, environmentid, comment)", vals)
	return result
}

func updateUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.Comment, &userlock.UserId, &userlock.EnvironmentId)
	result := ExecuteSqlStatement("update userlock set comment=$1 where userid=$2 and environmentid=$3", vals)
	return result
}
func GetUserLock(userid int) *[]models.UserLock {
	userlocks := GetAllUserLocks()
	userlockList := make([]models.UserLock, 0)
	for _, a := range *userlocks {
		if a.UserId == userid {
			userlockList = append(userlockList, a)
		}
	}
	return &userlockList
}
func GetUserLockByUserIdEnvironmentId(userid int, environmentId int) *models.UserLock {
	userlocks := GetAllUserLocks()

	for _, a := range *userlocks {
		if a.UserId == userid && a.EnvironmentId == environmentId {
			return &a
		}
	}
	return nil
}
func GetUserLockByEnvironmentId(environmentId int) *[]models.UserLock {
	userlocks := GetAllUserLocks()
	userlockList := make([]models.UserLock, 0)
	for _, a := range *userlocks {
		if a.EnvironmentId == environmentId {
			userlockList = append(userlockList, a)
		}
	}
	return &userlockList
}

func GetAllUserLocks() *[]models.UserLock {
	rows, err := db.Query("SELECT userid,environmentid,comment FROM userlock")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	userlocks := make([]models.UserLock, 0)
	for rows.Next() {
		userlock := models.NewUserLock()
		err := rows.Scan(&userlock.UserId, &userlock.EnvironmentId, &userlock.Comment)
		if err != nil {
			log.Fatal(err)
		}

		userlocks = append(userlocks, *userlock)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
	return &userlocks
}
