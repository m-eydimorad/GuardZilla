package repositories

import (
	"../models"
	"log"
	"time"
	"../viewmodels"
)

func DeleteUserLock(userId int, environmentid int) bool {
	var vals []interface{}
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
	var vals []interface{}
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId, &userlock.Comment, time.Now(), time.Now())
	result := ExecuteInsertSqlStatement("INSERT INTO userlock(userid, environmentid, comment,insertdate,updatedate)", vals)
	return result
}

func updateUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.Comment, time.Now(), &userlock.UserId, &userlock.EnvironmentId)
	result := ExecuteSqlStatement("update userlock set comment=$1,updatedate=$2 where userid=$3 and environmentid=$4", vals)
	return result
}
func GetUserLock(userid int) *[]viewmodels.UserLockViewModel {
	userlocks := GetAllUserLocks()
	userlockList := make([]viewmodels.UserLockViewModel, 0)
	for _, a := range *userlocks {
		if a.UserId == userid {
			userlockList = append(userlockList, a)
		}
	}
	return &userlockList
}
func GetUserLockByUserIdEnvironmentId(userid int, environmentId int) *viewmodels.UserLockViewModel {
	userlocks := GetAllUserLocks()

	for _, a := range *userlocks {
		if a.UserId == userid && a.EnvironmentId == environmentId {
			return &a
		}
	}
	return nil
}
func GetUserLockByEnvironmentId(environmentId int) *[]viewmodels.UserLockViewModel {
	userlocks := GetAllUserLocks()
	userlockList := make([]viewmodels.UserLockViewModel, 0)
	for _, a := range *userlocks {
		if a.EnvironmentId == environmentId {
			userlockList = append(userlockList, a)
		}
	}
	return &userlockList
}

func GetAllUserLocks() *[]viewmodels.UserLockViewModel {
	rows, err := db.Query("SELECT userid,environmentid,comment,users.firstname,users.lastname FROM userlock inner join users on userlock.userid=users.id")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	userlocks := make([]viewmodels.UserLockViewModel, 0)
	for rows.Next() {
		userlock := viewmodels.NewUserLockViewModel()
		err := rows.Scan(&userlock.UserId, &userlock.EnvironmentId, &userlock.Comment,&userlock.Firstname,&userlock.Lastname)
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
