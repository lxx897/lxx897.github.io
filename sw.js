/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60c217cd5708efe57079fdb9535cbd2b"],["/about/index.html","85d555fa5bc3896265fa47379b2a167c"],["/archives/2023/11/index.html","5d31d28873537f25ef541ac1fddcc60c"],["/archives/2023/11/page/2/index.html","09c28c60e3054dc8ef930c084076aadb"],["/archives/2023/12/index.html","fd8b592c74204a64eabffc9515d3f9b5"],["/archives/2023/index.html","d608518ab8b95b24807024b68fe77452"],["/archives/2023/page/2/index.html","7150721059de1e0098c0e6edd270d81e"],["/archives/index.html","f6486de3a9f0102808ce8764fce39238"],["/archives/page/2/index.html","fab0b78f83a03dfbf4ddc920af9bd303"],["/categories/HuTool/index.html","435ccfb8dc639d36dd919b0eb6f576d9"],["/categories/Java-MySQL/index.html","e3248b607ba0083721399b9c2d7cd7f6"],["/categories/Java/index.html","a778dc1979a6ec85fc94167af9b84b4b"],["/categories/Java配置/index.html","bb4ff1abe1e48b3fad3ec2076281d51a"],["/categories/hexo配置/index.html","660549436bbaf93828e0e8cf27695e5c"],["/categories/index.html","29f18e8c7863e3354a3b7b7ffaeaa64d"],["/categories/实用工具/index.html","0ebdbcc2a72e0f53a1d13fe5b55ff987"],["/categories/工具/index.html","ec3097fdd37674bdbfb0a73bab1da5e1"],["/categories/时间/index.html","09634b7bb2fbf7fd4d7b3e692f341102"],["/categories/视频/index.html","9b5f74fc7e949bc836b5a059d4e53999"],["/categories/配置/index.html","5ffff88b0e8ea3ad76696593a85901e1"],["/categories/配置文件/index.html","f35c2bee5dbbbecd80214fbd62064436"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","3cc946431e7dae3a0671e961e8c365cf"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","108ae3f38a97f8792f279a482de4a5e1"],["/page/2/index.html","25b163b2166890bf6cbad449551f90f8"],["/photos/appointment/index.html","52c12974da304137b138922929c8eec3"],["/photos/babyAndBabies/index.html","77b6cc024b2d3ca7acd82492b7f983a8"],["/photos/game/index.html","6d84148cea8a39eca5c6d0c9ee522097"],["/photos/index.html","d748b0b529afd758d5c998e69d081010"],["/photos/movie/index.html","b25fd09b54715bff51fdb175680ee083"],["/photos/ohmygirl/index.html","d66d9c35320832e744a241fd7f31395a"],["/photos/outside/index.html","a4ec0d9203f4ff31a00eb10644042d3c"],["/posts/16888.html","901ebe867ef423a2a53d60d370a9e13a"],["/posts/18206.html","7ed34c624d0d4b5440387b6269b6ba13"],["/posts/21635.html","6b08519dad4dae45bc8176658aee7da3"],["/posts/22910.html","40d0786f895b564bcfd62adcca44b9da"],["/posts/26185.html","50f6f0b238ee028d5d02ab982c750ecf"],["/posts/27699.html","5bc8542f0de086018a658bfc429b88ed"],["/posts/34134.html","99cb177ed86ccee56ee6e904d4a980d5"],["/posts/38362.html","573f8d662732d349bd58bab2a3571b75"],["/posts/4186.html","87ea06676d0564d445fb9ae239a0108c"],["/posts/42658.html","79be36c7cb96d87cbe7cba66404552e4"],["/posts/47374.html","8dd15f9197e34bdbbeae16fe53b04c06"],["/posts/52307.html","64c6679f2a0cd59ea9abf17629537b23"],["/posts/52812.html","a7457ddb8dd96f864be9b899107f488b"],["/posts/53486.html","597ef8701b7328b0e7fa4a5d3d69f71c"],["/posts/53714.html","21efa8657f9ca25058910d7203a988b6"],["/posts/58565.html","7e31765112e85115a70e1bab908bf060"],["/posts/62580.html","f83254d963b7e1feded369d873c7e711"],["/posts/64329.html","fbc407cc3627c1b6b6bfe883f8970f93"],["/posts/9968.html","97e2d5ca90c728da0e7a1fa8a68951f9"],["/record/index.html","612d7207ecd47ea226857b2116e44dca"],["/record/photos/appointment/index.html","9054c5b2418818aaeb076a4992593ea0"],["/record/photos/babyAndBabies/index.html","d05823e1e529ec1c3a11ee842eaf5bad"],["/record/photos/game/index.html","ca61077bbc1f3a2c92c8e63cb71d3dce"],["/record/photos/index.html","480dcb639650a3da471bc9ccdf0b2c44"],["/record/photos/movie/index.html","55bd52003560001b811b45e1b0577fa9"],["/record/photos/ohmygirl/index.html","ac719b8188da4c54e00f4c73d8079f3a"],["/record/photos/outside/index.html","3b76d04d774170cc450bd7d0c78edd13"],["/sw-register.js","280f5851662f9fe021fbc463cb09c572"],["/tags/B站/index.html","a83406ac1fffb0e3728829af4727c942"],["/tags/JAVA-工作总结/index.html","347fabc684f40d535ce94ef8cb2d4405"],["/tags/Java-EasyExcel/index.html","07206078bd55009125ce501776bca2b6"],["/tags/Java-MYSQL/index.html","0a2179b677b70c550480dc5fe3513062"],["/tags/Java-工具/index.html","e5462266ac72dd85aede3b6f9752f137"],["/tags/Java-常量/index.html","f5e4083b70140353cd2f3635243b72b6"],["/tags/Java-配置/index.html","fbef6c51d7cc7165d39c73c6125bd498"],["/tags/SQL-便捷/index.html","1e1058d886cabc80b6fac6cb6460184b"],["/tags/index.html","ac2ac8c7e12c49ea5691fae6e5faccad"],["/tags/java/index.html","0034748ffbb2bf9c5ee3f89c05c77be1"],["/tags/minio/index.html","24fb951e0c5fe3716af81e356457e57c"],["/tags/定时任务/index.html","e24fae03e8b75deed86e177c4845d240"],["/tags/工具/index.html","339ac13574f0abe1a130ac8616873110"],["/tags/搜索/index.html","7d693161fbe8d15cc283898a7721902f"],["/tags/时间工具类/index.html","8fdb22fe1bc4e6d4b0c7755eb330c5a4"],["/tags/虚拟机/index.html","ce25b85461b6f2b4d3fa8732cf286ab3"],["/tags/递归/index.html","d5a9bf9005f6815cedf7fdf6ec1d20ce"],["/tags/配置/index.html","55d578e04043c5c72d5a540d93e93b26"],["/tags/阿里云/index.html","365dc17e83f3531c87079f144b78deda"]];
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
