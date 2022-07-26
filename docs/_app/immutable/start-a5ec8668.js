import {
	n as ye,
	s as Me,
	S as He,
	i as Ze,
	a as Qe,
	e as x,
	c as et,
	b as q,
	g as Y,
	t as C,
	d as G,
	f as T,
	h as D,
	j as tt,
	k as nt,
	o as Le,
	l as rt,
	m as st,
	p as it,
	q as ve,
	r as K,
	u as at,
	v as ot,
	w as ct,
	x as V,
	y as se,
	z as B,
	A as ie,
	B as ae,
	C as J,
	D as oe,
	E as Ie,
} from './chunks/index-e221cdc6.js';
import { s as lt, a as ft } from './chunks/paths-b9644fda.js';
const Z = [];
function ue(r, e = ye) {
	let t;
	const a = new Set();
	function l(n) {
		if (Me(r, n) && ((r = n), t)) {
			const s = !Z.length;
			for (const i of a) i[1](), Z.push(i, r);
			if (s) {
				for (let i = 0; i < Z.length; i += 2) Z[i][0](Z[i + 1]);
				Z.length = 0;
			}
		}
	}
	function c(n) {
		l(n(r));
	}
	function u(n, s = ye) {
		const i = [n, s];
		return (
			a.add(i),
			a.size === 1 && (t = e(l) || ye),
			n(r),
			() => {
				a.delete(i), a.size === 0 && (t(), (t = null));
			}
		);
	}
	return { set: l, update: c, subscribe: u };
}
function ut(r) {
	let e, t, a;
	const l = [r[1] || {}];
	var c = r[0][0];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = oe(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && V(e.$$.fragment), (t = x());
			},
			l(n) {
				e && se(e.$$.fragment, n), (t = x());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 2 ? ie(l, [ae(n[1] || {})]) : {};
				if (c !== (c = n[0][0])) {
					if (e) {
						Y();
						const d = e;
						C(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							G();
					}
					c
						? ((e = new c(u())),
						  V(e.$$.fragment),
						  T(e.$$.fragment, 1),
						  B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && T(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && C(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && D(t), e && J(e, n);
			},
		}
	);
}
function dt(r) {
	let e, t, a;
	const l = [r[1] || {}];
	var c = r[0][0];
	function u(n) {
		let s = { $$slots: { default: [mt] }, $$scope: { ctx: n } };
		for (let i = 0; i < l.length; i += 1) s = oe(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u(r))),
		{
			c() {
				e && V(e.$$.fragment), (t = x());
			},
			l(n) {
				e && se(e.$$.fragment, n), (t = x());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 2 ? ie(l, [ae(n[1] || {})]) : {};
				if ((s & 525 && (i.$$scope = { dirty: s, ctx: n }), c !== (c = n[0][0]))) {
					if (e) {
						Y();
						const d = e;
						C(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							G();
					}
					c
						? ((e = new c(u(n))),
						  V(e.$$.fragment),
						  T(e.$$.fragment, 1),
						  B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && T(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && C(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && D(t), e && J(e, n);
			},
		}
	);
}
function pt(r) {
	let e, t, a;
	const l = [r[2] || {}];
	var c = r[0][1];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = oe(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && V(e.$$.fragment), (t = x());
			},
			l(n) {
				e && se(e.$$.fragment, n), (t = x());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 4 ? ie(l, [ae(n[2] || {})]) : {};
				if (c !== (c = n[0][1])) {
					if (e) {
						Y();
						const d = e;
						C(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							G();
					}
					c
						? ((e = new c(u())),
						  V(e.$$.fragment),
						  T(e.$$.fragment, 1),
						  B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && T(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && C(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && D(t), e && J(e, n);
			},
		}
	);
}
function ht(r) {
	let e, t, a;
	const l = [r[2] || {}];
	var c = r[0][1];
	function u(n) {
		let s = { $$slots: { default: [_t] }, $$scope: { ctx: n } };
		for (let i = 0; i < l.length; i += 1) s = oe(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u(r))),
		{
			c() {
				e && V(e.$$.fragment), (t = x());
			},
			l(n) {
				e && se(e.$$.fragment, n), (t = x());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 4 ? ie(l, [ae(n[2] || {})]) : {};
				if ((s & 521 && (i.$$scope = { dirty: s, ctx: n }), c !== (c = n[0][1]))) {
					if (e) {
						Y();
						const d = e;
						C(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							G();
					}
					c
						? ((e = new c(u(n))),
						  V(e.$$.fragment),
						  T(e.$$.fragment, 1),
						  B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && T(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && C(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && D(t), e && J(e, n);
			},
		}
	);
}
function _t(r) {
	let e, t, a;
	const l = [r[3] || {}];
	var c = r[0][2];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = oe(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && V(e.$$.fragment), (t = x());
			},
			l(n) {
				e && se(e.$$.fragment, n), (t = x());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 8 ? ie(l, [ae(n[3] || {})]) : {};
				if (c !== (c = n[0][2])) {
					if (e) {
						Y();
						const d = e;
						C(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							G();
					}
					c
						? ((e = new c(u())),
						  V(e.$$.fragment),
						  T(e.$$.fragment, 1),
						  B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && T(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && C(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && D(t), e && J(e, n);
			},
		}
	);
}
function mt(r) {
	let e, t, a, l;
	const c = [ht, pt],
		u = [];
	function n(s, i) {
		return s[0][2] ? 0 : 1;
	}
	return (
		(e = n(r)),
		(t = u[e] = c[e](r)),
		{
			c() {
				t.c(), (a = x());
			},
			l(s) {
				t.l(s), (a = x());
			},
			m(s, i) {
				u[e].m(s, i), q(s, a, i), (l = !0);
			},
			p(s, i) {
				let d = e;
				(e = n(s)),
					e === d
						? u[e].p(s, i)
						: (Y(),
						  C(u[d], 1, 1, () => {
								u[d] = null;
						  }),
						  G(),
						  (t = u[e]),
						  t ? t.p(s, i) : ((t = u[e] = c[e](s)), t.c()),
						  T(t, 1),
						  t.m(a.parentNode, a));
			},
			i(s) {
				l || (T(t), (l = !0));
			},
			o(s) {
				C(t), (l = !1);
			},
			d(s) {
				u[e].d(s), s && D(a);
			},
		}
	);
}
function De(r) {
	let e,
		t = r[5] && ze(r);
	return {
		c() {
			(e = rt('div')), t && t.c(), this.h();
		},
		l(a) {
			e = st(a, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var l = it(e);
			t && t.l(l), l.forEach(D), this.h();
		},
		h() {
			ve(e, 'id', 'svelte-announcer'),
				ve(e, 'aria-live', 'assertive'),
				ve(e, 'aria-atomic', 'true'),
				K(e, 'position', 'absolute'),
				K(e, 'left', '0'),
				K(e, 'top', '0'),
				K(e, 'clip', 'rect(0 0 0 0)'),
				K(e, 'clip-path', 'inset(50%)'),
				K(e, 'overflow', 'hidden'),
				K(e, 'white-space', 'nowrap'),
				K(e, 'width', '1px'),
				K(e, 'height', '1px');
		},
		m(a, l) {
			q(a, e, l), t && t.m(e, null);
		},
		p(a, l) {
			a[5] ? (t ? t.p(a, l) : ((t = ze(a)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(a) {
			a && D(e), t && t.d();
		},
	};
}
function ze(r) {
	let e;
	return {
		c() {
			e = at(r[6]);
		},
		l(t) {
			e = ot(t, r[6]);
		},
		m(t, a) {
			q(t, e, a);
		},
		p(t, a) {
			a & 64 && ct(e, t[6]);
		},
		d(t) {
			t && D(e);
		},
	};
}
function gt(r) {
	let e, t, a, l, c;
	const u = [dt, ut],
		n = [];
	function s(d, R) {
		return d[0][1] ? 0 : 1;
	}
	(e = s(r)), (t = n[e] = u[e](r));
	let i = r[4] && De(r);
	return {
		c() {
			t.c(), (a = Qe()), i && i.c(), (l = x());
		},
		l(d) {
			t.l(d), (a = et(d)), i && i.l(d), (l = x());
		},
		m(d, R) {
			n[e].m(d, R), q(d, a, R), i && i.m(d, R), q(d, l, R), (c = !0);
		},
		p(d, [R]) {
			let E = e;
			(e = s(d)),
				e === E
					? n[e].p(d, R)
					: (Y(),
					  C(n[E], 1, 1, () => {
							n[E] = null;
					  }),
					  G(),
					  (t = n[e]),
					  t ? t.p(d, R) : ((t = n[e] = u[e](d)), t.c()),
					  T(t, 1),
					  t.m(a.parentNode, a)),
				d[4]
					? i
						? i.p(d, R)
						: ((i = De(d)), i.c(), i.m(l.parentNode, l))
					: i && (i.d(1), (i = null));
		},
		i(d) {
			c || (T(t), (c = !0));
		},
		o(d) {
			C(t), (c = !1);
		},
		d(d) {
			n[e].d(d), d && D(a), i && i.d(d), d && D(l);
		},
	};
}
function wt(r, e, t) {
	let { stores: a } = e,
		{ page: l } = e,
		{ components: c } = e,
		{ props_0: u = null } = e,
		{ props_1: n = null } = e,
		{ props_2: s = null } = e;
	tt('__svelte__', a), nt(a.page.notify);
	let i = !1,
		d = !1,
		R = null;
	return (
		Le(() => {
			const E = a.page.subscribe(() => {
				i && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
			});
			return t(4, (i = !0)), E;
		}),
		(r.$$set = (E) => {
			'stores' in E && t(7, (a = E.stores)),
				'page' in E && t(8, (l = E.page)),
				'components' in E && t(0, (c = E.components)),
				'props_0' in E && t(1, (u = E.props_0)),
				'props_1' in E && t(2, (n = E.props_1)),
				'props_2' in E && t(3, (s = E.props_2));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 384 && a.page.set(l);
		}),
		[c, u, n, s, i, d, R, a, l]
	);
}
class bt extends He {
	constructor(e) {
		super(),
			Ze(this, e, wt, gt, Me, {
				stores: 7,
				page: 8,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3,
			});
	}
}
const yt = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	vt = function (r) {
		return '/algo-visualization/' + r;
	},
	qe = {},
	$e = function (e, t, a) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((l) => {
						if (((l = vt(l)), l in qe)) return;
						qe[l] = !0;
						const c = l.endsWith('.css'),
							u = c ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${l}"]${u}`)) return;
						const n = document.createElement('link');
						if (
							((n.rel = c ? 'stylesheet' : yt),
							c || ((n.as = 'script'), (n.crossOrigin = '')),
							(n.href = l),
							document.head.appendChild(n),
							c)
						)
							return new Promise((s, i) => {
								n.addEventListener('load', s),
									n.addEventListener('error', () =>
										i(new Error(`Unable to preload CSS for ${l}`))
									);
							});
					})
			  ).then(() => e());
	},
	$t = {},
	de = [
		() =>
			$e(
				() => import('./pages/__layout.svelte-6c7939fb.js'),
				[
					'_app/immutable/pages/__layout.svelte-6c7939fb.js',
					'_app/immutable/assets/__layout-de8978ae.css',
					'_app/immutable/chunks/index-e221cdc6.js',
				]
			),
		() =>
			$e(
				() => import('./error.svelte-0dcfac4f.js'),
				[
					'_app/immutable/error.svelte-0dcfac4f.js',
					'_app/immutable/chunks/index-e221cdc6.js',
				]
			),
		() =>
			$e(
				() => import('./pages/index.svelte-12167014.js'),
				[
					'_app/immutable/pages/index.svelte-12167014.js',
					'_app/immutable/assets/index-e3b48960.css',
					'_app/immutable/chunks/index-e221cdc6.js',
					'_app/immutable/chunks/paths-b9644fda.js',
				]
			),
	],
	kt = { '': [[0, 2], [1]] };
function Et(r) {
	r.client;
}
function Ve(r) {
	return r instanceof Error || (r && r.name && r.message) ? r : new Error(JSON.stringify(r));
}
function Be(r) {
	if (!r) return {};
	if (r.fallthrough)
		throw new Error(
			'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
		);
	if ('maxage' in r) throw new Error('maxage should be replaced with cache: { maxage }');
	const e = r.status && r.status >= 400 && r.status <= 599 && !r.redirect;
	if (r.error || e) {
		const t = r.status;
		if (!r.error && e) return { status: t || 500, error: new Error(`${t}`) };
		const a = typeof r.error == 'string' ? new Error(r.error) : r.error;
		return a instanceof Error
			? !t || t < 400 || t > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: a })
				: { status: t, error: a }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof a}"`
					),
			  };
	}
	if (r.redirect) {
		if (!r.status || Math.floor(r.status / 100) !== 3)
			throw new Error(
				'"redirect" property returned from load() must be accompanied by a 3xx status code'
			);
		if (typeof r.redirect != 'string')
			throw new Error('"redirect" property returned from load() must be a string');
	}
	if (
		r.dependencies &&
		(!Array.isArray(r.dependencies) || r.dependencies.some((t) => typeof t != 'string'))
	)
		throw new Error('"dependencies" property returned from load() must be of type string[]');
	if (r.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return r;
}
function Je(r, e) {
	return r === '/' || e === 'ignore'
		? r
		: e === 'never'
		? r.endsWith('/')
			? r.slice(0, -1)
			: r
		: e === 'always' && !r.endsWith('/')
		? r + '/'
		: r;
}
function Lt(r) {
	for (const e in r)
		r[e] = r[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return r;
}
class Rt extends URL {
	get hash() {
		throw new Error(
			'url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.'
		);
	}
}
function Ke(r) {
	let e = r.baseURI;
	if (!e) {
		const t = r.getElementsByTagName('base');
		e = t.length ? t[0].href : r.URL;
	}
	return e;
}
function Re() {
	return { x: pageXOffset, y: pageYOffset };
}
function We(r) {
	return r.composedPath().find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Fe(r) {
	return r instanceof SVGAElement ? new URL(r.href.baseVal, document.baseURI) : new URL(r.href);
}
function Ye(r) {
	const e = ue(r);
	let t = !0;
	function a() {
		(t = !0), e.update((u) => u);
	}
	function l(u) {
		(t = !1), e.set(u);
	}
	function c(u) {
		let n;
		return e.subscribe((s) => {
			(n === void 0 || (t && s !== n)) && u((n = s));
		});
	}
	return { notify: a, set: l, subscribe: c };
}
function St() {
	const { set: r, subscribe: e } = ue(!1);
	let t;
	async function a() {
		clearTimeout(t);
		const l = await fetch(`${ft}/_app/version.json`, {
			headers: { pragma: 'no-cache', 'cache-control': 'no-cache' },
		});
		if (l.ok) {
			const { version: c } = await l.json(),
				u = c !== '1658641094191';
			return u && (r(!0), clearTimeout(t)), u;
		} else throw new Error(`Version check failed: ${l.status}`);
	}
	return { subscribe: e, check: a };
}
function Ut(r) {
	let e = 5381,
		t = r.length;
	if (typeof r == 'string') for (; t; ) e = (e * 33) ^ r.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ r[--t];
	return (e >>> 0).toString(36);
}
const Se = window.fetch;
function At(r, e) {
	let a = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof r == 'string' ? r : r.url
	)}]`;
	e && typeof e.body == 'string' && (a += `[sveltekit\\:data-body="${Ut(e.body)}"]`);
	const l = document.querySelector(a);
	if (l && l.textContent) {
		const { body: c, ...u } = JSON.parse(l.textContent);
		return Promise.resolve(new Response(c, u));
	}
	return Se(r, e);
}
const Nt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Ot(r) {
	const e = [],
		t = [];
	let a = !0;
	return {
		pattern:
			r === ''
				? /^\/$/
				: new RegExp(
						`^${decodeURIComponent(r)
							.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
							.map((c, u, n) => {
								const s = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
								if (s) return e.push(s[1]), t.push(s[2]), '(?:/(.*))?';
								const i = u === n.length - 1;
								return (
									c &&
									'/' +
										c
											.split(/\[(.+?)\]/)
											.map((d, R) => {
												if (R % 2) {
													const E = Nt.exec(d);
													if (!E)
														throw new Error(
															`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, Q, M, ce] = E;
													return (
														e.push(M),
														t.push(ce),
														Q ? '(.*?)' : '([^/]+?)'
													);
												}
												return (
													i && d.includes('.') && (a = !1),
													d
														.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${a ? '/?' : ''}$`
				  ),
		names: e,
		types: t,
	};
}
function Pt(r, e, t, a) {
	const l = {};
	for (let c = 0; c < e.length; c += 1) {
		const u = e[c],
			n = t[c],
			s = r[c + 1] || '';
		if (n) {
			const i = a[n];
			if (!i) throw new Error(`Missing "${n}" param matcher`);
			if (!i(s)) return;
		}
		l[u] = s;
	}
	return l;
}
function xt(r, e, t) {
	return Object.entries(e).map(([l, [c, u, n]]) => {
		const { pattern: s, names: i, types: d } = Ot(l);
		return {
			id: l,
			exec: (R) => {
				const E = s.exec(R);
				if (E) return Pt(E, i, d, t);
			},
			a: c.map((R) => r[R]),
			b: u.map((R) => r[R]),
			has_shadow: !!n,
		};
	});
}
const Xe = 'sveltekit:scroll',
	W = 'sveltekit:index',
	ke = xt(de, kt, $t),
	Ct = de[0](),
	Tt = de[1](),
	Ge = {};
let re = {};
try {
	re = JSON.parse(sessionStorage[Xe]);
} catch {}
function Ee(r) {
	re[r] = Re();
}
function jt({ target: r, session: e, base: t, trailing_slash: a }) {
	var je;
	const l = new Map(),
		c = [],
		u = { url: Ye({}), page: Ye({}), navigating: ue(null), session: ue(e), updated: St() },
		n = { id: null, promise: null },
		s = { before_navigate: [], after_navigate: [] };
	let i = { branch: [], error: null, session_id: 0, stuff: Ge, url: null },
		d = !1,
		R = !0,
		E = !1,
		Q = 1,
		M = null,
		ce,
		Ue,
		Ae = !1;
	u.session.subscribe(async (o) => {
		(Ue = o), Ae && ((Q += 1), me(new URL(location.href), [], !0));
	}),
		(Ae = !0);
	let X = !0,
		j = (je = history.state) == null ? void 0 : je[W];
	j || ((j = Date.now()), history.replaceState({ ...history.state, [W]: j }, '', location.href));
	const pe = re[j];
	pe && ((history.scrollRestoration = 'manual'), scrollTo(pe.x, pe.y));
	let he = !1,
		_e,
		Ne;
	async function Oe(
		o,
		{ noscroll: p = !1, replaceState: b = !1, keepfocus: f = !1, state: h = {} },
		w
	) {
		if ((typeof o == 'string' && (o = new URL(o, Ke(document))), X))
			return we({
				url: o,
				scroll: p ? Re() : null,
				keepfocus: f,
				redirect_chain: w,
				details: { state: h, replaceState: b },
				accepted: () => {},
				blocked: () => {},
			});
		await ne(o);
	}
	async function Pe(o) {
		const p = Te(o);
		if (!p) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (n.promise = Ce(p, !1)), (n.id = p.id), n.promise;
	}
	async function me(o, p, b, f, h) {
		var L, N;
		const w = Te(o),
			k = (Ne = {});
		let _ = w && (await Ce(w, b));
		if (
			(!_ &&
				o.origin === location.origin &&
				o.pathname === location.pathname &&
				(_ = await te({
					status: 404,
					error: new Error(`Not found: ${o.pathname}`),
					url: o,
					routeId: null,
				})),
			!_)
		)
			return await ne(o), !1;
		if (Ne !== k) return !1;
		if (((c.length = 0), _.redirect))
			if (p.length > 10 || p.includes(o.pathname))
				_ = await te({
					status: 500,
					error: new Error('Redirect loop'),
					url: o,
					routeId: null,
				});
			else
				return (
					X
						? Oe(new URL(_.redirect, o).href, {}, [...p, o.pathname])
						: await ne(new URL(_.redirect, location.href)),
					!1
				);
		else
			((N = (L = _.props) == null ? void 0 : L.page) == null ? void 0 : N.status) >= 400 &&
				(await u.updated.check()) &&
				(await ne(o));
		if (((E = !0), f && f.details)) {
			const { details: v } = f,
				S = v.replaceState ? 0 : 1;
			(v.state[W] = j += S),
				history[v.replaceState ? 'replaceState' : 'pushState'](v.state, '', o);
		}
		if (
			(d ? ((i = _.state), _.props.page && (_.props.page.url = o), ce.$set(_.props)) : xe(_),
			f)
		) {
			const { scroll: v, keepfocus: S } = f;
			if (!S) {
				const y = document.body,
					g = y.getAttribute('tabindex');
				(y.tabIndex = -1),
					y.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var $;
						($ = getSelection()) == null || $.removeAllRanges();
					}),
					g !== null ? y.setAttribute('tabindex', g) : y.removeAttribute('tabindex');
			}
			if ((await Ie(), R)) {
				const y = o.hash && document.getElementById(o.hash.slice(1));
				v ? scrollTo(v.x, v.y) : y ? y.scrollIntoView() : scrollTo(0, 0);
			}
		} else await Ie();
		(n.promise = null), (n.id = null), (R = !0), _.props.page && (_e = _.props.page);
		const m = _.state.branch[_.state.branch.length - 1];
		(X = (m == null ? void 0 : m.module.router) !== !1), h && h(), (E = !1);
	}
	function xe(o) {
		i = o.state;
		const p = document.querySelector('style[data-sveltekit]');
		if (
			(p && p.remove(),
			(_e = o.props.page),
			(ce = new bt({ target: r, props: { ...o.props, stores: u }, hydrate: !0 })),
			X)
		) {
			const b = { from: null, to: new URL(location.href) };
			s.after_navigate.forEach((f) => f(b));
		}
		d = !0;
	}
	async function ge({ url: o, params: p, stuff: b, branch: f, status: h, error: w, routeId: k }) {
		var y, g;
		const _ = f.filter(Boolean),
			m = _.find(($) => {
				var A;
				return (A = $.loaded) == null ? void 0 : A.redirect;
			}),
			L = {
				redirect: (y = m == null ? void 0 : m.loaded) == null ? void 0 : y.redirect,
				state: { url: o, params: p, branch: f, error: w, stuff: b, session_id: Q },
				props: { components: _.map(($) => $.module.default) },
			};
		for (let $ = 0; $ < _.length; $ += 1) {
			const A = _[$].loaded;
			L.props[`props_${$}`] = A ? await A.props : null;
		}
		if (!i.url || o.href !== i.url.href || i.error !== w || i.stuff !== b) {
			L.props.page = { error: w, params: p, routeId: k, status: h, stuff: b, url: o };
			const $ = (A, z) => {
				Object.defineProperty(L.props.page, A, {
					get: () => {
						throw new Error(`$page.${A} has been replaced by $page.url.${z}`);
					},
				});
			};
			$('origin', 'origin'), $('path', 'pathname'), $('query', 'searchParams');
		}
		const v = _[_.length - 1],
			S = (g = v == null ? void 0 : v.loaded) == null ? void 0 : g.cache;
		if (S) {
			const $ = o.pathname + o.search;
			let A = !1;
			const z = () => {
					l.get($) === L && l.delete($), O(), clearTimeout(U);
				},
				U = setTimeout(z, S.maxage * 1e3),
				O = u.session.subscribe(() => {
					A && z();
				});
			(A = !0), l.set($, L);
		}
		return L;
	}
	async function ee({
		status: o,
		error: p,
		module: b,
		url: f,
		params: h,
		stuff: w,
		props: k,
		routeId: _,
	}) {
		const m = {
			module: b,
			uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() },
			loaded: null,
			stuff: w,
		};
		function L(y) {
			const { href: g } = new URL(y, f);
			m.uses.dependencies.add(g);
		}
		k && m.uses.dependencies.add(f.href);
		const N = {};
		for (const y in h)
			Object.defineProperty(N, y, {
				get() {
					return m.uses.params.add(y), h[y];
				},
				enumerable: !0,
			});
		const v = Ue,
			S = new Rt(f);
		if (b.load) {
			const y = {
				routeId: _,
				params: N,
				props: k || {},
				get url() {
					return (m.uses.url = !0), S;
				},
				get session() {
					return (m.uses.session = !0), v;
				},
				get stuff() {
					return (m.uses.stuff = !0), { ...w };
				},
				async fetch(g, $) {
					let A;
					typeof g == 'string'
						? (A = g)
						: ((A = g.url),
						  ($ = {
								body:
									g.method === 'GET' || g.method === 'HEAD'
										? void 0
										: await g.blob(),
								cache: g.cache,
								credentials: g.credentials,
								headers: g.headers,
								integrity: g.integrity,
								keepalive: g.keepalive,
								method: g.method,
								mode: g.mode,
								redirect: g.redirect,
								referrer: g.referrer,
								referrerPolicy: g.referrerPolicy,
								signal: g.signal,
								...$,
						  }));
					const z = new URL(A, f).href;
					return L(z), d ? Se(z, $) : At(A, $);
				},
				status: o != null ? o : null,
				error: p != null ? p : null,
			};
			(m.loaded = Be(await b.load.call(null, y))),
				m.loaded.stuff && (m.stuff = m.loaded.stuff),
				m.loaded.dependencies && m.loaded.dependencies.forEach(L);
		} else k && (m.loaded = Be({ props: k }));
		return m;
	}
	async function Ce({ id: o, url: p, params: b, route: f }, h) {
		var g, $, A, z;
		if (n.id === o && n.promise) return n.promise;
		if (!h) {
			const U = l.get(o);
			if (U) return U;
		}
		const { a: w, b: k, has_shadow: _ } = f,
			m = i.url && {
				url: o !== i.url.pathname + i.url.search,
				params: Object.keys(b).filter((U) => i.params[U] !== b[U]),
				session: Q !== i.session_id,
			};
		let L = [],
			N = Ge,
			v = !1,
			S = 200,
			y = null;
		w.forEach((U) => U().catch(() => {}));
		e: for (let U = 0; U < w.length; U += 1) {
			let O;
			try {
				if (!w[U]) continue;
				const P = await w[U](),
					I = i.branch[U];
				if (
					!I ||
					P !== I.module ||
					(m.url && I.uses.url) ||
					m.params.some((F) => I.uses.params.has(F)) ||
					(m.session && I.uses.session) ||
					Array.from(I.uses.dependencies).some((F) => c.some((fe) => fe(F))) ||
					(v && I.uses.stuff)
				) {
					let F = {};
					const fe = _ && U === w.length - 1;
					if (fe) {
						const H = await Se(
							`${p.pathname}${p.pathname.endsWith('/') ? '' : '/'}__data.json${
								p.search
							}`,
							{ headers: { 'x-sveltekit-load': 'true' } }
						);
						if (H.ok) {
							const be = H.headers.get('x-sveltekit-location');
							if (be) return { redirect: be, props: {}, state: i };
							F = H.status === 204 ? {} : await H.json();
						} else {
							S = H.status;
							try {
								y = await H.json();
							} catch {
								y = new Error('Failed to load data');
							}
						}
					}
					if (
						(y ||
							(O = await ee({
								module: P,
								url: p,
								params: b,
								props: F,
								stuff: N,
								routeId: f.id,
							})),
						O && (fe && (O.uses.url = !0), O.loaded))
					) {
						if (
							(O.loaded.error &&
								((S = (g = O.loaded.status) != null ? g : 500),
								(y = O.loaded.error)),
							O.loaded.redirect)
						)
							return { redirect: O.loaded.redirect, props: {}, state: i };
						O.loaded.stuff && (v = !0);
					}
				} else O = I;
			} catch (P) {
				(S = 500), (y = Ve(P));
			}
			if (y) {
				for (; U--; )
					if (k[U]) {
						let P,
							I,
							le = U;
						for (; !(I = L[le]); ) le -= 1;
						try {
							if (
								((P = await ee({
									status: S,
									error: y,
									module: await k[U](),
									url: p,
									params: b,
									stuff: I.stuff,
									routeId: f.id,
								})),
								($ = P == null ? void 0 : P.loaded) != null && $.error)
							)
								continue;
							(A = P == null ? void 0 : P.loaded) != null &&
								A.stuff &&
								(N = { ...N, ...P.loaded.stuff }),
								(L = L.slice(0, le + 1).concat(P));
							break e;
						} catch {
							continue;
						}
					}
				return await te({ status: S, error: y, url: p, routeId: f.id });
			} else
				(z = O == null ? void 0 : O.loaded) != null &&
					z.stuff &&
					(N = { ...N, ...O.loaded.stuff }),
					L.push(O);
		}
		return await ge({
			url: p,
			params: b,
			stuff: N,
			branch: L,
			status: S,
			error: y,
			routeId: f.id,
		});
	}
	async function te({ status: o, error: p, url: b, routeId: f }) {
		var _, m;
		const h = {},
			w = await ee({ module: await Ct, url: b, params: h, stuff: {}, routeId: f }),
			k = await ee({
				status: o,
				error: p,
				module: await Tt,
				url: b,
				params: h,
				stuff: (w && w.loaded && w.loaded.stuff) || {},
				routeId: f,
			});
		return await ge({
			url: b,
			params: h,
			stuff: {
				...((_ = w == null ? void 0 : w.loaded) == null ? void 0 : _.stuff),
				...((m = k == null ? void 0 : k.loaded) == null ? void 0 : m.stuff),
			},
			branch: [w, k],
			status: o,
			error: p,
			routeId: f,
		});
	}
	function Te(o) {
		if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
		const p = decodeURI(o.pathname.slice(t.length) || '/');
		for (const b of ke) {
			const f = b.exec(p);
			if (f) return { id: Je(o.pathname, a) + o.search, route: b, params: Lt(f), url: o };
		}
	}
	async function we({
		url: o,
		scroll: p,
		keepfocus: b,
		redirect_chain: f,
		details: h,
		accepted: w,
		blocked: k,
	}) {
		const _ = i.url;
		let m = !1;
		const L = { from: _, to: o, cancel: () => (m = !0) };
		if ((s.before_navigate.forEach((S) => S(L)), m)) {
			k();
			return;
		}
		const N = Je(o.pathname, a),
			v = new URL(o.origin + N + o.search + o.hash);
		Ee(j),
			w(),
			d && u.navigating.set({ from: i.url, to: v }),
			await me(v, f, !1, { scroll: p, keepfocus: b, details: h }, () => {
				const S = { from: _, to: v };
				s.after_navigate.forEach((y) => y(S)), u.navigating.set(null);
			});
	}
	function ne(o) {
		return (location.href = o.href), new Promise(() => {});
	}
	return {
		after_navigate: (o) => {
			Le(
				() => (
					s.after_navigate.push(o),
					() => {
						const p = s.after_navigate.indexOf(o);
						s.after_navigate.splice(p, 1);
					}
				)
			);
		},
		before_navigate: (o) => {
			Le(
				() => (
					s.before_navigate.push(o),
					() => {
						const p = s.before_navigate.indexOf(o);
						s.before_navigate.splice(p, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(E || !d) && (R = !1);
		},
		goto: (o, p = {}) => Oe(o, p, []),
		invalidate: (o) => {
			if (typeof o == 'function') c.push(o);
			else {
				const { href: p } = new URL(o, location.href);
				c.push((b) => b === p);
			}
			return (
				M ||
					(M = Promise.resolve().then(async () => {
						await me(new URL(location.href), [], !0), (M = null);
					})),
				M
			);
		},
		prefetch: async (o) => {
			const p = new URL(o, Ke(document));
			await Pe(p);
		},
		prefetch_routes: async (o) => {
			const b = (o ? ke.filter((f) => o.some((h) => f.exec(h))) : ke).map((f) =>
				Promise.all(f.a.map((h) => h()))
			);
			await Promise.all(b);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (f) => {
					let h = !1;
					const w = { from: i.url, to: null, cancel: () => (h = !0) };
					s.before_navigate.forEach((k) => k(w)),
						h
							? (f.preventDefault(), (f.returnValue = ''))
							: (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						Ee(j);
						try {
							sessionStorage[Xe] = JSON.stringify(re);
						} catch {}
					}
				});
			const o = (f) => {
				const h = We(f);
				h && h.href && h.hasAttribute('sveltekit:prefetch') && Pe(Fe(h));
			};
			let p;
			const b = (f) => {
				clearTimeout(p),
					(p = setTimeout(() => {
						var h;
						(h = f.target) == null ||
							h.dispatchEvent(
								new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 })
							);
					}, 20));
			};
			addEventListener('touchstart', o),
				addEventListener('mousemove', b),
				addEventListener('sveltekit:trigger_prefetch', o),
				addEventListener('click', (f) => {
					if (
						!X ||
						f.button ||
						f.which !== 1 ||
						f.metaKey ||
						f.ctrlKey ||
						f.shiftKey ||
						f.altKey ||
						f.defaultPrevented
					)
						return;
					const h = We(f);
					if (!h || !h.href) return;
					const w = h instanceof SVGAElement,
						k = Fe(h);
					if (!w && k.origin === 'null') return;
					const _ = (h.getAttribute('rel') || '').split(/\s+/);
					if (
						h.hasAttribute('download') ||
						_.includes('external') ||
						h.hasAttribute('sveltekit:reload') ||
						(w ? h.target.baseVal : h.target)
					)
						return;
					const [m, L] = k.href.split('#');
					if (L !== void 0 && m === location.href.split('#')[0]) {
						(he = !0), Ee(j), u.page.set({ ..._e, url: k }), u.page.notify();
						return;
					}
					we({
						url: k,
						scroll: h.hasAttribute('sveltekit:noscroll') ? Re() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: k.href === location.href },
						accepted: () => f.preventDefault(),
						blocked: () => f.preventDefault(),
					});
				}),
				addEventListener('popstate', (f) => {
					if (f.state && X) {
						if (f.state[W] === j) return;
						we({
							url: new URL(location.href),
							scroll: re[f.state[W]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								j = f.state[W];
							},
							blocked: () => {
								const h = j - f.state[W];
								history.go(h);
							},
						});
					}
				}),
				addEventListener('hashchange', () => {
					he &&
						((he = !1),
						history.replaceState({ ...history.state, [W]: ++j }, '', location.href));
				});
			for (const f of document.querySelectorAll('link'))
				f.rel === 'icon' && (f.href = f.href);
			addEventListener('pageshow', (f) => {
				f.persisted && u.navigating.set(null);
			});
		},
		_hydrate: async ({ status: o, error: p, nodes: b, params: f, routeId: h }) => {
			var N;
			const w = new URL(location.href),
				k = [];
			let _ = {},
				m,
				L;
			try {
				for (let v = 0; v < b.length; v += 1) {
					const S = v === b.length - 1;
					let y;
					if (S) {
						const $ = document.querySelector('script[sveltekit\\:data-type="props"]');
						$ && (y = JSON.parse($.textContent));
					}
					const g = await ee({
						module: await de[b[v]](),
						url: w,
						params: f,
						stuff: _,
						status: S ? o : void 0,
						error: S ? p : void 0,
						props: y,
						routeId: h,
					});
					if (
						(y && (g.uses.dependencies.add(w.href), (g.uses.url = !0)),
						k.push(g),
						g && g.loaded)
					)
						if (g.loaded.error) {
							if (p) throw g.loaded.error;
							L = {
								status: (N = g.loaded.status) != null ? N : 500,
								error: g.loaded.error,
								url: w,
								routeId: h,
							};
						} else g.loaded.stuff && (_ = { ..._, ...g.loaded.stuff });
				}
				m = L
					? await te(L)
					: await ge({
							url: w,
							params: f,
							stuff: _,
							branch: k,
							status: o,
							error: p,
							routeId: h,
					  });
			} catch (v) {
				if (p) throw v;
				m = await te({ status: 500, error: Ve(v), url: w, routeId: h });
			}
			m.redirect && (await ne(new URL(m.redirect, location.href))), xe(m);
		},
	};
}
async function zt({
	paths: r,
	target: e,
	session: t,
	route: a,
	spa: l,
	trailing_slash: c,
	hydrate: u,
}) {
	const n = jt({ target: e, session: t, base: r.base, trailing_slash: c });
	Et({ client: n }),
		lt(r),
		u && (await n._hydrate(u)),
		a && (l && n.goto(location.href, { replaceState: !0 }), n._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { zt as start };