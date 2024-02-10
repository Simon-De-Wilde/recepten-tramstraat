import { Box, Stack } from '@mui/joy';
import FolderView from 'components/folderView/FolderView';
import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
	return (
		<Stack direction={'row'} spacing={2}>
			<FolderView />
			<Box flexGrow={1}>
				<Outlet />
			</Box>
		</Stack>
	);
};

export default MainContent;
