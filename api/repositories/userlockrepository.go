package repositories

import (
	"../models"
	"log"

)

func PostUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId, &userlock.Comment)
	result:=ExecuteInsertSqlStatement("INSERT INTO userlock(userid, environmentid, comment)",vals)
	return result
}
func GetUserLock(userid int) *[]models.UserLock {
	userlocks:=GetAllUserLocks()
	userlockList := make([]models.UserLock, 0)
	for _, a := range *userlocks {
		if a.UserId == userid {
			userlockList=append(userlockList,a)
		}
	}
	return &userlockList
}
func GetUserLockByEnvironmentId(userid int,environmentId int) *models.UserLock {
	userlocks:=GetAllUserLocks()

	for _, a := range *userlocks {
		if a.UserId == userid && a.EnvironmentId== environmentId{
			return &a
		}
	}
	return nil
}
func GetAllUserLocks() *[]models.UserLock {
	rows, err := db.Query("SELECT userid,environmentid,comment FROM userlock")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	userlocks := make([]models.UserLock, 0)
	for rows.Next() {
		userlock:=models.NewUserLock()
		err := rows.Scan(&userlock.UserId, &userlock.EnvironmentId,&userlock.Comment)
		if err != nil {
			log.Fatal(err)
		}

		userlocks=append(userlocks,*userlock)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
	return &userlocks
}