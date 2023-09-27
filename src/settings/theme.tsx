import { CsprClickThemes, ThemeModeType } from '@make-software/csprclick-react';

export const AppTheme = {
    dark: {
        ...CsprClickThemes.dark,
        backgroundColor: '#282c34',
        reactTemplateColor: '#61dafb',
    },
    light: {
        ...CsprClickThemes.light,
        backgroundColor: '#f5f5f5',
        reactTemplateColor: '#ff0012',
    }
}