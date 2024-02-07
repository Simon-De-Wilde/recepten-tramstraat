import { Box } from '@mui/joy';
import { TreeView } from '@mui/x-tree-view';
import React from 'react';
import FolderViewItem from './FolderViewItem';
import { useFolderStructure } from 'hooks/useFolderStructure';

const FolderView: React.FC = () => {
	const folderStructure = useFolderStructure();

	return (
		<Box
			sx={{
				p: 1,
				bgcolor: (theme) => theme.palette.background.level2,
				borderRadius: 4,
				minWidth: '22rem',
			}}
		>
			<TreeView sx={{ p: 1 }} defaultExpanded={[folderStructure.path]}>
				<FolderViewItem node={folderStructure} />
			</TreeView>
		</Box>
	);
};

export default FolderView;
