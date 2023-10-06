import React from "react";
import { SectionContainer } from "./SectionContainer";
import Prism from "prismjs";


function UseClickRefHook() {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <SectionContainer background={'unset'}>
				<span>
					In your components, you&apos;ll often need to call the CSPR.click API to get data or request an
					operation. To get a reference to the CSPR.click SDK instance use the hook <code>useClickRef()</code>:
				</span>
            </SectionContainer>
            <SectionContainer>
				<pre>
					<code className={'language-javascript'}>
						{`import { useClickRef } from '@make-software/csprclick-react';

function MyComponent() {
  const clickRef = useClickRef();
  ...
}`}
                    </code>
                </pre>
            </SectionContainer>
        </>
    )
}
export default UseClickRefHook;