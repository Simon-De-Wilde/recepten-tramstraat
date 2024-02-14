import React, { useState } from 'react';
import { TreeView } from '@mui/x-tree-view';
import { Box, Stack } from '@mui/joy';
import FolderViewItem from './folderViewItem/FolderViewItem';
import { useFolderStructure } from 'hooks/useFolderStructure';
import TreeTextSearch from 'components/folderView/textSearch/TextSearch';

const FolderView: React.FC = () => {
	const folderStructure = useFolderStructure();

	const [filteredFolderStructure, setFilteredFolderStructure] =
		useState(folderStructure);

	return (
		<Box
			sx={{
				p: 1,
				bgcolor: (theme) => theme.palette.background.level2,
				borderRadius: 4,
				minWidth: '22rem',
			}}
		>
			<Stack direction={'column'} gap={2}>
				<TreeTextSearch setFilteredroot={setFilteredFolderStructure} />
				<TreeView
					sx={{ p: 1 }}
					defaultExpanded={[filteredFolderStructure.path]}
				>
					<FolderViewItem node={filteredFolderStructure} />
				</TreeView>
			</Stack>
		</Box>
	);
};

export default FolderView;
