/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8bcfd86e6fc3a0c807bc5d8c6314a21d"],["/about/index.html","31c9921a28f5afdb95e4b3e2d59859c4"],["/archives/2023/11/index.html","f05a8f9e4b3477b8deb620cfee3c2c5e"],["/archives/2023/11/page/2/index.html","431fe0f86ba2f0834136a8653fddb276"],["/archives/2023/index.html","259b50a06fa9ba9b485f51778fb60cee"],["/archives/2023/page/2/index.html","d8d458e87499230f4dd1f40d01bd4c24"],["/archives/index.html","91c75b7222a05319199dc9a41c54d11b"],["/archives/page/2/index.html","fe7dcb4d46f9569994f152ea398570f1"],["/categories/Java/index.html","d624b0998056fc5e2b3dda7af00ebdcd"],["/categories/Java配置/index.html","b9624c5c370d33ffa8e1977d16db35a8"],["/categories/hexo配置/index.html","ac6808f92fbac1ea26dbd94d08e0b859"],["/categories/index.html","5f1ad2898946e9df66442603cc841506"],["/categories/实用工具/index.html","394f2b8a059442ba95c3bcdc29ddc266"],["/categories/工具/index.html","55b2fe4815e5f00174d244cf42a1e5a1"],["/categories/视频/index.html","0b2f040a5e9bf45b3a7578f8803066e9"],["/categories/配置/index.html","ed2701e60ec911d0ad0060f40566f519"],["/categories/配置文件/index.html","120476cf4f7d58f3b063cd0d3b108dbc"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","a871064536e045ce2aba53a8ceaa3310"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","3e86684717a4b90e0efc6e31235f8d0a"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","e1968214ba845b73957120d590aa3d59"],["/page/2/index.html","6b4b11df6e8aec38443122bd0fda6e7a"],["/photos/appointment/index.html","3cb08829013b9051329f66ee207a03b3"],["/photos/babyAndBabies/index.html","9709da114f2ce3b26db2331fdac612c8"],["/photos/game/index.html","6800a92dfb96cfebb4f177f56752a4fa"],["/photos/index.html","5058b35bc8e262647a901c406859af6f"],["/photos/movie/index.html","2ace0d2b9675fee745fc19b36146e584"],["/photos/ohmygirl/index.html","9c1b0d26ca8c5eb0e776d2d6b78adda1"],["/photos/outside/index.html","a28bd6010137b1ddc3d2686c632e72e9"],["/posts/16888.html","75f5ca40373e816d9440d278d7dd170c"],["/posts/18206.html","3277f8fe7451d691f704fa24b3fffd9b"],["/posts/21635.html","25347a84868c2a51daed4a2f7de021ae"],["/posts/22910.html","35a1ff00d27954bee865553e5b87dcb9"],["/posts/34134.html","e62167543d285757b7949790ba8cc45d"],["/posts/38362.html","f71d893fc170937e4656db70b3b5ae38"],["/posts/47374.html","010bf49371e255999d24a34490dfa166"],["/posts/52307.html","78b2c50fe109bbdb96d0501dc6a12bec"],["/posts/52812.html","b5f8629f0c91ba6b287e19b6a366e243"],["/posts/53714.html","a44b34021ce3cd9a5ce7dc345dda633b"],["/posts/58565.html","bdba6144d53fcb7b96c1c4af4cb60df0"],["/sw-register.js","769971642783e78ae6b4c9bffadba57c"],["/tags/B站/index.html","8b3552989bd1eae530a781f9b8c659c7"],["/tags/Java-配置/index.html","507cbc0abcfe5bb4c0ddb6d9fcab4d4d"],["/tags/SQL-便捷/index.html","495adece7e9687f241b34f67bb1851a9"],["/tags/index.html","956c2959a37af391aff4f1787ef5b6cf"],["/tags/java/index.html","4e00edab710d2bfb891fe33a7e8c8eb2"],["/tags/minio/index.html","4945bae96f8a2215e9c2bba273e8e94c"],["/tags/定时任务/index.html","4d4069d265704bfbfef13f976d6fd4e3"],["/tags/工具/index.html","e2dc4b253b69d54f00270bb4b588abb7"],["/tags/搜索/index.html","287c81e67264049bac8482ef2495c531"],["/tags/时间工具类/index.html","88c38b7986afe2bfbdd6a2ed08c42bc3"],["/tags/虚拟机/index.html","d3dabd48dce0d14499acf06627df0beb"],["/tags/递归/index.html","7749e576b0e8493e3f4c306c5787dc28"],["/tags/配置/index.html","9da3be9bd87cceb28bbbe6e8c9101b19"],["/tags/阿里云/index.html","8ed8ddca3dac0af9653e0923b7175853"]];
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
