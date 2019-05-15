#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$SCRIPT_DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

APP_PATH=$(dirname $SCRIPT_DIR)

NODE_PATH=$APP_PATH/bin/node

echo "Using Node.js runtime binary $NODE_PATH"

export PATH=$NODE_PATH:$PATH

SERVER_ACTIVE=$(systemctl is-active edublocks-server.service)

if [ $SERVER_ACTIVE != 'active' ]; then
  echo 'Starting EduBlocks connect...'
  cd $APP_PATH/server
  ./start.sh &
else
  echo 'EduBlocks Connect already running in the background, not starting another one'
fi

echo '==== Please be patient, the EduBlocks UI is loading... ===='

cd $APP_PATH/ui
2>/dev/null 1>&2 ./start.sh
