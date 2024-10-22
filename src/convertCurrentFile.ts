import * as vscode from 'vscode';

import { convertFromString } from './lib/convert';
import { DocumentType } from './types'

export async function onConvertFile(fileType: DocumentType) {
	try {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const { document } = editor;
		const text = document.getText();
		const newText = convertFromString(text, fileType);

		await replaceDocument(document, newText || '');
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
	}
}
