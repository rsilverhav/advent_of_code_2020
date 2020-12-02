if [ -z "$1" ]; then
  echo "Missing challenge arg"
  exit 1
fi

npx jest --testRegex "src/.*$1/.*Spec.*\\.ts"
