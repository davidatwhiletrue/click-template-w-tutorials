import { useEffect } from 'react';
import { Section } from './Section';
import Prism from 'prismjs';

export const UseClickRefHook = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<>
			<Section>
				<span>
					In your components, you&apos;ll often need to call the CSPR.click API to get data or request an operation. To
					get a reference to the CSPR.click SDK instance use the hook <code>useClickRef()</code>:
				</span>
			</Section>
			<Section>
				<pre>
					<code className={'language-javascript'}>
						{`import { useClickRef } from '@make-software/csprclick-ui';

function MyComponent() {
  const clickRef = useClickRef();
  ...
}`}
					</code>
				</pre>
			</Section>
		</>
	);
};
