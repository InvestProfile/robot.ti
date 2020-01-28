




//Сюда просто не заходи и не смотри что здесь, тебе это не надо
//Просто знай, что это подключает все файлы в этой папке и прописывает пути рекурсивно




const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const url = require('url');
const Layer = require('express/lib/router/layer');

let getFiles = (dir, currPath) => {
    const files = {};
    let recursiveRoutes = (currentDir, prevPath) => {
        files[prevPath] = fs.readdirSync(currentDir).map(file => {
            let currentPath = path.join(currentDir, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                recursiveRoutes(currentPath, path.join(prevPath, file));
            } else if (!(/index/.test(file)) && /\.js$/.test(file)) {
                return {
                    name: path.parse(file).name,
                    file: require(currentPath)
                };
            }
        }).filter(Boolean);
    };

    recursiveRoutes(dir, currPath);
    return files;
};

const apiPath = '/';
let files = getFiles(__dirname, path.sep);
let index = Object.keys(files).find(key => key.endsWith(apiPath)) || apiPath;
let realFiles = (files[index] || []).map(({name}) => name);
files[index] = (files[index] || []);

Object.keys(files).forEach(dir => {
    files[dir].forEach(file => {
        let apiName = file.name || file;
        let route = file.name ? file.file : express.Router();
        router.use(path.join(dir, apiName), route);
    });
});

router.stack.map(layer => layer.handle.stack.map(l => l.route.stack.map(t => t.handle.toString().toLowerCase().startsWith('async') && (t.handle = catcher(t.handle)))));

module.exports = router;
