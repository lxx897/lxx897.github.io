/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ca63ce1e68e009ab54245ac5dfa62f12"],["/about/index.html","1604e1e77ab4e757c50e04eba8afec11"],["/archives/2023/11/index.html","4c4017744a548167e367399b889f999d"],["/archives/2023/11/page/2/index.html","29ad3843320e2811e73c3be1468f5ee6"],["/archives/2023/12/index.html","675cadcd72109bc037ac3a25237b0d24"],["/archives/2023/index.html","f3db17b786f2da2539d189d04e57537e"],["/archives/2023/page/2/index.html","2cc5f306f00c15d0c6896b84e336269c"],["/archives/index.html","7dcbbaab58ed82121128f47feb0b6064"],["/archives/page/2/index.html","12b0afa1dbbf5870001f57f311acc3f3"],["/categories/HuTool/index.html","6b76b01cd508fa82fed5d28f2197a809"],["/categories/Java/index.html","54bcd7d5b6863c81ccc368dfdde5a715"],["/categories/Java配置/index.html","23a2155bc57bce56a65d507921d1d8c6"],["/categories/hexo配置/index.html","6ad85fc7688117fb0a35b7969ae10f7d"],["/categories/index.html","f76aabef38d7a1a8ff8f260443682672"],["/categories/实用工具/index.html","bab71096ad03b5a67b386e04e3741fef"],["/categories/工具/index.html","cd56d55a4108ea9e2fe319c9f6954def"],["/categories/时间/index.html","e8b1cea8b9fe4bf4da75b97e3158531e"],["/categories/视频/index.html","4cfeac7bb8b58d110ced3b9ae70c69f9"],["/categories/配置/index.html","c02b85a29b6172d35652c698b4a05317"],["/categories/配置文件/index.html","defd861b2b004d17bb11bc9b54677c12"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","2d7630c8b87b0a186d87985bd8e18669"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","737fdbda14e313201409069296ae979c"],["/page/2/index.html","e36f0cf40a70f9011dfc46bc659ffcbc"],["/photos/appointment/index.html","ebfa0c0220cc01aaaffabb47d2807737"],["/photos/babyAndBabies/index.html","28a786f9c099755d0393597d81ea736b"],["/photos/game/index.html","f7859789cb7f247dfa3db0a330c4cadf"],["/photos/index.html","335bd3cef86c5517bfd4e6a7c59189af"],["/photos/movie/index.html","1bbd9d934648b50aae94e5f3753e3e85"],["/photos/ohmygirl/index.html","22b91b6b503a2bff63eb5e238e6a430a"],["/photos/outside/index.html","04894bf0f7f10a6386ffa49d554bb653"],["/posts/16888.html","d2bf770507adcd46c82170eeafb44641"],["/posts/18206.html","01efd7b1c8530e5c77eb116bbf54069f"],["/posts/21635.html","e6c9111b05a39f0bf1be3484808e6eaf"],["/posts/22910.html","8994e0869a1bd36808117b7d2ecfa24e"],["/posts/27699.html","49c71245880dfee2c94f434a9e82f1b4"],["/posts/34134.html","a2488f3fe7c559095bd10ce10a8dc460"],["/posts/38362.html","49d44932c7c75c576a4d8162891dd8e5"],["/posts/4186.html","ee0e342e9d9576a84d18d37e86952693"],["/posts/47374.html","830f7c72d0c4a7ea8ba0c93c03b4de97"],["/posts/52307.html","aad16d5854ac55ac961251d722e8b81e"],["/posts/52812.html","949e46456d99f48515852f310bf79fd0"],["/posts/53486.html","266aeb9ea1db6cff162f42380b6f83a1"],["/posts/53714.html","5529af65cd05892dbbd573acfd121716"],["/posts/58565.html","87a129450646b7961875ca253b74818c"],["/posts/64329.html","01b77e77366a3a3143f52ac120d1fc6a"],["/posts/9968.html","04003d1d2d1336c364eb1e28f0eac092"],["/record/index.html","b9d5437c10f8e929b497ef46cfe7e6de"],["/record/photos/appointment/index.html","b5ff080d354f476c99f41f8e8dcba309"],["/record/photos/babyAndBabies/index.html","a0246e6cb5ccafb4a145474e57fa9eb1"],["/record/photos/game/index.html","22b1c1e579c5e39588565c0b418b4c7f"],["/record/photos/index.html","6f37ba418353aa532c007577e1853c15"],["/record/photos/movie/index.html","6bfa28ea89c9fa917e186f8498eb5456"],["/record/photos/ohmygirl/index.html","c7f7df701e081e41936d5283a6eaa054"],["/record/photos/outside/index.html","8b72c4bd6448b6d30295f9d4c2a848c6"],["/sw-register.js","8b5005b290ff80069bf1e03fc48dadea"],["/tags/B站/index.html","6e18b5e44e4a2ad8839a13097062733e"],["/tags/JAVA-工作总结/index.html","1cc485dd9c4365539331b545d9bb795b"],["/tags/Java-MYSQL/index.html","b298b6628a8a0470376e519ae38823ee"],["/tags/Java-工具/index.html","8e7d3871e7412e1089944e085c655bd2"],["/tags/Java-配置/index.html","98beb3c43e497026018edc737a5d9929"],["/tags/SQL-便捷/index.html","d068a67c6c0222b12278eab568b8c1bc"],["/tags/index.html","5c8217c73134d334e78bcefac22ff2b4"],["/tags/java/index.html","aebfe1dcb0000143aab042ebdd4fb70d"],["/tags/minio/index.html","cd884bf0c422c933dd66eec1e1f5311e"],["/tags/定时任务/index.html","ba90252c6f34a6820591c55418a65c60"],["/tags/工具/index.html","488695704ac816b82bfc70c28f11d1e2"],["/tags/搜索/index.html","d5b19cae93f3fbff7d27646936bdf64f"],["/tags/时间工具类/index.html","fcc7afe3a4db96e0d9cdf33f71069f98"],["/tags/虚拟机/index.html","6929f06940a739a9ffa6b495ab260492"],["/tags/递归/index.html","6eb57cadcdc39108cf49326597e83603"],["/tags/配置/index.html","1e144487a0521ea8d491dca7455b41d8"],["/tags/阿里云/index.html","78c035ebc30c05e036db9353892ab5c8"]];
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
