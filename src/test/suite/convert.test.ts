import * as assert from 'assert';
import { convertFromJsonString } from '../../lib/convert'

import { loadFile } from './helpers';

suite('convert', () => {
	suite('getYamlFromJson()', () => {
		test('should convert json to toml', async () => {
			const inputJsonString = '{ "foo": "bar" }';
			const expectedToml = 'foo = "bar"\n';
			const actual = convertFromJsonString(inputJsonString);

			assert.deepStrictEqual(actual, expectedToml);
		});
	});
});
