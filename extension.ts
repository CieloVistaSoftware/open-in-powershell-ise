
import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "open-in-powershell-ise" is now active!');

    let disposable = vscode.commands.registerCommand('extension.openInPowershellISE', (uri: vscode.Uri) => {

        if (!uri || !uri.fsPath.endsWith('.ps1')) {
            vscode.window.showErrorMessage('This command only works with .ps1 files');
            return;
        }

        // Build the command to open the .ps1 file in PowerShell ISE
        const filePath = uri.fsPath;
        const powershellISEPath = '"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\PowerShell_ISE.exe"';

        exec(`${powershellISEPath} "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error opening file in PowerShell ISE: ${error.message}`);
                return;
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
