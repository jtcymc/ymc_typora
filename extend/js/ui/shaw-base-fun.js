const ymcFun = {
    throttleFun: (fn, delay, isImmediate = true) => {
        let last = Date.now();
        return function () {
            let now = Date.now();
            if (isImmediate) {
                fn.apply(this, arguments);
                isImmediate = false;
                last = now;
            }
            if (now - last >= delay) {
                fn.apply(this, arguments);
                last = now;
            }
        };
    },
    debounceFun: (fn, time) => {
        let timeout = null;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn();
            }, time);
        };
    },
    getScrollPercent: (currentTop, ele) => {
        const docHeight = ele.clientHeight;
        const winHeight = document.documentElement.clientHeight;
        const headerHeight = ele.offsetTop;
        const contentMath = docHeight > winHeight
            ? docHeight - winHeight
            : document.documentElement.scrollHeight - winHeight;
        const scrollPercent = (currentTop - headerHeight) / contentMath;
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        return scrollPercentRounded > 100
            ? 100
            : scrollPercentRounded <= 0
                ? 0
                : scrollPercentRounded;
    },
    wrap: (selector, eleType, options) => {
        const createEle = document.createElement(eleType);
        for (const [key, value] of Object.entries(options)) {
            createEle.setAttribute(key, value);
        }
        selector.parentNode.insertBefore(createEle, selector);
        createEle.appendChild(selector);
    },
    getCurrentDeviceType: () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /iphone|ipod|android|windows phone/.test(userAgent);
        const isTablet = /ipad|android/.test(userAgent) && !isMobile;
        const isDesktop = !isMobile && !isTablet;
        if (isMobile) {
            return 'mobile';
        }
        else if (isTablet) {
            return 'tablet';
        }
        else if (isDesktop) {
            return 'desktop';
        }
        else {
            return 'unknown';
        }
    },
    onDeviceTypeRun: (deviceType, callFun) => {
        ymcFun.getCurrentDeviceType() === deviceType && callFun;
    }
};