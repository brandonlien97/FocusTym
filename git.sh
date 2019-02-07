git pull
git add .
MSG="made minor changes"
if [[ -n "$1" ]]; then
	MSG="$1"
fi
git commit -m"$MSG"
git push