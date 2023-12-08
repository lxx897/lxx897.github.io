/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8333c5516387e0ef287ab655554480c4"],["/about/index.html","19972e821f8143c8ceaf5631c737e2d2"],["/archives/2023/11/index.html","80fd62e4549858c805ee68f70177b9c6"],["/archives/2023/11/page/2/index.html","ba59345568cc548c9920578d25389385"],["/archives/2023/index.html","447b5b31b6e5bd4a68aa97a6b56bca8e"],["/archives/2023/page/2/index.html","f0cb87cee54caf2b1760bcfc85bc4bbb"],["/archives/index.html","234ffe070a01492d37cb92ff887439ed"],["/archives/page/2/index.html","3cbd0f631d0b17f41220568479ee1677"],["/categories/Java/index.html","b4b0019f2c427a11ebf2310c3130388a"],["/categories/Java配置/index.html","f15c7fff53923ef7f3fa9b0ce8fd226e"],["/categories/hexo配置/index.html","6ed70a396e9fc75128b0ca9b2ef89e03"],["/categories/index.html","015dd72665ee73d46f5829ef1ea0877b"],["/categories/实用工具/index.html","fa789d3b906785fc6e43e2f584c22dfa"],["/categories/工具/index.html","844c5acc1d0d90235f997bf412d8abcd"],["/categories/视频/index.html","6b0c6efba01ac1e3a96475b03629a108"],["/categories/配置/index.html","e680c83362c987826b3ef3369e70a84a"],["/categories/配置文件/index.html","c4422b054abce8ee0506ae040bd48ab1"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","e954d2eefcef3ca5fbfa2d0b86233fcc"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","8b6f11b1f146dc3cbffa6840dfae957b"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","2b204f593231c167c3ffc7bc7409bc61"],["/page/2/index.html","8faa9a0f4a06dea83aea7b3252a7a145"],["/photos/appointment/index.html","c62eded54be48e56f1a71c299b80c30f"],["/photos/babyAndBabies/index.html","b1e446c8c68e5a0da60e396f7cd476d4"],["/photos/game/index.html","f157139dc039d605cce9ebeb7d55f258"],["/photos/index.html","379f440309080f2b8f0a5c6b914a5db2"],["/photos/movie/index.html","85d38be277a86dea87f76bd1065af0f5"],["/photos/ohmygirl/index.html","f4dac69763cc8ba4c60433a2201ed24b"],["/photos/outside/index.html","b70bf36d3ace6f714c3de5e1de8bd66d"],["/posts/16888.html","02040e01f00e35ecfe571e7052260b88"],["/posts/18206.html","c73c07c95710213209899824bc7f4483"],["/posts/21635.html","e4df7eef83c4a0fe5176e98432fb0cdd"],["/posts/22910.html","dd7a1f86689e64a03077b762afebfc21"],["/posts/34134.html","bea7403ae3037bd023bfdc5ad39983c0"],["/posts/38362.html","10505c79ed9a5d54924ee3b3f8dc8a67"],["/posts/47374.html","d7c1ef70c97c8a173f580b443b5fbaa5"],["/posts/52307.html","61a113864a9892b82e0de7eb226ec521"],["/posts/52812.html","bb6986084b4bc1b35900f2c1e0aa1e4d"],["/posts/53714.html","d981f594f07cbd04c2be8eca2a7d6ce1"],["/posts/58565.html","971ace3d46a1a9bc65f4e94d0d23e909"],["/sw-register.js","2be21419e1e20425c22505aae297d579"],["/tags/B站/index.html","109ec0e6a382b116d1773593c583c952"],["/tags/Java-配置/index.html","666bb045a997c99d40f4798ed853ea99"],["/tags/SQL-便捷/index.html","fb5adae1555963d9863b7dfc2cb7ebe8"],["/tags/index.html","5a6b149a2513c4cf277189501b7e6f94"],["/tags/java/index.html","f37dbc8e468f6ce37d9b24241839e948"],["/tags/minio/index.html","182f7d6e3f95ac15108d721280016758"],["/tags/定时任务/index.html","59aed58b5a681f1272b10e02f25f9d45"],["/tags/工具/index.html","6c38ba726b2b5cc7055361c667d4470e"],["/tags/搜索/index.html","9b32b812d44711e4ab0be18c750b57a3"],["/tags/时间工具类/index.html","d7b3ce2a00109c09b851eb17e539644f"],["/tags/虚拟机/index.html","e321dc039f8b07d2b81f61fe4d02807e"],["/tags/递归/index.html","4715bd3624dfd336b2e213e9d351ab2c"],["/tags/配置/index.html","ec1cf59ed95df70f3180039ce5630688"],["/tags/阿里云/index.html","9f93601791dcfdd42f319f3186aafb81"]];
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
