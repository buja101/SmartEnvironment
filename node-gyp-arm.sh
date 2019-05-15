#!/bin/bash

cd $1

AR=arm-linux-gnueabi-ar CC=arm-linux-gnueabi-gcc CXX=arm-linux-gnueabi-g++ LINK=arm-linux-gnueabi-g++ node-gyp --arch=arm configure
AR=arm-linux-gnueabi-ar CC=arm-linux-gnueabi-gcc CXX=arm-linux-gnueabi-g++ LINK=arm-linux-gnueabi-g++ node-gyp --arch=arm build
