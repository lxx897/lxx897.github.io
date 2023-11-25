/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ff9b2e79e9f22d1a946312986c4bcceb"],["/about/index.html","808dae0f189ee7f6c58d034af2dcead2"],["/archives/2023/11/index.html","a999fbdfdd71258586e6a922b6819c61"],["/archives/2023/11/page/2/index.html","cf16e007dc04028b4dc2b4bffc716ee3"],["/archives/2023/index.html","eeb959d7b9363c23983d628c8873f5cf"],["/archives/2023/page/2/index.html","0f82794f78a1d2dad312f357e572e73a"],["/archives/index.html","7232b56e5d3f57059df6f2c97cd1651f"],["/archives/page/2/index.html","60b231a9e0113d45756d8b83cb9fdf6b"],["/bangumis/index.html","c40905589e32ce2c32fb63f91b50404f"],["/categories/Java/index.html","9f567ef11784b8bb53089aa7885c7432"],["/categories/Java配置/index.html","b380fa1c2a7e7a898616d5f6f1668c9e"],["/categories/hexo配置/index.html","f66299d7b0d2b8648902082c2fe7285f"],["/categories/index.html","dfa62aab2fed2ed48392cae1667e52ab"],["/categories/实用工具/index.html","1ca60c8d436b74e4af136a9858fefb1d"],["/categories/工具/index.html","a5e0494d8cf6e089643ec6e66b92efcf"],["/categories/视频/index.html","950b435536cc5be3668a1821551518e3"],["/categories/配置/index.html","b88e375d8bbb420bf3ba7b799b95dcab"],["/categories/配置文件/index.html","c84e70a55118bba2e20d0ca0efeda9ef"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","9e253ff28535e8c4caeac1b23621ae7f"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","d7ea6eb0411e2a2903763b16596ede89"],["/page/2/index.html","6756af535bb0b5260deb72dc545821f9"],["/photos/appointment/index.html","208fec454612cab4b4c9f432d24830dd"],["/photos/babyAndBabies/index.html","7da87b450aa80143c908604a4e78c0b5"],["/photos/game/index.html","88c3f3665b3632d857d343610c765ec6"],["/photos/index.html","c0d5ede92c83880938f25847cdb45897"],["/photos/movie/index.html","690afc067a66c0e74206508c616fa643"],["/photos/ohmygirl/index.html","7bbbd12c316f954af6f177bac13138ef"],["/photos/outside/index.html","b14eaa6ba60428457ed63ddcfdc10830"],["/posts/16107.html","1195ef181f5f2cd8bc17edc4928759f2"],["/posts/16888.html","45664ffb551d553fa7502e7077d41f80"],["/posts/18206.html","37ce436d6051d82f1b7bda74837515ac"],["/posts/21635.html","1174967ec2748f27dff6624a5e74061c"],["/posts/22910.html","c94f3bab6efbce2c4d217eea414e4669"],["/posts/34134.html","6ae2b030883ca9eaf495972bed4360ab"],["/posts/38362.html","16a07e532eea5c795779254871e7937c"],["/posts/47374.html","180069564f15145992994eeeadbdb875"],["/posts/52307.html","4738c7ee3047fdba78dccdcf6b0f3400"],["/posts/52812.html","d5ea4a7c342e3ee75cdc8b48b37b1e8b"],["/posts/53714.html","78647d20d8c74a15234d927514d72417"],["/posts/58565.html","8faf4ace33ed963fa02e6107c19f8437"],["/sw-register.js","dd0ddfb0187991e04650095e87c6e3d9"],["/tags/B站/index.html","394e09d3776d6bcf3736374d52111342"],["/tags/Java-配置/index.html","d1fde043b43b4e77893dba95297c4bba"],["/tags/Java/index.html","33fc5fd1e5a0e0f08877852be684b50b"],["/tags/SQL-便捷/index.html","8e057dac22444a6aad39ae49d534e750"],["/tags/index.html","1b8bd434146e3abed58df864891a8a07"],["/tags/minio/index.html","ddc9b67ba19e04a7ae034a5afc47cde8"],["/tags/定时任务/index.html","be6ac88cff2b5adcb672caf9c5ca5087"],["/tags/工具/index.html","d4db5be7b5a96b3109653312cdcfb68c"],["/tags/搜索/index.html","ef96bbb981facaba7ba80164e63d2579"],["/tags/时间工具类/index.html","bba2be7787ec1f6c662bd3ab494865ca"],["/tags/虚拟机/index.html","28a1b3c31d269d9da11f4801d6eb80f7"],["/tags/递归/index.html","8bbbbb208ff8e78c304f23210b54c322"],["/tags/配置/index.html","7b3cd482db36cfa37ca44effb840aaca"],["/tags/阿里云/index.html","e94641a56fc41e0bf12a941e1a4ba2d7"]];
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
