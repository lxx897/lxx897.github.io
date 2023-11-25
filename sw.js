/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","53a90c2a77daec9ac0a1b2d4ee9b1bde"],["/about/index.html","2683b7cf411332e7b16f5d3e3b82a798"],["/archives/2023/11/index.html","7baeda8cda9450bfc3ba2f87773b5626"],["/archives/2023/11/page/2/index.html","9c5e917d009fad6fecf1b2fac5402343"],["/archives/2023/index.html","3c48c67a67344d8f51d894ffda44eaf4"],["/archives/2023/page/2/index.html","7552becce61cc280b9a0b5d0873e302c"],["/archives/index.html","ce9c69a4c14d08e06677018976636626"],["/archives/page/2/index.html","21270262390a2d3fb430a295bc5c05ca"],["/categories/Java/index.html","aba77c0a94b042c3768271f8c104d205"],["/categories/Java配置/index.html","d1cf12c74f25ef188cc964d60799014c"],["/categories/hexo配置/index.html","5c134bfbc844ad4c16d3a6ff3b9afb2d"],["/categories/index.html","fd2c8aca1881dea72ad7f85043f27807"],["/categories/实用工具/index.html","7d5b13ec4a8975adec90cc303aa840f7"],["/categories/工具/index.html","ed7a0438d98309e4d647d8940141e3bb"],["/categories/测试/index.html","eabcceb0dc9b5d3a413af0c70360b09b"],["/categories/视频/index.html","3cf41eabc91b0b45cfbcabc9e5734fa5"],["/categories/配置/index.html","c4157e75fe57c2fa012f25eb25dafc08"],["/categories/配置文件/index.html","c71f3c30268d8fb1778e26c230d90155"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","f603de18a6d44ef052d26df2911c439e"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","54e9eb70bdce5cae712da809ffe5636a"],["/page/2/index.html","7845ade50698c4c33e5f1e95678f066c"],["/photos/appointment/index.html","4ce4a03d70f0a8099f580db71daca641"],["/photos/babyAndBabies/index.html","fee8fb36fc2e945033692a167403dfd4"],["/photos/game/index.html","1f9db8911090bb4e0bdabc4768fb74d1"],["/photos/index.html","d32b8395ccacdcce097cf7a12d72c4a0"],["/photos/movie/index.html","bb99fee1c8bbaff796665c3340a16d48"],["/photos/ohmygirl/index.html","165d1cc88920051f31c6c348f099b43b"],["/photos/outside/index.html","2f8011049ee447b23d222dbb7c3f6f5c"],["/posts/16107.html","0a95fa4b9f32488524d12444de90e16e"],["/posts/16888.html","1d4be30bd90e6c4f188bed6a2736bdea"],["/posts/18206.html","28519f0f046e5e15344bf38270bf6f1e"],["/posts/21635.html","d6ad85b4b7a8ec4e3ef4f9fc9e16973f"],["/posts/22910.html","b787aca1e7226f3306bbccf00d1ee74c"],["/posts/25631.html","119a0a6d013fb408d1a308ef27af223f"],["/posts/34134.html","af2bd03d79b9b3d18984ecf71f1385bd"],["/posts/38362.html","d2f7c632803faf58e9700d4880787788"],["/posts/47374.html","0f0a7b9cfa176262f2b907e7ae375a67"],["/posts/52307.html","fa42f3be46e4321ebddb9e428f0f4867"],["/posts/52812.html","f7eefbe9fd553b48b0d35384450ef320"],["/posts/53714.html","35c209791a8cf45413d567cf9b532d9c"],["/posts/58565.html","5c90ebbc40db66c421737e6ac9f46aac"],["/posts/7396.html","a68633c53d2de3857ae747703787f6fd"],["/sw-register.js","d79a74d09bc4b3cc21e821b458efbc2c"],["/tags/B站/index.html","2735e643ec6d57d739da42455f68218a"],["/tags/Java-配置/index.html","1e3803f350f6afce1c5b58cd5be49e5f"],["/tags/SQL-便捷/index.html","f83d8792a404b1f3b9f4a507c00446d5"],["/tags/index.html","3ed8bf8090373432abe4a99190eb3fab"],["/tags/java/index.html","80a33420eeb1395ff47aa09c4b854b89"],["/tags/minio/index.html","dc253362e7a84d74c83d46be8f820c8d"],["/tags/定时任务/index.html","eab848f79e6f2316effa6a1d4e643667"],["/tags/工具/index.html","1ef956c738b325394c6f6da0be636ab8"],["/tags/搜索/index.html","0ce7400a0eb9898f0272cbc065df225b"],["/tags/时间工具类/index.html","410b34d8613071695e4cd3fe919b739f"],["/tags/测试/index.html","7d4af940dabc36a07f2e18c7baee27f2"],["/tags/虚拟机/index.html","8661591f1c6084c296533d251cb68f64"],["/tags/递归/index.html","fcd888d433c9f0c6e128790d73147a5c"],["/tags/配置/index.html","4b780fd77b0d9bb4df560bf5ff5ac769"],["/tags/阿里云/index.html","e89d824d57e6ca291f4cf96f1aa4ebfd"]];
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
