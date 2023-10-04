import styled from 'styled-components';

export const SectionContainer = styled.div<{ background?: string }>(({ theme, background }) =>
	theme.withMedia({
		display: 'flex',
		flexDirection: 'column',
		padding: '12px',
		backgroundColor: background || theme.styleguideColors.fillSecondaryBlueHover,
		width: '100%',
		margin: '0 0 24px',
		h2: {
			margin: '0 0 16px',
			fontSize: '24px',
			fontWeight: '700',
			color: theme.styleguideColors.contentPrimary,
			span: {
				fontFamily: theme.typography.fontFamily.mono,
				fontWeight: '300',
				marginLeft: '16px',
			},
		},
		h3: {
			margin: '0 0 16px',
			fontSize: '20px',
			fontWeight: '500',
			color: theme.styleguideColors.contentPrimary,
			span: {
				fontFamily: theme.typography.fontFamily.mono,
				fontWeight: '300',
				marginLeft: '16px',
			},
		},
		h5: {
			margin: '0',
			fontFamily: theme.typography.fontFamily.mono,
			fontSize: '14px',
			fontWeight: '300',
			color: theme.styleguideColors.contentPrimary,
		},
		span: {
			marginBottom: '10px',
			a: {
				color: 'inherit',
				textDecoration: 'none',
				fontWeight: '700',
			},
			"&:last-child": {
				marginBottom: '0',

			}
		},
		table: {
			marginLeft: '30px',
			fontSize: '14px',
			color: theme.styleguideColors.contentPrimary,
		},
		button: {
			cursor: 'pointer',
			marginTop: '24px',
			fontSize: '14px',
			width: '176px',
			height: '24px',
		},
		'button + a': {
			marginTop: '12px',
			textDecoration: 'none',
			color: theme.styleguideColors.contentPrimary,
			'&:hover': { textDecoration: 'underline' },
		},
	})
);
