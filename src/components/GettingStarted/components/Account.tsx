import * as React from 'react';
import { SectionContainer } from './SectionContainer';
import { useClickRef } from '@make-software/csprclick-react';
import Prism from 'prismjs';
import '../../../prism.css';

const UserAccount = () => {
	const clickRef = useClickRef();
	const activeAccount = clickRef?.getActiveAccount();
	return (
		<table>
			<tbody>
				<tr>
					<td>Public key:</td>
					<td>{activeAccount?.public_key}</td>
				</tr>
				<tr>
					<td>Provider:</td>
					<td>{activeAccount?.provider}</td>
				</tr>
			</tbody>
		</table>
	);
};

const Account = () => {
	React.useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<>
			<SectionContainer background={'unset'}>
				<span>
					Use the <code>useClickRef()</code> hook to get a reference to the CSPR.click SDK instance. Then, get the
					user&apos;s active account which will contain information you may need in your application like the public key and
					the provider.
				</span>
			</SectionContainer>
			<SectionContainer>
				<pre>
					<code className={'language-javascript'}>
						{`const UserAccount = () => {
  const clickRef = useClickRef()
  const activeAccount = clickRef?.getActiveAccount()
    return (
      <table>
        <tr><td>Public key:</td><td>{activeAccount.public_key}</td></tr>
        <tr><td>Provider:</td><td>{activeAccount.provider}</td></tr>
      </table>  
    )`}
					</code>
				</pre>
			</SectionContainer>
			<SectionContainer>
				<UserAccount />
			</SectionContainer>
		</>
	);
};

export default Account;
