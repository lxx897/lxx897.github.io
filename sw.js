/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","864c42836b12f631be697e34640b9188"],["/archives/2023/11/index.html","d25a59c8cc2ba3a74ae900bb7b49ab2b"],["/archives/2023/11/page/2/index.html","28d66d53eae19b4622bb9b72c8333213"],["/archives/2023/12/index.html","c1c5e4a47955c24226c491e46de72f4e"],["/archives/2023/index.html","88fdec78befd46eda17e7d7eab925cd8"],["/archives/2023/page/2/index.html","3daa61811c68e1af3f338ac723349435"],["/archives/2024/01/index.html","c33a9e248f1eb0aeaeba9e92e7645d0b"],["/archives/2024/07/index.html","2768a5d7290705b82d5ca4124a2a8dea"],["/archives/2024/index.html","c4c8208a8fdb82dbb4ca8802229e0785"],["/archives/index.html","dceaaf58d2f31a4edfbf9b4ffb3abb2d"],["/archives/page/2/index.html","c676cb3a953ce0ae3f85624a9b7be27f"],["/archives/page/3/index.html","371cddbb1b64705b3c509d209d163706"],["/cat/daily/index.html","820904f5fd1e81412d952270376dda5b"],["/cat/food/index.html","0bb05dae2aac1695d9c1fec71845c6dd"],["/cat/health/index.html","0aac4f103994d602511dd7acaaabf910"],["/cat/index.html","8c202c27a5c1246411aec7a02a11eee9"],["/cat/picture/index.html","426567dddbd34bb9724a10187be68f4e"],["/categories/Docker/index.html","e9aa6d34dac884ad17b313b117cf8c76"],["/categories/HuTool/index.html","247a23ffddbb6c9f496af26df731545d"],["/categories/Java-MySQL/index.html","63cce222ebad913a7d10b120fd0d35d7"],["/categories/Java-远程调用/index.html","2b03b8647e89121b2e5f5905133cf4be"],["/categories/Java/index.html","6f4d1fbca4ccc282be387637002708ee"],["/categories/Java配置/index.html","e2a40d56b2adc87a7061f8bbb882b99e"],["/categories/MYSQL/index.html","55de097fe34d75602e8ce9a80531f8fd"],["/categories/Page/index.html","c36281e48e611da082ee3d01f2a8967d"],["/categories/hexo配置/index.html","4bf42f369946f4aec239e54f7ae62ab6"],["/categories/index.html","2d082974c890576fc80f1a6c22a90c48"],["/categories/passWorld/index.html","57a4ead8b4f2857fa960c4c28855f155"],["/categories/实用工具/index.html","dd87d5157043e78297983002e1127701"],["/categories/工具/index.html","cb24fba91b40241f0b66ddd111e19fe5"],["/categories/工具类/index.html","4dbf434e71b78dc527ddb1279fdbed7c"],["/categories/时间/index.html","a22d1e972e4f22a3843a67b3b89331dc"],["/categories/视频/index.html","0fedf515294c5c8f7fa694019345862c"],["/categories/配置/index.html","09629cee109b1548935373087ac6e872"],["/categories/配置文件/index.html","13c89074e37b668b68152cb859589107"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","9c483837ed991a428ca60925e676bdc6"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","90acb40b18c9bf197995b213657602b2"],["/page/2/index.html","75f276c413d66380a4724bb47f90d810"],["/page/3/index.html","a47525c39cce03caea06e28335675679"],["/photos/appointment/2023/index.html","4bffb9fa1dcca466297fbec070dec560"],["/photos/appointment/2024/index.html","cc8f7606ba27524a13784ac5c03b298d"],["/photos/appointment/index.html","6a46cddcc9711ee640cea28f924e33cb"],["/photos/babyAndBabies/2023/index.html","5593f5fa49681682eb0c5127fc34cd18"],["/photos/babyAndBabies/2024/index.html","6de145e37098f58f38293ed0f628793d"],["/photos/babyAndBabies/index.html","d95a0724fd5599ebef3ab548eec31e60"],["/photos/game/dzpd/index.html","99f656870c504bc53da8d1086e16ac13"],["/photos/game/gy/index.html","1c3e9fea5f4d98250de4a4136e6d7bb0"],["/photos/game/index.html","b04640c1e1ff872f3e9866d105cf863f"],["/photos/game/steam/index.html","5b6b8a1115392acc81aab128ea5ae6ac"],["/photos/game/wzry/index.html","6658a0ec69bb76b799a5d4f9383197f0"],["/photos/index.html","79690bbe9488b7600845cc9c6e911af5"],["/photos/movie/2023/index.html","eb335e73e3abd2a93daf7c025ebb499a"],["/photos/movie/2024/index.html","2fd671e7e1325e09141094c0246b65ea"],["/photos/movie/index.html","b38570c3cd98eba18e7814f9613b5701"],["/photos/ohmygirl/2023/index.html","6b76c1ba21f5eada01dd37fe053139da"],["/photos/ohmygirl/2024/index.html","1d4692cd383a8740ccdfc5b8824f8b1d"],["/photos/ohmygirl/index.html","6abba8e7e06a4539ac537a8c80232605"],["/photos/outside/NanJing/index.html","ba35ef3b9e6a9c6154a1532f667a602e"],["/photos/outside/QingDao/index.html","465663aacc8626fb184274ee2e38959e"],["/photos/outside/ShaoXing/index.html","97a6d4dbac8c2e55de37bd0cb1d0be9f"],["/photos/outside/WuHan/index.html","82a77005e7bb9b5e994c5f673bf25290"],["/photos/outside/index.html","d037a9ac43b00c63814c605ebd6779cc"],["/posts/15940.html","d06a080e0b9ae029ef493f4eaf4abfcd"],["/posts/16888.html","a80ab63f92b6114e25312a88ba020a96"],["/posts/17303.html","78d0ca016913d7d768ddc8a8d0874e5e"],["/posts/18206.html","3482a1a09a9daa3ce7845fda1bc3fca9"],["/posts/21635.html","8b385db73e17b2f08e432252c31de8fa"],["/posts/22910.html","7bc20f3d708d070d880e2f52f46be231"],["/posts/26185.html","0db5542aa524d4360df218277c659e7b"],["/posts/27699.html","4d435188e522e16efc71c8515e1bc667"],["/posts/34134.html","91b89c3883a7f28ebc38b66711c66b54"],["/posts/38362.html","58b27914394a9c373841cf9b055940bb"],["/posts/4186.html","6b8cdb47474f33be80125b2406f1dd6c"],["/posts/42658.html","e2d73343a6d49b19bb84b5173e89229a"],["/posts/43618.html","f26d5b6dd458d83eddd039a19f1d20c7"],["/posts/47374.html","7ce6bc6070dfb194ccbee3d49e5e9b6e"],["/posts/48428.html","32887da3724cf39e844cffce7d3018e8"],["/posts/52307.html","647771a58d270a18fc8fb7887a0a25d2"],["/posts/52812.html","8baec72b52ab79765475ad672ddd3595"],["/posts/53486.html","c4e6df87ad3533c3f749e36cbb76167b"],["/posts/53714.html","6f1c1870c26b77785acda23a68a22444"],["/posts/57395.html","42ce079011e16d0cc078f69ed1f5cc8d"],["/posts/58565.html","948955a7704aa7e503f32df64c55de29"],["/posts/62255.html","088ba3b4957e209e0f9e5a9f0cb26957"],["/posts/62580.html","ca31698ab6119497a4ead89e2afc93cd"],["/posts/64032.html","473657de7aaae108b696611cc31f110b"],["/posts/64329.html","db39355271d08c358030dd3fc0f31448"],["/posts/9968.html","99c1b1475fb43396784eb7745a86f9c4"],["/record/completed/index.html","8f63c959ca28f529dabd109c7cfe35bc"],["/record/emphasize/index.html","cc9402a0a2d34f94fbbd590d568e2eb8"],["/record/index.html","2d982d52aaa40d5fec0ac355e52145d4"],["/record/period/index.html","cc74b77b7d43c459bf9926539a9f18b2"],["/sw-register.js","13dd420e9beabe44e5d522b96ea0bbb0"],["/tags/B站/index.html","5d091bb80fb7f12987360978838b1a36"],["/tags/JAVA-工作总结/index.html","343025f0a6173a451c9aa70069623e3a"],["/tags/Java-Docker/index.html","edf5d4836ed767017715d5e85814b0bb"],["/tags/Java-EasyExcel/index.html","09d71ce554c5f590d4ae60f45d444a6e"],["/tags/Java-MYSQL/index.html","c3637823c48cb9119072b0a0c266d405"],["/tags/Java-Page/index.html","2a0d3c6ab715c3e33081b1c944ad074b"],["/tags/Java-RestTemplate/index.html","4987498f94d102d164f70a6ad58d3a2d"],["/tags/Java-工具/index.html","b1bb6b073183dbe879d87b9c3f50c8e4"],["/tags/Java-常量/index.html","3df1f6a586279050ddacbde2961fc490"],["/tags/Java-校验/index.html","6ad3940676d1b0122ee66909359c35df"],["/tags/Java-配置/index.html","8fe958e642ff84a6db3236d812fe88be"],["/tags/SQL-便捷/index.html","d0f089a6fffa764090f215aa228f8ca9"],["/tags/index.html","12dd527296290257b0c06fb90f4749de"],["/tags/java/index.html","04057ec280940a393209c3258ca7417a"],["/tags/minio/index.html","a1117fc44b4295559d846fd1d650e447"],["/tags/定时任务/index.html","23008b71df5142e7779f72ffa4c79e3f"],["/tags/工具/index.html","542fc91c1217b8769b9934251231e32c"],["/tags/搜索/index.html","6d6983e29867a58407d4ff87716a1994"],["/tags/时间工具类/index.html","0b186866dd6b0192a68b7a6b9eda0ccc"],["/tags/虚拟机/index.html","dc6a3b4ff12e22944897a79b6207c8be"],["/tags/账号/index.html","3158d1cd2c97032955a591323d21f1eb"],["/tags/递归/index.html","fab99bcd658525671eb977efa0e8bb75"],["/tags/配置/index.html","39dbde78666df79ea17dd3405157bef0"],["/tags/阿里云/index.html","4aabec9ba7b7fe7d74788ab8c715f656"]];
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
