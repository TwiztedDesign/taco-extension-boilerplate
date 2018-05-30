# 🌮 Taco extension boilerplate 🌮
![MIT License](https://img.shields.io/github/license/TwiztedDesign/taco.svg)


# Usage
Create a new empty repo on GitHub 
    
    git clone https://github.com/TwiztedDesign/taco-extension-boilerplate.git [my-extension-name]
    cd [my-extension-name] 
   
Clean the README

    rm README.md && touch README.md
    
If you have LICENSE, you can clean it too.

    rm LICENSE
    touch LICENSE
    
Remove all git info from the boilerplate

    rm -rf .git
    
Initiate the new git repo

    git init
    git add -A
    git commit -m "first commit"
    git remote add origin [my-extension remote repo]
    git push -u origin master
    
Install Dependencies

    npm install

## Build
    npm run build
    
This will generate the file /dist/tacoExt.js.  
Include this in your html file after you include the taco script

### usage examples
To check out the examples, uncomment the require statements in the index.html   
and open examples/basic/index.html in your browser


## Tests
Run tests:

    npm test 

Watch tests:

    npm run test-watch


## 🍻 Cheers 🍻 

