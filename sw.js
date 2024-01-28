/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7c4c262c35981e35192107345a33fed2"],["/about/index.html","5d71bee2827be4ead848661850b8a87a"],["/archives/2023/11/index.html","04bd631a0aec9a21b4a29052ac111d8b"],["/archives/2023/11/page/2/index.html","84eb8994d87e8fe8c2950db174e5f3cd"],["/archives/2023/12/index.html","b55ccb0484b0fef4b751586170eb8f28"],["/archives/2023/index.html","ce75a89f40b61719b472146d3649d894"],["/archives/2023/page/2/index.html","ff258c9c741d26865d2c82b1645b2f89"],["/archives/2024/01/index.html","243c30f8137cb47c22c4763d33195358"],["/archives/2024/index.html","bbdf57cd6928d9aff03ab08c5f2a2310"],["/archives/index.html","7abf4b91a62467c5a55797211666686b"],["/archives/page/2/index.html","5ea4a4980523dd99ae6c957f39796b57"],["/archives/page/3/index.html","27874396b2f0c40ced9691c865e4077e"],["/categories/Docker/index.html","ed8a82f2db7dbc71f64cb6c2efed2b2c"],["/categories/HuTool/index.html","7980fbca6bfde41e047817c26b14144d"],["/categories/Java-MySQL/index.html","8826f8f5b3de6af3fab4242922ddb14b"],["/categories/Java-远程调用/index.html","f5a5975757f28cf2828c5eb760510d83"],["/categories/Java/index.html","bd8ceaf2b851aa7af2e24d9cc3c8b63f"],["/categories/Java配置/index.html","5928cd8e2f99d564ed227fcd3183cf72"],["/categories/MYSQL/index.html","20ae4ae516f511d966aa91d1c1816457"],["/categories/hexo配置/index.html","661241d1939b908d0662a94905f49dd3"],["/categories/index.html","4e50b4368b70545d124b36a7963869b0"],["/categories/实用工具/index.html","3ec4d6655633a6e3a93d9e1da9fa22bb"],["/categories/工具/index.html","b583b62702e6a0a76cbedc99441748ce"],["/categories/工具类/index.html","3506931c1790ab2d868702e38da5a927"],["/categories/时间/index.html","7eced29824ae954369d76d0b885dbb67"],["/categories/视频/index.html","3cee078290a8faa6b1f2e7997e8a33ef"],["/categories/配置/index.html","0d70dfbadfc80d4f91bc62beddb7918b"],["/categories/配置文件/index.html","55808659ba809425c7c4f89a2e2d58b3"],["/completed/2024/index.html","3422b9c12039af3e85e85171c5182f3f"],["/completed/2025/index.html","064fdf2b0ea2369b31aa6677ddc7f896"],["/completed/index.html","b60ffc20b08cdb6a2832dd7aea2141e1"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","3e6ef4102b3f47a3531233a60fe133ac"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a4b3c45e2de02a1b5dfe3da388bdeb69"],["/page/2/index.html","8a7ebe373383ec887dff526e205805a4"],["/page/3/index.html","332dfa9367983a3b1b9490f2d77e2f1e"],["/photos/appointment/2023/index.html","2dde7dd4891c0965913458f20f37875d"],["/photos/appointment/2024/index.html","a9a5fefb8727a54e7b7a1c6407080af0"],["/photos/appointment/index.html","acb75d174befb124704099b59d76aca9"],["/photos/babyAndBabies/2023/index.html","c164684a5ed6fd01fefdedd9e0a6c7ee"],["/photos/babyAndBabies/2024/index.html","fca7e9dd323a8758f763205cabe443e3"],["/photos/babyAndBabies/index.html","005e6cd385be88de2990354cb63d5b83"],["/photos/game/dzpd/index.html","c53d508c444f736ff85590be4b1a4778"],["/photos/game/gy/index.html","b311846ac011d3db36d8a6bdd4be37d7"],["/photos/game/index.html","7bd12e1af0e9418211ca9f319994e9be"],["/photos/game/steam/index.html","6817b39e6f65344ba1a4d00ebe361718"],["/photos/game/wzry/index.html","9127692d4611eb7f35137361749e7cc7"],["/photos/index.html","d3b5be138d0c553b978de48c63ce11a0"],["/photos/movie/2023/index.html","1874e2f8b5a49df51c5ca82a382d0448"],["/photos/movie/2024/index.html","6dec492e08e7fd68d5730a5daa73d343"],["/photos/movie/index.html","a7b0202778d4337a1358829cc587a3f1"],["/photos/ohmygirl/2023/index.html","d84a11b4ea41b03beb4aaccb4281376a"],["/photos/ohmygirl/2024/index.html","73a0279da8f3bb8633db65d801dbb8d6"],["/photos/ohmygirl/index.html","bff4a38eebd8a09780866d6471666572"],["/photos/outside/NanJing/index.html","0616f2967dd2fa1b37bed59db07e7480"],["/photos/outside/QingDao/index.html","c86f3d3a35bea5e59c7be56f3d663e0f"],["/photos/outside/index.html","634352c882a1436a61476b05db774233"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","c4263960da2065d3f7fffc70cf85f755"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","0c223918eb741c51ae89134e758d74f8"],["/record/2024/index.html","1c1f7ec31414b4a8d1661133575863bb"],["/record/index.html","aa14900dd8c286077dc8f5e2250c0827"],["/sw-register.js","ad9623a3a1840ea8acebff471a158b4c"],["/tags/B站/index.html","99162f709b38ea0faf9fc4568578c351"],["/tags/JAVA-工作总结/index.html","31fbf04132ba6c47c458cdf4ec94e691"],["/tags/Java-Docker/index.html","35ba2e4e5e9fb9b163a0d45c02eda2d9"],["/tags/Java-EasyExcel/index.html","c4d47f01e0df7d8fed32849afc73cf80"],["/tags/Java-MYSQL/index.html","3e67b79c729d6e8b61331f0c0131203e"],["/tags/Java-RestTemplate/index.html","b7dac520e9972b76375bf6afd5360c12"],["/tags/Java-工具/index.html","fc2298cda82ea94ed7cfcf5bfdf946a0"],["/tags/Java-常量/index.html","bcaae0d6762e6ff0636b27338c71f58c"],["/tags/Java-校验/index.html","a6ac506d6679385e147868c12fdf20c8"],["/tags/Java-配置/index.html","2577039321115d84d424291661319590"],["/tags/SQL-便捷/index.html","f52689abfb18c65bab340539bf73505d"],["/tags/index.html","32540dbe2f70fe0a8b0a22eadff0e838"],["/tags/java/index.html","d04d359bc848c803676400ca43b71a43"],["/tags/minio/index.html","8fe47b503f1ab127ddaaf75a8db4663a"],["/tags/定时任务/index.html","eb0f6f6270ee5cb61425d2ff23eb25d7"],["/tags/工具/index.html","e8fc3dfeda708e134cd991398732d536"],["/tags/搜索/index.html","86027e55ee76f01fa65bb2793c2d1e22"],["/tags/时间工具类/index.html","162603c78302860c7f7bef2eb787ac0c"],["/tags/虚拟机/index.html","6c19dae0b08e4cd6f0fa11a41aac3630"],["/tags/递归/index.html","157c03db90117f832096ce0de46af009"],["/tags/配置/index.html","2c5e65851a803e1e178f00397051dc5f"],["/tags/阿里云/index.html","19cb9f1aa1cf6b9bc85ce524a8f39084"]];
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
