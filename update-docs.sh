# Prepare
cd docs
rm -rf .vuepress/dist
 
# Build
vuepress build
 
# Publish to GitHub Pages
cd .vuepress/dist
git init
git config user.name "xkloveme"
git config user.email "xkloveme@gmail.com"
git add -A
git commit -m "[vuepress] update docs"
git push --force "https://${TOKEN}@github.com/xkloveme/wt-ui-antd.git" "master:gh-pages"
 
# Cleanup
cd ../..
rm -rf .vuepress/dist