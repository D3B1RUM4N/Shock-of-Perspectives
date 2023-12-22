@echo off
title Starting...

cd ./api && start start.bat
cd ../interface && start start.bat
start message.bat
