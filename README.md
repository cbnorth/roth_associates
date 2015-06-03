# roth_associates

#new developer setup 
##(for Mac)

##Technology Stack/Overview
This is a staticly generated website built on a Node/Wintersmith/Jade/Markdown/SASS tech stack.
Node.js is a JavaScript runtime environment, which means it lets you write JavaScript on your computer, free of a web browser. And will allow us to run a web server on our local machines. 

###Wintersmith 
a static site build engine that was developed by Mozilla, it is used to compile the HTML that comprises intentionalfutures.com. Here is some more info about Wintersmith: http://wintersmith.io/ & http://davidtucker.net/articles/introduction-to-wintersmith/ 

###Jade
an HTML templating language that looks and feels a lot like HTML, but is better in everyway. Here is some more info about Jade: http://jade-lang.com/ 


###Markdown
a plain text language that we’re using as a way to inject static ‘data’ into our psuedo dynamic HTML, via Jade. What does that mean? It means that Jade pulls in the appropriate markdown files and fills the outputted HTML with the appropriate information held in that markdown file. There will be more on the role of Markdown later, once the site is installed and running and we can look more closely at the code. Learn more: http://daringfireball.net/projects/markdown/

###Sass
a CSS precompiler that is built on top of Ruby. More info on Sass here: http://sass-lang.com/guide 

##Grunt 
is a JavaScript task manager that in this case is used to do the following:
compile sass, minify javascript, start  and other cool things. Our project uses a package.json file to track all of Grunt’s dependencies. Once we have the project downloaded we can use Node Pack Manager, or NPM, to automatically grab all of the grunt dependencies, which will be required to build our site. More info here: http://gruntjs.com/installing-grunt 

##Dev Dependencies

###Node.js/NPM
NPM is a package manager that allows for easy installation of programs and packages through the terminal and is required for installing Grunt dependencies, and comes along with the Node.js environment.
Node - Latest Node (0.12) as of June 3, 2015 is not compatible with serveral packages used for this project, intead we'll be using version 0.10
- Install via the website: http://blog.nodejs.org/2015/01/26/node-v0-10-36-stable/

###Git
- Download and install the latest git from the homepage, here: http://git-scm.com/ 
- All Mac’s come with Git by default, you’ll need to supersede the default version so we can use the version we just installed.
- In the terminal run this command: 
    - nano .bash_profile [nano is a text editor, this command opens the text editor and allows us to edit, or create, a file called .bash_profile]
    - Copy in this code: export PATH="/usr/local/git/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:$PATH"
- control X to exit & save
- Close terminal and restart, type git --version and you should now have the proper git version running 

More info about the Git install process here: http://coolestguidesontheplanet.com/install-update-latest-version-git-mac-osx-10-9-mavericks/

##Downloading and running the project locally for the first time
###Clone the Git Repository (Repo) 
(if you aren’t familiar with Git, check out this super simple guide: http://rogerdudler.github.io/git-guide/)

###Git security access
- Request access as a contributor to the project
- Go to user settings (the gear icon next to your user name)
- click the link 'generating ssh key' and follow the instructions
- test access by typing ssh git@github.com on the command line

- Open Terminal & cd into the appropriate directly, for example ‘sites’
    - Command: git clone git@github.com:chrisburkedev/roth_associates.git
- If all has gone well you should have a new directory called roth_associates which contains the source files for our project. Verify this by opening a new finder window and going into ‘Sites’, or whichever directory you were in when you ran the ‘git clone’ command.


###Install grunt
- Run these commands in the terminal:
- cd to project directory, i.e., sites/newiF/src
- run this command: sudo npm install -g  grunt-cli  *this will require the admin password for your computer)
- close and restart the terminal

###Install wintersmith globally
- Run this command in the terinal:
- npm install wintersmith -g
- close and restart the terminal

###Grunt dependencies/Package.json
Package.json lists all of our project-level dependencies. To install those dependencies do the following:
- Run these commands in the terminal:
- cd into our project directory that contains the source files, i.e., sites/newiF/src
- Command: npm install
- Command: gem install sass -or- sudo gem install sass
- Close terminal and re-open & cd back to project directory
- Command: grunt

If everything was successful grunt will now be running and watching files for changes.
    
##View the project locally
Open a browser and view ‘localhost:8080’
