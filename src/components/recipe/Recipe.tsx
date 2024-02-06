import { useMemo } from 'react';
import { Box } from '@mui/joy';
import { useFolderStructure } from 'hooks/useFolderStructure';
import { useParams } from 'react-router';
import { searchFolderNode } from './models';

const Recipe: React.FC = () => {
	const folderStructure = useFolderStructure();

	const { name } = useParams();

	const file = useMemo(
		() => searchFolderNode(folderStructure, name ?? ''),
		[folderStructure, name],
	);

	if (file === null) return <div>404: NOT FOUND</div>; // TODO: 404 page

	return <Box>{JSON.stringify(file)}</Box>;
};

export default Recipe;
