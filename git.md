<-- create a repository for a project and upload initial commit-->
git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/myk3lekill/smartbrain.git
git push -u origin main

<-- upload files to the repository -->
git add .
git commit -m 'second commit'
git push origin main

<-- Remove saved url -->
git remote set-url origin https://github.com/myk3lekill/template-test.git