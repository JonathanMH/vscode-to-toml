import * as vscode from 'vscode';
import { onConvertFile } from './convertCurrentFile'

export function activate(context: vscode.ExtensionContext) {
	const { registerCommand } = vscode.commands;

	context.subscriptions.push(
		registerCommand('vscode-to-toml.current-file.convert', onConvertFile)
	);
}
