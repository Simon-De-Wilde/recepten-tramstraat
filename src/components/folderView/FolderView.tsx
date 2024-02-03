import { Box } from '@mui/joy';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import React from 'react';
import _folderStructure from 'generated/folderStructure/folderStructure.json';
import { FolderNode } from './models';

const folderStructure = _folderStructure as FolderNode;

const FolderView: React.FC = () => {
	const generateItems = (node: FolderNode) => {
		return (
			<TreeItem
				key={node.path}
				nodeId={node.path}
				label={node.name}
				onClick={(a) => console.log(a)}
			>
				{node.children?.map(generateItems)}
			</TreeItem>
		);
	};

	return (
		<Box sx={{ p: 1, bgcolor: (theme) => theme.palette.background.level2 }}>
			<TreeView sx={{ p: 1 }}>{generateItems(folderStructure)}</TreeView>
		</Box>
	);
};

export default FolderView;
