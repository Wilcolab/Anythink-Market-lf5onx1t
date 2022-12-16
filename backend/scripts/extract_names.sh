#!/bin/sh

cat $1 | grep -i @amazon.com | cut -d "," -f 2-3 | sed 's/,/ /g' | awk '{print $2,$1}' > $2