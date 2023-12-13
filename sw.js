/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","679469ec24c6c4ea176acfbe768f3e01"],["/about/index.html","a94f3d72645c2eb4832a768149805ed0"],["/archives/2023/11/index.html","70564d6a92568f414d7f971b61f4e3c7"],["/archives/2023/11/page/2/index.html","78bb929951abd38e8b669f0986f0846e"],["/archives/2023/12/index.html","eea5282326e1a52d361c6f453c1c0ae5"],["/archives/2023/index.html","91d620a4e03dc35c5e9119018527dc54"],["/archives/2023/page/2/index.html","c6a29a4765a22e0d2fcbf37feab2f2f9"],["/archives/index.html","6398bd45d7137ef10fdce69f7e8fdde4"],["/archives/page/2/index.html","8736c0c0c542a1e80e3f9bc37e6bcf06"],["/categories/Java/index.html","69a0b5a55670fe363b5cedef7f404394"],["/categories/Java配置/index.html","b4673a860817e25184cbabe523b72fed"],["/categories/hexo配置/index.html","e63a80429ecf6778a99cca94db320a00"],["/categories/index.html","94b68f63cdac68e840b4c6ad2d858fd6"],["/categories/实用工具/index.html","a4db7e84b0d635ced44f4da7aeafcc3d"],["/categories/工具/index.html","61870e53c21d53991c118e4710882dbc"],["/categories/视频/index.html","1b8b32a7299aa0d4d81165d3ee8fa097"],["/categories/配置/index.html","feeea0d2183604dd8e7a2e69542d0000"],["/categories/配置文件/index.html","ae14feef75d277534d3836162ac45819"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","06750502e9a2c5abbb98870b2adb0387"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","dc04471b15a28eccd092eae75d890f08"],["/page/2/index.html","a0b8ed48fef2337fcb0e97b2572f6d8c"],["/photos/appointment/index.html","d93c64e9093be972e97cd999334843c9"],["/photos/babyAndBabies/index.html","d6ff3f9735ad3d830b06310007810fd0"],["/photos/game/index.html","5b1a176779a93d436108a65086ac3488"],["/photos/index.html","0e9e057de05113f6b729a18261a3da4a"],["/photos/movie/index.html","375435206ec9406725ab08c649cde6f1"],["/photos/ohmygirl/index.html","9061c6442db279ab9aa1e68cce57795a"],["/photos/outside/index.html","16a5ac7348366305376acf8413d846e9"],["/posts/16888.html","0fbcf8f4c12b2adec340b677f4c3346e"],["/posts/18206.html","6e67c445d6ba108ea8bee04ac94405da"],["/posts/21635.html","78c8e4954c49e032a09510163cdc57fd"],["/posts/22910.html","4db808aecbb114c189f70f1a68679d58"],["/posts/27699.html","48a30df24c54e09dda3a8e0b56db99e3"],["/posts/34134.html","c88d7a81efa25649d83468785709dd9f"],["/posts/38362.html","dead67224d6b3e12d4673b64df49bf21"],["/posts/47374.html","54c1e15c4b3e3fd8a540dc9f57194811"],["/posts/52307.html","71adaf6451fbfbf2bb67f08be04bcdc9"],["/posts/52812.html","2ef2072c619463e5d004c6226cc2bc80"],["/posts/53714.html","eb604a0e6046c0de56006a7dc87818c0"],["/posts/58565.html","002bb40d6a019906b1e1377724b14fcc"],["/record/index.html","4c6c33cc9a6fb53f86c6fe398ac321bc"],["/sw-register.js","b4d137b29e33fdd33f09c287481bf6c4"],["/tags/B站/index.html","a9499808ce6b7fbb3560a9addc5e22cc"],["/tags/JAVA-工作总结/index.html","ae8715849818a1709ae5b7c0d32d9a5b"],["/tags/Java-配置/index.html","24ea4d94e23819a3ff859c649811db10"],["/tags/Java/index.html","bc54d53ecc93a3e5959f0cac94e399f3"],["/tags/SQL-便捷/index.html","13ccf28a1e5e16da74b45ea4d7aa5c24"],["/tags/index.html","553e8dcd201c787d5160be0118b58531"],["/tags/minio/index.html","01cfc2af18afd5b4eb6a659fd85f88c6"],["/tags/定时任务/index.html","1c703463fa1754b9a4ce945f47af7015"],["/tags/工具/index.html","e908d2c4f69b6c9659b25b5a01dc4057"],["/tags/搜索/index.html","a9d96eccbbd5e07f078a5f6006a30917"],["/tags/时间工具类/index.html","ff3e3cc3120b51338057930ffeade022"],["/tags/虚拟机/index.html","1155efdec1967eae70f9e0eb4064daed"],["/tags/递归/index.html","cfb56cab331cacbcafbd13115284b541"],["/tags/配置/index.html","36103e71c17b8086c231ad4a84a036f5"],["/tags/阿里云/index.html","2d656fd33fa445c2b931f0d166c81fd6"]];
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
