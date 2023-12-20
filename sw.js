/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","71295d02c1522d0e281d709994f23e2b"],["/about/index.html","ccdc913f865e1fa0cd585e7589dddb6a"],["/archives/2023/11/index.html","210869368b325d79654fd8466dea9657"],["/archives/2023/11/page/2/index.html","a59f470612391a7f309f95e4278ae467"],["/archives/2023/12/index.html","7c487a798a8d4be4f76969c28727c5fb"],["/archives/2023/index.html","02be6886e9d78f7612f5b1f1cc26b96e"],["/archives/2023/page/2/index.html","4417a4f1ea63f6717f52628faa8ce3dd"],["/archives/index.html","b2e65ba51e0cb2984f0e2b39da319ee7"],["/archives/page/2/index.html","5ffc62128f7c1b6a75c06c3abe980109"],["/categories/HuTool/index.html","db9fbb7d87763138f3a320bef07778ee"],["/categories/Java/index.html","ea97ac002b8ed51b5069c9efa7ed4f6f"],["/categories/Java配置/index.html","aabb99992904b4ebabeb6ec706473270"],["/categories/hexo配置/index.html","03ac33f6a9476618e7045e66458aed09"],["/categories/index.html","f43400a654b8f78a989e39aef52a2f12"],["/categories/实用工具/index.html","4107ac96a015160b3f0f628fa3b24c09"],["/categories/工具/index.html","fe317c884339dd8a63a132a4febbd962"],["/categories/时间/index.html","9a6e8be21b1b67e7f899d2d8a47fe228"],["/categories/视频/index.html","56cd331a849228cbadafa5692691673c"],["/categories/配置/index.html","75fa4587fe50a72c11c635af9c5e5dc6"],["/categories/配置文件/index.html","95df7bccc574380acd7a823314b514b6"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","42690ffbb36ebb439896d007eb2fe83a"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ccb6ce899b29561aeb64e5d0ce8da5e8"],["/page/2/index.html","3d4bcb0a95ca73b716407f81b0e53d84"],["/photos/appointment/index.html","6b3ff11e2251990f36b4f8551d110643"],["/photos/babyAndBabies/index.html","963dcc822ee01025331c965e1101868b"],["/photos/game/index.html","dab57c030f15af4c7b35e2844bea9080"],["/photos/index.html","329495797f5a37c70c4ab8ea597b9a4d"],["/photos/movie/index.html","c62388a7dc78f409045c19a36d078940"],["/photos/ohmygirl/index.html","127172c557cd01268c65b9fff4b0c8f4"],["/photos/outside/index.html","0d2cee8cd4787aac5f98bdc49d0ebbfa"],["/posts/16888.html","d2bf770507adcd46c82170eeafb44641"],["/posts/18206.html","01efd7b1c8530e5c77eb116bbf54069f"],["/posts/21635.html","e6c9111b05a39f0bf1be3484808e6eaf"],["/posts/22910.html","8994e0869a1bd36808117b7d2ecfa24e"],["/posts/27699.html","49c71245880dfee2c94f434a9e82f1b4"],["/posts/34134.html","a2488f3fe7c559095bd10ce10a8dc460"],["/posts/38362.html","49d44932c7c75c576a4d8162891dd8e5"],["/posts/4186.html","ee0e342e9d9576a84d18d37e86952693"],["/posts/47374.html","830f7c72d0c4a7ea8ba0c93c03b4de97"],["/posts/52307.html","aad16d5854ac55ac961251d722e8b81e"],["/posts/52812.html","949e46456d99f48515852f310bf79fd0"],["/posts/53486.html","266aeb9ea1db6cff162f42380b6f83a1"],["/posts/53714.html","5529af65cd05892dbbd573acfd121716"],["/posts/58565.html","87a129450646b7961875ca253b74818c"],["/posts/64329.html","01b77e77366a3a3143f52ac120d1fc6a"],["/posts/9968.html","04003d1d2d1336c364eb1e28f0eac092"],["/record/index.html","4c8467b82c02957523ca0e4e51acb6db"],["/record/photos/appointment/index.html","f6f2fcf6ac78bd9e4d40e984ecd52b6b"],["/record/photos/babyAndBabies/index.html","4ff020e9207f2b91a4d01cc801c19cc2"],["/record/photos/game/index.html","799997d3936bed7d9fd2424ec7075acf"],["/record/photos/index.html","8529f09e35cff4287d538916ff782714"],["/record/photos/movie/index.html","66ca4f9b8e4703b48ea9beefdb150e4e"],["/record/photos/ohmygirl/index.html","e78d389211afd6a8facb085fe2461fb2"],["/record/photos/outside/index.html","74f15f5f501a455f0dac47bce7fb61d3"],["/sw-register.js","bccd5776c33c118b185bdab0f3450d9e"],["/tags/B站/index.html","860e29013ef27e37ec65a5d3d0729974"],["/tags/JAVA-工作总结/index.html","00e4b29b7f96943fef1bdcc8a2ea8366"],["/tags/Java-MYSQL/index.html","ccff56ef906f0937b35a2bfa2a4f68dd"],["/tags/Java-工具/index.html","70f5f546cd4f9914b6bbd9fc6a46803b"],["/tags/Java-配置/index.html","1cb87e672aa5bf084830e1730103c4b0"],["/tags/SQL-便捷/index.html","15c79d4410f7e1ba80ea3218325ee904"],["/tags/index.html","ba7e82723050f7638232c6be35839c99"],["/tags/java/index.html","17241707b9ee42854b5be29252bcf761"],["/tags/minio/index.html","6d34e3ead998e7edfb6cf64bef94fb16"],["/tags/定时任务/index.html","9e854f0038a40ce7c29bc74036de71fe"],["/tags/工具/index.html","46dc2259fc1d95bf3e7deabfd357d07e"],["/tags/搜索/index.html","3a05f7876b32ea24f8b9751aed673c33"],["/tags/时间工具类/index.html","b08c21b3ed4b7954f7e9d2129eade998"],["/tags/虚拟机/index.html","6cc132ae2fbab508327aa53285e9317a"],["/tags/递归/index.html","ec35df237397d0bdb14c1c6c4bc8df89"],["/tags/配置/index.html","22a21a691dfe71228cfd4799e4031837"],["/tags/阿里云/index.html","b401f009df2134e7790cd00542722b6c"]];
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
