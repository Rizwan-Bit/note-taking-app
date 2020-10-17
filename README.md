# note-taking-app
command base note taking app

core node package : fs
npm packages : yargs, chalk

commands = add, remove, list, read.

usage :

1. add

node app.js add --title="Title" --body="Content"        

It will create a note with the title "Title".

2. remove

node app.js remove --title="Title"

It will remove a note with the title "Title".

3. list

node app.js list

It will list all the notes that has been created.

4. read

node app.js read --title"Title"

It will read the note with the given title if avaliable.
