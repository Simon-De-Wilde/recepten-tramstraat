import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: #000;

	:visited {
		color: #000;
	}

	&.active {
		font-weight: bold;
	}
`;
