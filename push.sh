vercel && vercel --prod
echo "- $1" >> README.md
git add .
git commit -m "$1"
git push -u origin master
npm run build
