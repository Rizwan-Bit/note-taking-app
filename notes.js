const fs = require('fs');
const chalk = require('chalk');

// Main Functions

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((node) => node.title === title);
	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green('New note added!'));
	} else {
		console.log(chalk.red(`"${title}" note title is taken!`));
	}
}

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notes.length > notesToKeep.length) {
		console.log(chalk.green(`Note with the title "${title}" is removed!`));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red(`No note found with title "${title}"!`));
	}
}

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.blue.bold('\n-----Your Notes-----\n'));

	notes.forEach((node) => {
		console.log(`Title : ${node.title}`);
		console.log(`Body : ${node.body}`);
		console.log("------------------------------------");
	});
}

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => note.title = title);

	if (foundNote){
		console.log(chalk.green.bold.italic("\n-----Your Note-----\n"));
		console.log(`Title : ${foundNote.title}`);
		console.log(`Body : ${foundNote.body}\n`);
	} else {
		console.log(chalk.red(`No note found with the title ${title}`));
	}

}

// Helper Functions

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}