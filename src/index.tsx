import React from 'react';
import { createRoot } from 'react-dom/client';
import 'purecss/build/pure.css'
import './style.css';

function App() {
	return (
		<div className="pure-g">
			<div className="pure-u-1-3">
				<div className='box'>
					Column 1
				</div>
			</div>
			<div className="pure-u-1-3">
				<div className='box'>
					Column 2
				</div>
			</div>
			<div className="pure-u-1-3">
				<div className='box'>
					Column 3
				</div>
			</div>
		</div>
	);
}

const root = createRoot(document.body);
root.render(<App />);
