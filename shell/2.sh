#!/bin/bash
CONTENT=$(cat mig33/inner.folder/1.txt) && echo ${CONTENT//Mango/Apple} > mig33/inner.folder/1.txt