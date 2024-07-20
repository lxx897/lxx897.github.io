/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e42815d026b13c7839479c0e527259e3"],["/archives/2023/11/index.html","27a381ac732a971e640c70476b2bd1f0"],["/archives/2023/11/page/2/index.html","2d7e53d02ae9f289915e4c602144a25e"],["/archives/2023/12/index.html","a9f07476ba3d4311e8871e4bf4218e7a"],["/archives/2023/index.html","94da0e7f2acf8c486ad53fbf4de650e3"],["/archives/2023/page/2/index.html","4cfd3975eac5734be91093579a322b76"],["/archives/2024/01/index.html","62fd949cf876d14bfa898b89dadc45a8"],["/archives/2024/07/index.html","43668728641810835bc7016410dc6285"],["/archives/2024/index.html","ec8c630a0e7149fd82d088a9d53018b9"],["/archives/index.html","db820479ce94d52824febffb490fa534"],["/archives/page/2/index.html","739a251c50c35ea9d73e0a1e3d3728d1"],["/archives/page/3/index.html","2299e49bdfc9d4b99c21582a190a86bc"],["/categories/Docker/index.html","a9e22597804d3638e93d47c81e49a649"],["/categories/HuTool/index.html","d567653fb627f519b80f9dfc1f76e205"],["/categories/Java-MySQL/index.html","2b6c008d64a4cc938b92ff7620438b0a"],["/categories/Java-远程调用/index.html","1875ece3e248fb2df5e4c05fd8a9cb52"],["/categories/Java/index.html","c4c39a092ffdd6b00df40d68874f88ec"],["/categories/Java配置/index.html","a36020f34a782d69f9f59bdbc25d594f"],["/categories/MYSQL/index.html","c7e9c75bcb86252da4067f933f6915be"],["/categories/Page/index.html","a80314109b12dc89d99dc21a4ab1ebdb"],["/categories/Safe/index.html","0fccabe71f7fe4ac63107d661c810cde"],["/categories/hexo配置/index.html","49a8c4de4e0e02bcbeeb7af2c11c624f"],["/categories/index.html","5aed00d5f7684b058840fd31e115d08c"],["/categories/实用工具/index.html","aaa64475400bab1c2ce4c77ba7026c8e"],["/categories/工具/index.html","6de6ba8f8b9af0fa4be402b0bc948988"],["/categories/工具类/index.html","4fa65fba3bee7474907e9e2e02ead23a"],["/categories/招标/index.html","e14aa6d736bfb4ab51a6e32f1ee09c58"],["/categories/时间/index.html","361b02589d1f79e768773ca6777a4cf6"],["/categories/视频/index.html","6681f8f2419ea935b28b854f0df24092"],["/categories/配置/index.html","e7969518e032976b46e4e034dac1f880"],["/categories/配置文件/index.html","2271166dfd4759e6005d64fc4909e38b"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","345729ad8a1cbeaf64522c7d65589029"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ef629baddb070cd1cf047552a686d273"],["/page/2/index.html","3d20b095576907cb4f7b48bcac54bdb3"],["/page/3/index.html","848ec2a6bea1d3deaa77a1e227efb8a1"],["/photos/appointment/2023/index.html","14b4b7f7bc712cbc4617ebc90468a14b"],["/photos/appointment/2024/index.html","246d75017445ad35d4618a6a0db9c9c4"],["/photos/appointment/index.html","7c43cd83a96baf02b7fd23e7599258d8"],["/photos/babyAndBabies/2023/index.html","d41036fbd98a61dde301ff52123dc777"],["/photos/babyAndBabies/2024/index.html","8242dc635532d8c9908981cc175c6480"],["/photos/babyAndBabies/index.html","b8a34a83c50fbb22b0a4f270bac3dcab"],["/photos/game/dzpd/index.html","4e598ca034ca77c914e1501cb3df039b"],["/photos/game/gy/index.html","8f8e63724b4439aedbd36c7ae1f2ab0c"],["/photos/game/index.html","e8026fc0255b29bf27c7a6e58d37d4dc"],["/photos/game/steam/index.html","caeba7d2f1b60810b94a920087ed981a"],["/photos/game/wzry/index.html","78294c051e637dad20f6897ae2eb4c7e"],["/photos/index.html","1100b34b8a9fa72d1b1630a76fbddfe1"],["/photos/movie/2023/index.html","e408ac60d6320d29265528d38d87c8bf"],["/photos/movie/2024/index.html","0a2b70c0df921b54289aeaa3ec6bfd7b"],["/photos/movie/index.html","fc4c87d2385b4808b0f52e93b08cd332"],["/photos/ohmygirl/2023/index.html","4d791c75f0d6dcb6aa2ae1545980ae84"],["/photos/ohmygirl/2024/index.html","116258d88dbefea63998acbb9aeebe75"],["/photos/ohmygirl/index.html","d016089416a8a27805ca043cd0f57a0c"],["/photos/outside/NanJing/index.html","015d0644ee7efe3b54c8c4587773ced7"],["/photos/outside/QingDao/index.html","76dd0a926089730930f91315da21c23b"],["/photos/outside/WuHan/index.html","6a33f5b97e7eaf1b738a6b5d00546a34"],["/photos/outside/index.html","c7a2289a26f5a18dc21c9ea072731ac2"],["/posts/16888.html","a6b3b2135ec5fdd0f5b2b50bfdea69b3"],["/posts/17303.html","ca6b6ddc64206feb9a0814a04698da28"],["/posts/18206.html","17f53c33d9203edcfa84f90be2d83876"],["/posts/21635.html","da74ac90cbe630c8429a1ee16e0fddfd"],["/posts/22910.html","ef58e9478dbb48b73fecd7a15a79db98"],["/posts/26185.html","0a3bb580e7356606be02d3fc88d7f66c"],["/posts/27699.html","7a668ebc9ba40e83d7b0f85b39372d6e"],["/posts/34134.html","67994ae6c47541d8cf92369a4a56152c"],["/posts/38362.html","0456a02135a6c704b13882612d2c25ed"],["/posts/4186.html","dc73668d3a3f054dddd893279293f362"],["/posts/42658.html","c852d5d833f3cbf083d51e5dc649a8d3"],["/posts/43076.html","5c9a2960dd8681918cb7ae8c2759e4ca"],["/posts/43618.html","abbbae58eceda529ca95b0d8f8d3ab77"],["/posts/47374.html","af7aeec7eb6818758848fef48d272642"],["/posts/48428.html","8e48da78eac5e051ae5ac4e26d048f1d"],["/posts/52307.html","16c6bfb35cfc3c3116f6a3db64f63db4"],["/posts/52812.html","b8dc557d2aba230dca95891497fd6d34"],["/posts/53486.html","4470eace77bfb01d240166ab7d4d2b1e"],["/posts/53714.html","f891cc5e43fe204462f3f9799300387c"],["/posts/57395.html","8f9a4063841232df1aac74a986ca2689"],["/posts/58565.html","959e37808939ce985398aadecbd37b76"],["/posts/59743.html","db28e0e53beb786f45a0416da918cd03"],["/posts/62255.html","4afc65221b17df37dc62386cd24006a9"],["/posts/62580.html","eb0be1b290f5df2dfc156237491cc373"],["/posts/64032.html","baec0fb0265c08db4f2f020c75ea9bf1"],["/posts/64329.html","fa63657fa0074dae65308f25cdd6e4d1"],["/posts/9968.html","3cc76003a4e31c00c035c9494b2e724b"],["/record/completed/index.html","c53211bee02a37f09d5e902102cf0a7f"],["/record/emphasize/index.html","ba1bce85b039ca9e021fc4063c912aa2"],["/record/index.html","f20ba4adf624d1f0545296c488427c3a"],["/record/period/index.html","708147ab286ffeb59e13d726f25b3cc3"],["/sw-register.js","49b145bedf5ebc130fb9a07eea383f13"],["/tags/B站/index.html","b9fc20aaa7611ab1f299ccea05e409c5"],["/tags/JAVA-工作总结/index.html","ddfa93407f6824511df3561fcad47a8e"],["/tags/Java-Docker/index.html","691f1ce897e6b7fe5b92bf81e68c176a"],["/tags/Java-EasyExcel/index.html","48874b4c307599e06feb974e2feae77f"],["/tags/Java-MYSQL/index.html","d3280d95367e929201a87e0e9f136144"],["/tags/Java-Page/index.html","9c36527881a2a08d085e3b9c071f1fc7"],["/tags/Java-RestTemplate/index.html","236974e5fb12aae1d95a9f4576b876f4"],["/tags/Java-工具/index.html","559262ecb469bb97017558587468939d"],["/tags/Java-常量/index.html","5494a2609da4e3f6f046cce88344b3e7"],["/tags/Java-校验/index.html","3465b976d644c33968c773784966d7fe"],["/tags/Java-配置/index.html","1bc0b215a7b2213fbbec1965ebc6171c"],["/tags/SQL-便捷/index.html","23e66610762a0c130849056d8f03b8f2"],["/tags/Safe/index.html","3ed5840d666e9145b9da8e41e325359b"],["/tags/index.html","7cafeb994f8b17ff34ecbec6f0d535a9"],["/tags/java/index.html","3d826b723080af3d76b13a6741924e1d"],["/tags/minio/index.html","f5ded017b5f4c83d6e4668744776d29b"],["/tags/商务/index.html","2ba7ebb20da0946bceb2038fe08320cb"],["/tags/定时任务/index.html","2fb5b9b062a0d0b0131b902bb34ff8c2"],["/tags/工具/index.html","2c4f09eea18b851d2554a8cd08a2d41b"],["/tags/搜索/index.html","72072aa5954e679444d03fa88fb413ab"],["/tags/时间工具类/index.html","e96700228efc46023a5701924cddbd27"],["/tags/虚拟机/index.html","7801ae76dd61a4f008dbd631b63374f5"],["/tags/递归/index.html","552d3da5bde0c521aaf1b78013a41275"],["/tags/配置/index.html","a02b84d618a7e82985d9758f8a18da78"],["/tags/阿里云/index.html","5abe7cd0cf3deaba34861c1103ee607a"]];
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
