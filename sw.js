/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9e6980fc250fb1b8689d4be8587e5cf5"],["/about/index.html","3a080d79474a1604f32efc98b8346a37"],["/archives/2023/11/index.html","ef372b4b015ffd4ac25d81632fe0bc22"],["/archives/2023/11/page/2/index.html","e4cc52413bd6f48011a797dedba96617"],["/archives/2023/index.html","897ed30807fad286ad694cad52a1d7d5"],["/archives/2023/page/2/index.html","71f0355dac5725582b7c22538c0b680a"],["/archives/index.html","2359a741d9317471a6e5936e3435bd95"],["/archives/page/2/index.html","e534876a98e1ca76258cafa9dd89e2fb"],["/categories/Java/index.html","2f705e4aa7cd11cc372116709f7a02d0"],["/categories/hexo配置/index.html","5a3f3f8139acb1decd17871338e46520"],["/categories/index.html","582b0a84d211abd62659f6f46c334462"],["/categories/实用工具/index.html","63074d5acf0bad9f49e9753f8077991b"],["/categories/工具/index.html","2e57c101d0cc784c8a0b608203846c2d"],["/categories/测试模块/index.html","41f284edaf8d848d795c882e15aa2009"],["/categories/视频/index.html","5e3157374e844a76f6ef184babd165a1"],["/categories/配置/index.html","4d3664125dfa69373e989e7dc25cc6c4"],["/categories/配置文件/index.html","ce589919779ea41ba33eee0ef8bd5040"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","fd1174382a7db04ef2ca2e6c60b0170f"],["/index.html","af7f6c22fe5f26b1fe031822b08133a8"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","e621d2ddd8c031ad0049575d3dcdc388"],["/page/2/index.html","f49bf888c8330e40bc951ded13a14f52"],["/photos/appointment/index.html","f23114a2461c90c9735637d7282d6ef1"],["/photos/game/index.html","05e6a1f59b68b9707e0f114bc056fb50"],["/photos/index.html","4e152a062e0a73a551887bc0af681a28"],["/photos/ohmygirl/index.html","e722f04e73b18757288fdf6470e5d3a1"],["/posts/16107.html","2b7a12b9d08152a9859e41861bfd32ef"],["/posts/16888.html","7726e3f3b062cf5779d1a72fc645c347"],["/posts/18206.html","ceedeff2f5e5ed7e800ecb51e4702c96"],["/posts/21635.html","6eeb2b30f08285af4edee05d98804849"],["/posts/22910.html","ce8d324d35bdcdc0938ff139819342af"],["/posts/34134.html","1a77b1fc94c65d73208e66579a662e58"],["/posts/37773.html","df629cd92fc96653e72506bcd554e263"],["/posts/38362.html","3803044804187be9b10c46a5af963612"],["/posts/47374.html","7b9b7765feda22b9b56f219dbd94c8da"],["/posts/52812.html","f3f73cbfa11961756d4ff758327a2fae"],["/posts/53714.html","3517f9f8b6274fb65766b5b983f4c7e7"],["/posts/58565.html","df98c351565ab55e7783dfaa65914e6a"],["/sw-register.js","858f869a2b4076765fcd2409bce5b0a3"],["/tags/B站/index.html","e7eead38e260e21eeccaeac81031f692"],["/tags/SQL-便捷/index.html","8cc66336d64102051e035a3cbb2a7601"],["/tags/index.html","785f908bbbefbf32d26941eac70bfcaf"],["/tags/java/index.html","7c23c22e686583e64ab76575b8a4656c"],["/tags/minio/index.html","6902119eb61d58132b42dc173b5e5770"],["/tags/定时任务/index.html","b8df27a7d5e923dc173b6fdc9a9874c8"],["/tags/工具/index.html","edb2f86867249a8316b6c26a46b6da23"],["/tags/搜索/index.html","512d4b97d50f3c2a37c4aac774b0a500"],["/tags/时间工具类/index.html","2aa0886095441ab1235f1ad2e8b21e4b"],["/tags/测试/index.html","dc4c56108c228ddb7a95ea601cbfc14d"],["/tags/虚拟机/index.html","a20e18898d654655f80d14b5df8674e4"],["/tags/递归/index.html","3644c4f758cb2b90addbdf304c98d508"],["/tags/配置/index.html","a1a9fad11f52b3ebe186d43ea33d9729"],["/tags/阿里云/index.html","437c284fde323ff63cc080c2d3fe1e80"]];
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
