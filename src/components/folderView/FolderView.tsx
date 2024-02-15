import React, { useState } from 'react';
import { TreeView } from '@mui/x-tree-view';
import { Box, Stack } from '@mui/joy';
import FolderViewItem from './folderViewItem/FolderViewItem';
import { useFolderStructure } from 'hooks/useFolderStructure';
import TreeTextSearch from 'components/folderView/textSearch/TextSearch';
import useIsMobile from 'hooks/useIsMobile';

const FolderView: React.FC = () => {
	const folderStructure = useFolderStructure();

	const [filteredFolderStructure, setFilteredFolderStructure] =
		useState(folderStructure);

	const isMobile = useIsMobile();

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
