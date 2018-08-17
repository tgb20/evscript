const {app, BrowserWindow} = require('electron')

var node_ssh = require('node-ssh')


let win
ssh = new node_ssh()

function createWindow(){
    win = new BrowserWindow({width: 1280, height: 720})

    win.loadFile('index.html');

    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

}

function deployCodeToBot(){

    setProgressBar("1")
    var tankDriveImports = "#!/usr/bin/env python3\nfrom ev3dev2.motor import OUTPUT_A, OUTPUT_B, OUTPUT_C, OUTPUT_D, SpeedPercent, MoveTank\n"

    var compiledCode = Blockly.Python.workspaceToCode(workspace)

    setProgressBar("25")

    var hostName = getHostName()

    var fileName = getFileName()

    setProgressBar("50")


    ssh.connect({
        host: hostName,
        username: "robot",
        password: "maker"
    }).then(function() {
        setProgressBar("75")
        ssh.exec("echo " + "'" + tankDriveImports + compiledCode + "' > " + fileName)
        ssh.exec("chmod +x " + fileName)
        setProgressBar("100")
    })
}


app.on('ready', createWindow)

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(win == null){
        createWindow()
    }
}) 