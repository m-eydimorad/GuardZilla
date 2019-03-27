package repositories

import (
	"../viewmodels"
	"log"
	"../models"
)

func GetEnvironmentStatus(environmentid int) *viewmodels.EnvironmentStatusViewModel {
	userLocks := GetUserLockByEnvironmentId(environmentid)
	envirnmentName:=``;
	environment:=GetEnvironment(environmentid)
	if environment !=nil {
		envirnmentName=environment.Name
	}
	environmentStatus := viewmodels.NewEnvironmentStatusViewModel(len(*userLocks) == 0, *userLocks,envirnmentName)

	return environmentStatus
}
func GetAllEnvironment() *[]models.Environment {
	rows, err := db.Query("SELECT id,name FROM environment")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	environments := make([]models.Environment, 0)
	for rows.Next() {
		environment := models.NewEnvironment()
		err := rows.Scan(&environment.Id, &environment.Name)
		if err != nil {
			log.Fatal(err)
		}

		environments = append(environments, *environment)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
	return &environments
}

func GetEnvironment(environmentid int) *models.Environment {
	environments := GetAllEnvironment()
	for _, a := range *environments {
		if a.Id == environmentid {
			return &a
		}
	}
	return nil
}