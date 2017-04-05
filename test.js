import os from 'os';
import test from 'ava';
import fn from '.';

test('env test', t => {
	t.is(fn('$HOME/unicorns'), `${os.homedir()}/unicorns`);
});
