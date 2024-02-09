import * as fs from 'fs';
import * as p from 'path';
import { FolderNode } from 'components/folderView/models';

const traverseNode = (node: FolderNode) => {
	const nodeLocation = p.join(import.meta.env.PWD, 'public', node.path);

	const nodeInfo = fs.statSync(nodeLocation);

	if (!nodeInfo.isDirectory()) return node;

	fs.readdirSync(nodeLocation).forEach((child) => {
		const childPath = p.join(node.path, child);

		let childName = p.basename(childPath, '.md');
		childName = camelCaseToWords(childName);

		const newNode = new FolderNode(childName, childPath);

		node.children.push(newNode);

		return traverseNode(newNode);
	});

	return node;
};

function camelCaseToWords(s: string) {
	const result = s.replace(/([A-Z])/g, ' $1').trim();
	return result.charAt(0).toUpperCase() + result.slice(1);
}

const folder = new FolderNode('Recepten', 'recipes');

traverseNode(folder);

const outputFolder = p.join(
	import.meta.env.PWD,
	'src/generated/folderStructure',
);
const outputPath = p.join(outputFolder, 'folderStructure.json');

// Ensure folder exists
if (!fs.existsSync(outputFolder)) {
	fs.mkdirSync(outputFolder, { recursive: true });
}

fs.writeFile(outputPath, JSON.stringify(folder), (error) => {
	if (error) {
		console.error('Failure while writing to file');
		console.error(error);
	} else {
		console.log(
			`Successfully wrote the generated folderstructure to '${outputPath}' `,
		);
	}
});
