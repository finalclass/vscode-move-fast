import * as vscode from 'vscode';
 
export function activate(context: vscode.ExtensionContext) {

	const NUM_LINES = 5;

	context.subscriptions.push(vscode.commands.registerCommand('moveFast.up', () => {
		for (var i = 0; i < NUM_LINES; i += 1) { 
			vscode.commands.executeCommand('cursorUp');
		}
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('moveFast.down', () => {
		for (var i = 0; i < NUM_LINES; i += 1) { 
			vscode.commands.executeCommand('cursorDown');
		}
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('moveFast.upSelect', () => {
		for (var i = 0; i < NUM_LINES; i += 1) { 
			vscode.commands.executeCommand('cursorUpSelect');
		}
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('moveFast.downSelect', () => {
		for (var i = 0; i < NUM_LINES; i += 1) { 
			vscode.commands.executeCommand('cursorDownSelect');
		}
	}));
}