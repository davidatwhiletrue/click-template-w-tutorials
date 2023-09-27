import styled from "styled-components";

export const SectionContainer = styled.div(({ theme }) =>
    theme.withMedia({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        backgroundColor: theme.styleguideColors.fillSecondaryBlueHover,
        width: '100%',
        margin: "0 0 24px",
        h3: {
            margin: '0 0 16px',
            fontSize: "20px",
            fontWeight: "500",
            color: theme.styleguideColors.contentPrimary,
            span: {
                fontFamily: theme.typography.fontFamily.mono,
                fontWeight: "300",
                marginLeft: "16px",
            }
        },
        h5: {
            margin: '0',
            fontFamily: theme.typography.fontFamily.mono,
            fontSize: "14px",
            fontWeight: "300",
            color: theme.styleguideColors.contentPrimary,
        },
        table: {
            marginLeft: '30px',
            fontSize: "14px",
            color: theme.styleguideColors.contentPrimary,
        }
    })
);