import { CsprClickThemes } from '@make-software/csprclick-ui';

export const AppTheme = {
    dark: {
        ...CsprClickThemes.dark,
        topBarBackground: 'rgb(19, 25, 51)',
        backgroundColor: '#0F1429', //'#282c34',
        clickLogo: '#ff0012',
        contentPrimary: 'rgb(218, 220, 229)',
        linkColor: 'rgb(218, 220, 229)',
        containerBackground: '#2d2d2d',
    },
    light: {
        ...CsprClickThemes.light,
        topBarBackground: 'rgb(24, 29, 64)',
        backgroundColor: '#f2f3f5',
        clickLogo: '#ff0012',
        contentPrimary: 'rgb(26, 25, 25)',
        linkColor: 'rgb(26, 25, 25)',
        containerBackground: '#2d2d2d',
    },
};