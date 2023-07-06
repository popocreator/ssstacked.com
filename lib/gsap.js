!(function (root, factory) {
	const isCommonJS = 'object' == typeof exports && 'undefined' != typeof module;
	if (isCommonJS) {
		factory(exports);
		return;
	}

	const isAMD = 'function' == typeof define && define.amd;
	if (isAMD) {
		define(['exports'], factory);
		return;
	}

	const isBrower = true;
	if (isBrower) {
		root = root || self;
		root.window = root.window || {};
		factory(root.window);
	}
})(this, function (module) {
	// 내용
});
