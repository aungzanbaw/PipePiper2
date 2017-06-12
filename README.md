# Piper 2.0

Yet another, 'me too' Pipe Piper 2.0 which is excel reader, file API, localstorage API, offline API [Web App](https://aungzanbaw.github.io/PipePiper/)

### Getting Started

Clone this repo or download as zip, then open your terminal, change to the project directory, install dependencies, then start the webpack process with the following:

```
> git clone https://github.com/AungZanBaw/PipePiper2.git
> cd PipePiper2
> npm install
> npm start
> [localhost](http://localhost:8080/)
```
1. Due to simplicity purpose there is nothing to manage Global state like online/offline stage, used navigator obj in this demo 
2. Use FileReader API, Doesn't promise to work on across browsers, only tested in latest Chrome & Canary
3. For excel file parsing used sheetJS (readAsBinaryString API from FileReader must be available, may be web worker process in production app)
4. Storage options is out of scope for this project (local, session are only good for string storage)
5. WebSQL is deprecated since 2010, while indexedDB is buggy like "DOMException: Failed to execute 'transaction' on 'IDBDatabase': One of the specified object stores was not found."

#### How to test?

After install dependencies, bundle all modules and start test. 

```
> npm install
> npm start
> npm test

```