/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","af3a6e25976fa3ad0f8aefdbf3483f13"],["/about/index.html","102569c21b52f4d3b0a6031637270b08"],["/archives/2023/11/index.html","1926c905962997575ae00d7272bd185f"],["/archives/2023/11/page/2/index.html","820ae63c04d781d461aae821966131fa"],["/archives/2023/12/index.html","13a0c844902462102f1713d80f1b05fc"],["/archives/2023/index.html","8b6fcc5987544f4b03a58b3994b891b6"],["/archives/2023/page/2/index.html","2d0a0678b8d7d3cd0168f2ce5507c2dd"],["/archives/index.html","e685c972b73ceb210915d8aefc995b28"],["/archives/page/2/index.html","9ea08f9bce3864e641568b613cf5ddef"],["/categories/HuTool/index.html","e3b95c93bb6d081e36d0941708ca3541"],["/categories/Java-MySQL/index.html","1f3f6da2ac7297b16a156a238a1230a7"],["/categories/Java/index.html","3002b1b3d04169bbf57e3e1e9fbb8316"],["/categories/Java配置/index.html","b10652b5f86371602284ba6014e38372"],["/categories/hexo配置/index.html","2faede28f0c38e163a433ba6c875ff6e"],["/categories/index.html","fec86d5ab523e9dd0b5c7a372ff9404c"],["/categories/实用工具/index.html","5daee4185476d58b9188c85a12f871eb"],["/categories/工具/index.html","49e25837cb1977d5d5eb3d5cd95e998b"],["/categories/时间/index.html","1a21ed90a0ff1dd18303dc97fc5e1486"],["/categories/视频/index.html","90e6c6dff55b38a3bf696e3a448a4026"],["/categories/配置/index.html","9165a7cb81b737c0b0fca643ee9ce025"],["/categories/配置文件/index.html","ad26c192f95e0b109ab32d0d358ec70e"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","8830917bd03cbc7ee021db86b3c62ec0"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","da6db58aadbd182d3f2a4b8c7ed87bd8"],["/page/2/index.html","a84a45800e5ca090247fd07a83899b20"],["/photos/appointment/index.html","543e99f21194699e7b21928d03b31373"],["/photos/babyAndBabies/index.html","906367f4ebecd7fc1bc06487ba522e27"],["/photos/game/index.html","58cdf990fcbc91e26dddb163e8a457ed"],["/photos/index.html","d1b70d787c583847c596adefd540336f"],["/photos/movie/index.html","47b4e1f3ee45ab184aa04dd7d7a1f125"],["/photos/ohmygirl/index.html","2127f5d23321e1a91818b662bc78032b"],["/photos/outside/index.html","bdeb99366e4c08bd5318eea6dae052b1"],["/posts/16888.html","bfb0d87e341bd547c7c7024459cd6587"],["/posts/18206.html","51eddbfbdc81677a3c93710b46fe1edb"],["/posts/21635.html","c3f79b3947c13dbbcb85bf883052d3b3"],["/posts/22910.html","5e103b14d61dd2c94de9def01d8394cd"],["/posts/26185.html","36df2895ac620ddeddcf01bb2726e166"],["/posts/27699.html","db7346a4aa7d65d63064bc12a81bbc2f"],["/posts/34134.html","fb144d0f8f7a995df88a81bdda751c20"],["/posts/38362.html","0d8c4150901e30ba333de8611fdf2eaa"],["/posts/4186.html","49ca4834600172a73bbb231ceec1085a"],["/posts/42658.html","92dfd6175e4fbca5be32e0fdf4ba53a1"],["/posts/47374.html","2cc17d63e843c962e55f8eef1afc74fb"],["/posts/52307.html","7c7c5424430191b458d95a65deb89239"],["/posts/52812.html","0e907bccfdd59e72d3ae152c1508ceb5"],["/posts/53486.html","1a0ab97f9cf67d324994319959ea3308"],["/posts/53714.html","9cac5cc505a0471f334db419944086c2"],["/posts/58565.html","0e3defe2e49488d0fa28252717f2240d"],["/posts/62580.html","5f640c78d6b262fb19f989945f27e78c"],["/posts/64329.html","f2b425804d83b41e28fc29fa1666b753"],["/posts/9968.html","4597285256884e030c8a695a2bf89cb4"],["/record/index.html","e1746bfc3633b6ac178b2daf8f540ee0"],["/record/photos/appointment/index.html","2c8ccad07ee6c1a95433c0f1e138a3e2"],["/record/photos/babyAndBabies/index.html","2fbe6f72849f491864f67068c67b78f0"],["/record/photos/game/index.html","88a321b5149d71c853ec2f68c8af9040"],["/record/photos/index.html","a62bcea6224c8b56b22df896deda1304"],["/record/photos/movie/index.html","061ff61167ea824d4ba908b24137d400"],["/record/photos/ohmygirl/index.html","cbcdde253a783496f058b79605a72c41"],["/record/photos/outside/index.html","cc72f140ac4cd80abef2b8d8cb5de9b2"],["/sw-register.js","96628e33de88b87da56c849197a62dd4"],["/tags/B站/index.html","646a5fce9dcc45009ddf25a4260a0b0a"],["/tags/JAVA-工作总结/index.html","d1494455374a546b049215bbf622e461"],["/tags/Java-EasyExcel/index.html","346a05643774227fd516987b63f8d0d3"],["/tags/Java-MYSQL/index.html","60c2a0c281f0827d46f15a98b79cae88"],["/tags/Java-工具/index.html","b0712aef644e9a0364e856619dc743e5"],["/tags/Java-常量/index.html","f19c1796caed72a9860c6a156819deb3"],["/tags/Java-配置/index.html","5a4a7e5e20a78c58e9696e06cda972ea"],["/tags/SQL-便捷/index.html","1507771eba3b045c97e6bde2e6ff8f0b"],["/tags/index.html","db42aa34563b77bc4691a6488faf9971"],["/tags/java/index.html","73c232b45d55f0090b61a2e54e05fcb6"],["/tags/minio/index.html","311c35455b3547ebab2e810b067b2a69"],["/tags/定时任务/index.html","054b446d20ecfa86a20525fe7fe36d19"],["/tags/工具/index.html","96a70506628be4f181cb7b04f7ac4cc4"],["/tags/搜索/index.html","5ff7a6d65459c885647ab242b668515c"],["/tags/时间工具类/index.html","e28ca5ada6eee0d21108fe4309a7acb4"],["/tags/虚拟机/index.html","38318340cc674bb1dbcee5fd0fa2d7c6"],["/tags/递归/index.html","3a2027c1a0e4ceb612761d17f31e59ae"],["/tags/配置/index.html","63711de5ac24f47ffa95b45baa4a3ce4"],["/tags/阿里云/index.html","95c6440fcff0192dfb96b9fa9d94110c"]];
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
