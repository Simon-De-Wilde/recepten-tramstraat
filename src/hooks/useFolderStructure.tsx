import { useMemo } from 'react';
import _folderStructure from 'generated/folderStructure/folderStructure.json';
import { FolderNode } from 'components/folderView/models';

export const useFolderStructure = () => {
	const folderStructure = useMemo(
		() => _folderStructure as FolderNode, // Explicit cast neccesary for the optional field
		[],
	);

	return folderStructure;
};
