package handlers

import (
	"errors"
	"net/http"
	"server/database"
	"server/models"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func GetUsers(c echo.Context) error {
	Users := []models.Users{}

	if err := database.DB.Find(&Users).Error; err != nil {
		return err
	}

	return c.JSON(http.StatusOK, Users)
}

func CreateUser(c echo.Context) error {
	Users := models.Users{}

	if err := c.Bind(&Users); err != nil {
		return err
	}

	if err := database.DB.Create(&Users).Error; err != nil {
		return err
	}

	return c.JSON(http.StatusOK, Users)
}

func GetUser(c echo.Context) error {
	Users := models.Users{}
	uid := c.Param("uid")

	if err := database.DB.First(&Users, uid).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.JSON(http.StatusNotFound, "Users not found")
		}

		return err
	}

	return c.JSON(http.StatusOK, Users)
}

func UpdateUser(c echo.Context) error {
	Users := models.Users{}
	uid := c.Param("uid")

	if err := database.DB.First(&Users, uid).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.JSON(http.StatusNotFound, "Users not found")
		}

		return err
	}

	if err := c.Bind(&Users); err != nil {
		return err
	}

	if err := database.DB.Updates(&Users).Error; err != nil {
		return err
	}

	return c.JSON(http.StatusOK, Users)
}

func DeleteUser(c echo.Context) error {
	Users := models.Users{}
	uid := c.Param("uid")

	if err := database.DB.First(&Users, uid).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.JSON(http.StatusNotFound, "Users not found")
		}

		return err
	}

	if err := database.DB.Delete(&Users).Error; err != nil {
		return err
	}

	return c.JSON(http.StatusOK, Users)
}
