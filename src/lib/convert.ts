import * as json2toml from 'json2toml';

export function convertFromJsonString(jsonInput: string) {
	return json2toml(JSON.parse(jsonInput));
}
