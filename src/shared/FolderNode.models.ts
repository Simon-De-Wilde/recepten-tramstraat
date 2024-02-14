export class FolderNode {
	name: string;
	path: string;
	children: FolderNode[];
	isFolder: boolean = false;

	constructor(name: string, path: string) {
		this.name = name;
		this.path = path;
		this.children = [];
	}
}

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

const normalizeString = (str: string) =>
	str
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, "");

/**
 * Filters a node by a value
 * @param node node to be filtered
 * @param filterValue value which will decide if the node is filtered out or not
 */
export const filterFolderNode = (
	node: FolderNode,
	filterValue: string,
): FolderNode => {
	node = { ...node }; // Clone to avoid issues with overriding base values

	const isHit = (n: FolderNode) =>
		normalizeString(n.name).includes(normalizeString(filterValue));

	if (node.isFolder) {
		const folderIsHit = isHit(node);

		if (!folderIsHit) {
			// Folder should be kept, but children should be filtered
			const filteredChildren = node.children
				.filter((child) =>
					child.isFolder
						? true // Keep folder for further filtering
						: isHit(child),
				)
				.map((child) =>
					folderIsHit ? child : filterFolderNode(child, filterValue),
				);

			node.children = filteredChildren;
		}
	}

	return node;
};
