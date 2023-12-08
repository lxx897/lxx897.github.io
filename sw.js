/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","588fe3d3436d06f0a7400d513de73707"],["/about/index.html","4c2278b3bd664dc66b8be2cba1ca662f"],["/archives/2023/11/index.html","27f647743b42874f5092e57cace4a726"],["/archives/2023/11/page/2/index.html","240369136c06cf71e8e53afa7c19d5bf"],["/archives/2023/index.html","7e8f6f01e61ff94dd006eb0bd2db9b06"],["/archives/2023/page/2/index.html","5864348c4290ff49f96fd93a9696fdeb"],["/archives/index.html","547c4aa85aa270baf097e7e0f275e7b5"],["/archives/page/2/index.html","cac84d77c50dd5352ec174d71ecb7175"],["/categories/Java/index.html","35656e3963a1864dc67c64a003d260db"],["/categories/Java配置/index.html","2ada98f323cce5fca6bdc8f0ff29e979"],["/categories/hexo配置/index.html","860f8c58498975bd86e30e73e89cbf5d"],["/categories/index.html","29f0b8d59b14ba4e64753a9be53a1be1"],["/categories/实用工具/index.html","f50aec26fb312b5368366398a0a955df"],["/categories/工具/index.html","a00b6d77578f9d743aa5e5d012b30f6f"],["/categories/视频/index.html","536f8627fec263f79f1863eb97216247"],["/categories/配置/index.html","a20b74c74484872d07aed89e7ea4f5f9"],["/categories/配置文件/index.html","01e710e5af628393aa2c3b8d8d90d676"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","3e26b5286b7a3c4222b5b583c38d5c1b"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","92a0932e8270755a212915f68ec0017a"],["/page/2/index.html","4a8eb471e5f006efe20513ee6cbb2ba5"],["/photos/appointment/index.html","8fc3ee5100a6e4eb25209c42913f55e7"],["/photos/babyAndBabies/index.html","b7035a16508e60636e149e95a559240d"],["/photos/game/index.html","a9ed6d6af4132c0ab082c1347d77e4f2"],["/photos/index.html","49968832bb585063fe4b48a67c7de046"],["/photos/movie/index.html","a70fb79f8ac62ad9e9a6980255dbd0e0"],["/photos/ohmygirl/index.html","53839fd9005ef5d5fbb430eef2db4081"],["/photos/outside/index.html","0cf6af2bd78aa039ab4d7979bb142909"],["/posts/16888.html","00173758ab572a3e6735eaec9f7d894c"],["/posts/18206.html","2cb66eba930a83b103dde414ccf83a93"],["/posts/21635.html","7c651e9cb133830723e00afcc3821fe6"],["/posts/22910.html","121dcaa310f8dec8e1b36334b7454eb8"],["/posts/34134.html","f0919c9823354f4d7c8458cd5a2fd7d0"],["/posts/38362.html","b7e414125ea19002b0c89af0503d5157"],["/posts/47374.html","bcfbb5a7aee292e4cf6dda720fd4a73c"],["/posts/52307.html","c3c191ec73bda61ab460e647eb8d259c"],["/posts/52812.html","f13c085b95ffad7da141c58cbbd43fc3"],["/posts/53714.html","6aa72d213136cf5ec4618f7877c6a3dc"],["/posts/58565.html","8dc2e2a7403d01dcd5cb22d8e082b3fe"],["/sw-register.js","5a5f24177a34418728ebd3595e09e5d4"],["/tags/B站/index.html","dd2f9f38e69aa21e3eb085f910d9b445"],["/tags/Java-配置/index.html","0e5c1af97082293b077708447c2f0667"],["/tags/SQL-便捷/index.html","859178073fe2256538affc9e4fdfa875"],["/tags/index.html","b7607b13f687a801fa32e03f3bd8bea8"],["/tags/java/index.html","0cf533c24520d224be0416910ca337bc"],["/tags/minio/index.html","91ef9988a597c3cde428599dd82932a8"],["/tags/定时任务/index.html","b41b31b1e185399cfabae8ea9d0d1e9a"],["/tags/工具/index.html","dd4077836e49d5d0b2fe8a2286f7edb5"],["/tags/搜索/index.html","fb89a8eb3d9efe5ff17200374744b401"],["/tags/时间工具类/index.html","847f14a7971f4155cfd6becc3a700e66"],["/tags/虚拟机/index.html","e9982190cef521c7c7893c02b91e1671"],["/tags/递归/index.html","7fe9a432a438fa57f6a2208d6f3e10e5"],["/tags/配置/index.html","96db0642dc43b45512b37d46b2372a76"],["/tags/阿里云/index.html","4f1b0f121509987dec530fea89ee7237"]];
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
