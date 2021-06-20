const fsFunc = () => {
    // read file async way
    fs.readFile('text1.txt', 'UTF-8', (err, data) => {
        console.log(data);
    })

    // read file sync way
    let text = fs.readFileSync('text2.txt', 'UTF-8');
    console.log(text);

    // read dir
    fs.readdir('files', (err, data) => {
        console.log(data);
        data.forEach(file => {
            console.log('extension of ' + file + ' is ' + path.extname(file) + '. Size: ' + fs.statSync('files/' + file).size + 'B');
        })
    })

    // write file Sync
    fs.writeFileSync('files/newFile.txt', 'SOME TEXT SOME TEXT SOME TEXT', (err) => {
        console.log(err)
    })
}