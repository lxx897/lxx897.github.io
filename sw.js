/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9836db8414b52804d914d2746cc59f04"],["/archives/2023/11/index.html","2a4af8ec24da451c2248cd302ebf30d7"],["/archives/2023/11/page/2/index.html","993fd614d5832b976b4878233ccc4f12"],["/archives/2023/index.html","a48cc27ace89ba614add9966ed754a49"],["/archives/2023/page/2/index.html","74287fb0c2a29fa266ec23ab7166edab"],["/archives/index.html","90c56534cdcfce4d89d4a543155e6599"],["/archives/page/2/index.html","7e34a1fdf4844cebe930cc9c979dd475"],["/bangumis/index.html","d58897f281691b34b0f26e5ebee13d31"],["/categories/Java/index.html","98d5ae1083228d51afbabdf3ef0e62e5"],["/categories/Java配置/index.html","3865232b0144b8a0bef61837ea5f53ff"],["/categories/hexo配置/index.html","868589c975f77fc49edc9cabf89dbfeb"],["/categories/index.html","f3991a102257ac24bfd23abb64515af1"],["/categories/实用工具/index.html","b96a943b6d040f17bddeceef98db618d"],["/categories/工具/index.html","c170b657d10efe355691b0940c4c478d"],["/categories/视频/index.html","f86974f8cdc3e3d67823b2a3a2d7b4ee"],["/categories/配置/index.html","6a5e1115ea64db11c6518f78aa214fe2"],["/categories/配置文件/index.html","b518f81e1d031d3c08116910da2d96f5"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","32fe7cdc748f19310b2296049fac724b"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","fd1c6fbf5f45fd280e450d60da8d78d5"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","87d140e3fe70921b3d98b515745af0ba"],["/page/2/index.html","839eb5dd51527ee143682e74215cf3aa"],["/photos/appointment/index.html","33a5083149404cfb9f5ea359f498f161"],["/photos/babyAndBabies/index.html","bccd800d2a5b925c361982388ad1e5f8"],["/photos/game/index.html","c6d05d67c3931d3b281e2bfe3a562163"],["/photos/index.html","ef00f54782c0f8a6d682359dd7bcae63"],["/photos/movie/index.html","9324c81a7add10f19ab9191d573e0ae5"],["/photos/ohmygirl/index.html","c6ec0aee8b3508370271e456113a027e"],["/photos/outside/index.html","3d19f4da2d74a4937d6980ce080ed6fb"],["/posts/16107.html","beb360baa04b74efd4f3165f45ceca5c"],["/posts/16888.html","ce4ce25a48ac2cad4f9fa2cb4dc43e5e"],["/posts/18206.html","efb833aad159c54ebff7f595a29ab4a4"],["/posts/21635.html","f86ab1829296d758d8527431a46b1680"],["/posts/22910.html","e21d06c2e09f4c6fc93c012d7a435d48"],["/posts/34134.html","b97623eb6fcf473a7e028f992ea0f6e5"],["/posts/38362.html","652292110eb4f7cc65962d794e925dd3"],["/posts/47374.html","a08ad9c7bc529a20fe9c85df8a0fcd51"],["/posts/52307.html","23ebecba8bded8ac86b8b444df3b32a4"],["/posts/52812.html","44a4e877b2bab63956679aac467b03e9"],["/posts/53714.html","3c29cc423f626d674a699a08f1750a8e"],["/posts/58565.html","0cb38b74c16ff09470433d6da2d7b9a2"],["/sw-register.js","d0402d6340d40fc3b0d5162c7747e5e8"],["/tags/B站/index.html","e9f76e45c5e2285c872ea5037e9ee428"],["/tags/Java-配置/index.html","b4250b5125d758ce57b8e84b7b9467ed"],["/tags/Java/index.html","04f8d3e6bddf3a9b916b1d5e44390815"],["/tags/SQL-便捷/index.html","e84582d1c9b6100bfbb85b9bae626610"],["/tags/index.html","bffc2a8c3ad55ddd82dc9c1085bd1f2d"],["/tags/minio/index.html","ea0df2a3a5de01e139f7b33f3c6048dd"],["/tags/定时任务/index.html","c2dd19fc554499e4db90083e718203bd"],["/tags/工具/index.html","b552ce1222b0bd094103b8a8c843997b"],["/tags/搜索/index.html","6ef3a28b9ad6d912c21f6a87f28b1812"],["/tags/时间工具类/index.html","335823e512d13bc424ee38d607e86ee7"],["/tags/虚拟机/index.html","76311ee7f917c908ee6823e322baa70d"],["/tags/递归/index.html","e352000e37f41ce32907988df3c6904d"],["/tags/配置/index.html","a5aa4ffb2ebbdb9e6b59356781ae9d38"],["/tags/阿里云/index.html","87782868a45ee40aa65ceea92fa34332"]];
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
