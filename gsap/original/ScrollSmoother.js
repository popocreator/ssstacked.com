/*!
 * ScrollSmoother 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], t)
		: t(((e = e || self).window = e.window || {}));
})(this, function (e) {
	'use strict';
	function _defineProperties(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(e, n.key, n);
		}
	}
	function s() {
		return 'undefined' != typeof window;
	}
	function t() {
		return F || (s() && (F = window.gsap) && F.registerPlugin && F);
	}
	function w() {
		return String.fromCharCode.apply(null, arguments);
	}
	function C(e) {
		return $.maxScroll(e || I);
	}
	var F,
		L,
		I,
		j,
		U,
		q,
		D,
		V,
		$,
		X,
		Y,
		Z,
		K,
		G,
		J,
		i = 'ScrollSmoother',
		a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
		l = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
		r =
			((function (e) {
				var t = 'undefined' != typeof window,
					r =
						0 ===
							(t ? window.location.href : '').indexOf(
								w(102, 105, 108, 101, 58, 47, 47)
							) ||
						-1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
						l.test(e),
					n = [
						a,
						w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
						w(
							99,
							111,
							100,
							101,
							112,
							101,
							110,
							46,
							112,
							108,
							117,
							109,
							98,
							105,
							110,
							103
						),
						w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
						w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
						w(
							99,
							111,
							100,
							101,
							112,
							101,
							110,
							46,
							119,
							101,
							98,
							115,
							105,
							116,
							101
						),
						w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
						w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
						w(99, 100, 112, 110, 46, 105, 111),
						w(112, 101, 110, 115, 46, 105, 111),
						w(103, 97, 110, 110, 111, 110, 46, 116, 118),
						w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
						w(
							116,
							104,
							101,
							109,
							101,
							102,
							111,
							114,
							101,
							115,
							116,
							46,
							110,
							101,
							116
						),
						w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
						w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
						w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
						w(112, 108, 110, 107, 114, 46, 99, 111),
						w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
						w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
						w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
						w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
						w(99, 115, 98, 46, 97, 112, 112),
						w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
						w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
						w(99, 111, 100, 105, 101, 114, 46, 105, 111),
						w(
							109,
							111,
							116,
							105,
							111,
							110,
							116,
							114,
							105,
							99,
							107,
							115,
							46,
							99,
							111,
							109
						),
						w(
							115,
							116,
							97,
							99,
							107,
							111,
							118,
							101,
							114,
							102,
							108,
							111,
							119,
							46,
							99,
							111,
							109
						),
						w(
							115,
							116,
							97,
							99,
							107,
							101,
							120,
							99,
							104,
							97,
							110,
							103,
							101,
							46,
							99,
							111,
							109
						),
						w(
							115,
							116,
							117,
							100,
							105,
							111,
							102,
							114,
							101,
							105,
							103,
							104,
							116,
							46,
							99,
							111,
							109
						),
						w(
							119,
							101,
							98,
							99,
							111,
							110,
							116,
							97,
							105,
							110,
							101,
							114,
							46,
							105,
							111
						),
						w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
					],
					o = n.length;
				for (
					setTimeout(function checkWarn() {
						if (t)
							if (
								'loading' === document.readyState ||
								'interactive' === document.readyState
							)
								document.addEventListener('readystatechange', checkWarn);
							else {
								document.removeEventListener('readystatechange', checkWarn);
								var e = 'object' == typeof F ? F : t && window.gsap;
								t &&
									window.console &&
									!window._gsapWarned &&
									'object' == typeof e &&
									!1 !== e.config().trialWarn &&
									(console.log(
										w(37, 99, 87, 97, 114, 110, 105, 110, 103),
										w(
											102,
											111,
											110,
											116,
											45,
											115,
											105,
											122,
											101,
											58,
											51,
											48,
											112,
											120,
											59,
											99,
											111,
											108,
											111,
											114,
											58,
											114,
											101,
											100,
											59
										)
									),
									console.log(
										w(
											65,
											32,
											116,
											114,
											105,
											97,
											108,
											32,
											118,
											101,
											114,
											115,
											105,
											111,
											110,
											32,
											111,
											102,
											32
										) +
											i +
											w(
												32,
												105,
												115,
												32,
												108,
												111,
												97,
												100,
												101,
												100,
												32,
												116,
												104,
												97,
												116,
												32,
												111,
												110,
												108,
												121,
												32,
												119,
												111,
												114,
												107,
												115,
												32,
												108,
												111,
												99,
												97,
												108,
												108,
												121,
												32,
												97,
												110,
												100,
												32,
												111,
												110,
												32,
												100,
												111,
												109,
												97,
												105,
												110,
												115,
												32,
												108,
												105,
												107,
												101,
												32,
												99,
												111,
												100,
												101,
												112,
												101,
												110,
												46,
												105,
												111,
												32,
												97,
												110,
												100,
												32,
												99,
												111,
												100,
												101,
												115,
												97,
												110,
												100,
												98,
												111,
												120,
												46,
												105,
												111,
												46,
												32,
												42,
												42,
												42,
												32,
												68,
												79,
												32,
												78,
												79,
												84,
												32,
												68,
												69,
												80,
												76,
												79,
												89,
												32,
												84,
												72,
												73,
												83,
												32,
												70,
												73,
												76,
												69,
												32,
												42,
												42,
												42,
												32,
												76,
												111,
												97,
												100,
												105,
												110,
												103,
												32,
												105,
												116,
												32,
												111,
												110,
												32,
												97,
												110,
												32,
												117,
												110,
												97,
												117,
												116,
												104,
												111,
												114,
												105,
												122,
												101,
												100,
												32,
												115,
												105,
												116,
												101,
												32,
												118,
												105,
												111,
												108,
												97,
												116,
												101,
												115,
												32,
												116,
												104,
												101,
												32,
												108,
												105,
												99,
												101,
												110,
												115,
												101,
												32,
												97,
												110,
												100,
												32,
												119,
												105,
												108,
												108,
												32,
												99,
												97,
												117,
												115,
												101,
												32,
												97,
												32,
												114,
												101,
												100,
												105,
												114,
												101,
												99,
												116,
												46,
												32,
												80,
												108,
												101,
												97,
												115,
												101,
												32,
												106,
												111,
												105,
												110,
												32,
												67,
												108,
												117,
												98,
												32,
												71,
												114,
												101,
												101,
												110,
												83,
												111,
												99,
												107,
												32,
												116,
												111,
												32,
												103,
												101,
												116,
												32,
												102,
												117,
												108,
												108,
												32,
												97,
												99,
												99,
												101,
												115,
												115,
												32,
												116,
												111,
												32,
												116,
												104,
												101,
												32,
												98,
												111,
												110,
												117,
												115,
												32,
												112,
												108,
												117,
												103,
												105,
												110,
												115,
												32,
												116,
												104,
												97,
												116,
												32,
												98,
												111,
												111,
												115,
												116,
												32,
												121,
												111,
												117,
												114,
												32,
												97,
												110,
												105,
												109,
												97,
												116,
												105,
												111,
												110,
												32,
												115,
												117,
												112,
												101,
												114,
												112,
												111,
												119,
												101,
												114,
												115,
												46,
												32,
												68,
												105,
												115,
												97,
												98,
												108,
												101,
												32,
												116,
												104,
												105,
												115,
												32,
												119,
												97,
												114,
												110,
												105,
												110,
												103,
												32,
												119,
												105,
												116,
												104,
												32,
												103,
												115,
												97,
												112,
												46,
												99,
												111,
												110,
												102,
												105,
												103,
												40,
												123,
												116,
												114,
												105,
												97,
												108,
												87,
												97,
												114,
												110,
												58,
												32,
												102,
												97,
												108,
												115,
												101,
												125,
												41,
												59
											)
									),
									console.log(
										w(
											37,
											99,
											71,
											101,
											116,
											32,
											117,
											110,
											114,
											101,
											115,
											116,
											114,
											105,
											99,
											116,
											101,
											100,
											32,
											102,
											105,
											108,
											101,
											115,
											32,
											97,
											116,
											32,
											104,
											116,
											116,
											112,
											115,
											58,
											47,
											47,
											103,
											114,
											101,
											101,
											110,
											115,
											111,
											99,
											107,
											46,
											99,
											111,
											109,
											47,
											99,
											108,
											117,
											98
										),
										w(
											102,
											111,
											110,
											116,
											45,
											115,
											105,
											122,
											101,
											58,
											49,
											54,
											112,
											120,
											59,
											99,
											111,
											108,
											111,
											114,
											58,
											35,
											52,
											101,
											57,
											56,
											49,
											53
										)
									),
									(window._gsapWarned = 1));
							}
					}, 50);
					-1 < --o;

				)
					if (-1 !== e.indexOf(n[o])) return;
				r ||
					setTimeout(function () {
						t &&
							(window.location.href =
								w(104, 116, 116, 112, 115, 58, 47, 47) +
								a +
								w(
									47,
									114,
									101,
									113,
									117,
									105,
									114,
									101,
									115,
									45,
									109,
									101,
									109,
									98,
									101,
									114,
									115,
									104,
									105,
									112,
									47
								) +
								'?plugin=' +
								i +
								'&source=trial');
					}, 4e3);
			})('undefined' != typeof window ? window.location.host : ''),
			(ScrollSmoother.register = function register(e) {
				return (
					L ||
						((F = e || t()),
						s() &&
							window.document &&
							((I = window),
							(j = document),
							(U = j.documentElement),
							(q = j.body)),
						F &&
							((D = F.utils.toArray),
							(V = F.utils.clamp),
							(Y = F.parseEase('expo')),
							(G = F.core.context || function () {}),
							($ = F.core.globals().ScrollTrigger),
							F.core.globals('ScrollSmoother', ScrollSmoother),
							q &&
								$ &&
								((J = F.delayedCall(0.2, function () {
									return $.isRefreshing || (X && X.refresh());
								}).pause()),
								(Z = $.core._getVelocityProp),
								(K = $.core._inputObserver),
								(ScrollSmoother.refresh = $.refresh),
								(L = 1)))),
					L
				);
			}),
			(function _createClass(e, t, r) {
				return (
					t && _defineProperties(e.prototype, t),
					r && _defineProperties(e, r),
					e
				);
			})(ScrollSmoother, [
				{
					key: 'progress',
					get: function get() {
						return this.scrollTrigger
							? this.scrollTrigger.animation._time / 100
							: 0;
					},
				},
			]),
			ScrollSmoother);
	function ScrollSmoother(t) {
		var o = this;
		L ||
			ScrollSmoother.register(F) ||
			console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
			(t = this.vars = t || {}),
			X && X.kill(),
			G((X = this));
		function Na() {
			return z.update(-H);
		}
		function Pa() {
			return (n.style.overflow = 'visible');
		}
		function Ra(e) {
			e.update();
			var t = e.getTween();
			t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
				(h = !1),
				e.animation.progress(e.progress, !0);
		}
		function Sa(e, t) {
			((e !== H && !f) || t) &&
				(x && (e = Math.round(e)),
				k &&
					((n.style.transform =
						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + e + ', 0, 1)'),
					(n._gsap.y = e + 'px')),
				(N = e - H),
				(H = e),
				$.isUpdating || ScrollSmoother.isRefreshing || $.update());
		}
		function Ta(e) {
			return arguments.length
				? (e < 0 && (e = 0),
				  (O.y = -e),
				  (h = !0),
				  f ? (H = -e) : Sa(-e),
				  $.isRefreshing ? i.update() : E(e / A),
				  this)
				: -H;
		}
		function Wa(e) {
			(w.scrollTop = 0),
				(e.target.contains && e.target.contains(w)) ||
					(T && !1 === T(o, e)) ||
					($.isInViewport(e.target) ||
						e.target === g ||
						o.scrollTo(e.target, !1, 'center center'),
					(g = e.target));
		}
		function Xa(t, e) {
			if (t < e.start) return t;
			var r = isNaN(e.ratio) ? 1 : e.ratio,
				n = e.end - e.start,
				o = t - e.start,
				i = e.offset || 0,
				a = e.pins || [],
				s = a.offset || 0,
				l =
					(e._startClamp && e.start <= 0) || (e.pins && e.pins.offset)
						? 0
						: e._endClamp && e.end === C()
						? 1
						: 0.5;
			return (
				a.forEach(function (e) {
					(n -= e.distance), e.nativeStart <= t && (o -= e.distance);
				}),
				s && (o *= (n - s / r) / n),
				t + (o - i * l) / r - o
			);
		}
		function Za(t, r) {
			S.forEach(function (e) {
				return (function adjustEffectRelatedTriggers(e, t, r) {
					r || (e.pins.length = e.pins.offset = 0);
					var n,
						o,
						i,
						a,
						s,
						l,
						c,
						f,
						u = e.pins,
						d = e.markers;
					for (c = 0; c < t.length; c++)
						if (
							((f = t[c]),
							e.trigger &&
								f.trigger &&
								e !== f &&
								(f.trigger === e.trigger ||
									f.pinnedContainer === e.trigger ||
									e.trigger.contains(f.trigger)) &&
								((s = f._startNative || f._startClamp || f.start),
								(l = f._endNative || f._endClamp || f.end),
								(i = Xa(s, e)),
								(a = f.pin && 0 < l ? i + (l - s) : Xa(l, e)),
								f.setPositions(
									i,
									a,
									!0,
									(f._startClamp ? Math.max(0, i) : i) - s
								),
								f.markerStart &&
									d.push(
										F.quickSetter([f.markerStart, f.markerEnd], 'y', 'px')
									),
								f.pin && 0 < f.end && !r))
						) {
							if (((n = f.end - f.start), (o = e._startClamp && f.start < 0))) {
								if (0 < e.start)
									return (
										e.setPositions(0, e.end + (e._startNative - e.start), !0),
										void adjustEffectRelatedTriggers(e, t)
									);
								(n += f.start), (u.offset = -f.start);
							}
							u.push({
								start: f.start,
								nativeStart: s,
								end: f.end,
								distance: n,
								trig: f,
							}),
								e.setPositions(e.start, e.end + (o ? -f.start : n), !0);
						}
				})(e, t, r);
			});
		}
		function $a() {
			Pa(),
				requestAnimationFrame(Pa),
				S &&
					($.getAll().forEach(function (e) {
						(e._startNative = e.start), (e._endNative = e.end);
					}),
					S.forEach(function (e) {
						var t = e._startClamp || e.start,
							r = e.autoSpeed
								? Math.min(C(), e.end)
								: t + Math.abs((e.end - t) / e.ratio),
							n = r - e.end;
						if ((r -= n / 2) < (t -= n / 2)) {
							var o = t;
							(t = r), (r = o);
						}
						e._startClamp && t < 0
							? ((n = (r = e.ratio < 0 ? C() : e.end / e.ratio) - e.end),
							  (t = 0))
							: (e.ratio < 0 || (e._endClamp && r >= C())) &&
							  (n =
									((r = C()) -
										(t =
											e.ratio < 0 || 1 < e.ratio
												? 0
												: r - (r - e.start) / e.ratio)) *
										e.ratio -
									(e.end - e.start)),
							(e.offset = n || 1e-4),
							(e.pins.length = e.pins.offset = 0),
							e.setPositions(t, r, !0);
					}),
					Za($.sort())),
				z.reset();
		}
		function _a() {
			return $.addEventListener('refresh', $a);
		}
		function ab() {
			return (
				S &&
				S.forEach(function (e) {
					return e.vars.onRefresh(e);
				})
			);
		}
		function bb() {
			return (
				S &&
					S.forEach(function (e) {
						return e.vars.onRefreshInit(e);
					}),
				ab
			);
		}
		function cb(r, n, o, i) {
			return function () {
				var e = 'function' == typeof n ? n(o, i) : n;
				e ||
					0 === e ||
					(e = i.getAttribute('data-' + P + r) || ('speed' === r ? 1 : 0)),
					i.setAttribute('data-' + P + r, e);
				var t = 'clamp(' === (e + '').substr(0, 6);
				return {clamp: t, value: t ? e.substr(6, e.length - 7) : e};
			};
		}
		function db(r, e, t, n, o) {
			function oc() {
				(e = u()),
					(t = parseFloat(d().value)),
					(i = parseFloat(e.value) || 1),
					(s = 'auto' === e.value),
					(c =
						s || (a && a._startClamp && a.start <= 0) || p.offset
							? 0
							: a && a._endClamp && a.end === C()
							? 1
							: 0.5),
					l && l.kill(),
					(l = t && F.to(r, {ease: Y, overwrite: !1, y: '+=0', duration: t})),
					a && ((a.ratio = i), (a.autoSpeed = s));
			}
			function pc() {
				(g.y = h + 'px'), g.renderTransform(1), oc();
			}
			function sc(e) {
				if (s) {
					pc();
					var t = (function _autoDistance(e, t) {
						var r,
							n,
							o = e.parentNode || U,
							i = e.getBoundingClientRect(),
							a = o.getBoundingClientRect(),
							s = a.top - i.top,
							l = a.bottom - i.bottom,
							c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
							f = -c * t;
						return (
							0 < c &&
								((n =
									0.5 == (r = a.height / (I.innerHeight + a.height))
										? 2 * a.height
										: 2 *
										  Math.min(a.height, Math.abs((-c * r) / (2 * r - 1))) *
										  (t || 1)),
								(f += t ? -n * t : -n / 2),
								(c += n)),
							{change: c, offset: f}
						);
					})(r, V(0, 1, -e.start / (e.end - e.start)));
					(v = t.change), (f = t.offset);
				} else (f = p.offset || 0), (v = (e.end - e.start - f) * (1 - i));
				p.forEach(function (e) {
					return (v -= e.distance * (1 - i));
				}),
					(e.offset = v || 0.001),
					e.vars.onUpdate(e),
					l && l.progress(1);
			}
			o = ('function' == typeof o ? o(n, r) : o) || 0;
			var i,
				a,
				s,
				l,
				c,
				f,
				u = cb('speed', e, n, r),
				d = cb('lag', t, n, r),
				h = F.getProperty(r, 'y'),
				g = r._gsap,
				p = [],
				m = [],
				v = 0;
			return (
				oc(),
				(1 !== i || s || l) &&
					(sc(
						(a = $.create({
							trigger: s ? r.parentNode : r,
							start: function start() {
								return e.clamp
									? 'clamp(top bottom+=' + o + ')'
									: 'top bottom+=' + o;
							},
							end: function end() {
								return e.value < 0
									? 'max'
									: e.clamp
									? 'clamp(bottom top-=' + o + ')'
									: 'bottom top-=' + o;
							},
							scroller: w,
							scrub: !0,
							refreshPriority: -999,
							onRefreshInit: pc,
							onRefresh: sc,
							onKill: function onKill(e) {
								var t = S.indexOf(e);
								0 <= t && S.splice(t, 1), pc();
							},
							onUpdate: function onUpdate(e) {
								var t,
									r,
									n,
									o = h + v * (e.progress - c),
									i = p.length,
									a = 0;
								if (e.offset) {
									if (i) {
										for (r = -H, n = e.end; i--; ) {
											if (
												(t = p[i]).trig.isActive ||
												(r >= t.start && r <= t.end)
											)
												return void (
													l &&
													((t.trig.progress +=
														t.trig.direction < 0 ? 0.001 : -0.001),
													t.trig.update(0, 0, 1),
													l.resetTo('y', parseFloat(g.y), -N, !0),
													M && l.progress(1))
												);
											r > t.end && (a += t.distance), (n -= t.distance);
										}
										o =
											h +
											a +
											v *
												((F.utils.clamp(e.start, e.end, r) - e.start - a) /
													(n - e.start) -
													c);
									}
									m.length &&
										!s &&
										m.forEach(function (e) {
											return e(o - a);
										}),
										(o = (function _round(e) {
											return Math.round(1e5 * e) / 1e5 || 0;
										})(o + f)),
										l
											? (l.resetTo('y', o, -N, !0), M && l.progress(1))
											: ((g.y = o + 'px'), g.renderTransform(1));
								}
							},
						}))
					),
					(F.core.getCache(a.trigger).stRevert = bb),
					(a.startY = h),
					(a.pins = p),
					(a.markers = m),
					(a.ratio = i),
					(a.autoSpeed = s),
					(r.style.willChange = 'transform')),
				a
			);
		}
		var n,
			w,
			e,
			i,
			S,
			a,
			s,
			l,
			c,
			f,
			r,
			u,
			d,
			h,
			g,
			p = t.smoothTouch,
			m = t.onUpdate,
			v = t.onStop,
			b = t.smooth,
			T = t.onFocusIn,
			_ = t.normalizeScroll,
			x = t.wholePixels,
			R = this,
			P = t.effectsPrefix || '',
			E = $.getScrollFunc(I),
			k =
				1 === $.isTouch
					? !0 === p
						? 0.8
						: parseFloat(p) || 0
					: 0 === b || !1 === b
					? 0
					: parseFloat(b) || 0.8,
			A = (k && +t.speed) || 1,
			H = 0,
			N = 0,
			M = 1,
			z = Z(0),
			O = {y: 0},
			W =
				'undefined' != typeof ResizeObserver &&
				!1 !== t.autoResize &&
				new ResizeObserver(function () {
					if (!$.isRefreshing) {
						var e = C(w) * A;
						e < -H && Ta(e), J.restart(!0);
					}
				});
		function refreshHeight() {
			return (
				(e = n.clientHeight),
				(n.style.overflow = 'visible'),
				(q.style.height = I.innerHeight + (e - I.innerHeight) / A + 'px'),
				e - I.innerHeight
			);
		}
		_a(),
			$.addEventListener('killAll', _a),
			F.delayedCall(0.5, function () {
				return (M = 0);
			}),
			(this.scrollTop = Ta),
			(this.scrollTo = function (e, t, r) {
				var n = F.utils.clamp(0, C(), isNaN(e) ? o.offset(e, r) : +e);
				t
					? f
						? F.to(o, {duration: k, scrollTop: n, overwrite: 'auto', ease: Y})
						: E(n)
					: Ta(n);
			}),
			(this.offset = function (e, t) {
				var r,
					n = (e = D(e)[0]).style.cssText,
					o = $.create({trigger: e, start: t || 'top top'});
				return (
					S && (M ? $.refresh() : Za([o], !0)),
					(r = o.start / A),
					o.kill(!1),
					(e.style.cssText = n),
					(F.core.getCache(e).uncache = 1),
					r
				);
			}),
			(this.content = function (e) {
				if (arguments.length) {
					var t =
						D(e || '#smooth-content')[0] ||
						console.warn('ScrollSmoother needs a valid content element.') ||
						q.children[0];
					return (
						t !== n &&
							((c = (n = t).getAttribute('style') || ''),
							W && W.observe(n),
							F.set(n, {
								overflow: 'visible',
								width: '100%',
								boxSizing: 'border-box',
								y: '+=0',
							}),
							k || F.set(n, {clearProps: 'transform'})),
						this
					);
				}
				return n;
			}),
			(this.wrapper = function (e) {
				return arguments.length
					? ((w =
							D(e || '#smooth-wrapper')[0] ||
							(function _wrap(e) {
								var t = j.querySelector('.ScrollSmoother-wrapper');
								return (
									t ||
										((t = j.createElement('div')).classList.add(
											'ScrollSmoother-wrapper'
										),
										e.parentNode.insertBefore(t, e),
										t.appendChild(e)),
									t
								);
							})(n)),
					  (l = w.getAttribute('style') || ''),
					  refreshHeight(),
					  F.set(
							w,
							k
								? {
										overflow: 'hidden',
										position: 'fixed',
										height: '100%',
										width: '100%',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
								  }
								: {
										overflow: 'visible',
										position: 'relative',
										width: '100%',
										height: 'auto',
										top: 'auto',
										bottom: 'auto',
										left: 'auto',
										right: 'auto',
								  }
					  ),
					  this)
					: w;
			}),
			(this.effects = function (e, t) {
				if (((S = S || []), !e)) return S.slice(0);
				(e = D(e)).forEach(function (e) {
					for (var t = S.length; t--; ) S[t].trigger === e && S[t].kill();
				});
				t = t || {};
				var r,
					n,
					o = t.speed,
					i = t.lag,
					a = t.effectsPadding,
					s = [];
				for (r = 0; r < e.length; r++) (n = db(e[r], o, i, r, a)) && s.push(n);
				return S.push.apply(S, s), s;
			}),
			(this.sections = function (e, t) {
				if (((a = a || []), !e)) return a.slice(0);
				var r = D(e).map(function (t) {
					return $.create({
						trigger: t,
						start: 'top 120%',
						end: 'bottom -20%',
						onToggle: function onToggle(e) {
							(t.style.opacity = e.isActive ? '1' : '0'),
								(t.style.pointerEvents = e.isActive ? 'all' : 'none');
						},
					});
				});
				return t && t.add ? a.push.apply(a, r) : (a = r.slice(0)), r;
			}),
			this.content(t.content),
			this.wrapper(t.wrapper),
			(this.render = function (e) {
				return Sa(e || 0 === e ? e : H);
			}),
			(this.getVelocity = function () {
				return z.getVelocity(-H);
			}),
			$.scrollerProxy(w, {
				scrollTop: Ta,
				scrollHeight: function scrollHeight() {
					return refreshHeight() && q.scrollHeight;
				},
				fixedMarkers: !1 !== t.fixedMarkers && !!k,
				content: n,
				getBoundingClientRect: function getBoundingClientRect() {
					return {top: 0, left: 0, width: I.innerWidth, height: I.innerHeight};
				},
			}),
			$.defaults({scroller: w});
		var B = $.getAll().filter(function (e) {
			return e.scroller === I || e.scroller === w;
		});
		B.forEach(function (e) {
			return e.revert(!0, !0);
		}),
			(i = $.create({
				animation: F.fromTo(
					O,
					{y: 0},
					{
						y: function y() {
							return -refreshHeight();
						},
						immediateRender: !1,
						ease: 'none',
						data: 'ScrollSmoother',
						duration: 100,
						onUpdate: function onUpdate() {
							if (this._dur) {
								var e = h;
								e && (Ra(i), (O.y = H)), Sa(O.y, e), Na(), m && !f && m(R);
							}
						},
					}
				),
				onRefreshInit: function onRefreshInit(e) {
					if (!ScrollSmoother.isRefreshing) {
						if (((ScrollSmoother.isRefreshing = !0), S)) {
							var t = $.getAll().filter(function (e) {
								return !!e.pin;
							});
							S.forEach(function (r) {
								r.vars.pinnedContainer ||
									t.forEach(function (e) {
										if (e.pin.contains(r.trigger)) {
											var t = r.vars;
											(t.pinnedContainer = e.pin),
												(r.vars = null),
												r.init(t, r.animation);
										}
									});
							});
						}
						var r = e.getTween();
						(d = r && r._end > r._dp._time),
							(u = H),
							(O.y = 0),
							k &&
								(1 === $.isTouch && (w.style.position = 'absolute'),
								(w.scrollTop = 0),
								1 === $.isTouch && (w.style.position = 'fixed'));
					}
				},
				onRefresh: function onRefresh(e) {
					e.animation.invalidate(),
						e.setPositions(e.start, refreshHeight() / A),
						d || Ra(e),
						(O.y = -E() * A),
						Sa(O.y),
						M || e.animation.progress(F.utils.clamp(0, 1, u / A / -e.end)),
						d && ((e.progress -= 0.001), e.update()),
						(ScrollSmoother.isRefreshing = !1);
				},
				id: 'ScrollSmoother',
				scroller: I,
				invalidateOnRefresh: !0,
				start: 0,
				refreshPriority: -9999,
				end: function end() {
					return refreshHeight() / A;
				},
				onScrubComplete: function onScrubComplete() {
					z.reset(), v && v(o);
				},
				scrub: k || !0,
			})),
			(this.smooth = function (e) {
				return (
					arguments.length &&
						((A = ((k = e || 0) && +t.speed) || 1), i.scrubDuration(e)),
					i.getTween() ? i.getTween().duration() : 0
				);
			}),
			i.getTween() && (i.getTween().vars.ease = t.ease || Y),
			(this.scrollTrigger = i),
			t.effects &&
				this.effects(
					!0 === t.effects
						? '[data-' + P + 'speed], [data-' + P + 'lag]'
						: t.effects,
					{effectsPadding: t.effectsPadding}
				),
			t.sections &&
				this.sections(!0 === t.sections ? '[data-section]' : t.sections),
			B.forEach(function (e) {
				(e.vars.scroller = w), e.revert(!1, !0), e.init(e.vars, e.animation);
			}),
			(this.paused = function (e, t) {
				return arguments.length
					? (!!f !== e &&
							(e
								? (i.getTween() && i.getTween().pause(),
								  E(-H / A),
								  z.reset(),
								  (r = $.normalizeScroll()) && r.disable(),
								  ((f = $.observe({
										preventDefault: !0,
										type: 'wheel,touch,scroll',
										debounce: !1,
										allowClicks: !0,
										onChangeY: function onChangeY() {
											return Ta(-H);
										},
								  })).nested = K(U, 'wheel,touch,scroll', !0, !1 !== t)))
								: (f.nested.kill(),
								  f.kill(),
								  (f = 0),
								  r && r.enable(),
								  (i.progress = (-H / A - i.start) / (i.end - i.start)),
								  Ra(i))),
					  this)
					: !!f;
			}),
			(this.kill = this.revert =
				function () {
					o.paused(!1), Ra(i), i.kill();
					for (var e = (S || []).concat(a || []), t = e.length; t--; )
						e[t].kill();
					$.scrollerProxy(w),
						$.removeEventListener('killAll', _a),
						$.removeEventListener('refresh', $a),
						(w.style.cssText = l),
						(n.style.cssText = c);
					var r = $.defaults({});
					r && r.scroller === w && $.defaults({scroller: I}),
						o.normalizer && $.normalizeScroll(!1),
						clearInterval(s),
						(X = null),
						W && W.disconnect(),
						q.style.removeProperty('height'),
						I.removeEventListener('focusin', Wa);
				}),
			(this.refresh = function (e, t) {
				return i.refresh(e, t);
			}),
			_ &&
				(this.normalizer = $.normalizeScroll(
					!0 === _ ? {debounce: !0, content: !k && n} : _
				)),
			$.config(t),
			'overscrollBehavior' in I.getComputedStyle(q) &&
				F.set([q, U], {overscrollBehavior: 'none'}),
			'scrollBehavior' in I.getComputedStyle(q) &&
				F.set([q, U], {scrollBehavior: 'auto'}),
			I.addEventListener('focusin', Wa),
			(s = setInterval(Na, 250)),
			'loading' === j.readyState ||
				requestAnimationFrame(function () {
					return $.refresh();
				});
	}
	(r.version = '3.12.1'),
		(r.create = function (e) {
			return X && e && X.content() === D(e.content)[0] ? X : new r(e);
		}),
		(r.get = function () {
			return X;
		}),
		t() && F.registerPlugin(r),
		(e.ScrollSmoother = r),
		(e.default = r);
	if (typeof window === 'undefined' || window !== e) {
		Object.defineProperty(e, '__esModule', {value: !0});
	} else {
		delete e.default;
	}
});
