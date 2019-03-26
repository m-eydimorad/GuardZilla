package repositories

import (
	"../models"
)

func DeleteUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId)
	result := ExecuteSqlStatement("delete FROM userlock where userid=$1 and environmentid=$2", vals)
	return result
}

func AddOrUpdateUserLock(userlock models.UserLock) bool {
	isExists := true
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
	vals = append(vals, &userlock.Comment, &userlock.UserId)
	result := ExecuteSqlStatement("update userlock set comment=$1 where userid=$2", vals)
	return result
}
