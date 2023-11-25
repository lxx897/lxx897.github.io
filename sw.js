/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d537a9900c53993f68b7cef4dd6caa08"],["/archives/2023/11/index.html","5fda3deac9b7fc6c6b253701101fe606"],["/archives/2023/11/page/2/index.html","4e7d2f8a75bc8cc413b4245d651a98b7"],["/archives/2023/index.html","e8a244cbe717ef2befbde4d33dceb5f1"],["/archives/2023/page/2/index.html","07be939b524d2c5773427b22b9285c8e"],["/archives/index.html","f6d4fc61932116fe8a005443436915a2"],["/archives/page/2/index.html","41eeea8e2b6ae89489c07f816ab66ac9"],["/categories/Java/index.html","a4cb58c8a20483895b8c66cd89899a4a"],["/categories/Java配置/index.html","d7291be65f9f94973aa63f694040686d"],["/categories/hexo配置/index.html","c7b95e97f0770e24d1ca76ab39b8d998"],["/categories/index.html","35d76e38da3d99e52733bc4d071f873f"],["/categories/实用工具/index.html","ade1ae7fa382ab989d63faeca22a84c8"],["/categories/工具/index.html","61575c2acb0ec298fc59801f625e5e40"],["/categories/视频/index.html","b28c20b0686c6625290829ab10491b81"],["/categories/配置/index.html","8dfb3ee49c68a43f8f90b65cedf459d7"],["/categories/配置文件/index.html","16f9147701a8c1cff6949d1b5b55b4e5"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","32fe7cdc748f19310b2296049fac724b"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","86c047452d400f6775a3d753ac99af48"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","823e809a211f61098a290960dd05e402"],["/page/2/index.html","24aaf47a8ed3e8a180ebc88b54bd8d9b"],["/photos/appointment/index.html","0a9ddf3547ecf9bd968e737762b66ab6"],["/photos/babyAndBabies/index.html","b953a1612e0ec36961b27a64db9ce860"],["/photos/game/index.html","c023feffd6d52da1028952f535b69ce8"],["/photos/index.html","f80a36f0b96695d97ce20852f9fb69aa"],["/photos/movie/index.html","439236daf9006c72c8d711cad3fb4ddd"],["/photos/ohmygirl/index.html","77b067852f4a4c60c0ca131a1feb18df"],["/photos/outside/index.html","4fbf9af36f1e53c45287f54e1202a921"],["/posts/16107.html","beb360baa04b74efd4f3165f45ceca5c"],["/posts/16888.html","ce4ce25a48ac2cad4f9fa2cb4dc43e5e"],["/posts/18206.html","efb833aad159c54ebff7f595a29ab4a4"],["/posts/21635.html","f86ab1829296d758d8527431a46b1680"],["/posts/22910.html","e21d06c2e09f4c6fc93c012d7a435d48"],["/posts/34134.html","b97623eb6fcf473a7e028f992ea0f6e5"],["/posts/38362.html","652292110eb4f7cc65962d794e925dd3"],["/posts/47374.html","a08ad9c7bc529a20fe9c85df8a0fcd51"],["/posts/52307.html","23ebecba8bded8ac86b8b444df3b32a4"],["/posts/52812.html","44a4e877b2bab63956679aac467b03e9"],["/posts/53714.html","3c29cc423f626d674a699a08f1750a8e"],["/posts/58565.html","0cb38b74c16ff09470433d6da2d7b9a2"],["/sw-register.js","3acbe4675d171f4d1e7fb4f48d198c91"],["/tags/B站/index.html","57184e9b661bf7e4643d0d31a5ffca7b"],["/tags/Java-配置/index.html","dce08dc8f7648f75c910ac5a9a3374ee"],["/tags/SQL-便捷/index.html","1120328c0addac2d7c2d1f4e9fad9e88"],["/tags/index.html","d3f14c416f9a897b9238af2c27c83372"],["/tags/java/index.html","ece8cd5cf2b73b69445e04d8cfbabe2a"],["/tags/minio/index.html","13a63693b82141f4f6754c1a977035f3"],["/tags/定时任务/index.html","1e4db9160dd90804c5a5a82301a8d41f"],["/tags/工具/index.html","880a092d1de3fc2421de9fdf6a615534"],["/tags/搜索/index.html","e76ace7051585d44d65dd7eba5eecae9"],["/tags/时间工具类/index.html","c92b9665ba895066a538d668361c5258"],["/tags/虚拟机/index.html","eda99a5f736d7a5539532c7b1c7d5fb9"],["/tags/递归/index.html","55b2765aaaa760568d4eb3abb218f309"],["/tags/配置/index.html","be935899d3f8bda614382b2452953921"],["/tags/阿里云/index.html","920d9d50bec3bd70101654f3ffc9c557"]];
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
