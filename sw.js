/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2b382631b2dc1dcd098e22e742c1558d"],["/about/index.html","a7a0771bb668971a70cb8c426186490c"],["/archives/2023/11/index.html","8ee0bb5225d33fba3184039226267043"],["/archives/2023/11/page/2/index.html","70638f7bf9b863e1258261db9c5a3410"],["/archives/2023/index.html","fdfa3b097021a2e1f0548854d42b97a3"],["/archives/2023/page/2/index.html","ca4075cf0741a1b4251743c8bc0e87d0"],["/archives/index.html","77e177377ce7630907be7de8763e9f30"],["/archives/page/2/index.html","41a3802292d88c805daf2aafab8e972c"],["/categories/Java/index.html","1d0e658d2e53ec436f6ade1a6d87a130"],["/categories/Java配置/index.html","481ced89e426a1d27198c15cec94b64a"],["/categories/hexo配置/index.html","7019603470386d9155a970f23461912e"],["/categories/index.html","88b84301fad1f73872c398a77a4b3487"],["/categories/实用工具/index.html","2a0bf09c6855dd197a287e409d26adea"],["/categories/工具/index.html","9466545d46194147e120e595be26368b"],["/categories/测试/index.html","fef79321f8b594750c380e9d6ea72acd"],["/categories/视频/index.html","3138f880687e9949c9ba9037a1bf92e3"],["/categories/配置/index.html","0771966313a39528ac8c7315cc003f11"],["/categories/配置文件/index.html","b486a3a09f7244ece8f13dfced7b8e12"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","52db9eaf18990383c5e714c5aa9416aa"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","cc75a3f408f2a60d5546a6934a69d7c9"],["/page/2/index.html","f8d48ada5e4e0ad42ed02a02c539ba3f"],["/photos/appointment/index.html","13475e069f0e70f3ff540c641c996da9"],["/photos/babyAndBabies/index.html","8e9bf8869ca66c6ead53040814becd25"],["/photos/game/index.html","1227d6d0ff12312b9c6ed01d7ac5dbfc"],["/photos/index.html","6558c16da2f73c78fa95d3cb0b0a5f99"],["/photos/movie/index.html","13e0d64d630a98391253dd851a704ffd"],["/photos/ohmygirl/index.html","09e3196d31c036cd9d95e79328f7e76e"],["/photos/outside/index.html","c8be625381e2445c4ff4794f56953a85"],["/posts/16107.html","868764e9ca5c0495f2d3516f9465dff2"],["/posts/16888.html","b1ca2ca17d73d24c8c2004adf348d1e6"],["/posts/18206.html","c4e41ed38c56ec29bd64c60bcb559e31"],["/posts/21635.html","205bfa9e5aa736447f56e40ed1e564c2"],["/posts/22910.html","290ef28da317ef2cccb33925a53223d6"],["/posts/25631.html","97cd8fd2f3e3dd591f2f2e876cd42101"],["/posts/34134.html","011acafbd09c69b4618308a75d203eb7"],["/posts/38362.html","ba213755b0d637bb0ff2c9bbad98e9d8"],["/posts/47374.html","61e2f54a94dc467f47d5044ae83a8902"],["/posts/52307.html","bdb209ef934aeec2128115beb9a8b624"],["/posts/52812.html","c58ed9cfc547c283be1dcfda82fe0144"],["/posts/53714.html","ee5dff4633cb069db0cccebc4f33571e"],["/posts/58565.html","fb41192dd2ad77fba4134953247d21c3"],["/sw-register.js","0a3a5c234b6db23ddbf480edd6a006ea"],["/tags/B站/index.html","8dcd18fe03591a5f4a9fae83ac0eeeb6"],["/tags/Java-配置/index.html","22b61635d85a7aa07e97ac2736dea63c"],["/tags/SQL-便捷/index.html","626fd9f1138933dcffb4024866ed5457"],["/tags/index.html","4676be3cd6d2ae8f428e49b934900318"],["/tags/java/index.html","53272c44c17d4ff572d181607fd6dc5e"],["/tags/minio/index.html","038004ab4c6e55bf90268f89da884d53"],["/tags/定时任务/index.html","e79245e2da0024d0a82cdbed5f2a35aa"],["/tags/工具/index.html","27cc35ade96f2f41e06cfc614394d883"],["/tags/搜索/index.html","0f0c4dd291d4dd6201f3f9e87680cced"],["/tags/时间工具类/index.html","94b53f8598792f3bcb650266d9eed3e1"],["/tags/测试/index.html","4f27f30c72b1e03f4cb8128832183063"],["/tags/虚拟机/index.html","429cd99105f94e056492e9bf0ce29643"],["/tags/递归/index.html","57aa36a8b67b75d814be2e5feef17256"],["/tags/配置/index.html","c0b8f1178803f424d1041dccf26c69f7"],["/tags/阿里云/index.html","6d33634f1906a320a17d4bcca2c7a3dd"]];
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
