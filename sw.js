/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3ab47ef569587be9d88c33fc76692674"],["/about/index.html","edd8212c731cda40dd0e35efeab6cc58"],["/archives/2023/11/index.html","9fb71f70e24fe7ff31c176ad3bf9cfe4"],["/archives/2023/11/page/2/index.html","3010a974586725b46e3a810792af0003"],["/archives/2023/12/index.html","66e4d8878878226651ed06f75df6edb9"],["/archives/2023/index.html","eddc3e4c62e32e465ccb31c14e69c188"],["/archives/2023/page/2/index.html","c12559fecb049e46551aa81992224382"],["/archives/index.html","b34bb4634101b811c91d0bb8ba729526"],["/archives/page/2/index.html","4bf6cf8f6bc38b77bd8e2304a1c2b337"],["/categories/HuTool/index.html","ca52466a791a9fb87662cc11fd58ab40"],["/categories/Java/index.html","e0531afd7d95dfe6c32215f7412cf8ad"],["/categories/Java配置/index.html","db2e43f08e171172f20244b7b960111b"],["/categories/hexo配置/index.html","0972b0337e98e71004b07fbe709308db"],["/categories/index.html","d81e4224dfe40c6e3f1b1ee80f0939ef"],["/categories/实用工具/index.html","277904f19ff6c9782ee9c4b4e41f113c"],["/categories/工具/index.html","b28f58a700324f0d44d43f1dd7553ae8"],["/categories/时间/index.html","617c964ff10394597eeb61032ec2ea1e"],["/categories/视频/index.html","a49bd13adc8c6231ebfe0be83f5fe5f1"],["/categories/配置/index.html","584c4fb1e92d4f5df65bd26f81408c69"],["/categories/配置文件/index.html","c5bb76a9aa65b4de07728264be4a0ed5"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","65f8b88c7c90f9a1e1263de780a29282"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","809d8f84e584aab91abb00c49e6e02a5"],["/page/2/index.html","d79408b99111e108d6beae542d26aeda"],["/photos/appointment/index.html","e05918b4959ddc7b0f776d97a1234ca2"],["/photos/babyAndBabies/index.html","2533b7123940424ed8e9b1337e76e542"],["/photos/game/index.html","a154e2ca21751c969d97c234e1964d69"],["/photos/index.html","d0ed2ce45c43334623cc0277e0bea533"],["/photos/movie/index.html","d3a99d6f7a1be9b6e192eb36bcdb3a28"],["/photos/ohmygirl/index.html","ad43d9056098ed4d3473196b68bc2341"],["/photos/outside/index.html","a91abb6a877359f155bfbb14c1b077c7"],["/posts/16888.html","d6c856578b8136daca9f481dc1765415"],["/posts/18206.html","1213092a2590ee9fe8b12dd4a758e397"],["/posts/21635.html","6235fbe8b7162c7fa5e1cc3afc67a966"],["/posts/22910.html","3a0af772c43c3fe32f71178d9fe1aa23"],["/posts/27699.html","e4b9ad5c5184c740608e65567c3b941b"],["/posts/34134.html","8ba758c8ce8450e887a720bfab50680b"],["/posts/38362.html","f1954999fdc6f0ff34a7cde1d5798d21"],["/posts/4186.html","874eeb7acbee9c447caed3f8b2ce53ba"],["/posts/47374.html","946f6938941b1c57ab1605a2ebaec532"],["/posts/52307.html","b2c7caadb7d64e0d82565b95ec65c460"],["/posts/52812.html","28ec469cc077c15cd5a504ccd3ed49ae"],["/posts/53486.html","38c68dfd7e886317e24500b68fed1345"],["/posts/53714.html","9eec7e847e24f58e9361fb7a9f501f67"],["/posts/58565.html","a431e9e38270b11c580bd2a819154008"],["/posts/64329.html","c17415e3c610e6ec11405e2af966216e"],["/posts/9968.html","21fbc7332f5ff37202474d7c59b11aeb"],["/record/index.html","f12e9941cd74db347a77af2eda421e3a"],["/record/photos/appointment/index.html","d6a4c5bf556667e9248c7d44555ce5fe"],["/record/photos/babyAndBabies/index.html","87627716d556caa29a4dd60db96a772e"],["/record/photos/game/index.html","882df456d679513e88fdded19426a2cb"],["/record/photos/index.html","9e5b74915e01d00c5f5e7820e3189187"],["/record/photos/movie/index.html","8719dff8bad406583de84c43f30d2063"],["/record/photos/ohmygirl/index.html","5edb1b2251eca97b617b9887ce692fbe"],["/record/photos/outside/index.html","8c79d372894d3d698e6e79cd62a4c992"],["/sw-register.js","ac521fc4b89913036e0b1bd92f2daf39"],["/tags/B站/index.html","9204af07f0a272a5a8dbe7dd4379f03f"],["/tags/JAVA-工作总结/index.html","fb20c40440907a91799fbbd8cd216c58"],["/tags/Java-MYSQL/index.html","d07288f0a6e83f629491846853ba0be8"],["/tags/Java-工具/index.html","85ee5d9793b0cb0ce88450a9d24d000c"],["/tags/Java-配置/index.html","2e975d3c5d6f6722a74c7704f70c364b"],["/tags/SQL-便捷/index.html","7bf464217062e04c56144d916ae5d912"],["/tags/index.html","00360aca71d279f506f590999042e885"],["/tags/java/index.html","06e9ca62bb12e9cdf09a271f67eaba02"],["/tags/minio/index.html","ec24adfa224f6b98cf018c48549e0351"],["/tags/定时任务/index.html","32f5ec73bc08ac9aa75a0bbfb376e28f"],["/tags/工具/index.html","f595b4a66431c95b41bf0f599668d511"],["/tags/搜索/index.html","397f57547267d2dc5b4e4615fab06b62"],["/tags/时间工具类/index.html","96e16f5b4318ab33051c82ab05347b52"],["/tags/虚拟机/index.html","fe856f4734ef5e916d2dd3d25b0df760"],["/tags/递归/index.html","16f89f3d8d3135ce4fa7f523745251e5"],["/tags/配置/index.html","69242ad2a74441565a45fa213c6d9afb"],["/tags/阿里云/index.html","0847c6c4ea4c85765ae73cd8dcd0dd0e"]];
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
