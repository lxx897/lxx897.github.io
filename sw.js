/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9712da6a0cd0577e9119666a139f6e45"],["/about/index.html","49e2800fb00e010e1c860ca10eb940d0"],["/archives/2023/11/index.html","3c693b955d885c5b15f9ff9ae21ef460"],["/archives/2023/11/page/2/index.html","f285f5ed1a88111039a85d8a83871eb1"],["/archives/2023/index.html","d3e8f1525bf540c2a0e3cf8ea7052dbc"],["/archives/2023/page/2/index.html","500a07b97e04561fd37263de7a23555c"],["/archives/index.html","804a90e615997b59494a905578d1c611"],["/archives/page/2/index.html","ff34c7bfb7f285017b8c503d929a8f7f"],["/categories/Java/index.html","a9bc3827dc1eef8b71426d88d80905b7"],["/categories/Java配置/index.html","c4f4a3351ba6a6b84a1216c729faee95"],["/categories/hexo配置/index.html","4af2eb5543152774a589e47a00982a98"],["/categories/index.html","4269bfe56e2ff50a9fb827b033b71aba"],["/categories/实用工具/index.html","be08c7436fa52ac558f1fbacb1ae8acc"],["/categories/工具/index.html","139e07730f2a624cb17985156bfa9e0a"],["/categories/视频/index.html","2a0cd620958960159a6a7ed0c30c05a2"],["/categories/配置/index.html","c3fdd6d863e3a3c27b81903989e91eec"],["/categories/配置文件/index.html","70a44e1b2ae84bf9a969b461b9c61ce4"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","df26bb00f998a00882935c4f1433e154"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3af1e9b3c12fd9b59495110cb81129e9"],["/page/2/index.html","02f72b2c009dc305fc280639fc5fd876"],["/photos/appointment/index.html","647936155459f677879f0f90b2ae4700"],["/photos/babyAndBabies/index.html","6d3a063bc6d54b9b843ecc4535ac8089"],["/photos/game/index.html","a87a8d1375371d0825eacf17f0f95144"],["/photos/index.html","81a980e2ac02a812fa3b91d8a75ad42f"],["/photos/movie/index.html","91da94894fbb63dc91e8c13221051a0b"],["/photos/ohmygirl/index.html","b830a6f9b6d2578cbc34244573b2ff1f"],["/photos/outside/index.html","96de3dc4d023cb9551e47e1af9c63be8"],["/posts/16888.html","086a805840120b75bfc2e231d9a1cf52"],["/posts/18206.html","bb8acd9e78045d0f4e4141022fabc7bc"],["/posts/21635.html","53c56f35ffb06009b18c0adac49920a8"],["/posts/22910.html","5839782c2c0a1893fd3d2b560f2a21e9"],["/posts/34134.html","3122ee50271286864b5ac68387e54823"],["/posts/38362.html","5d4fbc4503bf58eb1dd1b1cac664cdcf"],["/posts/47374.html","d65409654265478bddf0b7e3e757fe9e"],["/posts/52307.html","6807329b0a930bffe494c1d22a11a238"],["/posts/52812.html","914ae6ff3d0544f89db020f37a85d72c"],["/posts/53714.html","5dda90c7d88ca6aa9a023cf2dbacf2aa"],["/posts/58565.html","4c78548761ec19d9a1c2132ca7bf7bb4"],["/sw-register.js","74ff17b7a55d0d7dba26a9826f8b0676"],["/tags/B站/index.html","4bbc7bb4c480f4c3d34c1eecf69b7f84"],["/tags/Java-配置/index.html","9a43d12e9661ab335e6c00101fec3796"],["/tags/Java/index.html","a6ab934856bd409381639b3c31338af8"],["/tags/SQL-便捷/index.html","6c2a63cd0c2d269111cb0974773654fc"],["/tags/index.html","416074cb83ca69999afca3cd4acce62c"],["/tags/minio/index.html","635023b8c77b4c92a79ce6b8f443bb91"],["/tags/定时任务/index.html","e31e13763d18ef73f13ac82c85b61cee"],["/tags/工具/index.html","4055a6047f5b28302c925ad24c7d605b"],["/tags/搜索/index.html","a6f575d69501681320734f229562806b"],["/tags/时间工具类/index.html","c18f06e5af40adf99c44034ab6c671b3"],["/tags/虚拟机/index.html","0648d76e3e39cf9c5a90db098112149e"],["/tags/递归/index.html","d6603472850fc14d6bfce19b52a63449"],["/tags/配置/index.html","74f6a3f4709e95eb489d239ac69452f6"],["/tags/阿里云/index.html","17b44bf816c82f7f162d20969e9cb81b"]];
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
