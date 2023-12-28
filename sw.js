/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e52e4c5d93c280df79293a3cd22b456b"],["/about/index.html","bd9cad4fb77b2144d3e4c9cfb6e8ddfd"],["/archives/2023/11/index.html","49f231000b9f575891d95b370b28335f"],["/archives/2023/11/page/2/index.html","a0941c0aeb5f470f7f82f5cba4345ecb"],["/archives/2023/12/index.html","fe04ea1ac831b1174863ca61e18a5593"],["/archives/2023/index.html","c7f431318ad2b549ab406127241844fb"],["/archives/2023/page/2/index.html","cf1de4640866607e123bb2a4c628d799"],["/archives/index.html","7a3dd1949f4a44193c7842d55956c997"],["/archives/page/2/index.html","44005d87ecb17a49c46db31e2c5886e2"],["/categories/HuTool/index.html","7bded2e3ef500919bf97de4f68625bff"],["/categories/Java-MySQL/index.html","5d54023ddec72858ddc474c8501b7d75"],["/categories/Java/index.html","62fe0a89beccfdd1d08df533c39a6c47"],["/categories/Java配置/index.html","b29d4550c1213721fbe84d015472ddf1"],["/categories/hexo配置/index.html","8872b630518ba4bf8db952617ead738b"],["/categories/index.html","38c2d8dafcfa985132f40dd494fdcba3"],["/categories/实用工具/index.html","83a765e1a178457c37dbc306736c79b8"],["/categories/工具/index.html","7997d532028c90f4a8dc56cb6e47e1e4"],["/categories/时间/index.html","aecbe5711f8bea1d7e23dbc6be490063"],["/categories/视频/index.html","5c02a348bc65b36867d199a0e9640426"],["/categories/配置/index.html","651c3a81a5036c1205e1f987ab0cab55"],["/categories/配置文件/index.html","f027d5c1c960050c7738d3c840594ba7"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","fe9adfa92531e76d36c844dede6a20fb"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","cdaa7b5f2ea01c99936ed358cf2dac16"],["/page/2/index.html","25568657cae6bcccf2d4cfadd7f3f865"],["/photos/appointment/index.html","62b5ce525c3043e7d2f87cc87952edeb"],["/photos/babyAndBabies/index.html","97be7a46c7763ac60e204394428fdd3c"],["/photos/game/index.html","de9b868a9d0a843e408ae7fab919c545"],["/photos/index.html","165c7f646e5b05682482cc4e4deef2bd"],["/photos/movie/index.html","b4a343e5a4b9a7e8e75dc97d8e764c87"],["/photos/ohmygirl/index.html","0bca6093027fc26ea0a7cb346f421326"],["/photos/outside/index.html","83990ae26a2b50f3c56017a9b8d4cdc0"],["/posts/16888.html","5d5a3750b3b0b8d4043304d7df34601c"],["/posts/18206.html","f43e9dedca8cd4fd1743a4f4893b58c5"],["/posts/21635.html","be3365d885f610a4cc4ecda36095e159"],["/posts/22910.html","7dfa9492365e1e58387960220cca7041"],["/posts/26185.html","7d260cafc04d99e5e6939a699eb433f3"],["/posts/27699.html","85f80f6092557a861fc5f42e7d2b9db1"],["/posts/34134.html","f6260d3e21bfc07c5331835b649eebb5"],["/posts/38362.html","3d02cb06ff9e1acdaf565000ef1ddaa9"],["/posts/4186.html","57783f726e242402721aaf4a620c4cd3"],["/posts/47374.html","8da9a5e0e3a2315577d9c4e12e6e864b"],["/posts/52307.html","b2aa004c0770860ce67966187046ad2b"],["/posts/52812.html","295014943c5d52fd435b73959a29d37f"],["/posts/53486.html","fcc8b629f29784ade992cf3e535c4a40"],["/posts/53714.html","ad02c1cf5a0ae16dc814defa1ebb7d65"],["/posts/58565.html","dced4015b5620974f7fe690205067d65"],["/posts/64329.html","a7e3066dfc60544983a807b9a335aa69"],["/posts/9968.html","e00c156404da330ccdf7c23bbe53a679"],["/record/index.html","98635785e91df8b4e910756e7ded30df"],["/record/photos/appointment/index.html","aacb81e188e595debef1e34ad2d33d27"],["/record/photos/babyAndBabies/index.html","c2d7881ffd3cbb63f6e06c825b8f4310"],["/record/photos/game/index.html","c3115a0c4c7661653128e484f2db277a"],["/record/photos/index.html","553b6c66904b2bda6d58757617d5c24c"],["/record/photos/movie/index.html","3f2ab5425485c6d4d4fc9e3c6e7411a1"],["/record/photos/ohmygirl/index.html","305caf40a2646c68ffb31b5201d37e5e"],["/record/photos/outside/index.html","49ca5e51cfafca806d8aab7e291aba05"],["/sw-register.js","6012e31bf829ba1680d3d8816ccb7734"],["/tags/B站/index.html","46452b7931bf393f2d208ee3f7de6e80"],["/tags/JAVA-工作总结/index.html","77a1f7d25843f24badbc2a66e247de1c"],["/tags/Java-MYSQL/index.html","f1709d1432303f301da81d1c3d521814"],["/tags/Java-工具/index.html","4d243489ce5391a10693cec07990be20"],["/tags/Java-配置/index.html","8e718791f2fe3128f0aa2d4cfd426a57"],["/tags/SQL-便捷/index.html","1b79aaaef07bb7095384ba4b7927fa76"],["/tags/index.html","cd877fa492f73d070be3566bcdd4481a"],["/tags/java/index.html","c67f049b6cd602ea55b994bcc6757594"],["/tags/minio/index.html","72dbae8034b022524386f74e17d3cfa8"],["/tags/定时任务/index.html","1eadf239ef6a6929693e5e54f8b87620"],["/tags/工具/index.html","8dbaef383276eefbcac1283765a44483"],["/tags/搜索/index.html","71bcd37b7788b7a5b5e96f93a5261f12"],["/tags/时间工具类/index.html","3ae53ccaac38e706db6bd6f9619beb43"],["/tags/虚拟机/index.html","8f0a7faf18de0d585b90bd981e189801"],["/tags/递归/index.html","e73843f6a5151d1b159be5589a62a388"],["/tags/配置/index.html","b142970e0770f91550ac4cd7c7ed0d82"],["/tags/阿里云/index.html","dbe9dbbe6feee4b77174b0ab761ee953"]];
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
