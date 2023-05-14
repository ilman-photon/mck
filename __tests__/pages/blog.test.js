
import React from 'react';
import {  render } from '@testing-library/react';
import BlogComponent from "../../components/blog/blog";

describe('<BlogComponent /> component', () => {

    it('should render BlogComponent button', () => {
        render(<BlogComponent />);
    });
});
