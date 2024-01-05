/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cb1a3b486246bdea62dab52dee46f6b9"],["/about/index.html","634e0146fcaaf376444acf217d949dd9"],["/archives/2023/11/index.html","56c02b246f54dd6f8497adf365a6fa2e"],["/archives/2023/11/page/2/index.html","e9fc6133dbb94a10f164fab5c552f2f3"],["/archives/2023/12/index.html","415dd9f3e922ce608303dd826321d382"],["/archives/2023/index.html","d3c5a6ade6e8e602d837aebf8411738c"],["/archives/2023/page/2/index.html","b540456854ae46c04408ce3760fa7736"],["/archives/2024/01/index.html","945ccf80588b7ba09381008fd9a5f478"],["/archives/2024/index.html","67bb4837dea293f3a0d25ddcf08c223a"],["/archives/index.html","09666c98b9252e18b4e91db4241026ad"],["/archives/page/2/index.html","60cf76c90f370bad6981baa9e003459b"],["/categories/Docker/index.html","410b4047d86457f10a09e3301aa8136b"],["/categories/HuTool/index.html","cbebd854e6c6cc4215c6926bfc7456c6"],["/categories/Java-MySQL/index.html","70df3a684f715ea60c6b1cb36d8f2563"],["/categories/Java/index.html","484fe743a641bfec8092bcebc76b99c0"],["/categories/Java配置/index.html","17318a15539024632d3c795f4991fe9a"],["/categories/hexo配置/index.html","5df8daa8292b1a44a68594b8b4d99955"],["/categories/index.html","a31a2b2e2ae337b24fb2df49b4449d71"],["/categories/实用工具/index.html","41b7de1066f77b8d7c03a9aa8a97ed43"],["/categories/工具/index.html","e3018a2f276ebd7972cb501bdda36494"],["/categories/时间/index.html","5f60f16d5bc2750af4103b337f71f115"],["/categories/视频/index.html","b8d135a06db93e0587bd00f82ea8d42d"],["/categories/配置/index.html","66d6a4038858f545f633ee5c586e7d2e"],["/categories/配置文件/index.html","aa6b671d07bca5355308b471047be1ac"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","4f3f689d02a3c9b422e0da55f848b41a"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","5e79c4fd3a6b8c4e19895a761b3662c7"],["/page/2/index.html","bfc88471a50d88e19d390c109ffcbcef"],["/photos/appointment/index.html","4c24b3aede174366ab1a4d1dde4df2b1"],["/photos/babyAndBabies/index.html","14017d16c5162a06ee7de091d404b10b"],["/photos/game/index.html","1ce95ec9a1424f47dd64c95a1ab96e77"],["/photos/index.html","c28b6f24ffdc4099271c0c0b4af3f9f8"],["/photos/movie/index.html","c72dab1f980e68945f15a0465abfcfad"],["/photos/ohmygirl/index.html","260cc132aeadf7364d6f4f434ad21f8a"],["/photos/outside/index.html","62f891b7608e9d2156e4be54a71472c2"],["/posts/16888.html","4806294c0ccbbee0f14cc7c3ea5ce02f"],["/posts/18206.html","8f4d57a8c4a54045bbaa7656b6c20afe"],["/posts/21635.html","12a8649031cf63ba16d7c2bdc10800da"],["/posts/22910.html","6acce2acba2977ed8a45188ce4661537"],["/posts/26185.html","0df713d026cc1727fba097993bbae116"],["/posts/27699.html","2033a76a2566f0c95a18ca61a41464d7"],["/posts/34134.html","2958dbe4e76e499f749ae6c731968778"],["/posts/38362.html","232dcc0a025d1679cf223d3ef015d1ec"],["/posts/4186.html","8205b4b74e6cf36b821ebccaf358dc45"],["/posts/42658.html","bd2830e94b50383f09d53db6507954f0"],["/posts/47374.html","34911512a928854f9b4f1ee0213aa337"],["/posts/52307.html","857fddaa8c1bcbd6e223c51e6ceb55fd"],["/posts/52812.html","484a2b1dfdbad4a07eb931e8e130c7d3"],["/posts/53486.html","e877e88a573a5fe42992f7e824595fcb"],["/posts/53714.html","e7087e1ebc84204cb12c684dd2f6c7fb"],["/posts/57395.html","58fd62468f3f7a8baeacf7dcff6a014d"],["/posts/58565.html","44acb3c0f4535d918f423c786f4619db"],["/posts/62580.html","66ab742da05827fd51eddc3565949e51"],["/posts/64329.html","9e2f6bf9fe4f7d6aed93797d73bc7829"],["/posts/9968.html","1eabd2856634c38267defae650ef199c"],["/record/index.html","93d4ff58a75db2faa027a514d758385a"],["/sw-register.js","a26b38000841d676d4d73de3195b2e0f"],["/tags/B站/index.html","a58ed7929b7b6e8ecc757236d89245bb"],["/tags/JAVA-工作总结/index.html","8aa82feee015f1e8d9b4b9e723a8d6cc"],["/tags/Java-Docker/index.html","d430ad06b4ef742c382ea6c1b5440d26"],["/tags/Java-EasyExcel/index.html","acffe4f61538d119bed1bb9a548ed2c9"],["/tags/Java-MYSQL/index.html","b01857a650aed7ccf9c5d09662aae0b6"],["/tags/Java-工具/index.html","eb004e0c77a539fafb710d1168a9aa08"],["/tags/Java-常量/index.html","797ee0b25eb6f502c30302abd60686b5"],["/tags/Java-配置/index.html","4334532d78c1a06d7caaac0e17b1f178"],["/tags/SQL-便捷/index.html","9722ecccdfd3b510becaea31e8ec1697"],["/tags/index.html","efbfb9ed6e47cbcb7bdb4886a157ff67"],["/tags/java/index.html","068bcb6b5a5b9c01a00c15b23e84feb7"],["/tags/minio/index.html","1d9f80604cbf676503fda3f8b574bf5c"],["/tags/定时任务/index.html","3f8b06b1353a819ffc2ef0ead60b8e14"],["/tags/工具/index.html","a2121f8c3f4044d57eca10e0df0be348"],["/tags/搜索/index.html","6bfe46e5f5c67a82e1ccfbfd12206f73"],["/tags/时间工具类/index.html","fc0d801bd416e3465f85c8c0fc4b4364"],["/tags/虚拟机/index.html","e8f370692aebb7814e9ff6eaf128af85"],["/tags/递归/index.html","a477c46c37ce39046990f41bf382d77b"],["/tags/配置/index.html","5cfb67fa255c3ca4074059441fefaf57"],["/tags/阿里云/index.html","039aaf6467410c6ece9991a7ac64fe52"]];
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
