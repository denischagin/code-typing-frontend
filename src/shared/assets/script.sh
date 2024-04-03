#!/bin/bash

# Массив URL изображений
image_urls=(
	'https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg'
	'https://profilinator.rishav.dev/skills-assets/typescript-original.svg'
	'https://profilinator.rishav.dev/skills-assets/chakraui.png'
	'https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg'
	'https://profilinator.rishav.dev/skills-assets/springio-icon.svg'
	'https://profilinator.rishav.dev/skills-assets/go-original.svg'
	'https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg'
	'https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg'
	'https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg'
	'https://profilinator.rishav.dev/skills-assets/rabbitmq-icon.svg'
)

# Проход по массиву URL и скачивание изображений
for url in "${image_urls[@]}"; do
	# Получение имени файла из URL
	file_name=$(basename "$url")

	# Загрузка изображения и сохранение в файл
	curl -o "$file_name" "$url"
done
