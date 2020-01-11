const fs = require('fs');

const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.0.0');

yargs.command({
    command: 'add',
    describe: 'Add new todo',
    builder:{
        title: {
            describe: 'Title of todo',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Title of todo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const allTodos = fs.readFileSync('todo.json');
        const readAllTodos = JSON.parse(allTodos);
        console.log(readAllTodos);
        const newTodo = {
            title: argv.title,
            bodu: argv.body
        };
        readAllTodos.push(newTodo);
        const jsonTodos = JSON.stringify(readAllTodos);
        fs.writeFileSync('todo.json', jsonTodos);
        console.log(chalk.green('Added!') + 'New todo.');
    }
});

yargs.command({
    command: 'list', 
    describe : 'List all todo.',
    handler(){
        console.log(chalk.yellow.bgBlue('Listing...'));
    }
});

const argv = yargs.argv;
console.log(argv);
