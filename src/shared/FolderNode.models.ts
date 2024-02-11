export class FolderNode {
	name: string;
	path: string;
	children: FolderNode[];

	constructor(name: string, path: string) {
		this.name = name;
		this.path = path;
		this.children = [];
	}
}

export const isFolder = (node: FolderNode) => !!node.children.length;


export const searchFolderNode = (
	node: FolderNode,
	name: string,
): FolderNode | null => {
	if (node.name === name) return node;

	let result = null;

	for (const index in node.children) {
		result = searchFolderNode(node.children[index], name);
		if (result !== null) break;
	}

	return result;
};
