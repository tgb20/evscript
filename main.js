const {app, BrowserWindow, dialog} = require('electron')

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

    startLoading()

    var imports = "#!/usr/bin/env python3\n"
    imports += "from ev3dev2.motor import OUTPUT_A, OUTPUT_B, OUTPUT_C, OUTPUT_D, Motor, MoveTank\n"
    imports += "from threading import Thread\n"

    var codeFromBlockly = Blockly.Python.workspaceToCode(workspace)

    var start = 0
    
    var splitBlockly = codeFromBlockly.split("start():")

    formattedBlockly = ""

    for (i in splitBlockly){
        formattedBlockly += splitBlockly[i]

        if(i != splitBlockly.length-1){
            formattedBlockly += "start" + start + "():"
            start += 1
        }
    }

    var main = "def main():\n"

    for (i = 0; i < start; i++){
        main += "\tt" + i.toString() + " = Thread(target = start" + i.toString() + ")\n"
        main += "\tt" + i.toString() + ".start()\n"
    }




    var hostName = getHostName()

    var fileName = getFileName()





    var compiledCode = imports + main + formattedBlockly + "\nmain()"

    console.log(compiledCode)

    ssh.connect({
        host: hostName,
        username: "robot",
        password: "maker"
    }).then(function() {
        ssh.exec("echo " + "'" + compiledCode + "' > " + fileName)
        ssh.exec("chmod +x " + fileName)
        stopLoading()
    }, function(error) {
        stopLoading()
        alert("Failed to Connect to Robot, " + error)
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