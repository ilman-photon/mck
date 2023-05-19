import React from 'react';
import { cleanup, render } from '@testing-library/react';
import RecentBlogs from '../../../components/blog_details/RecentBlogs';

describe('<RecentBlogs /> component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render RecentBlogs button', () => {
        render(<RecentBlogs />);
    });
});
