module.exports = {
    pwa : {
        name : 'Vuestagram',
        themeColor :  '#4DBA87',
        msTileColor : '#000000',

        workboxOptions : {
            exclude : [/\.map$/, /manifest\.json$/, 'index.html']
        }
    }
}