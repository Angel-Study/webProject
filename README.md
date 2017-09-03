# webProject
- 프로젝트에 push 하기위해서 project owner 가 contributor 로 추가해줘야한다.
- 추가하려는 email 은 개인 profile > setting 에서 email 을 공개해줘야한다.

## git config
1. 로컬에서 프로젝트를 다운받으려는 폴더로 이동
```
$ cd {path}
```
2. git init 설정
```
$ git init
```
3. git global 설정
```
$ git config --global user.name {username}
$ git config --global user.email {email}
```
4. 프로젝트 clone
```
$ git clone git@github.com:Angel-Study/webProject.git
```
5. remote 경로가 다음과 같으면 정상적으로 remote 가 설정된 것
```
$ git remote -v
origin	git@github.com:Angel-Study/webProject.git (fetch)
origin	git@github.com:Angel-Study/webProject.git (push)
```
6. 다운받은 프로젝트 폴더로 이동
```
$ cd webProject
```

## project push 정책
1. 모든 contributor 는 로컬에서 개인 branch 를 따서 작업한다.
```
$ cd ~/{path}/webProject
$ git branch {작업브랜치명}
```
2. push 하기 전에는 항상 로컬 master branch 로 이동해 최신분을 pull 받고, push 하려는 branch 를 최신 상태로 만들어준다.
```
$ git checkout master
$ git pull
$ git checkout {작업브랜치명}
$ git rebase master
```
3. remote 프로젝트로 push 한다. (remote 프로젝트의 master 브랜치가 아닌 다른 브랜치로 push)
```
$ git commit -am "{작업내용}"
$ git push origin {작업브랜치명}
```
4. 프로젝트 owner 가 push 한 내용을 merge 해준다.
