import { Box } from '@mui/joy';
import { TreeView } from '@mui/x-tree-view';
import React from 'react';
import _folderStructure from 'generated/folderStructure/folderStructure.json';
import { FolderNode } from './models';
import FolderViewItem from './FolderViewItem';

const folderStructure = _folderStructure as FolderNode; // Explicit cast. neccesary for the optional field

const FolderView: React.FC = () => {
	return (
		<Box sx={{ p: 1, bgcolor: (theme) => theme.palette.background.level2 }}>
			<TreeView sx={{ p: 1 }} defaultExpanded={[folderStructure.path]}>
				<FolderViewItem node={folderStructure} />
			</TreeView>
		</Box>
	);
};

export default FolderView;
