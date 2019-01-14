type ObserverRoot = string | HTMLElement | NodeList;

export interface ObserverType {
	observe: () => void;
	unobserve: () => void;
}

type TriggerFunc = (element: Element) => void;

interface ObserverOptions {
	rootMargin?: string;
	threshold?: number[];
	trigger: TriggerFunc;
}

const defaultOptions: ObserverOptions = {
	rootMargin: '0px',
	threshold: [0.1],
	trigger: (element: Element):void => {

	}
};

const getElements = (selector: ObserverRoot, root = document) => {
	if (selector instanceof Element) {
		return [selector];
	}
	if (selector instanceof NodeList) {
		return [].slice.call(selector);
	}
	return root.querySelectorAll(selector);
}

const onIntersection = (trigger: TriggerFunc) =>
(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
	entries.forEach((entry: IntersectionObserverEntry) => {
		if (entry.intersectionRatio > 0 || entry.isIntersecting) {
			observer.unobserve(entry.target)
			trigger(entry.target);
		}
	});
};

const observerGenerator = (selector: ObserverRoot, options: ObserverOptions): ObserverType => {
	const { rootMargin, threshold, trigger } = { ...defaultOptions, ...options };
	let observer: IntersectionObserver;

	if ((window as any).IntersectionObserver) {
		observer = new IntersectionObserver(onIntersection(trigger), {
			rootMargin,
			threshold
		})
	} else {
		console.error('IntersectionObserver does not exist. Use polyfill');
		return ({
			observe: () => {},
			unobserve: () => {}
		});
	}

	const observeGenerator = (type: 'observe' | 'unobserve') =>
	():void => {
		const elements = getElements(selector);

		for (let i = 0; i < elements.length; i++) {
			observer[type](elements[i]);
		}
	}

	return ({
		observe: observeGenerator('observe'),
		unobserve: observeGenerator('unobserve')
	});
};

export default observerGenerator;
