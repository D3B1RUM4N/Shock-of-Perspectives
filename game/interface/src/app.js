const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

const closeButton = document.getElementById('closeBTN');

closeButton.addEventListener('click', function () {
    console.log('close button clicked')
    ipc.send('closeApp')
})