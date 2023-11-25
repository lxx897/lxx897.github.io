/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0df9ca3215794f80ececb71a962bb3b4"],["/archives/2023/11/index.html","4b8af575dfb81c4da2fbc186294a329e"],["/archives/2023/11/page/2/index.html","d02f632ed9919752144cbf01737a9b91"],["/archives/2023/index.html","8f137916aed354646240502ffeb24cc8"],["/archives/2023/page/2/index.html","7c6228de96b559bc88b2024e81a260d8"],["/archives/index.html","ce548283ee5ad6dde8cc14e3aa41b729"],["/archives/page/2/index.html","59d18998765484270e64a6c0cf5bedd4"],["/bangumis/index.html","9ad944ada80a0c23183d1a5736f5e373"],["/categories/Java/index.html","b9511e4334e538570c8e7ed53b768418"],["/categories/Java配置/index.html","cc9960960aa17337d05441c5fc7da947"],["/categories/hexo配置/index.html","c72c37993783150481b536ac677ba999"],["/categories/index.html","29535daa8ce3ec13aa1987a54e55c29a"],["/categories/实用工具/index.html","0bfa1ae854978192a8fa92c9cb4b24f3"],["/categories/工具/index.html","d515c829a345d1b4c437ec86dc8edf4b"],["/categories/视频/index.html","8246df39244454c100b928997e6b8616"],["/categories/配置/index.html","50ae5b689cee4ce8edc5a7e59983a140"],["/categories/配置文件/index.html","bed8a06ca4e11af1ce3f35a177114568"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","32fe7cdc748f19310b2296049fac724b"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","f3a72ff857c7f5da0030dce71e32d5ce"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","d7c91d40a8bf52a7d7584e0cf365e556"],["/page/2/index.html","bcf92060ca8db9af40995c0ed3e516be"],["/photos/appointment/index.html","3bdaafb2da9c15293e1b81b63c9dad58"],["/photos/babyAndBabies/index.html","cb97a7b4fa567a6574dae029ecddccfc"],["/photos/game/index.html","d841884c2f09e702204dd78b669d950d"],["/photos/index.html","b857793dcd3a1b2af56de89c246f7386"],["/photos/movie/index.html","9f2e41fa1142d893a143edb61057dd6a"],["/photos/ohmygirl/index.html","48d9306ca557bec95d4b198894a35be2"],["/photos/outside/index.html","7a7fdfd2ef71e6c2289787f41a13db41"],["/posts/16107.html","beb360baa04b74efd4f3165f45ceca5c"],["/posts/16888.html","ce4ce25a48ac2cad4f9fa2cb4dc43e5e"],["/posts/18206.html","efb833aad159c54ebff7f595a29ab4a4"],["/posts/21635.html","f86ab1829296d758d8527431a46b1680"],["/posts/22910.html","f15fd4d565e0ca2c261ece423642a5ae"],["/posts/34134.html","b97623eb6fcf473a7e028f992ea0f6e5"],["/posts/38362.html","652292110eb4f7cc65962d794e925dd3"],["/posts/47374.html","a08ad9c7bc529a20fe9c85df8a0fcd51"],["/posts/52307.html","23ebecba8bded8ac86b8b444df3b32a4"],["/posts/52812.html","a2e8672a184d05e535f949ef6caa9741"],["/posts/53714.html","3c29cc423f626d674a699a08f1750a8e"],["/posts/58565.html","0cb38b74c16ff09470433d6da2d7b9a2"],["/sw-register.js","db98c65f3d8fa697bf703f628b03288a"],["/tags/B站/index.html","da2f282d1d6542caef37e70fb64f6690"],["/tags/Java-配置/index.html","561dbcccd4d3819067cb01b96057f713"],["/tags/Java/index.html","382e4ae8f968b3b8ea6f0949f3dd7870"],["/tags/SQL-便捷/index.html","36a3d1ed97c140bf496047151057d6ae"],["/tags/index.html","26ff11380f116ee9c2e01b82270acb7b"],["/tags/minio/index.html","d4693d8ad518a211cb336f6487728f90"],["/tags/定时任务/index.html","39a8c68eb754272e476568839d92b799"],["/tags/工具/index.html","1259a74e2273d9535471b4e52bb9fbe0"],["/tags/搜索/index.html","0731eddf76c729973dcc8e04320d2a17"],["/tags/时间工具类/index.html","f82bc313e40b0209403a7dc01967ec1f"],["/tags/虚拟机/index.html","c71ee9a3bff8510346ad58c971e8c95b"],["/tags/递归/index.html","785d8ff0aef1af84672e76c1410cdad1"],["/tags/配置/index.html","6d6eaff3b809c354f08d4f0316d08e89"],["/tags/阿里云/index.html","91d4e71e94be56f4d90a3f7d652985b1"]];
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
