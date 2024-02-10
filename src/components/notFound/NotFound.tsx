import React, { useState, useEffect } from 'react';
import { Card, LinearProgress, Stack, Typography, Box } from '@mui/joy';
import { useParams } from 'react-router';
import { DadJoke } from './models';

const NotFound: React.FC = () => {
	const { name } = useParams();

	const [jokeLoading, setJokeLoading] = useState(true);
	const [jokeError, setJokeError] = useState(false);
	const [jokeObject, setJokeObject] = useState<DadJoke>();

	useEffect(() => {
		fetch('https://icanhazdadjoke.com/', {
			headers: { Accept: 'application/json' },
		})
			.then((response) => {
				return response.json() as Promise<DadJoke>;
			})
			.then((data) => {
				setJokeObject(data);
				setJokeLoading(false);
			})
			.catch(() => {
				setJokeError(true);
			});
	}, []);

	return (
		<Stack alignItems={'center'} textAlign={'center'}>
			<Typography level="h2">You're a curious one, aren't ya...?</Typography>
			<Typography level="h4">
				Just typing in "{name}" in the url and hoping for a recipe.
			</Typography>
			<Typography level="h4">I respect the effort. Have a joke.</Typography>

			<Box sx={{ marginTop: 5, minWidth: '20rem' }}>
				{jokeLoading ? (
					<LinearProgress color="primary" size="md" variant="soft" />
				) : jokeError ? (
					<Typography
						level="body-md"
						sx={{ color: (theme) => theme.palette.danger[400] }}
					>
						Hmm, it seems not even that is working...
					</Typography>
				) : (
					<Card>
						<Typography level="body-md">{jokeObject?.joke}</Typography>
					</Card>
				)}
			</Box>
		</Stack>
	);
};

export default NotFound;
