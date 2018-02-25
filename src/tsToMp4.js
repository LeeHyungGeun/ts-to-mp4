import child_process from 'child_process';
const execSync = child_process.execSync;
import {
    argv
} from 'yargs';
import path from 'path';

function tsToMp4({
    input_path
}) {
    const ffmpeg_path = path.resolve(__dirname, '../lib/ffmpeg');
    const command = `${ffmpeg_path} -i ${input_path} -vcodec copy -acodec copy  ${input_path.replace(/\.ts/i, '.mp4')}`;
    execSync(command);
}

function args() {
    if (!argv._[0]) {
        return new Error('input_path is undefined.');
    }
    let input_path = argv._[0];  // input file path
    let output_path = argv.output || input_path.replace(/(?:\/)(.)+\.ts/i, '$1.mp4');   // output file path
    return {
        input_path,
        output_path
    };
}

tsToMp4(args());