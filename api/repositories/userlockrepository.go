package repositories

import (
	"../models"
)

func PostUserLock(userlock models.UserLock) bool {
	vals := []interface{}{}
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId, &userlock.Comment)
	result:=ExecuteInsertSqlStatement("INSERT INTO userlock(userid, environmentid, comment)",vals)
	return result
}
