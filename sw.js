/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","015c1c817c37936c7606ca9c213482d5"],["/about/index.html","e11172956ccd3de74fb28b2bddaf4b79"],["/archives/2023/11/index.html","320be3ed6f1f2e2195acab204acec5d9"],["/archives/2023/11/page/2/index.html","7e7ed78e70ac9d6cd91648693ff10140"],["/archives/2023/12/index.html","742527ed51b32fcc1cd4c13d8c3b246c"],["/archives/2023/index.html","75707cf4b683c7dd50e2763499ff045b"],["/archives/2023/page/2/index.html","d78e8977a398a029bcfa8ad685dc0990"],["/archives/index.html","837b17e286b1577aceadc45292cc18a7"],["/archives/page/2/index.html","e40ec2f80724dd1f4a82c3b57c4bebe4"],["/categories/HuTool/index.html","10a2a5c29e8a26fbcc9867ac1930dc83"],["/categories/Java-MySQL/index.html","12b7bd40c6f1509c1ba5a708a9e0d4e4"],["/categories/Java/index.html","15687c62dfeaa35eccef2987c04d7761"],["/categories/Java配置/index.html","f68174e9f221111ad1da2af8ca3421f4"],["/categories/hexo配置/index.html","471514dd21726cfaec4aba2d8556005b"],["/categories/index.html","11a107586f1c23e4187d3fb69b6cc2dd"],["/categories/实用工具/index.html","ab09d2b351b9454423b782272d81dd92"],["/categories/工具/index.html","8040819cd349d85d519bc8cce5b5567a"],["/categories/时间/index.html","37a6dabf593b3191413c27a2bcfc8629"],["/categories/视频/index.html","5432f959c42e32902aa520a00949c6e0"],["/categories/配置/index.html","c429f393c343093ddb7436f73a6e142a"],["/categories/配置文件/index.html","371deefba1da95496ef497d7b54b90e6"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","43e16e2673fc16a14f455ddbc3ebd4c5"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","666b6f9d9d2280a8962fa3f190e723e7"],["/page/2/index.html","5cacb6ac2a1eccf7605c4d97c1536bb9"],["/photos/appointment/index.html","1d7972e791ae9f8ab9fca73dcda2b88a"],["/photos/babyAndBabies/index.html","f094ae1e641931a613ce7280c81fe0df"],["/photos/game/index.html","b2cd9932a4f38b9257e492dd619b84b0"],["/photos/index.html","0242b93d696a260720c9d3fb0a45081b"],["/photos/movie/index.html","0a025fe1af1dc1cc494c056a57b50701"],["/photos/ohmygirl/index.html","6812a2ba2e29f89a58cc1d923210483f"],["/photos/outside/index.html","4192dd68de921d6bd1fb8d9e86f98f71"],["/posts/16888.html","404297dbd2c72db161d947c089e1e0ae"],["/posts/18206.html","4acce56cda9b8fd0c70817d9512a8b84"],["/posts/21635.html","0c0887e3e69c4b96ae90a6cabfab4976"],["/posts/22910.html","95eb80010e3f6603b45acc529126730c"],["/posts/26185.html","61140613e2c23a519fcdda85ba645c3a"],["/posts/27699.html","572e290fbe4198c2398e2fee5f7a9655"],["/posts/34134.html","e4b4e25d9f48a6b9edd479a4802be5ca"],["/posts/38362.html","387fb9fc603af256d99589a922be286c"],["/posts/4186.html","3f4de23fc28bc67191309c75065b1f59"],["/posts/47374.html","eb4e9ce8ad3fe7077f155396696330ab"],["/posts/52307.html","159e1e59df7a570438d87a97204f0f94"],["/posts/52812.html","19a5c1b7c31eb012f609e859e566a7cc"],["/posts/53486.html","4dd1fd5f21408e2d7188142495c9a19f"],["/posts/53714.html","bd4eb25e3f70940f2974cf47d7c913c0"],["/posts/58565.html","9eff8bb2b7b7adedcf322e72bb1cd5ed"],["/posts/64329.html","c9e00c8a7f08a1ac83f5131babca11fa"],["/posts/9968.html","9bb6fcc81924c03de457f359b47093d7"],["/record/index.html","ef6ed2c2fe9f831aa0523e350f361ba4"],["/record/photos/appointment/index.html","79f7053b1b823f2d5b088ebbac9be45f"],["/record/photos/babyAndBabies/index.html","8e873795348e6e6d378baf7ac9502dc2"],["/record/photos/game/index.html","0ce19076e0ef9ec87165f7398845f008"],["/record/photos/index.html","25ea5a19905c66310833913bb28b7f8e"],["/record/photos/movie/index.html","69ff40fd8b991d87c4019d575d4ac29c"],["/record/photos/ohmygirl/index.html","44ead20c572e35f5b7ea070f80114fa5"],["/record/photos/outside/index.html","2e346ebf1afb7c880ca033adca525fba"],["/sw-register.js","563e1478e236779ace1efc2ba003b54b"],["/tags/B站/index.html","5990cde703417ddcd9b8d6dd4cf17ee3"],["/tags/JAVA-工作总结/index.html","b234499d1d43d0f1282e05c7d7e67224"],["/tags/Java-MYSQL/index.html","afec54f058b1b5a7f14cfa4804c8669b"],["/tags/Java-工具/index.html","04adabcb6583f27a4de7b7fa2538632b"],["/tags/Java-配置/index.html","247b7e5c78ef578c7aa140f442483d1d"],["/tags/SQL-便捷/index.html","d17c29f553ab255edf971845497fa9ab"],["/tags/index.html","36121b5253557e8cc5899044d5c5a46b"],["/tags/java/index.html","d2cc9db6a532b7a0963352bfef789856"],["/tags/minio/index.html","050df90c73242c1ebd0f966141926c62"],["/tags/定时任务/index.html","204e46c46710b35953d789571594d725"],["/tags/工具/index.html","ca8ebe569afd7bbe98c11107439bc655"],["/tags/搜索/index.html","5d4df2cc994d09bcd046ec5213690f96"],["/tags/时间工具类/index.html","25e9756a890ca76e9ae88a9932e98a36"],["/tags/虚拟机/index.html","9a9d4df178945e66e5b7d2c9daaf627e"],["/tags/递归/index.html","fcb144b5de8fbc01d42972908d2b67ea"],["/tags/配置/index.html","f6ced9a233c926c7d335c4b40f069d8b"],["/tags/阿里云/index.html","3deda766aa8bf3dcdfbceb22f56164fa"]];
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
