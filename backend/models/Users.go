package models

type Users struct {
	uid      string `gorm:"primarykey"`
	email    string `json:"email"`
	password string `json:"password"`
}
