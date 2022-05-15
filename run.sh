#!/bin/sh
docker build -t sueta-bot:0.1.3 .
docker run -d \
  --name sueta-bot \
  --env DISCORD_TOKEN="$DISCORD_TOKEN" \
  --env BOT_INTENTS=2147560448 \
  --env RANDOM_SEED=123 \
  --env GITHUB_LINK="https://github.com/AntonShan/sueta-discord-bot" \
  sueta-bot:0.1.3
