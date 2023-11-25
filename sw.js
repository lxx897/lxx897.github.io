/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","832482cee485a21a8908056c4693a6aa"],["/about/index.html","b916c94102b4702311872424e8b2f4be"],["/archives/2023/11/index.html","735af1b64af56dc538a56d7b351fd3bf"],["/archives/2023/11/page/2/index.html","a1bf6f3fdd490cf6035c59673e0e1c81"],["/archives/2023/index.html","9b560fafdda8b9d92d2592106a7c0723"],["/archives/2023/page/2/index.html","87b0dee0c1fad4dd945d084888a793dd"],["/archives/index.html","02e4e4f75c6bc78f7807696a28447f3c"],["/archives/page/2/index.html","1122bd46e89f59de27e9771174ac1e01"],["/categories/Java/index.html","c50d75effa657f2cd26a260445c4927d"],["/categories/Java配置/index.html","fd7e146496f3129ca34080071c7eb08c"],["/categories/hexo配置/index.html","45e35c7025dc3fc537009635f4ca2d6c"],["/categories/index.html","79888fffbb1e3362b223b0f2c302ee93"],["/categories/实用工具/index.html","dfcc8ee923e03804d0d4a4bbe508d8bf"],["/categories/工具/index.html","e964b615002185ca563036581de25c9e"],["/categories/视频/index.html","39b01fc50c9ecde2d74406c1701957d0"],["/categories/配置/index.html","363bb2ebec765d0b632686093f9cb449"],["/categories/配置文件/index.html","3f9cc19ea988dd877a0ed4599d9ceb20"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","28969f1d9f04a7c9254ff86c80493bea"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","dc141fec99c1a2e38192832296e5b60c"],["/page/2/index.html","24d7bf0cb11fd6e1b0d60f32bd627f87"],["/photos/appointment/index.html","4ddb0e1ed49ee8115d1f8a3c1238535d"],["/photos/babyAndBabies/index.html","b1f66864948713ebe9a0dce36e80ec27"],["/photos/game/index.html","cb06b742ea4bb5fa65db26ab0ff1a8bd"],["/photos/index.html","b39b3e41980dad1f48f46817eb6b1abd"],["/photos/movie/index.html","a6c2b6b8fb1b6a86f085741bd2f91636"],["/photos/ohmygirl/index.html","85d7da20077b95a4b1510f25167a611b"],["/photos/outside/index.html","22a49b56fdb8f4ccb866b38791dd2598"],["/posts/16107.html","4f4121fff58bcbef13e3f3fc4c0c7944"],["/posts/16888.html","8bffb26bfef2a32c5bb69f8e3488ddf9"],["/posts/18206.html","cc3fa1bf1df398dbf949b0acc777f4b2"],["/posts/21635.html","742fffdf606d5ac43278863470471276"],["/posts/22910.html","46f9c0977435b72bdef8e4f4043fedf6"],["/posts/34134.html","b8752775e86411073d6dda6470f5bfad"],["/posts/38362.html","60d20cd9c8c0abf6e6df39290bc76147"],["/posts/47374.html","6c6251f4855d29f0bae7d74d0a90e7d2"],["/posts/52307.html","2b27bdcb65b7789f20cd2efbb73935c1"],["/posts/52812.html","c840a682ce77312bed305bb6d4ef4926"],["/posts/53714.html","1293569c5a44ff9d1b21c22f23793deb"],["/posts/58565.html","a25f5a73631a333d630efed3ef41523d"],["/sw-register.js","9a2771fb5c30473760e0726e6eda6f79"],["/tags/B站/index.html","1699513f4e284b38a7e145c97f436e0c"],["/tags/Java-配置/index.html","ac9b20b4d1c89230c74f1aaf152d0c97"],["/tags/SQL-便捷/index.html","a7c3007b0169e08a53ee3752671b5fac"],["/tags/index.html","9188402bff1ba39fbb0974a0bc852eb2"],["/tags/java/index.html","dbaca46b3ffcc707628a0c86c5f6877f"],["/tags/minio/index.html","990830942d75fe881ab1fe1167da6b86"],["/tags/定时任务/index.html","5626b8d936d9dc1162721402a3fcfbe6"],["/tags/工具/index.html","09234116661915d0f2211668d5d9d29d"],["/tags/搜索/index.html","8c2c284f0e93621877ff73ad0c4655f3"],["/tags/时间工具类/index.html","c79a9b1077d2b78e78b7d2456ede05fb"],["/tags/虚拟机/index.html","173ca220dd4bde7e956a99178c953a51"],["/tags/递归/index.html","99fa9c1cbac7f17961e92b0e863a7bb4"],["/tags/配置/index.html","bb9414bfaa210bdce872ea11d4ffd441"],["/tags/阿里云/index.html","fef97ddfd8def3b4b5fd91bc84eddfcb"]];
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
