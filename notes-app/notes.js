const fs = require("fs");
const chalk=require('chalk')

const addNote=(title,body)=>{
    const notes = loadNotes()
    const duplicate= notes.find( notes=> notes.title===title )

    if(!duplicate){
        notes.push({
            'title': title,
            'body': body
        })
        console.log(chalk.green.inverse('New note added'));
        saveNotes(notes)
        
    }else{
        console.log("note title taken");
    } 
}

const saveNotes=notes =>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

const removeNote=title=>{
    const notes = loadNotes();
    const array =notes.filter((notes)=> notes.title!= title )
    notes===array ? console.log('element not found') :saveNotes(array)
}

const listNote=()=>{
    const notes=loadNotes();
    console.log(chalk.green.inverse('Your notes'));  
    notes.forEach(notes => {
        console.log(notes.title);
    });
}

const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find( notes=> notes.title===title )
    if( note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('note not found'));
    }
}


module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote:listNote,
    readNote:readNote
};