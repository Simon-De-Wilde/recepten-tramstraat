import React, { useState } from 'react';
import { TreeView } from '@mui/x-tree-view';
import { Box, Stack, useTheme } from '@mui/joy';
import FolderViewItem from './folderViewItem/FolderViewItem';
import { useFolderStructure } from 'hooks/useFolderStructure';
import TreeTextSearch from 'components/folderView/textSearch/TextSearch';
import { useMediaQuery } from '@mui/material';

const FolderView: React.FC = () => {
	const folderStructure = useFolderStructure();

	const [filteredFolderStructure, setFilteredFolderStructure] =
		useState(folderStructure);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				p: 1,
				bgcolor: (theme) => theme.palette.background.level2,
				borderRadius: 4,
			}}
		>
			<Stack direction={'column'} gap={2}>
				<TreeTextSearch setFilteredroot={setFilteredFolderStructure} />
				<TreeView
					sx={{ p: 1 }}
					defaultExpanded={
						isMobile ? undefined : [filteredFolderStructure.path]
					}
				>
					<FolderViewItem node={filteredFolderStructure} />
				</TreeView>
			</Stack>
		</Box>
	);
};

export default FolderView;
