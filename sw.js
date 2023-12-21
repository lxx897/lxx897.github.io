/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c7a4a7857e57a1b8aed6366cf473c5d4"],["/about/index.html","32797efa2ec00391de413f8055d3762b"],["/archives/2023/11/index.html","cf532c0fefc6e7d49d35a807acd64ad4"],["/archives/2023/11/page/2/index.html","a9879b8979862412e8f53cc65c77b15d"],["/archives/2023/12/index.html","6422ed689f5f081096c2693febe920b3"],["/archives/2023/index.html","a656a9fe236d2ca12926cda9a01552b9"],["/archives/2023/page/2/index.html","14c7082ec8632f41147212e9cfafd019"],["/archives/index.html","bc469e235c52d3323791964e61b25910"],["/archives/page/2/index.html","ebd7a63d340281d918c25e89ed10eb2d"],["/categories/HuTool/index.html","dc6de24143b530243ebeae882f00bee4"],["/categories/Java/index.html","0e3d357bb3aad440ad8c9da3e6792b04"],["/categories/Java配置/index.html","b67571c4a4f3920d5380cdfc30231038"],["/categories/hexo配置/index.html","98c49b5959198b1a25423fc50b238af7"],["/categories/index.html","b32137b0a64a05f3cc184f9217cf08e6"],["/categories/实用工具/index.html","4b0b259bc694bb36198956ffffcf30eb"],["/categories/工具/index.html","7670cd6325c2aa11299256233a1e2db0"],["/categories/时间/index.html","a58909d35cd475ce18f0c1cdadf11e2d"],["/categories/视频/index.html","214864afe04c6de11329b8e497d9c285"],["/categories/配置/index.html","66930601299c87c54021d2ab6e6c1edb"],["/categories/配置文件/index.html","093013f457767b1d0a4f45105baa1ba9"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","62722632e19e6d36e3362a54454cf838"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","7aa33ba30af9521e3e3ce605a025a377"],["/page/2/index.html","f4650c02a105e8b123e3aaa3261412dd"],["/photos/appointment/index.html","4115a2eea9e3642387df77760c5fa957"],["/photos/babyAndBabies/index.html","feef3965d8e05eefef754f2332a3ba7b"],["/photos/game/index.html","c882a198486711c6c91d9a3c109cc3ae"],["/photos/index.html","eda3f1f394b083694bdb597cf3a195d8"],["/photos/movie/index.html","7a2a970fe4aec0789480736b6a3c9810"],["/photos/ohmygirl/index.html","5198f0f239b0da775b60434051d8c9e0"],["/photos/outside/index.html","cba73805d2ad42f97d29a4cce1ceffc1"],["/posts/16888.html","2650501015a3447467da130d82524da4"],["/posts/18206.html","88a8903f435502b0a134bd70b944c542"],["/posts/21635.html","c92c3107ba1f2679c6b4bd5fbdbfe8dd"],["/posts/22910.html","58560c104146dfb0b5ac2cfd91522e35"],["/posts/27699.html","bfe2866cb4b9bd04f662f67f72fb867b"],["/posts/34134.html","547fbdea46da0d5cca3bcee659693a3e"],["/posts/38362.html","48bed5335a15d34fc141a1ffcb82437d"],["/posts/4186.html","79d7de1c3a0904499b71f1ee443225b5"],["/posts/47374.html","adc17ddc6350ee129d4b97aa47674454"],["/posts/52307.html","9c326b601ad3e6061956f77a289b3535"],["/posts/52812.html","21deebe8e8f441ab32ccc6e79a013b8d"],["/posts/53486.html","00dd501b4fe5fecb9740376dc62ca561"],["/posts/53714.html","80ba5e1f7ffb605c6a29f9df2d6da2bf"],["/posts/58565.html","ce81a50ccc5a6754fa92b194b8d4b1d5"],["/posts/64329.html","6d9b0a7530f1130351e3b88b80a3d511"],["/posts/9968.html","4980ff2aec4839a78bf5a14974dd5dcf"],["/record/index.html","5babe9a18115bd5b2a1fbf79d1efd92a"],["/record/photos/appointment/index.html","1e5e5595edf59d7e6d4dbec9d432ddcb"],["/record/photos/babyAndBabies/index.html","a4de098b0264a7779e88de334c82b1db"],["/record/photos/game/index.html","cf5fd4b3c0b075a53683e5f0beba24b9"],["/record/photos/index.html","136de7fc39e49d519b177f1c3a581af3"],["/record/photos/movie/index.html","30ebb480c5d7d4315980ec447a6fc9f3"],["/record/photos/ohmygirl/index.html","b81b8e2302b0c5cab17ee51f3fe06ae9"],["/record/photos/outside/index.html","24b703bad98c17cf773aa506bb0ae5a8"],["/sw-register.js","c14b756586a7c26e630f2deee6fc19db"],["/tags/B站/index.html","c3eec8896d9e801b976bcb454dd14558"],["/tags/JAVA-工作总结/index.html","a822939839a10d3d4d6a2705c6ed93cc"],["/tags/Java-MYSQL/index.html","e291b602a02080aaf606dbfe7a3d8a65"],["/tags/Java-工具/index.html","6e75b5da2dd98ad34266d578dd67d0e9"],["/tags/Java-配置/index.html","b3afbdc7bab6623e0969bb4400ea2ad7"],["/tags/SQL-便捷/index.html","1f1a4fa043bcdbf4441d76553420fc8b"],["/tags/index.html","88309d2d089c291c83246e0d6ebcccbc"],["/tags/java/index.html","f5ea6aba510b27d0e5ab3cbb179eab10"],["/tags/minio/index.html","d99d09138b0ffc1a9715b05c0a60d6a1"],["/tags/定时任务/index.html","d8ed848950ad18e2ebe47ed7fff0d784"],["/tags/工具/index.html","962d804a3303952e33df7321330a7f52"],["/tags/搜索/index.html","144b59b8f7223a6aa89306bccb263cf1"],["/tags/时间工具类/index.html","5e173682c2cd50f15e5c2b72901df225"],["/tags/虚拟机/index.html","4ac63b6d72f436a8bb2f6a04cf42240f"],["/tags/递归/index.html","d7a9156c1d6e1a4fc0bdb7cc0cbfd524"],["/tags/配置/index.html","a5d3086891791dc221e6a438a0d34e83"],["/tags/阿里云/index.html","357c7f5c3f59274ceacf3ca999b5ab13"]];
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
