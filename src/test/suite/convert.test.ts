import * as assert from 'assert';
import { convertFromJsonString, convertFromYamlString } from '../../lib/convert'

suite('convert', () => {
	suite('getTomlFromJson()', () => {
		test('should convert json to toml', async () => {
			const inputJsonString = '{ "foo": "bar" }';
			const expectedToml = 'foo = "bar"\n';
			const actual = convertFromJsonString(inputJsonString);

			assert.deepStrictEqual(actual, expectedToml);
		});
	});

	suite('getTomlFromYaml()', () => {
		test('should convert yaml to toml', async () => {
			const inputYamlString = 'foo: "bar"'
			const expectedToml = 'foo = "bar"\n';
			const actual = convertFromYamlString(inputYamlString);

			assert.deepStrictEqual(actual, expectedToml);
		});
	});
});
