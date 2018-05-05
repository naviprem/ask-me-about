
### Pulling code from github

Everytime after you pull latest code from github, remember to run `npm install` on your project folder. This will download and install any new dependencies needed for the latest code.

```
npm install
```

Use this git command to pull the latest code from github
```
git fetch --prune
```

For further reference on git commands refer [here](https://git-scm.com/docs)

Here is a basic overview of how Git works:

1. Create a "repository" (project) with a git hosting tool (like Bitbucket)
2. Copy (or clone) the repository to your local machine
3. Add a file to your local repo and "commit" (save) the changes
4. "Push" your changes to your master branch
5. Make a change to your file with a git hosting tool and commit
6. "Pull" the changes to your local machine
7. Create a "branch" (version), make a change, commit the change
8. Open a "pull request" (propose changes to the master branch)
9. "Merge" your branch to the master branch

Reference: [Atlassian Git Tutorials](https://www.atlassian.com/git?utm_source=basic-git-commands&utm_medium=link&utm_campaign=git-microsite&_ga=2.138593014.47438848.1525549472-772772554.1525549472)
