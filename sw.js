/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5aa8c1abc575952c84f980571273b133"],["/archives/2023/11/index.html","3bdbaa9664eb2f848b99e804d003b684"],["/archives/2023/11/page/2/index.html","be22f75f4dcb1aba888b8fc65079a047"],["/archives/2023/12/index.html","495808632ee83c6c7dc75358b90197ed"],["/archives/2023/index.html","3bad227e895d66da21a8c242264b2003"],["/archives/2023/page/2/index.html","11717794ce440b7f1abf535c2f5fde2a"],["/archives/2024/01/index.html","ea78f0c4e3c12a1e852e2d69f125d0b5"],["/archives/2024/02/index.html","d06e4532a7f1fbcaaa8680416e6bfd42"],["/archives/2024/index.html","287a6bfd5d963e526ea2f098521c27e8"],["/archives/index.html","83dfc9eceae89aa4649a6f9877014e38"],["/archives/page/2/index.html","6227bdcbbeb6a1dc186992115b8bf751"],["/archives/page/3/index.html","c423d80868c661e3a115fe05f91770d8"],["/categories/Docker/index.html","01a3f2f833c2a13e969941ffa45bc15b"],["/categories/HuTool/index.html","d4253a46da9f4c3d0eb7f5ab84931de1"],["/categories/Java-MySQL/index.html","dfbb6f2efcceeb031a473c3659536a11"],["/categories/Java-远程调用/index.html","b92e3a486f9dcd4b7417ae41caa70a0c"],["/categories/Java/index.html","073eb40c56227e97b9b9deb74f5ecfbb"],["/categories/Java配置/index.html","96dbc4d60c61eb3612d1d2d5acd01f28"],["/categories/MYSQL/index.html","e27f32fe05c1ccfac3c236e5905ed5b3"],["/categories/Page/index.html","74b23084aec2d32d086ad8b733669a3b"],["/categories/Safe/index.html","686a885be85b355400dc580537d650e1"],["/categories/Stream/index.html","d69db0cb96f51ed98f4f7f6e8b0d30e3"],["/categories/hexo配置/index.html","a07d5ce50b0b07ecde5ccf667384fce3"],["/categories/index.html","02ac52a494d54e8e289335fc66b374a1"],["/categories/实用工具/index.html","a4d51ca57ba7ded70a01154aee860f14"],["/categories/工具/index.html","f59aaaf5b0bb5f9615a0183b363ebd49"],["/categories/工具类/index.html","2ae36a035837f6a13bc7e02e71971ba7"],["/categories/时间/index.html","63bcdb74e9254d0b93e6775367f76793"],["/categories/视频/index.html","5786f11f11cf2fd41b13301ecd32c941"],["/categories/配置/index.html","d88a3df5df8712c9c9c3700586a8ff89"],["/categories/配置文件/index.html","a77f49e8e77d971b86c2a95141ebe4eb"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","0fb99a593d5261479b244b56ff73f009"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3ab17c552b90cffec507e754b026945d"],["/page/2/index.html","ab52029e6a5f49152af1ae774253eb9a"],["/page/3/index.html","d764bca8e51f9861a775f140a61b885b"],["/photos/appointment/2023/index.html","cff4f0a9ecd35e8441acc71e6d7b4174"],["/photos/appointment/2024/index.html","ce7fc82dcae2059d4b53d042e3a9ad34"],["/photos/appointment/index.html","f1a6135746bf8893377cc4ef2910ba3d"],["/photos/babyAndBabies/2023/index.html","9153300bdf4f36bba9d32ae392b0ed07"],["/photos/babyAndBabies/2024/index.html","cb0cecbb0a40cc0db2ae7d94fb6ccc63"],["/photos/babyAndBabies/index.html","f8e1bf9945e512d89ffaea8dde8deb86"],["/photos/game/dzpd/index.html","41e7549c4b462f5894a4052d36b95c07"],["/photos/game/gy/index.html","89bc8b39be39716ca791441ad2c03174"],["/photos/game/index.html","44dca57aa9f91973ae34cb87b094d5de"],["/photos/game/steam/index.html","8ba3efd61102036598370c254eee45d7"],["/photos/game/wzry/index.html","6b3dff29962abe39792b547220c9aafa"],["/photos/index.html","8ac7e4b2a2e99475269ffba3b48fb850"],["/photos/movie/2023/index.html","457691334b24d9e40151bab9d3a402f3"],["/photos/movie/2024/index.html","c21b43a0a1a3286bf8af68e416893542"],["/photos/movie/index.html","f4d1700807c92cec8f339e5757874c85"],["/photos/ohmygirl/2023/index.html","0655d024689d03dd0ee46bb0a885857a"],["/photos/ohmygirl/2024/index.html","a400f004bed8e508d5cc8d8ff8f16391"],["/photos/ohmygirl/index.html","d523d5ed7608124674eda57d775cea9a"],["/photos/outside/NanJing/index.html","f3ef37b18196d5f5bcf1474520144d89"],["/photos/outside/QingDao/index.html","ca268ac266c6472dbeeae0c5d6a4e753"],["/photos/outside/index.html","2648867d20edd47ec83164c992d97f63"],["/posts/16888.html","eada83acaf0711eeeb1915f0c737df1c"],["/posts/17303.html","86f42effa0a8e9f43c24da625c885a92"],["/posts/18206.html","44af7fa38fd1cf85ae9b121ffab7a4b3"],["/posts/21635.html","65bd7e4ab6496a1cdc44e480e34f4701"],["/posts/22910.html","df79e93b90a4baa7dcf73774c751aa1d"],["/posts/26185.html","fdaa95b7d6263914b173733110b3d499"],["/posts/27699.html","7cd193abf33a8345663804f0e090d12c"],["/posts/34134.html","f19cb7668617fc8dfc925973781a8c21"],["/posts/38362.html","13e5b3f6b0f69975e7d7cd516e013711"],["/posts/4186.html","1f626ba3cbda68a5243b54fd6053eb08"],["/posts/42658.html","d9cda416421d9acf120a2d58952b43db"],["/posts/43618.html","d40a405161e0409c89a84a02e27988fe"],["/posts/47374.html","d96468faa8342fca3e6f05bf4287f968"],["/posts/48428.html","93626a7deba86726bce9a529a60c81ca"],["/posts/52307.html","fc3ca6166c1fb76c53e7dfa37a411254"],["/posts/52812.html","df5aa9629d6dd7ca258c3c07d8cb42ed"],["/posts/53486.html","44fd2cbe002b424ff49aed364acfef88"],["/posts/53714.html","75c8eda66762ddaf7832daa274793fd8"],["/posts/54999.html","2fd1683f04cfb31881fd4d23116281a6"],["/posts/57395.html","0f14eb482ee00d39f2aa096370478c95"],["/posts/58565.html","b52ca6867067b2b5853c6cd6f8aab822"],["/posts/59743.html","d33d6acc0ba55183543285c389b0af97"],["/posts/62255.html","c4c3379a83ca44999f41b9ea0cc67cd5"],["/posts/62580.html","88e0466b630a8e2f353ef65816c1c24f"],["/posts/64032.html","ec75ae7cbb0e6266c3501fca0ad7b2bf"],["/posts/64329.html","91a5688ee4d4aab056a813660617e19a"],["/posts/9968.html","d73aabc9f721ea5315194ccb1769aff3"],["/record/completed/index.html","d5d4d67f3f8228ac98b21854938f4e44"],["/record/emphasize/index.html","6bc512c8ecf4d9857a7c4b585c383561"],["/record/index.html","c5d744d72bc782417c8ab301ccb7d6e2"],["/record/period/index.html","42129ad3bd964f689b4e56baa1af1837"],["/sw-register.js","685949ef8b4822ed2c0b7b1ec46cb489"],["/tags/B站/index.html","ebff26ee9af7e8380b65a97675a4024a"],["/tags/JAVA-工作总结/index.html","bf0744bb865f7bab4e27297c8dd7367e"],["/tags/Java-Docker/index.html","605aad6fd424fcf0f3a562d87c902329"],["/tags/Java-EasyExcel/index.html","f701cef4f6e441489768d98a9110e11f"],["/tags/Java-MYSQL/index.html","257e1fb9b6a23d33537ed518aa559bfb"],["/tags/Java-Page/index.html","7be8723bb42f94741913b6e458c07b91"],["/tags/Java-RestTemplate/index.html","15cc8f0b8ab80455214d4130927ce2e0"],["/tags/Java-Stream/index.html","6678b6b452cc5903c3f96c5df56f8499"],["/tags/Java-工具/index.html","b9686d94f907b6d2b7f359b4eac41eab"],["/tags/Java-常量/index.html","2cb616779c1d4edcb25406194e079fb6"],["/tags/Java-校验/index.html","c2ecdbac080343e5672031a33ac3fede"],["/tags/Java-配置/index.html","a4847e771fbdb6e8aeb2820c2956d03a"],["/tags/SQL-便捷/index.html","ceac9e24f9b91fb1f5bdc2e375907cf0"],["/tags/Safe/index.html","da543b902062b32b4720a4f49d6df015"],["/tags/index.html","0226bf2dc6acae699dd6d90581418606"],["/tags/java/index.html","21fe3beaa101d4ed19e022ce295dd5d3"],["/tags/minio/index.html","6957ed3744bdc2b61d51b19366ba2b74"],["/tags/定时任务/index.html","30ae3854a2f36a4e2e3d4913268f1728"],["/tags/工具/index.html","a228cc614aaa86491b1f5101b11df906"],["/tags/搜索/index.html","e83fb6406fa9388bdd736c9e9a912fb5"],["/tags/时间工具类/index.html","55af1653fea69379cc41c1b7fd3a7445"],["/tags/虚拟机/index.html","637a9e83945328cb56cd88125ededeb3"],["/tags/递归/index.html","bdb69ea7f121a56d5fd98c9c847f9810"],["/tags/配置/index.html","28d14e3bf5eb2e49a15da17d296d09bc"],["/tags/阿里云/index.html","f3f758ade61923a0300bfd56f7e1673c"]];
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
