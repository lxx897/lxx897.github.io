/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","25cad276af53daaf7b16d41a0236cefe"],["/about/index.html","097b6274ab7d85922c03e4d3b2fe624e"],["/archives/2023/11/index.html","f5e5bb0b814d7a7171b4e137a3276e94"],["/archives/2023/11/page/2/index.html","2137bcb2a638894e99ee761ed3f8cb00"],["/archives/2023/index.html","99118a472a7956ee495fd22dc5bc119e"],["/archives/2023/page/2/index.html","1c123272e50298e3f19d98a8d5a8c4c6"],["/archives/index.html","a8b07e312e71c89f1e9a8addbae9ce01"],["/archives/page/2/index.html","3e3850471f3138fa6afd03df42d40681"],["/categories/Java/index.html","536372d89697458223f4b32bba2a4eaa"],["/categories/Java配置/index.html","167e81597541b6a1fc1e8f2911771584"],["/categories/hexo配置/index.html","8bbb08758972861d10b63519e491a83f"],["/categories/index.html","cc03e829f043d0e637439746bef4f3d8"],["/categories/实用工具/index.html","3a560f33ce256da34401c1b321dfc143"],["/categories/工具/index.html","7182ba06595b77e1cf2c4971745466f9"],["/categories/视频/index.html","9ae6a5138d2820c4b7a4c63e8f8ee2e0"],["/categories/配置/index.html","500aba5f1758ccf69824cf039761341e"],["/categories/配置文件/index.html","678382d737cb38b06f8c61a54d6f9cc7"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","1a0eba1f8799f064b9c7ad34d5c21351"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","6a2b394721d677cb8e63c8b39394b4b4"],["/page/2/index.html","51bc4f4dfc293025be66fb030969953f"],["/photos/appointment/index.html","62bc6cbb3e20d7446b692fb4b94ae276"],["/photos/babyAndBabies/index.html","8288f20c6e77556a8a227b00dfdf5ec2"],["/photos/game/index.html","1962335d08ebe75467c9c88ba115237c"],["/photos/index.html","261878222fcc5484060c5530679a02a6"],["/photos/movie/index.html","262f3d0f041bbb056734d9d34e0fa595"],["/photos/ohmygirl/index.html","92f5e8262d0416e55096ca7858c835c0"],["/photos/outside/index.html","1a26f6c2a60df59f8c459b06460d8ee1"],["/posts/16888.html","f2a4e843151e7de6dddc7d09ea294fcc"],["/posts/18206.html","7b5efe9ae62dba50b1b4b1aa5fb3c544"],["/posts/21635.html","a3be81c78be14630a6b56f4bbf33a3c4"],["/posts/22910.html","736eac09cd556cf21d53dcbbd3f673dd"],["/posts/34134.html","dc33ae14ea1ea0911c9c6cbc2d266312"],["/posts/38362.html","5771f9cd28fadacad2466c2f6ff828a9"],["/posts/47374.html","57b5f45b12b0a03dc8795c830cbe48d2"],["/posts/52307.html","61039315d9e98f73a866b6d97357d8a3"],["/posts/52812.html","0b984b486f271af19dbc748be31cdbfb"],["/posts/53714.html","f799e404758846224da15dac20cb9080"],["/posts/58565.html","bfc3ec1d5ae498823a83087427dce6a0"],["/sw-register.js","e6acc787ebbb0be13fa326821dc8f608"],["/tags/B站/index.html","91b2ed219bfaf99c9adfd35dfa60380d"],["/tags/Java-配置/index.html","240cbadff957a125f8889ca5643a7b45"],["/tags/SQL-便捷/index.html","9e6af63dd3489f0d0290fb2f6a7d6098"],["/tags/index.html","026cc7856c5fc258a8fe6a28c566d39e"],["/tags/java/index.html","a1215701e4f71fa5a1c9020161569436"],["/tags/minio/index.html","400177899373fef78eaca9c4a51a6f34"],["/tags/定时任务/index.html","9d874f6d9f0f2beafbbab0f123d1a92b"],["/tags/工具/index.html","5ec2fc9ae8aef9339ecd135790d43672"],["/tags/搜索/index.html","4ea0ddf50ebc5a7333faead803c1cab9"],["/tags/时间工具类/index.html","2121e7077ea6e53b5de99562e6b008f6"],["/tags/虚拟机/index.html","e9c75708f000369e9ac991e8f69f2af7"],["/tags/递归/index.html","495707e1d3a4b86168c23aedf83bb606"],["/tags/配置/index.html","78e70ac70045042b8fa3652c0c737c21"],["/tags/阿里云/index.html","ec0fa88b9d8974843ae78d1e189527de"]];
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
