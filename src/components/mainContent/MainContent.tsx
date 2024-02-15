import { Grid } from '@mui/joy';
import FolderView from 'components/folderView/FolderView';
import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
	return (
		<Grid container spacing={2}>
			<Grid xs={12} sm={5} md={4} lg={3} xl={2}>
				<FolderView />
			</Grid>
			<Grid xs={12} sm={7} md={8} lg={9} xl={10}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default MainContent;
