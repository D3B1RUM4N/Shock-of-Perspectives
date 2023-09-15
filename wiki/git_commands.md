# Git Commands

## Content
- [Init local repository](#init-local-repository)
- [Commit](#commit)
   - [Add files](#add-files)
   - [Setup commit message](#setup-commit-message)
   - [Push](#push)

## Init local repository
```shell
cd {my_folder}
git clone https://gitlab.unistra.fr/maes-t3/{firstname}_{lastname}.git {destination}
cd {destination}
```

## Commit

### Add files
```shell
git add {file1} {file2} {file...}
```

### Setup commit message
```shell
git commit -m ":{emoji}: {message}"
```

Find emojis list [here](git_commit_messages.md)!

### Push
```shell
git push {remote} {branch}
``` 

> Written by [**Loïc MAES**](https://github.com/loicmaes) in 2023
