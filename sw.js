/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","926c5e9409145ca21c3afb052bb53dbc"],["/archives/2023/11/index.html","20ab32813b82579c5807fe00cbdb8f6f"],["/archives/2023/11/page/2/index.html","fb9214483fcc3ddf759e969cdd7e6086"],["/archives/2023/12/index.html","d8b315d51f354e47fd4d37db7a2a0a2a"],["/archives/2023/index.html","447e9cd6dee8508c1a032a836d97e479"],["/archives/2023/page/2/index.html","6fc22a2a6e6bcbd9b319437bba1c8e19"],["/archives/2024/01/index.html","f2e88df71e20f901a5f3013a57b17b85"],["/archives/2024/07/index.html","d7d711c669e764a025c3215faf2bd8e2"],["/archives/2024/index.html","527ea3b522a32b338a8453dbe32d9e7c"],["/archives/index.html","e586e03eeff5503e61aa1ee18a6dfa14"],["/archives/page/2/index.html","c3c61658ceb8959443da3c71d54074ff"],["/archives/page/3/index.html","d72350bd2541fec634a047749c1f2e95"],["/cat/index.html","b7d8568b930c301ab4caacbb2b884959"],["/cat/picture/index.html","79344f0ca8fbccf1f88ffe15e01c813c"],["/categories/Docker/index.html","4dfd2cc841eb59e88df4d7d30ca3eaa6"],["/categories/HuTool/index.html","69c0ac7563ebbcf6ca9989ed0e8931e6"],["/categories/Java-MySQL/index.html","c5662cee21c3fd772c350f74687439ad"],["/categories/Java-远程调用/index.html","8aaf0ba0abb063ddb8793d41ce31b8f8"],["/categories/Java/index.html","2df0af533f6887fb0e6e46ab64b6afd3"],["/categories/Java配置/index.html","e9994c964ba7da944c4912208eeb70c7"],["/categories/MYSQL/index.html","57cf4693378cd388ce6f2723a159fa42"],["/categories/Page/index.html","d7cbc7c55e753fe827dffbac9f14e1c8"],["/categories/Safe/index.html","4b2ec2ab210205545f8a5b12e75244dd"],["/categories/hexo配置/index.html","94a92c1130f1a047c3bced73ee942c34"],["/categories/index.html","1c083ae53aabc3aaee967294a60ec0a7"],["/categories/passWorld/index.html","f37abac52d1cc4f5f6b14a231ba4b45e"],["/categories/实用工具/index.html","3ccf813b84acea80b7eb6b742dc91554"],["/categories/工具/index.html","83d361985c7789ada7d684cdf67d8d9f"],["/categories/工具类/index.html","e5afa5610a781200c4e06e958f5ca796"],["/categories/招标/index.html","d0c818e66f18c4ed222ef515990a26a0"],["/categories/时间/index.html","bfe8a0bdf0aa52d2d3daa27c0f2c92da"],["/categories/视频/index.html","7c9aed5ce10869f0d5085ac5b63c0604"],["/categories/配置/index.html","9c531dd6dd45e8d32ea222e3ce856477"],["/categories/配置文件/index.html","f4c9ac3fb62a01bb8cfbc4e058ae8e0f"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","b7fc4541c8fbcfc795aac38541d2f9bd"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ed93a2cfe4fd85af99c98d95443d482d"],["/page/2/index.html","302e5283efb12fba7a58b3ef2d5458e6"],["/page/3/index.html","d06e2ff9ae856832a3f91ea496b49db0"],["/photos/appointment/2023/index.html","0e9fb76594510012f272ffbed2dae0ca"],["/photos/appointment/2024/index.html","07a85ebb682513fd3effe03b8a8c895e"],["/photos/appointment/index.html","1ccfab9f1609b21c0a9278bbc33128b5"],["/photos/babyAndBabies/2023/index.html","6aef9c0c9422eb366b4305f20f6ead6d"],["/photos/babyAndBabies/2024/index.html","9f971b1dd5bb905560535b7aad9aba41"],["/photos/babyAndBabies/index.html","a7b65b4ff62e303d168641b7c9ea69fd"],["/photos/game/dzpd/index.html","b1df60457de4c14827909e3f1291a2ab"],["/photos/game/gy/index.html","81fc42cd854061470cbc93e4997efd80"],["/photos/game/index.html","bed5618bce0a83be6985f9222578b4e8"],["/photos/game/steam/index.html","9531570b472f0e1cc3cdd42b2562d581"],["/photos/game/wzry/index.html","03d73a51c67578e0f030e9c725fb32d0"],["/photos/index.html","138dba4496a4406c39eb3506c1204542"],["/photos/movie/2023/index.html","6b7a2a7c13d95e6004580ad9701b7231"],["/photos/movie/2024/index.html","4e67eed72ab51aa3363a4d8b643d754e"],["/photos/movie/index.html","fad88b713c5ef8f1ed514476e1e63b4f"],["/photos/ohmygirl/2023/index.html","c1e1331dd1a15c808a6393ab597fb3aa"],["/photos/ohmygirl/2024/index.html","cafcc58f1346ab57de6d416053a4f676"],["/photos/ohmygirl/index.html","b9b9c19618fcdfbb182738ae97edcf8b"],["/photos/outside/NanJing/index.html","9def9a4c903c37af0f4d0f4459125b3f"],["/photos/outside/QingDao/index.html","d68873364d3f8e783d54f3488cc6ef1a"],["/photos/outside/WuHan/index.html","27842e8476795b416940fc9df328bf95"],["/photos/outside/index.html","2234b355f7ef2d497572fc73047174cc"],["/posts/15940.html","14c0f4ddbb637065e01e1d0e59a3d8d7"],["/posts/16888.html","c4aa58f33bd31626fe12226319d1029a"],["/posts/17303.html","5fae71c6e28e51e658c3ec9e7c0125d9"],["/posts/18206.html","12a79c544cb84e3cc522b8e5f66460a7"],["/posts/21635.html","fca16cfce7c899503732ad862ab51aa2"],["/posts/22910.html","891688d53d31dfd4fb916950dd2aedaf"],["/posts/26185.html","88e93f3f14886af9ccf67d4e9e120f51"],["/posts/27699.html","d5bc296d0c53f51a33511359289a0ce7"],["/posts/34134.html","623ac2b7b90ecfe040e5ec8d8c46b159"],["/posts/38362.html","e854e0a51532ad823b924837ad66c661"],["/posts/4186.html","b20b659fd7d84a732986bf6eb4755f9d"],["/posts/42658.html","dcf830d6e59dfca58b09a9640576da6e"],["/posts/43076.html","69d5b46a3b6063b9439bc88b33644e3f"],["/posts/43618.html","63e880446602a23579ed5516c6db8a1a"],["/posts/47374.html","a8b7c87b0ea2ef6161f922f70ca99fd5"],["/posts/48428.html","7af5301b7b745ce74a9b42847e2c8e62"],["/posts/52307.html","c7d710359c908d8feabaccbb3234c7a9"],["/posts/52812.html","3d70ca6c05fb5a8f5fadb8085b1988e7"],["/posts/53486.html","b2be5084ea75996823396f0c444d7471"],["/posts/53714.html","8627034db215316df6b9d02bd061462d"],["/posts/57395.html","58e9d39255067789ce8bd0a3e6e2f590"],["/posts/58565.html","34fbc3379fa396f38bce509127f6ce3d"],["/posts/59743.html","9e0e4945bfc5a2d34f0ea3187746256b"],["/posts/62255.html","1b7f9c80d1fe977b3b579abb601eb3af"],["/posts/62580.html","db097b83c4596a473c4fc817330ff1e7"],["/posts/64032.html","64e4828ed6bf6fe562da4a9e95a6230e"],["/posts/64329.html","4c3bf7a870524ae41ac924554558f7d8"],["/posts/9968.html","f4d058a53f63f05759288f1054620f7b"],["/record/completed/index.html","4c54ebdeb89bc2b95eaa25af5f83aee2"],["/record/emphasize/index.html","fd861c9021ba7cb300a259c5d8354c33"],["/record/index.html","22ae1285e3115e278db863a0073a681c"],["/record/period/index.html","37f9b197c4b69b14f23ad9596845be81"],["/sw-register.js","a7584877731c4448a150437d448f0794"],["/tags/B站/index.html","13d88661c77472159566ce6f0399d683"],["/tags/JAVA-工作总结/index.html","ded2d7080697a7bb163cdc3aa735d335"],["/tags/Java-Docker/index.html","6ec1772f9c4ce668181b7b16fefc0f74"],["/tags/Java-EasyExcel/index.html","4d44f8883b211619d70817d6a3b41847"],["/tags/Java-MYSQL/index.html","0b78d66982ec0c18861a93cd97a3a523"],["/tags/Java-Page/index.html","c566ba47171ca30bc81e65ee0e45449e"],["/tags/Java-RestTemplate/index.html","6eb35764484f42e22b698b211864a765"],["/tags/Java-工具/index.html","85158d1d6ffcdfb639516403bc324e50"],["/tags/Java-常量/index.html","671f0bb8c48b9e217bca22b104443e21"],["/tags/Java-校验/index.html","f879fa67390a2665c546b7b5d46415dc"],["/tags/Java-配置/index.html","fc0434dd517d464d9819a2ea5d5a408f"],["/tags/SQL-便捷/index.html","4f81bc83ecddb2912803a5b88b8ec1b5"],["/tags/Safe/index.html","3e428e43f89af38b4f4b5fd2658ba9ef"],["/tags/index.html","96e25a80f89ecf27726cfe08631a6faf"],["/tags/java/index.html","22c2a23de14c7522b50bb2af33f35e1d"],["/tags/minio/index.html","fb83aaf6db7b133a065592b3a6f9874c"],["/tags/商务/index.html","e9a9a838b0332bf8cb34539eb9356722"],["/tags/定时任务/index.html","25592d577a4fb15726aa520d896c1163"],["/tags/工具/index.html","8534bf08d20457174de4c340f4d0122d"],["/tags/搜索/index.html","ada706fcce05d1fb7f5b21f5700e3de0"],["/tags/时间工具类/index.html","5723fa2998ae168808cb54a56f97da20"],["/tags/虚拟机/index.html","8b3280da55f71cf83c14b6f3ab05dc1d"],["/tags/账号/index.html","bb1f1f8d56d27af1eda920659979d37f"],["/tags/递归/index.html","61ee0a39e3e8cdd195ed9ca5c5787cf4"],["/tags/配置/index.html","77b980afdf0999b79f789748319bdc89"],["/tags/阿里云/index.html","1fffd411759dd1e09af0b9b7033b9d93"]];
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
