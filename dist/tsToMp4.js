'use strict';

var _ffmpeg = require('ffmpeg');

var _ffmpeg2 = _interopRequireDefault(_ffmpeg);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _yargs = require('yargs');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var execSync = _child_process2.default.execSync;


function tsToMp4(_ref) {
    var input_path = _ref.input_path;

    var command = '../lib/ffmpeg -i ' + input_path + ' -vcodec copy -acodec copy  ' + input_path.replace(/\.ts/i, '.mp4');
    execSync(command);
}

function args() {
    if (!_yargs.argv._[0]) {
        return new Error('input_path is undefined.');
    }
    var input_path = _yargs.argv._[0]; // input file path
    var output_path = _yargs.argv.output || input_path.replace(/(?:\/)(.)+\.ts/i, '$1.mp4'); // output file path
    input_path = _path2.default.resolve(__dirname, input_path);
    return {
        input_path: input_path,
        output_path: output_path
    };
}

tsToMp4(args());