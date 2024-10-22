import * as vscode from 'vscode';
import { onConvertFile } from './convertCurrentFile'
import { DocumentType } from './types'

export function activate(context: vscode.ExtensionContext) {
	const { registerCommand } = vscode.commands;

	context.subscriptions.push(
		registerCommand('vscode-to-toml.current-file.convert-json', () => { onConvertFile(DocumentType.JSON) })
	);

	context.subscriptions.push(
		registerCommand('vscode-to-toml.current-file.convert-yaml', () => { onConvertFile(DocumentType.YAML) })
	);
}
