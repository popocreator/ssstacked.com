const root = (global: any, factory: (exports: any) => void) => {
	const isCommonJS = 'object' == typeof exports && 'undefined' != typeof module;
	if (isCommonJS) {
		factory(exports);
		return;
	}

	//@ts-ignore
	const isAMD = define && 'function' == typeof define && define.amd;
	if (isAMD) {
		//@ts-ignore
		define && define(['exports'], factory);
		return;
	}

	const isBrower = true;
	if (isBrower) {
		global = global || self;
		global.window = global.window || {};
		factory(global.window);
	}
};

const factoryFunction = (exports: any) => {
	let _config = {
		autoSleep: 120,
		force3D: 'auto',
		nullTargetWarn: 1,
		units: {
			lineHeight: '',
		},
	};

	let _defaults = {
		duration: 0.5,
		overwrite: false,
		delay: 0,
	};

	let _suppressOverwrites;
	let _reverting;
	let _context;
	let _gsID = 0;
	let _bigNum = 1e8;
	let _tinyNum = 1 / _bigNum;
	let _2PI = Math.PI * 2;
	let _HALF_PI = _2PI / 4;
	let _sqrt = Math.sqrt;
	let _cos = Math.cos;
	let _sin = Math.sin;

	const _isString = (value) => typeof value === 'string';
	const _isFunction = (value) => typeof value === 'function';
	const _isNumber = (value) => typeof value === 'number';
	const _isUndefined = (value) => typeof value === 'undefined';
	const _isObject = (value) => typeof value === 'object';
	const _isNotFalse = (value) => value !== false;
	const _windowExists = () => typeof window !== 'undefined';
	const _isFuncOrString = (value) => _isFunction(value) || _isString(value);
	const _isTypedArray = () =>
		(typeof ArrayBuffer === 'function' && ArrayBuffer.isView) || function () {};
	const _isArray = Array.isArray;

	class Animation {
		constructor(vars) {
			//
		}
	}

	class Timeline extends Animation {
		constructor(vars, position) {
			super(vars);
		}
	}
};

root(this, factoryFunction);
