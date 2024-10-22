import * as json2toml from 'json2toml';
import { parse as yamlParse } from 'yaml';

export function convertFromString(input: string, inputType: 'json' | 'yaml'): string | undefined {
	if (inputType === 'yaml') {
		return convertFromYamlString(input);
	}
	if (inputType === 'json') {
		return convertFromJsonString(input);
	}
}

export function convertFromJsonString(jsonInput: string) {
	return json2toml(JSON.parse(jsonInput));
}

export function convertFromYamlString(yamlInput: string) {
	return json2toml(yamlParse(yamlInput));
}
