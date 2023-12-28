/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","59a52dae5c310822cdb07a6a8f9f5779"],["/about/index.html","50c341d5cbb2dbc28b0a2626d24b8ef8"],["/archives/2023/11/index.html","2bf23eab2e9d71917cc081fd2c3bc372"],["/archives/2023/11/page/2/index.html","3ab0aa1f46995c058f48e7ff4a8ecb0c"],["/archives/2023/12/index.html","19dcdd7b1d7269000aeb28a0bfcd249c"],["/archives/2023/index.html","45916d4ed21f2989b8962683d88dc38a"],["/archives/2023/page/2/index.html","1e030abe9977135b236a166513beb8fa"],["/archives/index.html","f44ce8b2a65ba146d5b2a4c32631131a"],["/archives/page/2/index.html","aded1a95dbfffd65e39878844b8c404a"],["/categories/HuTool/index.html","0dae136f765f80e622f803009ce8002a"],["/categories/Java-MySQL/index.html","6280106300d64a9ccad2fc3d03c02b2f"],["/categories/Java/index.html","32c1a56a138c24e07e3367395314c9b9"],["/categories/Java配置/index.html","10398af50cb40ee98f70ffad4c3682e4"],["/categories/hexo配置/index.html","9ed8a1814d55014c479442d278f401b5"],["/categories/index.html","0e0af1a20ad4d974f95154232bda1e9c"],["/categories/实用工具/index.html","3b2144aac1f9612de816b931a68a136c"],["/categories/工具/index.html","2cf16b3a9c50a113197492b5af1fa6b4"],["/categories/时间/index.html","01ca26e7450d20a938829c9a08ab03fe"],["/categories/视频/index.html","1244ff2ef4ab86fdba911fc3c74d5f10"],["/categories/配置/index.html","957fdb38e1b0a23e865087248b3631af"],["/categories/配置文件/index.html","3984e37c3dfe75565f82cd41317552a1"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c86bb3dbe54884b64ef23fcdbbc8ef7b"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","8711e209b71bb9c8a533354d0d273f1b"],["/page/2/index.html","fef43605aaa49ecb37e9d36c6d0a12ce"],["/photos/appointment/index.html","f7712360d57f5246c1673a3ac0ca58c6"],["/photos/babyAndBabies/index.html","cd6f0dd06e1c50b6c05981b9600770c9"],["/photos/game/index.html","931068ca0f1d7b9c1e89331953218106"],["/photos/index.html","66cefefac9269569ff301519ebe47e3f"],["/photos/movie/index.html","02dd4d5341817989d185a17d9987ba03"],["/photos/ohmygirl/index.html","544c5fe16562d1264efafa5cf1c12a11"],["/photos/outside/index.html","ea4917758fa313415f2d90e5e70e5c00"],["/posts/16888.html","901ebe867ef423a2a53d60d370a9e13a"],["/posts/18206.html","7ed34c624d0d4b5440387b6269b6ba13"],["/posts/21635.html","6b08519dad4dae45bc8176658aee7da3"],["/posts/22910.html","40d0786f895b564bcfd62adcca44b9da"],["/posts/26185.html","50f6f0b238ee028d5d02ab982c750ecf"],["/posts/27699.html","5bc8542f0de086018a658bfc429b88ed"],["/posts/34134.html","99cb177ed86ccee56ee6e904d4a980d5"],["/posts/38362.html","573f8d662732d349bd58bab2a3571b75"],["/posts/4186.html","87ea06676d0564d445fb9ae239a0108c"],["/posts/42658.html","79be36c7cb96d87cbe7cba66404552e4"],["/posts/47374.html","8dd15f9197e34bdbbeae16fe53b04c06"],["/posts/52307.html","64c6679f2a0cd59ea9abf17629537b23"],["/posts/52812.html","a7457ddb8dd96f864be9b899107f488b"],["/posts/53486.html","597ef8701b7328b0e7fa4a5d3d69f71c"],["/posts/53714.html","21efa8657f9ca25058910d7203a988b6"],["/posts/58565.html","7e31765112e85115a70e1bab908bf060"],["/posts/62580.html","f83254d963b7e1feded369d873c7e711"],["/posts/64329.html","fbc407cc3627c1b6b6bfe883f8970f93"],["/posts/9968.html","97e2d5ca90c728da0e7a1fa8a68951f9"],["/record/index.html","57781d0c35ce0a24961bf6354fb11dab"],["/record/photos/appointment/index.html","afb33b878cb2257e3686629a85baac05"],["/record/photos/babyAndBabies/index.html","7aa344863dfd65440b1b3629a8e784e9"],["/record/photos/game/index.html","d584c74e7cfb703085adf29ac749dc83"],["/record/photos/index.html","23e2394319eb9d779ae694146db0cc77"],["/record/photos/movie/index.html","9cb5eba4093db5c20c82ef39bcc5d167"],["/record/photos/ohmygirl/index.html","3083331fe66cc250bd43d94286d5bf4c"],["/record/photos/outside/index.html","4bd568449bae4e349cfa2e5fe3f0ed05"],["/sw-register.js","fa3916a7fc0cfb9d00d9632575f46d25"],["/tags/B站/index.html","4a50f48549f350507a266881cefacbc0"],["/tags/JAVA-工作总结/index.html","eb805307afd7ff8f3caf1da3d43b714e"],["/tags/Java-EasyExcel/index.html","78d5a47149afbacd552b6acdb07119dc"],["/tags/Java-MYSQL/index.html","4d55ddaf467a2dbe7eec433ef275bdaa"],["/tags/Java-工具/index.html","df9080f1fbc7707bbc7c52654e34aba1"],["/tags/Java-常量/index.html","8ffb362678a1ffcf5fef24f620d92488"],["/tags/Java-配置/index.html","48c9584f9d3540d9f9dd69025d2c4f1f"],["/tags/SQL-便捷/index.html","4aa98e6c6efeb4e01c2df2c07e6b43e7"],["/tags/index.html","7078b1dc30c2d6c0fd18bd92f7402e51"],["/tags/java/index.html","99fc8b5aebde78d1b545dedb94f5c878"],["/tags/minio/index.html","5668dd3d8635205d46975865bc21fc51"],["/tags/定时任务/index.html","441e66e3c2b23403251d14c8fbe695b3"],["/tags/工具/index.html","e97530e043d35717bbafb1f225e6dff9"],["/tags/搜索/index.html","f19e25f221e925a3bc1a8624ff8a3f8a"],["/tags/时间工具类/index.html","f863161c660a9c351eb1892ac775e732"],["/tags/虚拟机/index.html","39c2bd0baa65335d99d98080c4a6fca3"],["/tags/递归/index.html","343bcb254a2274c2618cc84c92a77336"],["/tags/配置/index.html","415b2dfe87ee8dd80c5b8a0994e3c0c3"],["/tags/阿里云/index.html","88bc24e9703aa28280653a2215d3340a"]];
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
