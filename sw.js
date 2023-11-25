/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f3fda2990a8da3887f8fd7211f6d907b"],["/about/index.html","189316b692b409554fcfdcc2cf83be01"],["/archives/2023/11/index.html","5bdb02382e3001dd6b99574d863b7524"],["/archives/2023/11/page/2/index.html","72fbad5b76ee031472716bbada373dfa"],["/archives/2023/index.html","ed03f368158a89af381b4a25e6e6bacf"],["/archives/2023/page/2/index.html","facc99137d69bc062edb33c3ef468279"],["/archives/index.html","cf44f21657c9627ad1591d1af4af2394"],["/archives/page/2/index.html","4ed098442740a0fed5fbd4bf1fcc099e"],["/categories/Java/index.html","394216a3be971bac1f714f3a046bf787"],["/categories/Java配置/index.html","46df1e8b518c08d4b569e152dfd8bbe2"],["/categories/hexo配置/index.html","6a1c2592357573fc4c4b6d9ec557fe4d"],["/categories/index.html","cc0e21fc9dfccd616e0da91f37456f89"],["/categories/实用工具/index.html","3a295fe9520464c4e5e130ad734a8839"],["/categories/工具/index.html","23169d5049d4a82564d4c9ebd8b8c87e"],["/categories/测试/index.html","14a5a6c66fb835265eb6a2d1d3920391"],["/categories/视频/index.html","81446c8d2052f182c7f4ed501de77863"],["/categories/配置/index.html","0fe98f32b99b180182745db79fe42167"],["/categories/配置文件/index.html","4d32932193817ff26cee61ee52569f42"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","63f9bd11c98f969b1cd4d3d096d30ad9"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","b321767da66102b7eacc6b817cb38c14"],["/page/2/index.html","714042d3a06afb200c1997ec721901ec"],["/photos/appointment/index.html","39bb26be803c6bed245cc6871c11f60f"],["/photos/babyAndBabies/index.html","3f3c060fb5b2c24073d62440147e5ee2"],["/photos/game/index.html","20b087ec22ccccd7ea05623d1e8ebac6"],["/photos/index.html","2e38ed179a1fe2ed2319c3270d6bbb24"],["/photos/movie/index.html","09ed55e3297f92e03fad973778307359"],["/photos/ohmygirl/index.html","aa315934a71409867330ea5734d47308"],["/photos/outside/index.html","c528ac12b30db23f07641da315cb7ca8"],["/posts/16107.html","f89c6f05a29eb488e11f908d8269667c"],["/posts/16888.html","2aa6cbd571918183742fb6a35f8b8faa"],["/posts/18206.html","5a3c205700417e1ba86a1ba396f714b6"],["/posts/21635.html","2f524aa535d04dc6d7a9ea68b3cd201a"],["/posts/22910.html","79fb35cfd2e984775c5a9348244c81c7"],["/posts/25631.html","9688a7fded2844043fe228eeb1bec091"],["/posts/34134.html","a788ca209690f85096461ddb4d7db1c8"],["/posts/38362.html","6afe1f4a6d447872712d8b04401045e2"],["/posts/47374.html","a4bab4d9378c17836074408484ff9229"],["/posts/52307.html","9d30d8984054847bd519ad8340a130af"],["/posts/52812.html","235120417b4fa2452e53fb692dd16e21"],["/posts/53714.html","f6d5d77f3187b9cb1facca866793653b"],["/posts/58565.html","48bfa012d588c2ea3d76c48c85145098"],["/sw-register.js","e2b3d1ddf69b878e46e2d0d52910c3b7"],["/tags/B站/index.html","0d3de805bf0a089ea550a6067c3bd9eb"],["/tags/Java-配置/index.html","662704ebdf22ce6ca434daaeaf2c4743"],["/tags/Java/index.html","41b793f2f7c7a63340ec01146243053c"],["/tags/SQL-便捷/index.html","4d695c43a3717b10626fb524ee9f6b41"],["/tags/index.html","9dab1ddb9dacc9b53aa560e1225b0bb3"],["/tags/minio/index.html","e0ff3024bb05bb1f3ba8797ba1f1d0a1"],["/tags/定时任务/index.html","47a595b8f698876084468186038179fb"],["/tags/工具/index.html","eaf0163601d4d0ba81ce43528c87395f"],["/tags/搜索/index.html","a580eb716442cb0b9f2a60be3aa77425"],["/tags/时间工具类/index.html","881122da825aef02fcc3bb96314bba64"],["/tags/测试/index.html","9832bdd1e106e8d3fd85d37758b17996"],["/tags/虚拟机/index.html","edb3ae59ab2f0800bc9c247003e21d02"],["/tags/递归/index.html","d90c9fd6c5051d057b01c71abb10175b"],["/tags/配置/index.html","66580eb257eab01192f5c88c485bcebe"],["/tags/阿里云/index.html","a4b4acd9fe6647fa9ed607616ac929ab"]];
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
