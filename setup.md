# Development Environment and Project Setup


### Step 1. Set up the Development Environment

You need to set up your development environment before you can do anything.

1. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your machine

2. Create an account with [www.github.com](https://github.com/) to commit and collaborate on your code

2. Install [Node.js and NPM](https://nodejs.org/en/download/) if they are not already on your machine.

3. Install the Angular CLI globally. Open a terminal window and type this command to install Angular CLI globally

```
npm install -g @angular/cli
```

### Step 2. Clone this project repository

1. On a terminal window, navigate to your working directory
2. Enter this command to clone the project repository from github

```
git clone https://github.com/naviprem/ask-me-about.git
```

3. cd into the directory

```
cd ask-me-about
```

### Step 3. Install project dependencies

From the project directory, run this command to download/install dependencies listed on package.json

```
npm install
```

### Step 4. Serve the application

From the project directory, launch the server.

```
ng serve --open
```

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the `--open` (or just -o) option will automatically open your browser on http://localhost:4200/.

### Step 5. Edit and update the code

Open the project on your favorite IDE

Recommendation: [WebStrom](https://www.jetbrains.com/webstorm/)

Free license available for students https://www.jetbrains.com/student/

### More Details...

Read this documentation [here](https://angular.io/guide/quickstart#whats-next) to know about the folder structure and various files on a typical angular project.
