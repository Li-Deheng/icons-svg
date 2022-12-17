const fs = require('fs');
const path = require('path');

//============================================================================
const source = 'Icons'; // Папка где лежат файлы
const ext = '.DS_Store'; // Указываем какой формат файлов вам нужен
const res = 'N-README.md'; // Путь и назва файла конечного результата
const user = 'Li-Deheng'; // Ваше имя на GitHub
const repo = 'icons-svg'; // Назва репозитория
//============================================================================

/* const openBlock = '\n\n'+'<table><tbody><tr></tr><tr><td align="left">'+'\n';
fs.appendFileSync(res, `${openBlock}`, function (err) {
	if (err) console.log(err);
});
 */

fs.readdirSync(source).forEach(dir => {
    //console.log(file)
	if (fs.statSync(ext).isDirectory() === ext) {
	const dirCate = path.basename(dir);
		fs.readdirSync(dirCate).forEach(dirp => {
			const dirPathe = path.basename(dirp);
				const imgLink = `<img style="height:36px;" src="https://github.com/${user}/${repo}/blob/main/Google/${source}/${dirCate}/${dirPathe}" alt="${dirCate}" title="${dirCate}"> `;
			fs.writeFileSync(res, `${imgLink}\n`, {flag: 'as'}, function (err) {
				if (err) console.log(err);
			});
		});
	}
})
/*
const closeBlock = '\n'+'</td></tr></tbody></table><br>';
fs.appendFileSync(res, `${closeBlock}`, function (err) {
	if (err) console.log(err);
});
 */
/* 
var getFiles = function (dir, files_){
   
	files_ = files_ || [];
		var files = fs.readdirSync(dir);
		for (var i in files){
			var name = dir + '/' + files[i];
			if (fs.statSync(name).isDirectory()){
				getFiles(name, files_);
			} else {
				files_.push(name);
			}
		}
	return files_;
};

const pthr = getFiles('Icons');

fs.appendFileSync(res, pthr, function (err) {
	if (err) console.log(err);
});
 */