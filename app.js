const fs = require('fs');
const path = require('path');

//============================================================================
const source = 'Google/Apps'; // Папка где лежат файлы
const ext = '.svg'; // Указываем какой формат файлов вам нужен
const res = 'Google/README.md'; // Путь и назва файла конечного результата
const user = 'Li-Deheng'; // Ваше имя на GitHub
const repo = 'icons-svg'; // Назва репозитория
//============================================================================

const openBlock = '\n\n'+'<table><tbody><tr></tr><tr><td align="left">'+'\n';
fs.appendFileSync(res, `${openBlock}`, function (err) {
	if (err) console.log(err);
});

fs.readdirSync(source).forEach(file => {
    //console.log(file)
	if (path.extname(file) === ext) {
		const fileNames = path.basename(file, '.svg');
		const editWords = fileNames.split('-');
		for (let i = 0; i < editWords.length; i++) {
			editWords[i] = editWords[i][0].toUpperCase() + editWords[i].substring(1);
		}
		const words = editWords.join(' ');
		const title = words.replace(',', ' ');
		const imgLink = `<img style="width:36px; height:36px;" src="https://github.com/${user}/${repo}/blob/main/${source}/${file}" alt="${title}" title="${title}" target="_blank"> `;
		fs.writeFileSync(res, `${imgLink}`, {flag: 'as'}, function (err) {
			if (err) console.log(err);
		});
	}
})

const closeBlock = '\n'+'</td></tr></tbody></table><br>';
fs.appendFileSync(res, `${closeBlock}`, function (err) {
	if (err) console.log(err);
});
