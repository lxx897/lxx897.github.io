/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a519add3a5e1dc3d3aeba7bfeb1a57fb"],["/about/index.html","8696b8aace10a3e6325044bf4c8da89a"],["/archives/2023/11/index.html","42293997dea035fbb3b0757c6323e1d4"],["/archives/2023/11/page/2/index.html","0eef7488a2860cc575c9ffbce42cb5d6"],["/archives/2023/index.html","0831ecb9e61ebf3b92a59b19ee7dde83"],["/archives/2023/page/2/index.html","803b2916175d1046e70dbbadda87dd9d"],["/archives/index.html","88e6b9aa77403105157369ab868a6abf"],["/archives/page/2/index.html","56fef6776d783e91e0906cbfbcd3c201"],["/categories/Java/index.html","5972890c8d6e977ce9fbb9fa14489a2e"],["/categories/Java配置/index.html","160c295dcd1a1e8dfd11878b44ee20a1"],["/categories/hexo配置/index.html","8b59489efb81128356e5a7ec32cb1966"],["/categories/index.html","208ad9ca769b3de3f029858270da32bc"],["/categories/实用工具/index.html","4e100cbc8759968dcfc109c7c39946ff"],["/categories/工具/index.html","4a5eb98719fb7394a0172ebc304bab67"],["/categories/视频/index.html","6ad62f5126e43f4e5d9403f4b23ec362"],["/categories/配置/index.html","480989000b5d7ca0993aec8ee2d00921"],["/categories/配置文件/index.html","3679e21ab29dc14e63c71dd3baf8a256"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","1f8bd78418409d51ae196914c239f334"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c8c7544fa1e2f492ddcf8f36ea05b995"],["/page/2/index.html","ea733c42fdb98357c688ef6ad961395f"],["/photos/appointment/index.html","4b09df1500bf7ccbc1030a3806312765"],["/photos/babyAndBabies/index.html","a56379703895fdcbad253a7870512251"],["/photos/game/index.html","7eb0c9d7f3435da7bded027dc92846ff"],["/photos/index.html","b35d7d845df07e1b2b1d54ae5a162e54"],["/photos/movie/index.html","658b8af2dd5f3516fa2d568606944950"],["/photos/ohmygirl/index.html","2294b113159c75a69a234105aefdb720"],["/photos/outside/index.html","d2ba0d272e458124552cbeca50da4feb"],["/posts/16888.html","086a805840120b75bfc2e231d9a1cf52"],["/posts/18206.html","bb8acd9e78045d0f4e4141022fabc7bc"],["/posts/21635.html","53c56f35ffb06009b18c0adac49920a8"],["/posts/22910.html","5839782c2c0a1893fd3d2b560f2a21e9"],["/posts/34134.html","3122ee50271286864b5ac68387e54823"],["/posts/38362.html","5d4fbc4503bf58eb1dd1b1cac664cdcf"],["/posts/47374.html","d65409654265478bddf0b7e3e757fe9e"],["/posts/52307.html","6807329b0a930bffe494c1d22a11a238"],["/posts/52812.html","914ae6ff3d0544f89db020f37a85d72c"],["/posts/53714.html","5dda90c7d88ca6aa9a023cf2dbacf2aa"],["/posts/58565.html","4c78548761ec19d9a1c2132ca7bf7bb4"],["/sw-register.js","0b294226f1d04462f18f7cd8dcd151a8"],["/tags/B站/index.html","949c9ea8f44450cf151b26824a3f617a"],["/tags/Java-配置/index.html","ed617e5a680f8208d0469ddbf70784e1"],["/tags/Java/index.html","9679c6db75d15e5bd16505b6474efc5a"],["/tags/SQL-便捷/index.html","d89231c694aff82c16a183868c5a2b88"],["/tags/index.html","85f9bb798141a26db67d27d9b444820c"],["/tags/minio/index.html","c7de71016c2ee80c317d6ec4e2f6452f"],["/tags/定时任务/index.html","f311948dac87c4cc37e50e9347c1bf62"],["/tags/工具/index.html","c8bb72d9ccaf209891a525c716b36646"],["/tags/搜索/index.html","0171d5ef0d268ff8d1edb5ce3cde00eb"],["/tags/时间工具类/index.html","a1d966d57e4f0654e272c59b33a7c559"],["/tags/虚拟机/index.html","9cc383dec18d75d4bb91a5820e973959"],["/tags/递归/index.html","238a8f5110ebb6044f814035dc6cbcc6"],["/tags/配置/index.html","e1a62667c7380e7d63cf494b363506b2"],["/tags/阿里云/index.html","3a8f0030b35b980d7a81e9f2f4bfe11e"]];
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
