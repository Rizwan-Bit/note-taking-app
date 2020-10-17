const yargs = require('yargs');
const notes = require('./notes.js');

// add command setup
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
})

// remove command setup
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
})

// list command setup
yargs.command({
	command: 'list',
	describe: 'List your notes',
	handler() {
		notes.listNotes();
	}
})

// read command setup
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
})

yargs.parse();