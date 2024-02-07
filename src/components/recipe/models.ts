import { FolderNode } from 'components/folderView/models';

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
