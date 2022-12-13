const fs = require('fs');
const path = require('path');
//const async = require('async');

fs.readdir('Google/Apps', (err, data) => {
	//console.log(data);
	data.forEach( file => {
		//console.log(file);
		const fileNames = path.basename(file, '.svg');
		const openBlock = "<table><tbody><tr></tr><tr><td align=\"left\"></td>";
		const closeBlock = "</td></tr></tbody></table><br>";
		const firstLink = "<img style=\"width:36px; height:36px;\" src=\"https://github.com/Li-Deheng/icons-svg/blob/main/Google/Apps/";
		const altLink = "\" alt=\"";
		const titleLink = "\" title=\"";
		const lastLink = "\" target=\"_blank\"> ";
		const imgLink = openBlock+'\n'+firstLink+file+altLink+fileNames+titleLink+fileNames+lastLink+'\n'+closeBlock;
		fs.writeFileSync('Google/icons.md', imgLink, (err) => {
			if (err) console.log(err);
		});
		//console.log(fileNames);
	});
})

/*
const oldSchemaMapping = function(language) {
	let json = jsonReader.readJSON(language)
	let oldSchemaRawData = fs.readFileSync(__dirname + '/playground.json')
	let oldJson = JSON.parse(oldSchemaRawData)
	for (let index in oldJson) {
		 let item = oldJson[index]

		 let hint = item['hint']

		 let object = {
			  id: json.length.toString(),
			  question: item['question'],
			  answer: item['correct'],
			  variants: [item['falseOne'], item['falseTwo'], item['falseThree']],
			  hint: hint,
			  testament: parser.parseTestament(hint).id,
			  section: parser.parseSection(hint).id,
			  book: parser.parseBook(hint).id,
			  tags: []
		 }

		 json.push(object)
	}

	jsonReader.saveJSON(json, language)
}


fs.writeFile('Google/Apps.md', 'allName', (err) => {
	if (err) console.log(err);
});

fs.writeFile('Google/Apps.md', allName, (err) => {
	if (err) console.log(err);
});

for (let i = 1; i <= fileName.length; i++) {
			allName.push(i);
			console.log(allName);
		}

fs.writeFile('Google/Apps.md', fikeFirstName, (err) => {
	if (err) console.log(err);
})*/
