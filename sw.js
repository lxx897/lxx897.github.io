/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d3baa180ff60d3a00296646075a08ada"],["/about/index.html","f01164f211f5066f50e7a89635095a5d"],["/archives/2023/11/index.html","0e807fd75b5db32f91bf1d86e6cd98c2"],["/archives/2023/11/page/2/index.html","b681cedbc6f510816d888ab971bc216b"],["/archives/2023/12/index.html","0db6f8a525b42f84a36164d78c3f1fc8"],["/archives/2023/index.html","3e3c905f1c50da42e3ac7f0264fc2e21"],["/archives/2023/page/2/index.html","b4bfd17151189d769eff3ea2f728da93"],["/archives/2024/01/index.html","baa21132f4aa8d92a321aebe927f98c6"],["/archives/2024/index.html","2c32ae4ffce13c3f1c78540b3fd735a3"],["/archives/index.html","e983475ea0f93a60789a8a447cc19eb2"],["/archives/page/2/index.html","a7b12637f8ea75706d7eac492690133b"],["/archives/page/3/index.html","dec82c7243abd59dd3c4bab01940a1e5"],["/categories/Docker/index.html","3eea4d23413ddd442df5781cfa4c1bf0"],["/categories/HuTool/index.html","6bff19ee56af8dd5e446d5e123a4c072"],["/categories/Java-MySQL/index.html","0e81a3b21e22f0d5b91fb3028251a9ec"],["/categories/Java-远程调用/index.html","15db694bf5e2ce770da7f9522324f67c"],["/categories/Java/index.html","73643de7f03e1045a0ebb9c0aca8f454"],["/categories/Java配置/index.html","7481349cca0237dba01b023395d812df"],["/categories/hexo配置/index.html","22a72da96ba3a382ae292ee2f6d1d0c8"],["/categories/index.html","bafca4d909c8c8f91e0d64bc87835bb0"],["/categories/实用工具/index.html","c64998285df5207e6e472339ea0c4e96"],["/categories/工具/index.html","a1add36ae9bbc1f7c68178a63b6e526c"],["/categories/时间/index.html","8a0a000958813ca1d1b3774486ca248b"],["/categories/视频/index.html","83a1d089acb62e22b760033f16e8d6bb"],["/categories/配置/index.html","5bc9cdfa4d29b361ed2d3f65ae8d6cff"],["/categories/配置文件/index.html","e8c4939ab2f6fca7b21a454dc34050e1"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","3bd87298940cd50695658add3dbeffa8"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","92172d74ef3badacf738a31de011630b"],["/page/2/index.html","846e26e3fd6f9de06bf3bfe291142f8b"],["/page/3/index.html","42d1aa73eb178828c9bfc16207359ae7"],["/photos/appointment/index.html","b290e8bb93c3f58cd1ee38cc80e8f382"],["/photos/babyAndBabies/index.html","b712d612def9282b7bbdbe9b1ed863b9"],["/photos/game/index.html","5150d61a0aa7b8128a14307978f83a6f"],["/photos/index.html","4344e4a4b60a5bdc8ad2675abe46a51e"],["/photos/movie/index.html","6fc03ea4f8cb26b6e49ca0f9cac382cf"],["/photos/ohmygirl/index.html","4917065ff408e1371a8663a7a5c84020"],["/photos/outside/index.html","e0dbc5a8bea583671538f4b80c2ba9e3"],["/posts/16888.html","94d62d51c44782890b7eb69795460476"],["/posts/18206.html","8180e79093266cc2d039cf70e7d3df22"],["/posts/21635.html","4c419759013181315d46dec047b8b259"],["/posts/22910.html","9117ddc742586164d212fd9ce52a6933"],["/posts/26185.html","9f4c6c05711e54a3547de630c8d98009"],["/posts/27699.html","d2e2443f9604110fbb1eda19e71fef15"],["/posts/34134.html","d746366640d0e67adc937c7bce7a33f3"],["/posts/38362.html","5873306f93219ae1a57aa7b2998c1b11"],["/posts/4186.html","f149afc4afe459f516f7df9d9138cead"],["/posts/42658.html","c5b262ccaeece2c5dcc88076d342b7e1"],["/posts/47374.html","f7b46e979270d84789e8c437c85d75ec"],["/posts/48428.html","e5d100e15c0e0008b36db2962a30591c"],["/posts/52307.html","b5c7c4cd439ab9199513b8449ec4e761"],["/posts/52812.html","b30d388f36965fa7dc29c541dc9cf854"],["/posts/53486.html","dbb7418ace0b765af32d53f6abae6eb1"],["/posts/53714.html","c75a9a5f1b8c781287b5769272a70bd1"],["/posts/57395.html","e2689ee62000b5d54b12ced5e54ee070"],["/posts/58565.html","a7ee49e0c85aacaf926a9f0b6302eaca"],["/posts/62580.html","4ececc6ba8058be719f7153ccb17adc4"],["/posts/64032.html","7625bc1d5cbf55e1bf9ed762e4fc51ab"],["/posts/64329.html","77a7e7098fa7e8c15850adef465293fe"],["/posts/9968.html","a9ed82bcdc5687d8374129243ea080a8"],["/record/index.html","395549cae3652a09bd2ac05884ced34c"],["/sw-register.js","e9bba2c28da77f0a04b8ed8d56e7359d"],["/tags/B站/index.html","25920f82cfc5c16bf66015739334722c"],["/tags/JAVA-工作总结/index.html","94e44bd6b959060b08087430b3f63cfd"],["/tags/Java-Docker/index.html","154df1d68ba446bb676b13a01919f3b8"],["/tags/Java-EasyExcel/index.html","a26128b6861f6e73c0165ab92ea756d9"],["/tags/Java-MYSQL/index.html","b3577221c171a83c3942ce72e7f22488"],["/tags/Java-RestTemplate/index.html","0504d0d578ae5303b6cebff84bce5810"],["/tags/Java-工具/index.html","a24a02180b265f032f608e94540d546c"],["/tags/Java-常量/index.html","d85e8041272adf9b194d302b44cc0af0"],["/tags/Java-校验/index.html","30a664e1f6ea0c38dc92691ddf023d76"],["/tags/Java-配置/index.html","827f66fe81772c113d367fd0675021d5"],["/tags/SQL-便捷/index.html","9269b981d16c11e491a8ec36bbe0cdae"],["/tags/index.html","95540639d250bff83676485ccbba015b"],["/tags/java/index.html","a609d3a83e4783d5a8cc6c5369da67d5"],["/tags/minio/index.html","ed144d8a29f7bcc053038d9c904399da"],["/tags/定时任务/index.html","a453f933e1a7cd1ce6dda7ecf5caee2e"],["/tags/工具/index.html","c6cf3c7378e7b039445bab73d420cd68"],["/tags/搜索/index.html","97889256937658b30cca191715001dc9"],["/tags/时间工具类/index.html","b72c736de5f78f6f959cb3b00877b327"],["/tags/虚拟机/index.html","9b3d4bc87b34d0000a100396db6d8a9e"],["/tags/递归/index.html","52d45d4610c40bdf4aefd2f5d487a7f8"],["/tags/配置/index.html","12dd9df3f29f2d75ac9d3809784b6798"],["/tags/阿里云/index.html","dd69ebe9ff89e6b42aa5a412125baabb"]];
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
