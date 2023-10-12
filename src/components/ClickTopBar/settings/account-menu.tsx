import { AccountMenuItem, CopyHashMenuItem, ViewAccountOnExplorerMenuItem } from '@make-software/csprclick-react';
import CSPRClickIcon from '../../../logo.svg';

export const accountMenuItems = [
	<ViewAccountOnExplorerMenuItem key={0} />,
	<CopyHashMenuItem key={1} />,
	<AccountMenuItem
		key={2}
		onClick={() => {
			window.location.href = 'https://docs.cspr.click';
		}}
		icon={CSPRClickIcon}
		label={'CSPR.click docs'}
		badge={{ title: 'new', variation: 'green' }}
	/>,
];
