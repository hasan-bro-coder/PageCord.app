vercel && vercel --prod 
git add .
git commit -m "$RANDOM"
git push -u origin master
npm run build
