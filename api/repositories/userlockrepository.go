package repositories

import (
	"../models"
	"strings"
)

func PostUserLock(userlock models.UserLock) bool {
	sqlStr := "INSERT INTO userlock(userid, environmentid, comment) VALUES "
	vals := []interface{}{}

	sqlStr += "(?, ?, ?),"
	vals = append(vals, &userlock.UserId, &userlock.EnvironmentId, &userlock.Comment)

	//trim the last ,
	sqlStr = strings.TrimSuffix(sqlStr, ",")

	//Replacing ? with $n for postgres
	sqlStr = ReplaceSQL(sqlStr, "?")

	//prepare the statement
	stmt, err := db.Prepare(sqlStr)
	if err != nil {
		return false
	}
	//format all vals at once
	_, error := stmt.Exec(vals...)
	if error != nil {
		return false
	}
	return true
}
