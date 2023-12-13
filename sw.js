/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ba0bb7cb63a7e81a5c5a32ff6b92c15c"],["/about/index.html","a6c7cfe17aaabbfe7d2e39c145568d2e"],["/archives/2023/11/index.html","4d10dbe418be9925a00c3b958a762301"],["/archives/2023/11/page/2/index.html","de0e9fbadb0dcc158d90322f30ee2a1f"],["/archives/2023/12/index.html","ef22e9025cda7f30ea282b2f6405acc1"],["/archives/2023/index.html","544674968fb7ec149fb6980deb8ba28c"],["/archives/2023/page/2/index.html","e2588dba76270e3b5f44677504a1f3a4"],["/archives/index.html","bf53467e246c595549f9db8dbd9abf44"],["/archives/page/2/index.html","f39000b49950b460b2776d41693dd293"],["/categories/Java/index.html","eeffbc545d697119779f29239ebcdd85"],["/categories/Java配置/index.html","d2874454be603ff288f3beb9f355ccdc"],["/categories/hexo配置/index.html","66a473e985d4709220bdcb496fe4a7c7"],["/categories/index.html","b9d1aea94e86809548d9239f004022c3"],["/categories/实用工具/index.html","a75160ca596564dcca47cccc7b358634"],["/categories/工具/index.html","dae22b99effc375cbaec36aac5944884"],["/categories/视频/index.html","1eefd30fdc8fb22dba4d29fb83309170"],["/categories/配置/index.html","3378a719393a3c8999cc91a872f8b35c"],["/categories/配置文件/index.html","e11659cb7e9b0dccad0f19f4d72c3f3e"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","a422c4f0c934839d617d3a1ac387b8bb"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","77199784ac9d3035a1328fa74c9a2c37"],["/page/2/index.html","4287ecab10ae244c841c195cc3041f36"],["/photos/appointment/index.html","4eb105ae3fb6722fc0b5dc4639dbf24f"],["/photos/babyAndBabies/index.html","8574e993dc438b6dcface5e11297ed54"],["/photos/game/index.html","39c889c5a2aed8591bf22b51f760b3bd"],["/photos/index.html","681c715cf614b4e9c1464b293bf894cf"],["/photos/movie/index.html","b721e6fb66969a25c85f1bed60f974f4"],["/photos/ohmygirl/index.html","e9a8c70fbfc7fca94a5b7890f2652448"],["/photos/outside/index.html","461a6dab4dee80670bbd788ebe6a0024"],["/posts/16888.html","36ccd392835ea92e8697dc413bbedb8c"],["/posts/18206.html","f63c3db7f7a1b72cd91538c91854e221"],["/posts/21635.html","fe10fab79e3aace87162fc458733bcb0"],["/posts/22910.html","54adf7f58621d29127506d69c40907e8"],["/posts/27699.html","c74cfccc1bd0b707b22dbf1159eb0713"],["/posts/34134.html","ac098f51ce1219891cca3a2c0878feb3"],["/posts/38362.html","76512295de2d73d956d6c18caab623bd"],["/posts/47374.html","9be80d58994fbdb6b637caf56f1ff4e4"],["/posts/52307.html","fd214d727bf2eff4ce5bc0f90d38904b"],["/posts/52812.html","ad17e023d8079f874051a9c45d7beb4d"],["/posts/53486.html","9bec560631067a418979e22291f8eeff"],["/posts/53714.html","09638c33019070f15af9ae763cacfff6"],["/posts/58565.html","0a7e9061e875804d44bc4f8832cfc55c"],["/posts/9968.html","97b3ea44960ddd3af49e5a80fa0f25bc"],["/record/index.html","15a2c5a543eabc481ded847638cbcd03"],["/record/photos/appointment/index.html","a735d60a80e039cf46fd15887e0def98"],["/record/photos/babyAndBabies/index.html","b25c16de890b3b151b37ab2651aaf22a"],["/record/photos/game/index.html","8f86f79a0700291bb08227e6a6e8a124"],["/record/photos/index.html","ea2aedcc220fbb980cce0c4a3ebde8df"],["/record/photos/movie/index.html","0f8c6599cd328b79d39f69696fc4033d"],["/record/photos/ohmygirl/index.html","e30410171f16441930ec610bbca89f19"],["/record/photos/outside/index.html","7d0304b929680e2a84ecba193f05c7cb"],["/sw-register.js","2c713e48c5f4c302f1033e4baa584e38"],["/tags/B站/index.html","dbc0024d2cf192ed3a0027f658400437"],["/tags/JAVA-工作总结/index.html","a23c86e314d7014ea531264463a5d2fe"],["/tags/Java-配置/index.html","034cf5063eafb1b50fd547fba237b5f1"],["/tags/Java/index.html","8db68384cffe272adbacae8b14182832"],["/tags/MYSQL/index.html","50395007034e5fb3893bc18e96b8191e"],["/tags/SQL-便捷/index.html","371a47c1255bbe0795815d6fdfe3dfe7"],["/tags/index.html","c25cc777e1ef952ef6c059dc205ca305"],["/tags/minio/index.html","c156665dab5586268b585a00e507e6cd"],["/tags/定时任务/index.html","4d1e0d8507e001f26a673ce4e6c751b1"],["/tags/工具/index.html","86cbaa84f0ada0d72f58cf459437ab97"],["/tags/搜索/index.html","ab1ca2914456b8abf0a4814df1359095"],["/tags/时间工具类/index.html","6b78c8e4f2c7f1453fc855f546cc6172"],["/tags/虚拟机/index.html","03fc852aa2b587a073d4259c101e2448"],["/tags/递归/index.html","9bf0c036a0374c26e14a6b6456434701"],["/tags/配置/index.html","c15d938336f7e1937c709038c1436d1d"],["/tags/阿里云/index.html","fb66af7ffdad42955ee84a21d1216e65"]];
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
