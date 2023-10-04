import React from "react";
import { SectionContainer } from "./SectionContainer";


function CustomMenuItems() {
    return (
        <>
            <SectionContainer background={'unset'}>
                <span>
                    You can customize the account dropdown menu in our top bar with your own menu items. Options to
                    switch to another account and sign out are always present at the end of the list. The rest, depends
                    on your needs. We provide a couple of common menu item components you may add, and one component for
                    you to include anything you need.
                </span>
                <span>
                    The following piece of code shows you how to customize the account menu:
                </span>
            </SectionContainer>
            <SectionContainer>
				<pre>
					<code className={'language-javascript'}>
						{`export const accountMenuItems = [
	<ViewAccountOnExplorerMenuItem key={0} />,
	<CopyHashMenuItem key={1} />,
	<AccountMenuItem
		key={2}
		onClick={() => {
			window.location.href = 'https://cspr.click';
		}}
		icon={CSPRClickIcon}
		label={'CSPR.click docs'}
		badge={{ title: 'new', variation: 'green' }}
	/>,
];
`}
                    </code>
                </pre>
            </SectionContainer>
        </>
    )
}
export default CustomMenuItems;
