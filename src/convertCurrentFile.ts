import * as vscode from 'vscode';

import { convertFromJsonString } from './lib/convert';

export async function onConvertFile() {
	console.log('async onConvertFile')
	try {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const { document } = editor;
		const text = document.getText();
		console.log('document text', text)
		const newText = convertFromJsonString(text);
		console.log('newText', newText)

		await replaceDocument(document, newText);
	} catch (error) {
		// @TODO: handle
		console.log(error)
	}
}

async function replaceDocument(document: vscode.TextDocument, replacement: string) {
	const { uri } = document;

	const edit = new vscode.WorkspaceEdit();

	try {
		const fullDocumentRange = new vscode.Range(document.lineAt(0).range.start, document.lineAt(document.lineCount - 1).range.end);
		edit.replace(uri, fullDocumentRange, replacement);
		await vscode.workspace.applyEdit(edit);
	} catch (error) {
		console.log(error)
		// @TODO: handle
		// showError(error);
	}
}
