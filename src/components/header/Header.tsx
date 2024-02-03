import { Box, Stack, Typography } from '@mui/joy';
import CookieIcon from '../../assets/images/cookie-icon.svg';

const Header = () => {
	return (
		<Box sx={{ p: 2 }}>
			<Stack direction={'column'} alignItems={'center'}>
				<Stack direction={'row'} justifyContent={'center'} gap={1}>
					<Typography level="h1">Recepten Tramstraat</Typography>
					<Box sx={{ height: '3rem' }}>
						<CookieIcon />
					</Box>
				</Stack>
				<Typography level="body-md">
					Recepten uit het groene schrift en meer!
				</Typography>
			</Stack>
		</Box>
	);
};

export default Header;
