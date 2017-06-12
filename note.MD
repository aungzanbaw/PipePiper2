# No Global State nor framework

1. Due to simplicity purpose there is nothing to manage Global state like online/offline stage, used navigator obj in this demo 
2. Use FileReader API, Doesn't promise to work on across browsers, only tested in latest Chrome & Canary
3. For excel file parsing used sheetJS (readAsBinaryString API from FileReader must be available, may be web worker process in production app)
4. Storage options is out of scope for this project (local, session are only good for string storage)
5. WebSQL is deprecated since 2010, while indexedDB is buggy like "DOMException: Failed to execute 'transaction' on 'IDBDatabase': One of the specified object stores was not found."