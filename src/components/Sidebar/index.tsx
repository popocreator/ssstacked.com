import styles from './index.module.css';
import React, {useEffect, useState} from 'react';

interface SidebarProps {
	onClosed?: () => void;
}

export default function Sidebar({onClosed}: SidebarProps) {
	// const scrollable = (enabled: boolean) => {
	// 	document.body.style.overflow = enabled ? 'auto' : 'hidden';
	// };

	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setVisible(true);
	}, []);

	const handleClose = () => {
		setVisible(false);
		setTimeout(() => {
			onClosed && onClosed();
		}, 300);
	};

	return (
		<aside
			className={`${styles.container} ${visible ? styles.containerActive : ''}`}
		>
			<div className={styles.background} onClick={handleClose}></div>
			<div className={styles.content}>Content</div>
		</aside>
	);
}
