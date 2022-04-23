#!/bin/sh
docker build -t sueta-bot:0.0.2 .
docker run -d --name sueta-bot --env DISCORD_TOKEN="$DISCORD_TOKEN" --env BOT_INTENTS=2147560448 sueta-bot:0.0.2