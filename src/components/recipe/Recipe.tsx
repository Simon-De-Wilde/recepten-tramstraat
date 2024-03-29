import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/joy';
import { useFolderStructure } from 'hooks/useFolderStructure';
import { useParams } from 'react-router';
import { searchFolderNode } from 'shared/FolderNode.models';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NotFound from 'components/notFound/NotFound';

import './github-markdown.style.css';

const Recipe: React.FC = () => {
	const folderStructure = useFolderStructure();

	const { name } = useParams();

	const [recipeText, setRecipeText] = useState('');

	const node = useMemo(
		() => searchFolderNode(folderStructure, name ?? ''),
		[folderStructure, name],
	);

	useEffect(() => {
		fetch(node?.path ?? '')
			.then((response) => response.text())
			.then((text) => setRecipeText(text));
	}, [node?.path]);

	if (node === null)
		return (
			<Box sx={{ paddingTop: 4 }}>
				<NotFound />
			</Box>
		);

	return (
		<Box
			className={'markdown-body'}
			sx={{
				bgcolor: (theme) => theme.palette.background.level1,
				borderRadius: 4,
				paddingX: 2,
				paddingTop: 2,
				paddingBottom: 4,
			}}
		>
			<Markdown remarkPlugins={[remarkGfm]}>{recipeText}</Markdown>
		</Box>
	);
};

export default Recipe;
