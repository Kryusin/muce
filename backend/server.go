package main

import (
	"server/database"
	"server/routes"
)

func main() {
	database.Init()
	e := routes.Init()

	e.Logger.Fatal(e.Start(":1323"))
}
