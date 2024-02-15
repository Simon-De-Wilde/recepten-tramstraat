import { Grid, Typography } from '@mui/joy';
import CookieIcon from 'assets/images/cookie-icon.svg';
import useIsMobile from 'hooks/useIsMobile';

const Header = () => {
	const isMobile = useIsMobile();

	return (
		<Grid
			container
			sx={{ p: 2 }}
			justifyContent={'center'}
			gap={1}
			textAlign={'center'}
		>
			<Grid xs={12}>
				<Grid
					container
					gap={2}
					justifyContent={'center'}
					direction={isMobile ? 'column-reverse' : 'row'}
				>
					<Grid>
						<Typography level="h1">Recepten Tramstraat</Typography>
					</Grid>
					<Grid sx={{ height: '3rem' }}>
						<CookieIcon />
					</Grid>
				</Grid>
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
