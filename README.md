# Elecron App

## Prerequisites
Be sure to have [node](https://nodejs.org/es/) and `npm` installed in your system.

### Install yarn globally

    npm i -g yarn

---
<br>

## Steps to run the app
### Install all the necessary dependencies.

    yarn install

### Launch the application in development mode.

    yarn start

---
<br>

## Other `npm` scripts

### Lint
When you want to run lint tool against the source code. This script is also called in a pre-commit hook that runs before every commit and fails commit if lint tool throws any message

    yarn lint

### Package
Package the application into a platform specific format and put the result in `out` folder.

    yarn package

### Make
Make distributables for the application based on the `forge` config and put the result in `out` folder.

    yarn make

---
<br>

## Edge cases

### Crash window
Left click on tab `Holdings` (#4) will cause the window to crash

### Hang window
Left click on tab `Models` (#5) will cause the window to hang
