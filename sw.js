/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e7f13c62da7e301d92826231f4ddad0d"],["/about/index.html","2b844e33c903eb8f5c52b0bf6c59e0b7"],["/archives/2023/11/index.html","c6e65bfb0d08528754af85082184acdf"],["/archives/2023/11/page/2/index.html","a466c94ecb304b8377ec3a836c3f3ae9"],["/archives/2023/12/index.html","59434670e25386240bf9332478d5500a"],["/archives/2023/index.html","6718d3bbe8778ed1dbbba9cf38b47dc2"],["/archives/2023/page/2/index.html","9849f30626790f437049a067a8cd86e5"],["/archives/index.html","f51a503e71086633fe1a9e5a68ba6a92"],["/archives/page/2/index.html","b3f81a68262f670802bea0ad63d8bb12"],["/categories/HuTool/index.html","3e0e9a61a1b941b71d6fa32537b8f626"],["/categories/Java-MySQL/index.html","c31b9382e5ca1aea3b7af907f721088a"],["/categories/Java/index.html","eed559907d501304dd40505f436609b3"],["/categories/Java配置/index.html","329c7a324a409d01ad50f80532090c81"],["/categories/hexo配置/index.html","28f74b622d8a029c069f4a4d9c438343"],["/categories/index.html","9392a80d2322a1cec919fab58f709e90"],["/categories/实用工具/index.html","9e841476c128da13e5e317b991eb8815"],["/categories/工具/index.html","f3335e325dd8ce83413b60bf20f54721"],["/categories/时间/index.html","5acba267a0b3ed4242ee0ddb721349c7"],["/categories/视频/index.html","dc38025f283717f7dc550e6b22ecd02d"],["/categories/配置/index.html","b183330f3faf2357ac6a4a5ed4918e5c"],["/categories/配置文件/index.html","f942080b44bae06901e6c9b579f678cf"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","490281ed712572f52139b7d2a7a4453f"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","00a0460554788697eb1f04f783040534"],["/page/2/index.html","386aa20b39a1e4f49fcf1dc5fd4612d5"],["/photos/appointment/index.html","451df64c24e0b5d2a0e1eb208a01b335"],["/photos/babyAndBabies/index.html","14bbbf582bf918519842f92cf30d3d06"],["/photos/game/index.html","eda03bc54ef496b2a00341c2af868349"],["/photos/index.html","b2d3cf7b1c1f9a7666b64af1e9e52f50"],["/photos/movie/index.html","c3c684ee15f9824ae59256af436679da"],["/photos/ohmygirl/index.html","32d8df69aa174121e8f4e2917d3a78bf"],["/photos/outside/index.html","a8471e3f8efe30d5d637f1dbbe161344"],["/posts/16888.html","901ebe867ef423a2a53d60d370a9e13a"],["/posts/18206.html","c07d0ce0fc8e78f3a6c9e4c32c1473a2"],["/posts/21635.html","6b08519dad4dae45bc8176658aee7da3"],["/posts/22910.html","7e490351529b3418c7e796fdbae419b2"],["/posts/26185.html","50f6f0b238ee028d5d02ab982c750ecf"],["/posts/27699.html","5bc8542f0de086018a658bfc429b88ed"],["/posts/34134.html","e8eecf925ed5278f6265102f14d93697"],["/posts/38362.html","573f8d662732d349bd58bab2a3571b75"],["/posts/4186.html","87ea06676d0564d445fb9ae239a0108c"],["/posts/42658.html","79be36c7cb96d87cbe7cba66404552e4"],["/posts/47374.html","8dd15f9197e34bdbbeae16fe53b04c06"],["/posts/52307.html","64c6679f2a0cd59ea9abf17629537b23"],["/posts/52812.html","a7457ddb8dd96f864be9b899107f488b"],["/posts/53486.html","597ef8701b7328b0e7fa4a5d3d69f71c"],["/posts/53714.html","21efa8657f9ca25058910d7203a988b6"],["/posts/58565.html","7e31765112e85115a70e1bab908bf060"],["/posts/62580.html","2dfab2f3d96daef6c89a5881e453d7f8"],["/posts/64329.html","fbc407cc3627c1b6b6bfe883f8970f93"],["/posts/9968.html","97e2d5ca90c728da0e7a1fa8a68951f9"],["/record/index.html","d2eb3fe5f5abbd3d61c81f62a902b1c3"],["/record/photos/appointment/index.html","1fe605bcb4c748333f0c9ae053e2316e"],["/record/photos/babyAndBabies/index.html","e82bfa1cbec88b816d42d29beab7fe02"],["/record/photos/game/index.html","9f44c36e904856915a26a01a33908740"],["/record/photos/index.html","7bee3213875af6b69e9ac6590950fe32"],["/record/photos/movie/index.html","64d270c0d28365bc3f05cce6deac57a8"],["/record/photos/ohmygirl/index.html","6b41cf6ebf468855fb6f1aeb402488f7"],["/record/photos/outside/index.html","28dbc580f83ce86ac944a9dc90cba1f8"],["/sw-register.js","1bc0a61ad46de235a005109aa3b701ec"],["/tags/B站/index.html","fdf71d8da3909893038766faab91c1cd"],["/tags/JAVA-工作总结/index.html","dcb4158f5be17c50d39b76d806315673"],["/tags/Java-EasyExcel/index.html","b5613be71c3d214596ed249ad39bc046"],["/tags/Java-MYSQL/index.html","78b82f74afc4fcabd14e477f2ebaaf4e"],["/tags/Java-工具/index.html","719960ff52286b88ff75e660faa68fc0"],["/tags/Java-常量/index.html","7b5f392c71f70f858ac53424bbdf95bd"],["/tags/Java-配置/index.html","717640662d41d828b16509f608ecd107"],["/tags/SQL-便捷/index.html","d591ea0cbe77d785b4346ce2a905ab6b"],["/tags/index.html","2c389a3e0ec120c604e2552c5fe095d7"],["/tags/java/index.html","aa1b5f94515a4c50ebb66b83867ee205"],["/tags/minio/index.html","481af232b765b7912406109ec8a872cc"],["/tags/定时任务/index.html","6e865578988cf4f5d3dcd81cfa9bef40"],["/tags/工具/index.html","029077f46e2ae912a0d8c2fd070b3d7f"],["/tags/搜索/index.html","5f765c4c0effab67a0d4c4f9424885f1"],["/tags/时间工具类/index.html","d65d22b06d951c52a0301ec4351c9e4f"],["/tags/虚拟机/index.html","545581b655788813eb3cfa6ebab21412"],["/tags/递归/index.html","b0901c9156e83adbe17bfd08c0a66b3f"],["/tags/配置/index.html","a1788849c351469ba44444ad0476550a"],["/tags/阿里云/index.html","7b5ed4afaa6b3e2376eb8ae7c096b5a7"]];
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
