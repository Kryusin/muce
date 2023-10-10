package utils

import (
	"os"

	"github.com/joho/godotenv"
)

func Getenv(key string) string {
	if err := godotenv.Load(); err != nil {
		return ""
	}

	return os.Getenv(key)
}
