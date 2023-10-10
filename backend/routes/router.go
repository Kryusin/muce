package routes

import (
	"server/handlers"

	"github.com/labstack/echo/v4"
)

func Init() *echo.Echo {
	e := echo.New()

	e.GET("/api/users", handlers.GetUsers)
	e.POST("/api/users", handlers.CreateUser)
	e.GET("/api/users/:id", handlers.GetUser)
	e.PATCH("/api/users/:id", handlers.UpdateUser)
	e.DELETE("/api/users/:id", handlers.DeleteUser)

	return e
}
