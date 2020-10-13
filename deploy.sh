#!/bin/sh

mkdir -p "temp/$CODEBUILD_GIT_CLEAN_BRANCH"
mv ./portal/public/* "temp/$CODEBUILD_GIT_CLEAN_BRANCH"

aws s3 sync ./temp s3://jokul-staging
