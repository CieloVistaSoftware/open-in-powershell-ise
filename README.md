# ![PowerShell Icon](./icon.ico) Open in PowerShell IDE - Visual Studio Code Extension

Right click on a .ps1 file and **Open in PowerShell IDE** shows in the menu options.
 

## Requirements
- Visual Studio Code
- Windows with **PowerShell ISE** installed (comes pre-installed on most versions of Windows).
- Node.js for extension development (optional, only if you want to modify the extension).

## Features
- Adds a new context menu option when right-clicking `.ps1` files.
- The context menu option is labeled **"Open in PowerShell IDE"**.
- Automatically launches the selected `.ps1` file in **PowerShell ISE**.

## How to Install and Use

### Step 1: Install the Extension
1. Download the `.vsix` file.
2. Open Visual Studio Code.
3. Install the `.vsix` extension by dragging and dropping the `.vsix` file into the VS Code window or use the command line:
   ```
   code --install-extension your-extension.vsix
   ```
4. VSCode does not need rebooting

### Step 2: Use the Extension
1. Right-click on any `.ps1` file in the editor.
2. You will see a new option **"Open in PowerShell IDE"** in the context menu.
3. Select the option to open the file in **PowerShell ISE**.

## Files Included
- `extension.ts`: The main TypeScript file that registers the command and adds the context menu option.
- `package.json`: Configuration file for the extension.
- `README.md`: This documentation file.


## License

This project is licensed under the MIT License.
