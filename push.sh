vercel && vercel --prod 
git add .

if [ "x$1" != "x" ]; then
    echo -e "\n\n commit $1 \n\n"
    git commit -m "$1"
  else
    echo -e "\n\n commit is random \n\n"
    git commit -m "$RANDOM"
fi
git push -u origin master
npm run build
