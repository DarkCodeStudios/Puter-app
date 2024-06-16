# Puter desktop app
**We are designing a Puter desktop application 🌐🚀**

**App created by https://github.com/electron/electron-quick-start.git**
# Features
1)Desktop app

2)Self-Host

3)Linux/Windows/macOS

# Explaining the functions
**Create window (800 x 800)**
```javascript
function createWindow () {
  // Crea la finestra del browser
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false // Disabilita l'integrazione di Node.js nella pagina web
    }
  });
```
**Open http://puter.localhost:4100/**

<h6>You can also change the domain to https://puter.com/ instead of http://puter.localhost:4100/</h6>

```javascript
  win.loadURL('http://puter.localhost:4100/');
```
**When electron is ready it creates the window**
```javascript
app.whenReady().then(createWindow);
```
**Kill app when windows are closed (except on macOS)**
```javascript
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
```
**On macOS, searches for the app window when clicked and the app is in the background**
```Javascript
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```
**Package.json**
```json
{
  "name": "electron-app",
  "version": "1.0.0",
  "description": "A basic Electron app",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^15.0.0"
  }
}
```
# How to run

**Run puter self-host**
```bash
git clone https://www.github.con/DarkCodeStudios/Puter-app
cd Puter-app
npm install
npm start
```
(do not open http://puter.localhost:4100/)

**Run app**
```bash
cd app
npm install
npm start
```
# Todo
- [X] Windows
- [X] Linux
- [x] macOS
- [ ] Browser
- [ ] More app

# License 
```
MIT License

Copyright (c) 2024 DarkCodeStudios

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
<p align="center">DarkCodeStudios</p>
