challenge=`echo "$1" | sed "s/[^1-9]//g"`
if [ -z "$1" ]; then
  echo "Missing challenge arg"
  exit 1
fi

npx ts-node "src/$challenge/$1.ts"
