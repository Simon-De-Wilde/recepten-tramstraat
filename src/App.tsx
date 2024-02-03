import { Stack } from '@mui/joy';
import Header from 'components/header/Header';
import MainContent from 'components/mainContent/MainContent';

const App: React.FC = () => {
	return (
		<Stack direction={'column'}>
			<Header />
			<MainContent />
		</Stack>
	);
};

export default App;
