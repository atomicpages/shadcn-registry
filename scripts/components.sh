#!/usr/bin/env bash
set -x

bunx glob -p 'src/components/**/*.tsx' \
  -i '**/*.stories.*' \
  -i '**/ui/**' \
  > ./bin/components.txt

printf "%s" "$(< ./bin/components.txt)" > ./bin/components.txt

jq -R -s -c 'split("\n")' < ./bin/components.txt > ./bin/components.json
rm ./bin/components.txt
bunx prettier --write ./bin/components.json
