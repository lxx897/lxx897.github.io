/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c9bf20d220f49c2a43fab5d2b89f4936"],["/about/index.html","c2d5028bb4bb80ac91ef8b4f2c2473c2"],["/archives/2023/11/index.html","8c46e6c71c92bebff50f9f088e2619a8"],["/archives/2023/11/page/2/index.html","90a34dadc56a097b72244139e18be19b"],["/archives/2023/12/index.html","ef5c21ed42573d898468bc7f17206bb1"],["/archives/2023/index.html","aa32e21dc97191f25a28679a2072ca26"],["/archives/2023/page/2/index.html","6e37f46d85e85f4b7f09e4ae791e2247"],["/archives/index.html","3df7a3ac34ebfe1785b0a5964ff9742b"],["/archives/page/2/index.html","a8860a54a19d3af2a0714f639a9ffc9f"],["/categories/Java/index.html","2a6b54db19f41325f437ce7a7040562c"],["/categories/Java配置/index.html","91d65602fdbfba386841679e140b2acc"],["/categories/hexo配置/index.html","ea6db1bd91fc30c6ca3fcebcc1de9b77"],["/categories/index.html","84f96ba96a5029fdd2d70656675b0f93"],["/categories/实用工具/index.html","aec90f55b3f249c03b0bac75d5ebec63"],["/categories/工具/index.html","7f0122176a7e3acafa7a7209ea314076"],["/categories/视频/index.html","bfbdea108d091faa3197b2576c5eac71"],["/categories/配置/index.html","3baec6535c87b18204d203cdf855db33"],["/categories/配置文件/index.html","185cbca8792e3786a2a07d1542e934c5"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","e954d2eefcef3ca5fbfa2d0b86233fcc"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","24323d9a9a586794d371254069f4b720"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","22639c0c51c101e4ea74f9c26de6368b"],["/page/2/index.html","2ed43e85c5df36a67a5db2b7d48a4259"],["/photos/appointment/index.html","205736e84a5c2e968651eb0101537c84"],["/photos/babyAndBabies/index.html","bcd1f61518a5d8cf5eb016edf5be89d4"],["/photos/game/index.html","a093320cceac866a64c5b25fa54edc26"],["/photos/index.html","4a383232c0ae0b28d4764ce88561a5b4"],["/photos/movie/index.html","8dd34f89fe9dae5405a7b346357e7264"],["/photos/ohmygirl/index.html","c51c7ab4fed3a2dc455b8dd3a47f3a8e"],["/photos/outside/index.html","8ab91ede8db6647dff63f8dc9124ec3a"],["/posts/16888.html","446dc3837d0fb2850af356ec7a5613f7"],["/posts/18206.html","c740cdd89d8eb6dfd07ba3a0467b1d8d"],["/posts/21635.html","d70c2a5d4e32d41a1a6b2b6726d3a66b"],["/posts/22910.html","16332064e0a0004b6fda10908be7dcaf"],["/posts/27699.html","6fa3ec45adce2f538f8c800b4da8f6cb"],["/posts/34134.html","cc120d2a17ac1596e1652a6bbed98968"],["/posts/38362.html","e52f2f9f0a8b13a64a69e89d9db63668"],["/posts/47374.html","b45d88f1df57c42b46d1ff25e7eb4bf0"],["/posts/52307.html","7de426c63e1da70f1dfac73882b4489e"],["/posts/52812.html","20c4f4463bbe4f4c7c4ee9deec7b7f8c"],["/posts/53714.html","3d1c7d47985af0f1658af2048d94c5af"],["/posts/58565.html","dd10c1292fae1195364942d3e7a9c4e7"],["/sw-register.js","52248a0014d1f8af52729c4e3df711c7"],["/tags/B站/index.html","cb857a485c6fd864d8ef58ec9855f08b"],["/tags/JAVA-工作总结/index.html","a7ebf32e7e50cba48d88ad0d040a90b5"],["/tags/Java-配置/index.html","25437b135bb2ea5affe73e9d2ec2694c"],["/tags/SQL-便捷/index.html","55d2ff5b3e3807230243ef60e3db26db"],["/tags/index.html","3f31de19afff23542da4de18a47fcd56"],["/tags/java/index.html","5e34a4d9dc7d739e567bb159e2a978c5"],["/tags/minio/index.html","ccdf701c9013d85aa8c67c9dcdd09165"],["/tags/定时任务/index.html","e3f6da92376fc0f041a730ec1f294108"],["/tags/工具/index.html","3bf0d845424d158dfdefaa11659e0118"],["/tags/搜索/index.html","2b793be8ac9a1482d232140e8e1c30b8"],["/tags/时间工具类/index.html","2cb33aaeff61d79d7def2d4c8df3c0be"],["/tags/虚拟机/index.html","107b5b9f34d6a1aaaad4071ab20b956f"],["/tags/递归/index.html","8c160d25638062dddee84eeb7fcb5f31"],["/tags/配置/index.html","f79dcc0f14f489a0875ac9532b7e4026"],["/tags/阿里云/index.html","849d22e9335ef01c795cbe164bce615f"]];
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
