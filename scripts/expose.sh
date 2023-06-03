#!/bin/bash 

until npx localtunnel --port 3000 --subdomain doottodo
do
  echo "Trying again"
done