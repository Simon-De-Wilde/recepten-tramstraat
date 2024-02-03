import * as fs from 'fs';
import * as p from 'path';
import { FolderNode } from 'components/folderView/models';

const traverseNode = (node: FolderNode) => {
	const nodeInfo = fs.statSync(node.path);
	const isDirectory = nodeInfo.isDirectory();

	if (!isDirectory) return node;

	node.children = [];

	fs.readdirSync(node.path).forEach((path) => {
		path = node.path + '/' + path;

		const name = p.basename(path, '.md');

		const newNode = new FolderNode(name, path);

		node.children!.push(newNode); // '!' needed because TS thinks it might be undefined, but it explicitly initialized above.

		return traverseNode(newNode);
	});

	return node;
};

const folder = new FolderNode(
	'Recepten',
	p.join(import.meta.env.PWD, 'src/assets/recipes'),
);
folder.children = [];

traverseNode(folder);

const outputPath = p.join(
	import.meta.env.PWD,
	'src/generated/folderStructure/folderStructure.json',
);

fs.writeFile(outputPath, JSON.stringify(folder, ), (error) => {
	if (error) {
		console.error('Failure while writing to file');
		console.error(error);
	}

	console.log(
		`Successfully wrote the generated folderstructure to '${outputPath}' `,
	);
});
