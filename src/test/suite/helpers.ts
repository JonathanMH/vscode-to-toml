import { promises as fs } from 'fs';
import * as path from 'path';

const fixturesRootDir = path.join(__dirname, '..', '..', 'src', 'test', 'fixtures');

export const loadFile = (fileName: string) => fs.readFile(path.join(fixturesRootDir, fileName), 'utf-8');

