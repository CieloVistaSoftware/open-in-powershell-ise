"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const child_process_1 = require("child_process");
function activate(context) {
    console.log('Congratulations, your extension "open-in-powershell-ise" is now active!');
    let disposable = vscode.commands.registerCommand('extension.openInPowershellISE', (uri) => {
        if (!uri || !uri.fsPath.endsWith('.ps1')) {
            vscode.window.showErrorMessage('This command only works with .ps1 files');
            return;
        }
        // Build the command to open the .ps1 file in PowerShell ISE
        const filePath = uri.fsPath;
        const powershellISEPath = '"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\PowerShell_ISE.exe"';
        (0, child_process_1.exec)(`${powershellISEPath} "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error opening file in PowerShell ISE: ${error.message}`);
                return;
            }
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map