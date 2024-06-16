/*
 * Copyright (c) 2024 DarkCodeStudios
 *
 * Permesso è concesso, a titolo gratuito, a chiunque di utilizzare questo software, compreso il codice sorgente,
 * in qualsiasi scopo, senza limitazioni di diritti d'autore, a condizione che l'originale avviso di copyright e
 * questa dichiarazione di permesso siano incluse in tutte le copie o parti significative del software.
 *
 * IL SOFTWARE VIENE FORNITO "COSÌ COM'È", SENZA GARANZIE DI ALCUN TIPO, ESPLICITE O IMPLICITE, COMPRESO, MA NON
 * LIMITATO A, LE GARANZIE DI COMMERCIABILITÀ, IDONEITÀ PER UN PARTICOLARE SCOPO E NON VIOLAZIONE. IN NESSUN CASO I
 * TITOLARI DEL COPYRIGHT O GLI AUTORI SARANNO RESPONSABILI PER QUALSIASI RECLAMO, DANNO O ALTRA RESPONSABILITÀ,
 * IN CASO DI AZIONE DI CONTRATTO, TORTO O ALTRO, DERIVANTE DA, FUORI O IN CONNESSIONE CON IL SOFTWARE O L'USO O
 * ALTRE OPERAZIONI NEL SOFTWARE.
 */

const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL('http://puter.localhost:4100/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
