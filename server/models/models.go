package models

import "go.mongodb.org/mongo-driver/v2/bson"

type TodoList struct {
	ID     bson.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Task   string        `json:"task,omitempty"`
	Status bool          `json:"status,omitempty"`
}
