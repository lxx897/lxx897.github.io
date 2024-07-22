/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4b87935c27836074fb97f57939f889a9"],["/archives/2023/11/index.html","945c633bacc18d5f6ee26341c7b9f17b"],["/archives/2023/11/page/2/index.html","989ef862295a9e0eb3cec9465c406d39"],["/archives/2023/12/index.html","0801b91537e4f15483fb2889823a8491"],["/archives/2023/index.html","9a452359a172569646d614290f9614fb"],["/archives/2023/page/2/index.html","f0d45e13f780c2eb371ddb391abdc612"],["/archives/2024/01/index.html","0b6f721370c712e14ce2bae4394929da"],["/archives/2024/07/index.html","429f047f6b3ccd28eab19cbf8d2b574c"],["/archives/2024/index.html","cdd8166c9dd112521489f667fe6eecc1"],["/archives/index.html","08d30067d1d285f096acfaf5d37a4e31"],["/archives/page/2/index.html","622f1f9f5efc14bd323741f9b9a62e75"],["/archives/page/3/index.html","17ec0af760c68fb3ff2d71ae201e95c8"],["/categories/Docker/index.html","1cbac32999f935f444cc92c585c86748"],["/categories/HuTool/index.html","15b7a291c0eaed39bd5e98bac1b0d806"],["/categories/Java-MySQL/index.html","0d92b91016387cbdd532ad5a7f9019fc"],["/categories/Java-远程调用/index.html","c050edfcfcb7dd5791fa9fff95b76aae"],["/categories/Java/index.html","785add44d4fea848138387a1f54383f2"],["/categories/Java配置/index.html","df4351d64663febb15940aa18c481566"],["/categories/MYSQL/index.html","f4eef50571b17a13d13c8ee2d1909b84"],["/categories/Page/index.html","a0efcf63d29bad595562bc7eb4cfbadc"],["/categories/Safe/index.html","40781053eca3b1cbb1fee6c821b6cca7"],["/categories/hexo配置/index.html","29393b6809e6d77a9dd874e200cdca96"],["/categories/index.html","e8b809523fcd928955796e5eda06c38a"],["/categories/passWorld/index.html","98b940734361b996bdf372fa7cc72ab3"],["/categories/实用工具/index.html","4e5f73a0e4b114efd1ad60211fe7b9ca"],["/categories/工具/index.html","0f600a70a98239495e3974bc236f36a3"],["/categories/工具类/index.html","1baf99a8fa9809dd27ba144bf660a284"],["/categories/招标/index.html","507b57412d2a71e6f1f34697a487bbd5"],["/categories/时间/index.html","487442d1256df9745cc095dfd95ee5ac"],["/categories/视频/index.html","c80344a3b2bd5cf2bf1dd6183e1459bd"],["/categories/配置/index.html","09499a05fe52bc9299aa0fa6acfd923c"],["/categories/配置文件/index.html","0d7baa612b2557b1920be779faddcaf5"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","33f225bd1e9a63afae3b253e1a840794"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f9ce149fde0d3244b4786d865c1bc56b"],["/page/2/index.html","11933e950c63d2ff7c3155ace88e8ad2"],["/page/3/index.html","c87dac4f74ed403c9a07659196ac614f"],["/photos/appointment/2023/index.html","170de93fd8dc4bd3ed8526e8c78ba7d0"],["/photos/appointment/2024/index.html","0435f4493c00d57d9fb5d0447caa3897"],["/photos/appointment/index.html","7596650d5c2742fc9dca74f1d220a079"],["/photos/babyAndBabies/2023/index.html","9113abf302d68f8baf56a48518dbb576"],["/photos/babyAndBabies/2024/index.html","3f8701c56cd5396a8c378a07c46f961b"],["/photos/babyAndBabies/index.html","a74e13a6d105e2144a73dad7726eec22"],["/photos/game/dzpd/index.html","c583d2fd4987cdfc5c34bd7710110380"],["/photos/game/gy/index.html","a8159be998c811dd6ea6006ea5151ddf"],["/photos/game/index.html","96f7ad3a36bf31336202da85cae6ee20"],["/photos/game/steam/index.html","43256433b25a22ffc0e7aac9e24d5f96"],["/photos/game/wzry/index.html","1433aa82fb7a566ae134c62f27fd0866"],["/photos/index.html","f2f473729341107b2805ea897c34ec7e"],["/photos/movie/2023/index.html","a20b8bbce4719f1dd9dc24236d18545c"],["/photos/movie/2024/index.html","cd1f0a0cb6415ff22324d2d53524dca5"],["/photos/movie/index.html","844970ee3c952e83b1d5b024509fa1c8"],["/photos/ohmygirl/2023/index.html","04db4babf7a6c3a6cabbd72f1c4068c5"],["/photos/ohmygirl/2024/index.html","b5fbf2c2aa7c69642b96cbc8e5f1455e"],["/photos/ohmygirl/index.html","46cde98ee3420ce8ee6b74caf8ebb15b"],["/photos/outside/NanJing/index.html","0d5b13d710ddb3a4838414b8b082ec57"],["/photos/outside/QingDao/index.html","30b0974d670acf170603804716475274"],["/photos/outside/WuHan/index.html","3250669f0c74a42d59f0590ec7bdb7b0"],["/photos/outside/index.html","7792a60ced525fd89d0bd43fbde2185f"],["/posts/15940.html","8b74bddf99a01bdbc466c4e1ea56c8b5"],["/posts/16888.html","c4aa58f33bd31626fe12226319d1029a"],["/posts/17303.html","5fae71c6e28e51e658c3ec9e7c0125d9"],["/posts/18206.html","12a79c544cb84e3cc522b8e5f66460a7"],["/posts/21635.html","fca16cfce7c899503732ad862ab51aa2"],["/posts/22910.html","891688d53d31dfd4fb916950dd2aedaf"],["/posts/26185.html","88e93f3f14886af9ccf67d4e9e120f51"],["/posts/27699.html","d5bc296d0c53f51a33511359289a0ce7"],["/posts/34134.html","623ac2b7b90ecfe040e5ec8d8c46b159"],["/posts/38362.html","e854e0a51532ad823b924837ad66c661"],["/posts/4186.html","b20b659fd7d84a732986bf6eb4755f9d"],["/posts/42658.html","dcf830d6e59dfca58b09a9640576da6e"],["/posts/43076.html","69d5b46a3b6063b9439bc88b33644e3f"],["/posts/43618.html","63e880446602a23579ed5516c6db8a1a"],["/posts/47374.html","a8b7c87b0ea2ef6161f922f70ca99fd5"],["/posts/48428.html","7af5301b7b745ce74a9b42847e2c8e62"],["/posts/52307.html","c7d710359c908d8feabaccbb3234c7a9"],["/posts/52812.html","3d70ca6c05fb5a8f5fadb8085b1988e7"],["/posts/53486.html","b2be5084ea75996823396f0c444d7471"],["/posts/53714.html","8627034db215316df6b9d02bd061462d"],["/posts/57395.html","58e9d39255067789ce8bd0a3e6e2f590"],["/posts/58565.html","34fbc3379fa396f38bce509127f6ce3d"],["/posts/59743.html","9e0e4945bfc5a2d34f0ea3187746256b"],["/posts/62255.html","1b7f9c80d1fe977b3b579abb601eb3af"],["/posts/62580.html","db097b83c4596a473c4fc817330ff1e7"],["/posts/64032.html","64e4828ed6bf6fe562da4a9e95a6230e"],["/posts/64329.html","4c3bf7a870524ae41ac924554558f7d8"],["/posts/9968.html","f4d058a53f63f05759288f1054620f7b"],["/record/completed/index.html","38751a52e119a7d885811ef73e91b9ff"],["/record/emphasize/index.html","3210c29e9afd7291708c707b5fb4fff3"],["/record/index.html","1b8747937c4eed0d7127fae8820a4dab"],["/record/period/index.html","8eac2749850468b9bb571b78723f59d9"],["/sw-register.js","e283206a5d967272a1d972c6875fdc99"],["/tags/B站/index.html","83650a34e169dfd0800a129e050c88e6"],["/tags/JAVA-工作总结/index.html","06ba59e09ad87e469d35b3c39ab1012b"],["/tags/Java-Docker/index.html","7ff9bec420fc018ed2b5a5eb79fc98e1"],["/tags/Java-EasyExcel/index.html","f2e714680cc6683dff5407f58eeb0eef"],["/tags/Java-MYSQL/index.html","7a3b08683993e210e0efd70ad5ffc64d"],["/tags/Java-Page/index.html","71e3099583317376934322fdc61ee1ac"],["/tags/Java-RestTemplate/index.html","2d20a5cb1774d2522ff7ce454e233d1a"],["/tags/Java-工具/index.html","c866e12664641ce692ed9f03d6bb60bf"],["/tags/Java-常量/index.html","1885969d0674efe545fab1e083c49caa"],["/tags/Java-校验/index.html","b1e433f1ba114b510c23686abb271f9f"],["/tags/Java-配置/index.html","18ab13a16c0eb64972280bc764f2591b"],["/tags/SQL-便捷/index.html","39a5bcaa573ef416560dfa7f108dcef3"],["/tags/Safe/index.html","124321d896157f19fb65e3fc6986501f"],["/tags/index.html","5e53b93cd0e4472908fabe8966d0f36e"],["/tags/java/index.html","d9d4ada6de53a450a3a43ecff65b09aa"],["/tags/minio/index.html","9df5379c75164c6340bda2089dd56a19"],["/tags/商务/index.html","9ce2a30a5c627c95b952e8101bad4975"],["/tags/定时任务/index.html","f77747653cd971aca94054cd0586fca0"],["/tags/工具/index.html","f7ee9ff088bd3b7ed86cb19293068f31"],["/tags/搜索/index.html","08e06b7d0e322fef441e1b047961a8d3"],["/tags/时间工具类/index.html","943bd93ea85b544a1c6ac04bb50c7499"],["/tags/虚拟机/index.html","ea861ccdd1ffbe5811a4e9f787c6c429"],["/tags/账号/index.html","3f09641d251b5879083fa0b8296487f1"],["/tags/递归/index.html","17735efc19a013d239992550edfc096c"],["/tags/配置/index.html","bc9c829b189834e6f11caa0d891df35e"],["/tags/阿里云/index.html","f98a13f4893b89439f3a526f54d0be14"]];
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
