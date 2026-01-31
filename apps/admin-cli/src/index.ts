import { Command } from 'commander';

const program = new Command();

program
  .name('b2b-admin')
  .description('B2B 도매 자사몰 관리용 CLI')
  .version('0.1.0');

program
  .command('ping')
  .description('CLI 동작 확인')
  .action(() => {
    console.log('b2b-admin: ok');
  });

program.parse();
