/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9624d89a4a45c022d0cc67b9ddcc781a"],["/about/index.html","8b6c499853a9945387d38061d7c23f4b"],["/archives/2023/11/index.html","d18ba1c0885ccae80fb21682ba7fb004"],["/archives/2023/11/page/2/index.html","c5d4a2d30cf2fdfce41988e60e5c9f8e"],["/archives/2023/index.html","79baeb83b45c3fd74a2c9e394393e41d"],["/archives/2023/page/2/index.html","c837a6ab14415480b302f9db338076a0"],["/archives/index.html","41ae4f3048b5920f43c761b0c5b5997b"],["/archives/page/2/index.html","18f1d079454078980907d40c44852db3"],["/categories/Java/index.html","38771346bb0845e18a718bae79ed1b2b"],["/categories/Java配置/index.html","185e7da2cce36fc2b5ef5db87e79fdd8"],["/categories/hexo配置/index.html","4b5a7951779ce683414123d1c326f1ee"],["/categories/index.html","5f821f0770d875785a50c9844d27ce5d"],["/categories/实用工具/index.html","431ea0d58c0e7b5224ee841a2f690136"],["/categories/工具/index.html","51c5f70f3f59b47c3d5f8d4c9d09ccd9"],["/categories/测试/index.html","a0e6df7f7cbeeba4deef8c7ca4c78ee4"],["/categories/视频/index.html","ff0d0d938e286ce6c52fa16dc152f7c0"],["/categories/配置/index.html","b8e9f23699b29124720e1efc1cd4fb10"],["/categories/配置文件/index.html","68651dfc497a8a09031cb0c675102e1f"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","3985a2f38cc974a4d5cb944551ac21da"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","bda44cc3c314ac451ab8ffe01a93a9a2"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","d1d0c44d2dac6e62a15fc56de25e87fd"],["/page/2/index.html","39f03546bfd5e9b342dda6127dd444e0"],["/photos/appointment/index.html","50114c7f22023f92f1cd9484c939ea8c"],["/photos/babyAndBabies/index.html","580d7fa56b79f213e4144ff9bf686c8e"],["/photos/game/index.html","d42abf598ecfd310765fb91266f98e93"],["/photos/index.html","944652b3710cebbe37f44d47c6a6d9ac"],["/photos/movie/index.html","52fe111c99fe3325f69e2d1cbc12ae7d"],["/photos/ohmygirl/index.html","9194c8f1f4ed2683e3bdae67b53503d2"],["/photos/outside/index.html","54311f21c224f55f6a956a0d7c374bbd"],["/posts/16107.html","0a95fa4b9f32488524d12444de90e16e"],["/posts/16888.html","1d4be30bd90e6c4f188bed6a2736bdea"],["/posts/18206.html","28519f0f046e5e15344bf38270bf6f1e"],["/posts/21635.html","d6ad85b4b7a8ec4e3ef4f9fc9e16973f"],["/posts/22910.html","b787aca1e7226f3306bbccf00d1ee74c"],["/posts/25631.html","119a0a6d013fb408d1a308ef27af223f"],["/posts/34134.html","af2bd03d79b9b3d18984ecf71f1385bd"],["/posts/38362.html","d2f7c632803faf58e9700d4880787788"],["/posts/47374.html","0f0a7b9cfa176262f2b907e7ae375a67"],["/posts/52307.html","fa42f3be46e4321ebddb9e428f0f4867"],["/posts/52812.html","f7eefbe9fd553b48b0d35384450ef320"],["/posts/53714.html","35c209791a8cf45413d567cf9b532d9c"],["/posts/58565.html","5c90ebbc40db66c421737e6ac9f46aac"],["/posts/7396.html","f9194e3ada3887e9efd94af7876adef2"],["/sw-register.js","23e9fd0f43d298ac86383a679d8754ac"],["/tags/B站/index.html","679efc9b6d45e7ef6537dab5262551cb"],["/tags/Java-配置/index.html","809c1e5e34fcb422ee83ceba2673d3f5"],["/tags/SQL-便捷/index.html","057abd2fc9bd0fc3a39d4f5a70e5075c"],["/tags/index.html","cd6d233b31a73857d287d4b48d72642f"],["/tags/java/index.html","a71f0a6e816df320a66196c2c8b64fe9"],["/tags/minio/index.html","ec2f845701a79db9511962a4cd9c85eb"],["/tags/定时任务/index.html","5659aee3f8e03bd3386814051fef662f"],["/tags/工具/index.html","0379b79ef3421b6d42fe9323b160e299"],["/tags/搜索/index.html","1b09ea4a4979eb5f16c646971e4da349"],["/tags/时间工具类/index.html","1d016630c42ad724c47719f391270d93"],["/tags/测试/index.html","2edaea6280cb254d90eafa78fef7bd75"],["/tags/虚拟机/index.html","715a2b08aa7b5ed5585ffa2e1cfaf2fd"],["/tags/递归/index.html","475d754af4031f8a94be7cbcdcc81731"],["/tags/配置/index.html","1cf1fc12771e4b5e011722c9ccad0a08"],["/tags/阿里云/index.html","7769dfb5a918fdf683ad655008c76cd0"]];
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
