/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/app/page';

test('Check for Getting Started Text', () => {
	const {getByText} = render(<Home />);
	expect(getByText('Get started by editing')).toBeInTheDocument();
});
