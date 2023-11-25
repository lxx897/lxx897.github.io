/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","79c58784a697b3af2dff570eb279dbc4"],["/archives/2023/11/index.html","ce7ce03701041f84cd475145bdba9c96"],["/archives/2023/11/page/2/index.html","0784a07643a8c652f23bd7b62e111d7c"],["/archives/2023/index.html","f03a147943b504aa0f3cc44437cf38f1"],["/archives/2023/page/2/index.html","b7d5bb73b0b5bc978b9952e723cd6c43"],["/archives/index.html","5b9d853eeb470d5ac1245d58ae747681"],["/archives/page/2/index.html","8eb9cedb77999103d6c0f7c37343e851"],["/bangumis/index.html","84eb3662a51d610ddb1e332e94014b99"],["/categories/Java/index.html","5e1a063662c3f7f109e95e14952e3b04"],["/categories/Java配置/index.html","0154ffd2e0338c0f5a2800b92983c3bb"],["/categories/hexo配置/index.html","a2eeec4134e245fb781755f097804b78"],["/categories/index.html","061c1eb5f6a60ff6f06788e0f5000c1e"],["/categories/实用工具/index.html","c9cedff7cf695128662ae5ca6e4b6690"],["/categories/工具/index.html","3bf026be3d3279004f2ca757ed6ccd82"],["/categories/视频/index.html","3692a078a0ef39e9694ac03f69f6809d"],["/categories/配置/index.html","33210e7d152c7692fa0b8b28eb296c81"],["/categories/配置文件/index.html","ed5ee39a76520329bec27accd7890472"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","32fe7cdc748f19310b2296049fac724b"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","48c3016f3146d5127621f310bb994f36"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","dc92e83aa71a4ab4217f26eb1e7a98f6"],["/page/2/index.html","b6a9c51bd7d6decc1d3afa41d17cbfe8"],["/photos/appointment/index.html","a7695bfac40eab555827feb71af9bcf3"],["/photos/babyAndBabies/index.html","45fee02f1ac87a57d238d1a7a8a0f786"],["/photos/game/index.html","5a72e4ca99c808f41491be80c146aea2"],["/photos/index.html","4c266585107dcd26f9bbd2c9e171ef6a"],["/photos/movie/index.html","8d7c3b0cfd10078d5c9b7ed0cbe96607"],["/photos/ohmygirl/index.html","2a387de13a3ca2e82aa8b31ee017e1c6"],["/photos/outside/index.html","29840a24a81c170d3035629cb0c2fdb7"],["/posts/16107.html","ae08a348fd94220f506e595bea7fccf2"],["/posts/16888.html","75f6919b26aa1700e275aeb0c202f20f"],["/posts/18206.html","7ffd83d4364d395c111b526f34783ccc"],["/posts/21635.html","929071f7fe7b1cd62f3ea28b887a4094"],["/posts/22910.html","b51e2e0d38994e5bba306f08be284f0d"],["/posts/34134.html","d182bdba7ef30fff12430aea7f42da8b"],["/posts/38362.html","18d290ced72c200f9261594034b664e0"],["/posts/47374.html","47e4f751d8dfb6822d0a45901d4a1725"],["/posts/52307.html","f5d73c86df20d29db277efd5393a8fb7"],["/posts/52812.html","162f5de8d41b0563dc265cbcf8bf835e"],["/posts/53714.html","83c96ef35d9736f3d1e2de4e5f2d3b95"],["/posts/58565.html","dcfbd7545c87ca67252c04fe46537566"],["/sw-register.js","dea8b37c8f42bef72a0934a1933861a2"],["/tags/B站/index.html","dc556ecafe5e103435e4731b9c2cfa3c"],["/tags/Java-配置/index.html","b53df02f94245d43febd5202c6d45675"],["/tags/SQL-便捷/index.html","812bede26f62b004eb426de3e88ad52b"],["/tags/index.html","fe7dba6b270bb55fe9c2ab58228a8b04"],["/tags/java/index.html","41c23fb3836dffb2b7ae2b0ec86696f4"],["/tags/minio/index.html","c764c6163451f5b0864e4346043eecac"],["/tags/定时任务/index.html","bbb383ded7dcce7f1b60ebc373487e38"],["/tags/工具/index.html","bbf538305adefb8e7d7354962dc4c2c4"],["/tags/搜索/index.html","9ecc9a9539c71760f1b1585bf8bc28ca"],["/tags/时间工具类/index.html","968690650a6154aadb38913493f8dda3"],["/tags/虚拟机/index.html","6be1bc6ee7fda780d439ee7fd0590769"],["/tags/递归/index.html","fe0c1c5fc8935afbf17c56285e050b33"],["/tags/配置/index.html","7f8cb7d21157c0f2db8a5ae85412a777"],["/tags/阿里云/index.html","d15479058ec246f4bf6f67e27a91ee04"]];
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
