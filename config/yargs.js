const argv =  require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla e multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'la opcion de listar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'el numerto hasta donde se multiplica'
    })
    .check((argv, options) =>{
        if( isNaN(argv.b)){
            throw 'la base debe ser un numero';
        }
        return true
    })
    .argv;

module.exports = argv;