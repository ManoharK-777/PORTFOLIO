const { spawn } = require('child_process');
const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(cmd, ['wrangler@latest', 'pages', 'deploy', 'dist', '--project-name=portfolio-website']);

child.stdout.on('data', data => {
  const output = data.toString();
  console.log(output);
  if (output.includes('Create a new project')) {
    child.stdin.write('\n');
    console.log('--- SENT NEWLINE ---');
  }
});

child.stderr.on('data', data => console.error(data.toString()));
child.on('close', code => console.log(`child process exited with code ${code}`));
