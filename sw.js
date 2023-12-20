/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","191fcf459bc6ee90244a9bd307c1d894"],["/about/index.html","e8f9e39c3934e995d327010cc7db2e66"],["/archives/2023/11/index.html","6f7f2221d98b79e9459ce461dcc96f6f"],["/archives/2023/11/page/2/index.html","978ae4cbbd46334d84111e30fb61aebf"],["/archives/2023/12/index.html","534a7dad8bce518febf29599dff701d1"],["/archives/2023/index.html","7e51de9022bba434c9c3898ded333781"],["/archives/2023/page/2/index.html","d04d6758047a6e5c7439f5de0b2833f7"],["/archives/index.html","1085501580b2f9ae4fc6b8036ae7b9a1"],["/archives/page/2/index.html","e66be5f633d88296de3955e406c856eb"],["/categories/HuTool/index.html","1576583a4e24d13798567c2605b7abb0"],["/categories/Java/index.html","e06e884933ff6f3ce1d6237be4dea0d3"],["/categories/Java配置/index.html","a7f154c50f0a26996bdbaf6907b8e293"],["/categories/hexo配置/index.html","f3cf68f81521b296dd40f018dcf612a6"],["/categories/index.html","0c5b18d8d1ce93f3cf9265cb5f52b0f0"],["/categories/实用工具/index.html","cecc0ba5ae7c45a4f197f1624b498234"],["/categories/工具/index.html","b838c4e9d5ca37e93b02fd2a18521f40"],["/categories/时间/index.html","92d3e6a45f4001e65f109892dbf59eec"],["/categories/视频/index.html","1c8531efccba34fb777c5a12fb44954a"],["/categories/配置/index.html","ff7bd9d6a5fffbb313820dee108fb1e5"],["/categories/配置文件/index.html","49abcb10e60171ce59d63a0a11807efc"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","4bc105d936cc902fe45b79aa76fce0af"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","02e7ceb6a7a6c0664c2b94eb36e9d9d0"],["/page/2/index.html","6d60437f841c53c3411dcec7471524c8"],["/photos/appointment/index.html","cb74a037152b73fe85305a224eeb4758"],["/photos/babyAndBabies/index.html","40d65d90ab327103078f8b1d93b90095"],["/photos/game/index.html","14b32a1ea43ef4877733f9e0c6507fe4"],["/photos/index.html","0ff9a9d747981bbb97239896f2859cee"],["/photos/movie/index.html","0b9ddd9914e07b263a7c95b6d6bac3a2"],["/photos/ohmygirl/index.html","3641728a0e2ca0c540482dcdaa8ca1d9"],["/photos/outside/index.html","951510958b690974e74934f6e237f46e"],["/posts/16888.html","d2bf770507adcd46c82170eeafb44641"],["/posts/18206.html","01efd7b1c8530e5c77eb116bbf54069f"],["/posts/21635.html","e6c9111b05a39f0bf1be3484808e6eaf"],["/posts/22910.html","8994e0869a1bd36808117b7d2ecfa24e"],["/posts/27699.html","49c71245880dfee2c94f434a9e82f1b4"],["/posts/34134.html","a2488f3fe7c559095bd10ce10a8dc460"],["/posts/38362.html","49d44932c7c75c576a4d8162891dd8e5"],["/posts/4186.html","ee0e342e9d9576a84d18d37e86952693"],["/posts/47374.html","830f7c72d0c4a7ea8ba0c93c03b4de97"],["/posts/52307.html","aad16d5854ac55ac961251d722e8b81e"],["/posts/52812.html","949e46456d99f48515852f310bf79fd0"],["/posts/53486.html","266aeb9ea1db6cff162f42380b6f83a1"],["/posts/53714.html","5529af65cd05892dbbd573acfd121716"],["/posts/58565.html","87a129450646b7961875ca253b74818c"],["/posts/64329.html","01b77e77366a3a3143f52ac120d1fc6a"],["/posts/9968.html","04003d1d2d1336c364eb1e28f0eac092"],["/record/index.html","b621a09937a51fcb1465795db184aaad"],["/record/photos/appointment/index.html","fa02bbabc1c4ed1b74683c8d1e17fbe6"],["/record/photos/babyAndBabies/index.html","7650caaa7bb92365957c7b6b6a038495"],["/record/photos/game/index.html","c0be68517616c3adef6370afc5ab742b"],["/record/photos/index.html","28850cd574b5a1adee65ca02b30c6f9b"],["/record/photos/movie/index.html","4ce0cd4a21aeca56c3cdd35746273ee9"],["/record/photos/ohmygirl/index.html","7db76628dfd45c3ab970c3f6c0cca727"],["/record/photos/outside/index.html","e5896d6d9ba4fe74f1c66e34545acce7"],["/sw-register.js","8b14201ac82ffcaca5db7141ab6f154e"],["/tags/B站/index.html","51b4b896d725657c7bc58fb4d0856a0e"],["/tags/JAVA-工作总结/index.html","1e6aa9205712833f7b4ec2594ac52baf"],["/tags/Java-MYSQL/index.html","3917c985141bfba74b7fc99f2fb9ab95"],["/tags/Java-工具/index.html","09071350f53f2e744c62d075203a0a9c"],["/tags/Java-配置/index.html","564cbf6ad878bd565743827392b2b9c9"],["/tags/SQL-便捷/index.html","31e709c15932eef30bec878c541e207a"],["/tags/index.html","3c4689771cb5bcaa8e348d850ac63b58"],["/tags/java/index.html","d0e3fa2755b15cd0ddbc4872fa670872"],["/tags/minio/index.html","69c7ac0efe675a65f029db6b3787832a"],["/tags/定时任务/index.html","0550ad9cd9b2e5e07291ae4950d55545"],["/tags/工具/index.html","ffbd21c1cad2e05ad6dca317e0a4db80"],["/tags/搜索/index.html","9ec4004498ba551a775039358a445b1e"],["/tags/时间工具类/index.html","ac230dd9883590cf74d2f083f10d0e0b"],["/tags/虚拟机/index.html","8c3be007a3e6be9157bbcba13519abaf"],["/tags/递归/index.html","e88bab058d15ace060470dd323112621"],["/tags/配置/index.html","7c50d2d472691370ba7469d9ac689514"],["/tags/阿里云/index.html","12e2d421b954f9c1dbbf941a6df8788e"]];
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
