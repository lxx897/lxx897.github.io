/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e0a66014aa88b21cb26c20b81fc2cb8d"],["/about/index.html","7c3ec2b99388d75b65631f4b1544365c"],["/archives/2023/11/index.html","00ea3e1461c84c87f55ce7023af47b96"],["/archives/2023/11/page/2/index.html","077e5c8fc93da9089280c31b4876d155"],["/archives/2023/12/index.html","482ccf80e0e1b3d917786372a3525173"],["/archives/2023/index.html","073e9b10f46a51773d8d9888c5d2358f"],["/archives/2023/page/2/index.html","c3e827ce3b405333fa674f01f947029d"],["/archives/index.html","9175dca0c6c2400f31b854d83b9e9aeb"],["/archives/page/2/index.html","ad2e3e3bb53ae864697be989a5924976"],["/categories/Java/index.html","fd8393caca022b269f3bbfd401de4cf1"],["/categories/Java配置/index.html","00e1884dc5573a0efc01aaeb34e05d8b"],["/categories/hexo配置/index.html","a21517f65954aac6e8e771e440a5cca6"],["/categories/index.html","397b8145e4cbd91f51d4b5d28b5fdc43"],["/categories/实用工具/index.html","d7e0ca5785a671f3193be4761bc6583d"],["/categories/工具/index.html","3ecf683d6aabd8e6e34420ae3ff1cf97"],["/categories/时间/index.html","59b92ce1a4cd584ded61930435da405d"],["/categories/视频/index.html","9572344fb988bbee7523cc8ef96c477e"],["/categories/配置/index.html","baf83eaf7a90932502a1233da489bcc8"],["/categories/配置文件/index.html","4dcd69cca198917816b095d3d441d493"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","45356f43dd11ee8725d0f610a2b725dc"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","190f9ed411df702f9e0983d6823c54b8"],["/page/2/index.html","0d4bb713fe03cbe10d8fc2ce16975a8c"],["/photos/appointment/index.html","2dcbea56dc7bb15616a1a9b1a3598160"],["/photos/babyAndBabies/index.html","d37b2daa257373bb19c822f38c72f128"],["/photos/game/index.html","277f3e66e9d4882ba4636d190804275a"],["/photos/index.html","8e3e8764d31710e38e07f2acbbf3fc15"],["/photos/movie/index.html","e40b5a5d9b721ee270760c522c7ade1c"],["/photos/ohmygirl/index.html","6eabde756e522be4ed691dfc8f34adff"],["/photos/outside/index.html","692db32395b7cc665189654bbc180b4b"],["/posts/16888.html","495afbe5ebd2b07d46593b5c25ab6822"],["/posts/18206.html","a4a687755aa88e9c8725d00a7d754319"],["/posts/21635.html","fa1c1d6943bd755ecc2d202054a328a2"],["/posts/22910.html","8035ee6f050fc257bf77397459938447"],["/posts/27699.html","83e5c516d882456ff79b480af8b98ff0"],["/posts/34134.html","3a1f055ac46b2f77264863bb27efd833"],["/posts/38362.html","279d0c4e320ec43ce150469fcd0d29dc"],["/posts/47374.html","69a5c20862a3ef7bab08424d93f92534"],["/posts/52307.html","bb6216e2096d867033cf0aa28d4812e7"],["/posts/52812.html","196e4f2814cdb13f38569c397fcf02df"],["/posts/53486.html","af13db2825e44b2f97d022d696314aea"],["/posts/53714.html","3c329b2f893acee3265394ac1c6ec745"],["/posts/58565.html","5d2fddbe6958db326dfeb5481a5f3d81"],["/posts/64329.html","e1fa00616084c452d28b1cd018c49d3e"],["/posts/9968.html","99ac4f6e2155c616a081326da8245aa4"],["/record/index.html","83a5fc8339f3e9c1ff893c4733c9fdda"],["/record/photos/appointment/index.html","2b542c51c94de611a3c4c6257417c021"],["/record/photos/babyAndBabies/index.html","93569fc60d07a591f871c6eea83395ae"],["/record/photos/game/index.html","35a099601cf63b2475cf3e620b92006c"],["/record/photos/index.html","8583c7a7255a23f2a21b4195436fcd8d"],["/record/photos/movie/index.html","77a7a6f37b196d3f0055ae99c7bc27bd"],["/record/photos/ohmygirl/index.html","8a1299b1e56ab424f78aeb6e79f8516b"],["/record/photos/outside/index.html","f8b5ddfe89152da4e275ead748a038f6"],["/sw-register.js","f0899b8724e01fb28dcfdf9c70a9aa66"],["/tags/B站/index.html","7831416142167552ea6c62b3e2492a45"],["/tags/JAVA-工作总结/index.html","626b789bf3047e9b64c612462d75be88"],["/tags/Java-MYSQL/index.html","df99fb97cd71e4b0ed1c4e4a37c9fcd7"],["/tags/Java-工具/index.html","56ecaca64604db05216e92a5472eb545"],["/tags/Java-配置/index.html","9a85cfd05967be484602b816dc5e588c"],["/tags/SQL-便捷/index.html","45f11e49849b98b7cced72b068eb7d89"],["/tags/index.html","08605abbf91c88ab2c1263e04b359909"],["/tags/java/index.html","d68d748f4903bb15a22342e1b0a7e9bd"],["/tags/minio/index.html","b2038a80da5e86b104695cbac7292f89"],["/tags/定时任务/index.html","60161d7d319e4ddd2ae8ba58f7f3f393"],["/tags/工具/index.html","c04e7f21f77777776492a7a53c8c23c5"],["/tags/搜索/index.html","0349645b77671573179eb7b7b54d83b9"],["/tags/时间工具类/index.html","d9b3d2616c638355de68fe64766c92a7"],["/tags/虚拟机/index.html","149682ba9eff50dbbad9114378516eb2"],["/tags/递归/index.html","4ece1381961de192a05786eb33c4f65d"],["/tags/配置/index.html","d7ffd1642af24eb27a061176607b35d4"],["/tags/阿里云/index.html","bb480a8c7c9fe31388d91c62679269dd"]];
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
