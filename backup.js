const fs = require('fs');
const archiver = require('archiver');
const { execSync } = require('child_process');

const backup = () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const output = fs.createWriteStream(`backups/backup-${timestamp}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log('Backup completed');
  });

  archive.pipe(output);
  archive.directory('src/', 'src');
  archive.directory('public/', 'public');
  archive.file('package.json');
  archive.finalize();
};

backup();
