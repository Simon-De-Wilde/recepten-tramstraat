import { Grid, Typography } from '@mui/joy';
import CookieIcon from 'assets/images/cookie-icon.svg';

const Header = () => {
	return (
		<Grid
			container
			sx={{ p: 2 }}
			justifyContent={'center'}
			gap={2}
			textAlign={'center'}
		>
			<Grid>
				<Typography level="h1">Recepten Tramstraat</Typography>
			</Grid>
			<Grid sx={{ height: '3rem' }}>
				<CookieIcon />
			</Grid>
			<Grid xs={12}>
				<Typography level="body-md">
					Recepten uit het groene schrift en meer!
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Header;
