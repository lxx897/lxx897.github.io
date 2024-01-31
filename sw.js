/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9f01ad116ebc8ed8d2d47bee27221e63"],["/about/index.html","19a80c2ce1ef905201e3a942516826b6"],["/archives/2023/11/index.html","59714fdb653e697494b2cf3e7b758089"],["/archives/2023/11/page/2/index.html","90108a07e87798dca3a1e496bb199957"],["/archives/2023/12/index.html","c0d616b9bcac8f3675174bd05214ac32"],["/archives/2023/index.html","e1c4bea9868cf3e1d9bc988531fc1f9f"],["/archives/2023/page/2/index.html","c6da08b2780e5233f5b2ac184f0a12b2"],["/archives/2024/01/index.html","55abee5657918a0c72dc931ed8c49f7d"],["/archives/2024/index.html","3ab89845335dc1eef64a4816e99d9e3e"],["/archives/index.html","7bac02bc3ee4caaba26bf0f97c2cd5e6"],["/archives/page/2/index.html","f3f19fe791b76c66e9dec322edaf9360"],["/archives/page/3/index.html","1fc01467ceaa8da3b3be36dd00b1c06c"],["/categories/Docker/index.html","a682a8d3c8460e5de4079085e23d7864"],["/categories/HuTool/index.html","48b4df60180adff1bf5ff3c1e3d2c521"],["/categories/Java-MySQL/index.html","f0dd40d4768279955088cc589e9a501f"],["/categories/Java-远程调用/index.html","9a740e374ab71e314ec61455db036616"],["/categories/Java/index.html","fa63ae49bf93ad7fd7f8978f2dbdae29"],["/categories/Java配置/index.html","fffdad22995c7f858adfcd40d763bf01"],["/categories/MYSQL/index.html","3c457e53827bc6c5e848a5638733e743"],["/categories/Page/index.html","a0d500cbd60a300acb063ee60c68d4f3"],["/categories/Safe/index.html","4c125237acc966f99e0e90a1897ec564"],["/categories/hexo配置/index.html","d877ed9a18cf86ca8d40417b418a80d5"],["/categories/index.html","f5bee0ced0651a865fefe8bc6e2294b4"],["/categories/实用工具/index.html","bfdbd18b1061553c6f3f67b7f882ab4d"],["/categories/工具/index.html","3b8f5684f226a743ae610ba468f42cfe"],["/categories/工具类/index.html","381895fcc8916f19da2d4c073bd18352"],["/categories/时间/index.html","f7d60673c0b770eb7f03361a814ca36e"],["/categories/视频/index.html","bb81204989d790164edb867dd8fbe0fa"],["/categories/配置/index.html","ce68dfa05afa71ec0bc965bb0d09c8dc"],["/categories/配置文件/index.html","fb5693709e60f84e2a304256dd248d3e"],["/completed/2024/index.html","d3b3d2cd129f579ab2ba596e1f7d9cd4"],["/completed/2025/index.html","563fc205c33b70bdc552319c05c7e083"],["/completed/index.html","f234108dc3c9105d457df2bb91e04262"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d8435d68ef9917f7ff6dcd12086e3cba"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","90bd6c250fa7edc4c7318cb45d4587de"],["/page/2/index.html","6d67c1308c18660f69ae6bc8c905c60e"],["/page/3/index.html","013126a389dde36ad95cab82fd66d556"],["/photos/appointment/2023/index.html","299defe6e4d2708ffe987736858e5f20"],["/photos/appointment/2024/index.html","40571cc608ecb23929f051295e75f140"],["/photos/appointment/index.html","e3d19d01489b75fe908deae8f623a0e9"],["/photos/babyAndBabies/2023/index.html","12f39e69c0119e535ce7779f537fd463"],["/photos/babyAndBabies/2024/index.html","e537600ab988d42785e86f8b527da3f6"],["/photos/babyAndBabies/index.html","2a2ab9d72912a1c1d379ea49805746c5"],["/photos/game/dzpd/index.html","b69f9f4e672d4832a3978cd9af035cc0"],["/photos/game/gy/index.html","fcc4c9e8848ae1d7e4d6871c3994f952"],["/photos/game/index.html","0ae8405e9f06624994f579f957b707f8"],["/photos/game/steam/index.html","105976986a27120b5b0d76d81c4acb78"],["/photos/game/wzry/index.html","eca17d34605af48f8a90c8d76a197e16"],["/photos/index.html","41bdd334d020d4a72cf391e7d6c7dcb8"],["/photos/movie/2023/index.html","d9ccda3f8c5f650c48fede98179d6575"],["/photos/movie/2024/index.html","9904825b6aa5c1a74946e65840df1a22"],["/photos/movie/index.html","5e37137f6a547e3bdaae01005ddbd4c2"],["/photos/ohmygirl/2023/index.html","5b56d16b14a97906548b793f7fc2bb03"],["/photos/ohmygirl/2024/index.html","efcd1c053ad86a77b3ac29019158df93"],["/photos/ohmygirl/index.html","2e0475aa9db794387db77729aae48e8d"],["/photos/outside/NanJing/index.html","68fa4d1c4e4f021df2b11d736a5cd0ca"],["/photos/outside/QingDao/index.html","c3bc0cb0a8979c8805d5c16b9f0f4962"],["/photos/outside/index.html","e272d0fa363503660d9e5017a1d11749"],["/posts/16888.html","67da43ae2497262f4be15399afb5ffd3"],["/posts/17303.html","bbcaefab9ad6b780f2b795b166f5b6b0"],["/posts/18206.html","8fa42cca35f1e62fb2d7fe47c1da2b1c"],["/posts/21635.html","80ee196efaae0e875b218250fae8b90c"],["/posts/22910.html","195f0ba198312061147dd0f858570c93"],["/posts/26185.html","7555d5c41b7f274b4727ed8c04982f47"],["/posts/27699.html","f370f635bda66e6d745acbc364cbeb6b"],["/posts/34134.html","7a8eabb0ee7ccc4fc461bc7b3c7aa2f3"],["/posts/38362.html","2006d3412e8c6cdcf957299f7291028b"],["/posts/4186.html","15f2ee2b59df2c4d245a82e0e0f8cecf"],["/posts/42658.html","3e33e18e538ae7eb38a47e23d59a5ee3"],["/posts/43618.html","f446ee9f1253f945df250a1c09425309"],["/posts/47374.html","63d85ba03e88e23fe1f9595a5651b89a"],["/posts/48428.html","871bb1186af03a190f0563b141a93a9e"],["/posts/52307.html","db8e5e3cce53055f2dfbd1d91edfac10"],["/posts/52812.html","9e440ec797636829b662e8a5cb7662fb"],["/posts/53486.html","b810415185288538c46e38be8cc582fd"],["/posts/53714.html","0505662e8aca140720f723447a4eb6e0"],["/posts/57395.html","438da2af8ce0036c739b292124d2cb5a"],["/posts/58565.html","d7316da734aab2f58debb8cb48f7c065"],["/posts/59743.html","706957487a43cdee8a18f03db9308670"],["/posts/62255.html","317d4d241b986c6a1f9f050dacf4edbd"],["/posts/62580.html","848a6dc106a7ce83e7a55e0ec616a329"],["/posts/64032.html","c6687e943d35f978cfd51ea7e06ace76"],["/posts/64329.html","86b9507d979ee3634ea663495df97ff7"],["/posts/9968.html","b049fac3f88dda3f65c552ab0bfa2db2"],["/record/2023/index.html","d93a0cfb6902b4ad2b5664d255bd3eda"],["/record/2024/index.html","56612a2f6681dd31a21896572656bcf5"],["/record/index.html","4c5448116ddc9abc764c1b65fe3076cc"],["/sw-register.js","9e69aa0733c36e226312c25a6bd1998c"],["/tags/B站/index.html","c1406aa549eda71d38f043baca6ed046"],["/tags/JAVA-工作总结/index.html","3fea0ac85988ce1ffaeffd25dadb5d9f"],["/tags/Java-Docker/index.html","5e0559a5e2e9d322648a5bba3547cdff"],["/tags/Java-EasyExcel/index.html","ee2a002e7ad4185e817d168ba981669e"],["/tags/Java-MYSQL/index.html","105fd31ff1f1c9a2c5b075ff3e6e1a39"],["/tags/Java-Page/index.html","55a177cd751993e7546f7815c531a62a"],["/tags/Java-RestTemplate/index.html","a675c5e5facabdca80e9d244e7523b5b"],["/tags/Java-工具/index.html","e806342302497fe7e80faf46327620f9"],["/tags/Java-常量/index.html","09497ca79716b29b035e6fefae65def0"],["/tags/Java-校验/index.html","4b159976f2491a4b10411892a1765eaa"],["/tags/Java-配置/index.html","15d771dca62dbbef5099008c62fe0378"],["/tags/SQL-便捷/index.html","74cfb28643a6d3f4eb6a96c115c9160c"],["/tags/Safe/index.html","6fcfdef0c0d4e85c782db91c1d616e67"],["/tags/index.html","365c4f28ae1482205a31f6d05d50f2f6"],["/tags/java/index.html","af5af98e7e75a9ab1550cb96901e6d9b"],["/tags/minio/index.html","bf7c409c0e2430235ce1770ec63627c8"],["/tags/定时任务/index.html","0db6ab5a30319251d9b3d7414eb31314"],["/tags/工具/index.html","8bbb37949e56c06feb514f1752a9c4f6"],["/tags/搜索/index.html","4c7988908f7feec991f54b5bb03b72b0"],["/tags/时间工具类/index.html","5c3b3c61d2dc5e334111b50e45014413"],["/tags/虚拟机/index.html","4a2f4544ad32cf54238d4262e1f02b77"],["/tags/递归/index.html","e10ac57a72ac4362430b0ba5c483140e"],["/tags/配置/index.html","0662347fb706e859b90ca51d8c0bb96a"],["/tags/阿里云/index.html","8c7433b0d1b12e240945102626231ea2"]];
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
