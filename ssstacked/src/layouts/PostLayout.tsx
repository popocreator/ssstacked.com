import React from 'react';

interface PostLayoutProps {
	children?: React.ReactNode;
}

export default function PostLayout({children}: PostLayoutProps) {
	return <main>{children}</main>;
}
