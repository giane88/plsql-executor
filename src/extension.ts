// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as command from "./command";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	command.loadConfiguration();
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "plsql-executor" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let lunch = vscode.commands.registerCommand('plsql-executor.launchTerminal', command.launchTerminal);
	let run = vscode.commands.registerCommand('plsql-executor.runSqlFile', command.runSqlFile);
	let select = vscode.commands.registerCommand('plsql-executor.selectProfile', command.selectProfile);

	context.subscriptions.push(lunch, run, select);
}

// This method is called when your extension is deactivated
export function deactivate() {}
