/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4e3d7d84de923e91f87130342a704b64"],["/archives/2023/11/index.html","e76dd54fccbe06cf4dee206363117b61"],["/archives/2023/11/page/2/index.html","78de134ed2c672f649a557a06d4207f1"],["/archives/2023/index.html","f431d259556d7465efefc2f776884a0b"],["/archives/2023/page/2/index.html","1e105b859305b89ec3d21c9fe73142b4"],["/archives/index.html","4a21a278d60f931cb04aa55d1476ee85"],["/archives/page/2/index.html","73eeed3d635d496b05d0014a8c4c0bfd"],["/categories/Java/index.html","6f8e5da36be7a1f780a257aff698664d"],["/categories/hexo配置/index.html","98b3d9b80d718226e5ba06c031655435"],["/categories/index.html","954eca1023319687aaae6931331e4e1a"],["/categories/实用工具/index.html","7341c8f5bf3219a596b5d42eb05443db"],["/categories/工具/index.html","48dba144de40ebe8982986f692156f24"],["/categories/测试模块/index.html","9b1dc45deed465f5d4cdbdb697c944e0"],["/categories/视频/index.html","3ebacdbc364b11b2687e4643a3b13757"],["/categories/配置/index.html","d774419cd1a919cde366537245f45d4b"],["/categories/配置文件/index.html","81831563a96fbd07f32e1b649d9f3b29"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","fac5ed2e37ad98d3cd19594c0d0e8dd6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1c5fe332f874421253cc82c16cf05401"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","847b761b6edbb915f08f60d746e06f66"],["/photos/appointment/index.html","e85b3eca4b62d668a04852a7a468f4d8"],["/photos/game/index.html","1f184d633494af5b939c22b7af81bbfc"],["/photos/index.html","f64f109bacffb34c0dcd02b62538a412"],["/photos/ohmygirl/index.html","3abbda423c8417abaacbed6d32a2827a"],["/posts/16107.html","7e0718e252a9b84243b86835a940237c"],["/posts/16888.html","69b2feccb5b9dc7a74df1c50d9dd7071"],["/posts/18206.html","c554b904f7931a7ff9f45ef9204cdcdf"],["/posts/21635.html","0700543e7d8f62ce7459353345f549de"],["/posts/22910.html","3244f9371dc3b7542a40ec1eb33b79f2"],["/posts/34134.html","abb0a58059336951db2f220c9c82a2c7"],["/posts/37773.html","ead5dc0b596ecfe34010157f445c7ddb"],["/posts/38362.html","16399798f4de2771a50878f8e4747af8"],["/posts/47374.html","99cb0989b1a58bdab9d2c405ce599b8a"],["/posts/52812.html","e868d01c5d764e20a0431ba10b2a032f"],["/posts/53714.html","569c8dc173ebc15b970f857704d00957"],["/posts/58565.html","783c21601792e42b467f311596360444"],["/sw-register.js","a2c788358ea3429b66e462965855b21e"],["/tags/B站/index.html","da9b6a4f6b1a1fef6d2d755b18053eac"],["/tags/SQL-便捷/index.html","ce0b31c434dea6128ccdb747581ab241"],["/tags/index.html","545b37e53115706ce14b0a4aa6b0d780"],["/tags/java/index.html","aa64f2fc28bd2e331ca6547f64801f54"],["/tags/minio/index.html","04b0f0b47b896dc1148eab48d2984395"],["/tags/定时任务/index.html","787b6281bbe4a46e7f56721ca42d0c84"],["/tags/工具/index.html","2156d88be3bf9fec747eb67cf2423784"],["/tags/搜索/index.html","a5a98460c5f41daafcf2780925019f3e"],["/tags/时间工具类/index.html","772aea727e17be15688c6db928f71058"],["/tags/测试/index.html","380051ec56d34903df05841236605b63"],["/tags/虚拟机/index.html","cd6fed0c948e21535fc1ab47a83127e5"],["/tags/递归/index.html","2beb786602aa166a8e0e679ca0bf09fa"],["/tags/配置/index.html","4bb1f51156c83580cad069a04ed799ef"],["/tags/阿里云/index.html","e72cc5218b95190c90781189eb846bda"]];
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
