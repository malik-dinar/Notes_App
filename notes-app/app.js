const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');
const notes = require('./notes');


yargs.command({
    command:'add',
    describe:'Add a new node',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Body title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function ( argv ){
        console.log(argv);
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new node',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function( argv ){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list your nodes',
    handler: function(){
        notes.listNote()
    }
})

yargs.command({
    command:'read',
    describe:'read a new node',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function( argv){
        notes.readNote( argv.title )
    }
})


yargs.parse()