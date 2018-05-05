#!/bin/bash
cp -r output/dist/* ./docs
git add ./docs
git commit -m "Update github pages sites"
git push origin master
