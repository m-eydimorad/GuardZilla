package handlers

import (
	"../models"
	"encoding/json"
	"io/ioutil"
	"net/http"
)

func ConvertBody(r *http.Request) (interface{},error){
	// Read body
	b, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		return nil,err
	}

	// Unmarshal
	var model models.UserLock
	err = json.Unmarshal(b, &model)
	if err != nil {
		return nil,err
	}
	return model,nil
}