import * as fs from 'fs';
import * as p from 'path';
import { FolderNode } from 'components/folderView/models';

const traverseNode = (node: FolderNode) => {
	const nodeInfo = fs.statSync(node.path);
	const isDirectory = nodeInfo.isDirectory();

	if (!isDirectory) return node;

	fs.readdirSync(node.path).forEach((path) => {
		path = node.path + '/' + path;

		const filename = p.basename(path, '.md');
		const name = camelCaseToWords(filename);

		const newNode = new FolderNode(name, path);

		node.children.push(newNode);

		return traverseNode(newNode);
	});

	return node;
};

function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, ' $1').trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

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

fs.writeFile(outputPath, JSON.stringify(folder), (error) => {
	if (error) {
		console.error('Failure while writing to file');
		console.error(error);
	}

	console.log(
		`Successfully wrote the generated folderstructure to '${outputPath}' `,
	);
});
