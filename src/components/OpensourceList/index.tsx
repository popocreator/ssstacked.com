import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';

interface OpensourceListProps {}

export default function OpensourceList({}: OpensourceListProps) {
	return (
		<section className='section'>
			<div className={styles.container + ' ' + styles.column}>
				<header className={styles.opensourceHeader}>
					<h2 className={styles.opensourceGroupTitle}>
						<p>Contribute </p>
						<p>Opensource Project</p>
					</h2>
					<button className={styles.opensourceViewAll}>VIEW ALL</button>
				</header>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						facebook/<strong>react</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						React is a JavaScript library for building user interfaces.
					</p>
					<p className={styles.opensourceDescription}>
						Declarative: React makes it painless to create interactive UIs.
						Design simple views for each state in your application, and React
						will efficiently update and render just the right components when
						your data changes. Declarative views make your code more
						predictable, simpler to understand, and easier to debug.
					</p>
					<p className={styles.opensourceDescription}>
						Component-Based: Build encapsulated components that manage their own
						state, then compose them to make complex UIs. Since component logic
						is written in JavaScript instead of templates, you can easily pass
						rich data through your app and keep the state out of the DOM.
					</p>
					<p className={styles.opensourceDescription}>
						Learn Once, Write Anywhere: We don&apos;t make assumptions about the
						rest of your technology stack, so you can develop new features in
						React without rewriting existing code. React can also render on the
						server using Node and power mobile apps using React Native.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						facebook/<strong>react-native</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						React Native brings React&apos;s declarative UI framework to iOS and
						Android. With React Native, you use native UI controls and have full
						access to the native platform.
					</p>
					<p className={styles.opensourceDescription}>
						Declarative. React makes it painless to create interactive UIs.
						Declarative views make your code more predictable and easier to
						debug.
					</p>
					<p className={styles.opensourceDescription}>
						Component-Based. Build encapsulated components that manage their
						state, then compose them to make complex UIs.
					</p>
					<p className={styles.opensourceDescription}>
						Developer Velocity. See local changes in seconds. Changes to
						JavaScript code can be live reloaded without rebuilding the native
						app.
					</p>
					<p className={styles.opensourceDescription}>
						Portability. Reuse code across iOS, Android, and other platforms.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						facebook/<strong>metro</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						The JavaScript bundler for React Native.
					</p>
					<p className={styles.opensourceDescription}>
						Fast: We aim for sub-second reload cycles, fast startup and quick
						bundling speeds.
					</p>
					<p className={styles.opensourceDescription}>
						Scalable: Works with thousands of modules in a single application.
					</p>
					<p className={styles.opensourceDescription}>
						Integrated: Supports every React Native project out of the box.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						facebookexperimental/<strong>recoil</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Recoil is an experimental state management framework for React.
					</p>
					<p className={styles.opensourceDescription}>
						Documentation: https://recoiljs.org/docs/introduction/core-concepts
						API
					</p>
					<p className={styles.opensourceDescription}>
						Reference: https://recoiljs.org/docs/api-reference/core/RecoilRoot
					</p>
					<p className={styles.opensourceDescription}>
						Tutorials: https://recoiljs.org/resources
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						reduxjs/<strong>redux</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Redux is a predictable state container for JavaScript apps. (Not to
						be confused with a WordPress framework – Redux Framework)
					</p>
					<p className={styles.opensourceDescription}>
						It helps you write applications that behave consistently, run in
						different environments (client, server, and native), and are easy to
						test. On top of that, it provides a great developer experience, such
						as live code editing combined with a time traveling debugger.
					</p>
					<p className={styles.opensourceDescription}>
						You can use Redux together with React, or with any other view
						library. It is tiny (2kB, including dependencies), and has a rich
						ecosystem of addons.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						mobxjs/<strong>mobx</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Simple, scalable state management.
					</p>
					<p className={styles.opensourceDescription}>
						Straightforward: Write minimalistic, boilerplate-free code that
						captures your intent. Trying to update a record field? Simply use a
						normal JavaScript assignment — the reactivity system will detect all
						your changes and propagate them out to where they are being used. No
						special tools are required when updating data in an asynchronous
						process.
					</p>
					<p className={styles.opensourceDescription}>
						Effortless optimal rendering: All changes to and uses of your data
						are tracked at runtime, building a dependency tree that captures all
						relations between state and output. This guarantees that
						computations that depend on your state, like React components, run
						only when strictly needed. There is no need to manually optimize
						components with error-prone and sub-optimal techniques like
						memoization and selectors.
					</p>
					<p className={styles.opensourceDescription}>
						Architectural freedom: MobX is unopinionated and allows you to
						manage your application state outside of any UI framework. This
						makes your code decoupled, portable, and above all, easily testable.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						react-navigation/<strong>react-navigation</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Routing and navigation for your React Native apps.
					</p>
					<p className={styles.opensourceDescription}>
						Easy to Use: Start quickly with built-in navigators that deliver a
						seamless out-of-the-box experience.
					</p>
					<p className={styles.opensourceDescription}>
						Components built for iOS and Android: Platform-specific
						look-and-feel with smooth animations and gestures.
					</p>
					<p className={styles.opensourceDescription}>
						Completely customizable: If you know how to write apps using
						JavaScript you can customize any part of React Navigation.
					</p>
					<p className={styles.opensourceDescription}>
						Extensible platform: React Navigation is extensible at every layer—
						you can write your own navigators or even replace the user-facing
						API.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						expo/<strong>expo</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Expo is an open-source platform for making universal native apps
						that run on Android, iOS, and the web.
					</p>
					<p className={styles.opensourceDescription}>
						It includes a universal runtime and libraries that let you build
						native apps by writing React and JavaScript. This repository is
						where the Expo client software is developed, and includes the client
						apps, modules, apps, CLI, and more. Expo Application Services (EAS)
						is a platform of hosted services that are deeply integrated with
						Expo open source tools. EAS helps you build, ship, and iterate on
						your app as an individual or a team.
					</p>
				</div>
				<div className={styles.opensource}>
					<h3 className={styles.opensourceTitle}>
						expo/<strong>snack</strong>
					</h3>
					<p className={styles.opensourceSummary}>
						Expo Snack is an open-source platform for running React Native apps
						in the browser.
					</p>
					<p className={styles.opensourceDescription}>
						It dynamically bundles and compiles code and runs it in the Expo Go
						or in a web-player. Code can be saved as &quot;Snacks&ldquo; and
						easily shared with others. Snacks can also be embedded to show
						&quot;live&ldquo; previews as used by the React Native
						documentation.
					</p>
				</div>
			</div>
		</section>
	);
}
