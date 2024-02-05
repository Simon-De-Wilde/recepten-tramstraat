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
