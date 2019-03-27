package repositories

import (
	"strconv"
	"strings"
)

func ExecuteInsertSqlStatement(insertSqlStatemenet string, values []interface{}) bool {
	sqlStr := insertSqlStatemenet + " VALUES "
	sqlStr += "(?, ?, ?, ?, ?)"
	//Replacing ? with $n for postgres
	sqlStr = ReplaceSQL(sqlStr, "?")
	//prepare the statement
	stmt, err := db.Prepare(sqlStr)
	if err != nil {
		return false
	}
	//format all vals at once
	_, errExec := stmt.Exec(values...)
	if errExec != nil {
		return false
	}
	return true
}
func ExecuteSqlStatement(sqlStatemenet string, values []interface{}) bool {
	sqlStr := sqlStatemenet
	stmt, err := db.Prepare(sqlStr)
	if err != nil {
		return false
	}
	_, errExec := stmt.Exec(values...)
	if errExec != nil {
		return false
	}
	return true
}
func ReplaceSQL(old, searchPattern string) string {
	tmpCount := strings.Count(old, searchPattern)
	for m := 1; m <= tmpCount; m++ {
		old = strings.Replace(old, searchPattern, "$"+strconv.Itoa(m), 1)
	}
	return old
}
