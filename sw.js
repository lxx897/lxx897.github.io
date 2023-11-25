/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d61c5a6600c210fa8b5ae1e3e0189b3c"],["/about/index.html","4b4b4f29f19cb49b83bf84800545983b"],["/archives/2023/11/index.html","b683bbb62c52170cfe2c2586735677fb"],["/archives/2023/11/page/2/index.html","ae9246d9139453aaa94092a42bfb66f8"],["/archives/2023/index.html","cc4ba03e8d162a354be0f133b01fba13"],["/archives/2023/page/2/index.html","8539949c30af795ef421ce1048b0b758"],["/archives/index.html","c678b06ff19b6f207e2bac7c1b1853b9"],["/archives/page/2/index.html","4be7f0e1c991e3ffaa20e6525846094d"],["/categories/Java/index.html","408e7395dd02e4435b09105a1f9699fc"],["/categories/Java配置/index.html","7b848eaca790d9ab1464b0fe69c2b6a8"],["/categories/hexo配置/index.html","804c37ebd04a43453d5a3f21fdf7f6d7"],["/categories/index.html","b351f3e5ceb9f9e2fb24ea1cad1cb8a0"],["/categories/实用工具/index.html","d90b89fc67487add2a7f7c9dd9ddd251"],["/categories/工具/index.html","d16ac0c2a83de6e84f8a4c2607b3aed6"],["/categories/视频/index.html","3016289f2fc3959f38d2ea22a22a9e78"],["/categories/配置/index.html","af7ad127737b058e2833e2f80cc40ccd"],["/categories/配置文件/index.html","79a1de5e318170ee6ae9aa4d1e8c6765"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","399e7e99b1df2e77b1b82fc1086c9c70"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ac7795098ab9ab27277f2e58be4d6def"],["/page/2/index.html","b14385acef5e367496fb7b625977173b"],["/photos/appointment/index.html","8a0770d040eecaeb15c9fcf59b8f96f3"],["/photos/babyAndBabies/index.html","86abd79f3c22462fd868f2b2c8f52470"],["/photos/game/index.html","b708de45d5f7dcbb20a70cc16e924407"],["/photos/index.html","14137046e71b99686ac2e918e62765bd"],["/photos/movie/index.html","8b3a275aea79d28446b0c85bce52320c"],["/photos/ohmygirl/index.html","07b12f34082ec9c01badac156aef0720"],["/photos/outside/index.html","a59ee81b066972148d1193d3cedaf54e"],["/posts/16107.html","527cb6da6a450dc7553a5aedaedb280a"],["/posts/16888.html","d5c732f323e7c9379a434cfd2a0aef89"],["/posts/18206.html","7bd6f9fed4c12ebb087e13e0e10fba3a"],["/posts/21635.html","d9bc2c26ff9f40112902c627aab2287d"],["/posts/22910.html","56c72bec59ae3512d7a8c1b9a6a57e28"],["/posts/34134.html","2825750b34f096350b868f88eb7dd176"],["/posts/38362.html","cd53909794eb5e7d681689538c559c62"],["/posts/47374.html","59272a131bde4ba73d769cc7e91ebc01"],["/posts/52307.html","e060ffc298286673d0fced8e8604350f"],["/posts/52812.html","f7ffefc9c0164c2c960ac285dc3ca286"],["/posts/53714.html","9a51c8ce63c20394073cafe056027ea5"],["/posts/58565.html","4034de2c345cf08ecd78ee07df4bef83"],["/sw-register.js","0073dc7d96059b70a0676124d30bfbb9"],["/tags/B站/index.html","b34aff3f95a5007c0d8d5772f7fd220e"],["/tags/Java-配置/index.html","7558adeac4019148aa4164ac3f742cc1"],["/tags/SQL-便捷/index.html","ed37cd81b18f3c91490c3a1336115bb7"],["/tags/index.html","2b27470a967919b0594d70fcce9d05be"],["/tags/java/index.html","251658d6adb72741c33a6b0f44073fd7"],["/tags/minio/index.html","46867f2b9ce3ad9c15bb266f8f72d2b6"],["/tags/定时任务/index.html","4155a2a4dfd394b81e7f6de2b43f0c6e"],["/tags/工具/index.html","09c966a9a91c3238498d8c53938ceecc"],["/tags/搜索/index.html","87bfede7afbc51dbe97a25797755a9d6"],["/tags/时间工具类/index.html","453c42767f1abc68591a7d931af3e491"],["/tags/虚拟机/index.html","aaa6f27928149c3936f6197fcff27329"],["/tags/递归/index.html","2d9004363529dd547b5e28fd6c24e9a5"],["/tags/配置/index.html","c59dadfbf82d3e323145e508d18efde7"],["/tags/阿里云/index.html","461d332bd0977144dab295e6f70b8765"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
