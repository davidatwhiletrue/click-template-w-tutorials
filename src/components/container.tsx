import styled from 'styled-components';

const Container = styled.div(({ theme }) =>
	theme.withMedia({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		minHeight: '100vh',
		margin: '0 auto',
		background: theme.backgroundColor,
		color: theme.contentPrimary,
		h2: { fontSize: 'calc(12px + 2vmin)', fontWeight: '700' },
		h3: { fontSize: 'calc(11px + 2vmin)', fontWeight: '500' },
		h5: { fontSize: 'calc(10px + 2vmin)', fontWeight: '500', textAlign: 'center' },
		a: {
			color: theme.linkColor,
			cursor: 'pointer',
			textDecoration: 'none',
		},
		b: {
			cursor: 'pointer',
		},
	})
);

export default Container;
