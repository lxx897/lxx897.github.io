/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c8d48b3e7452a76afed5a93c0d2e9bfd"],["/about/index.html","4c69d9460b532b431ab37f4fdf967637"],["/archives/2023/11/index.html","d21a71731a2b415bf771b4abc4087925"],["/archives/2023/11/page/2/index.html","a2d7a2eb12d758ca8beb9d44a1d03307"],["/archives/2023/12/index.html","a265173335937b530e41ad0cd710a61d"],["/archives/2023/index.html","edd62f4a35596e3562e343e60b62e705"],["/archives/2023/page/2/index.html","e49e9dc02ec02cfd55b5bdf9c27d594e"],["/archives/index.html","cda1c9293adee74eefc478800ce1e4cc"],["/archives/page/2/index.html","807923865ebec92f0a1e2486c550dd2e"],["/categories/Java/index.html","246846ad34dc389ea8adfa4b4c03ba9c"],["/categories/Java配置/index.html","2fbbe02ab1c3dc1f0c9ba8d584bcd101"],["/categories/hexo配置/index.html","b8164f5d02971ea11db83e1c2fc3eddd"],["/categories/index.html","09eefe10c4af327c9d74fa1dab33dc06"],["/categories/实用工具/index.html","c17b01f64104cf559d3e75da7f60cebb"],["/categories/工具/index.html","c448e0eb4f4547dd871b38d9eccf450b"],["/categories/视频/index.html","bb0735c8bbabf000363a53ea59d40d0d"],["/categories/配置/index.html","aa6a20e7d0d05bf9130b9133ee58f266"],["/categories/配置文件/index.html","9d99e9c48360ba01b44cca4abf7c4aee"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","33b4c948fb7b2b7f5975b6542134c6aa"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a523332af06cd85f8aeb0ecb99cf10d5"],["/page/2/index.html","f20a40c3b26e9e112313a42afa31fb1d"],["/photos/appointment/index.html","e66e03ce18ad34a9c30ed7042032a1b6"],["/photos/babyAndBabies/index.html","14e6ce430fec17be85097b8bdcd50011"],["/photos/game/index.html","5c583ea8023ae057568b6707b869db80"],["/photos/index.html","0ec57ae22f43095b15b24ae35e139bb7"],["/photos/movie/index.html","163f310925d0466a76fea2e4ef5a7cec"],["/photos/ohmygirl/index.html","25263b19f93edf0e2b70f0e84f9c7d41"],["/photos/outside/index.html","f350800b059051cc9b99b0c51419c48e"],["/posts/16888.html","5102d9839db522140b75c9f4eed7d498"],["/posts/18206.html","ac5cc7483e28c92a6414cb5c2ed7613c"],["/posts/21635.html","39ff27de618eb048fbd9b0a904974c4f"],["/posts/22910.html","0fb9bd54e52aec376253e9b29b9b8a71"],["/posts/27699.html","e3d9a589f957114461d865e298dd424f"],["/posts/34134.html","b1e5c039a81ad961c0313a4dc965aa06"],["/posts/38362.html","7e5713d76354c3c4d86d553ee3c530f9"],["/posts/47374.html","439a1ec9d5498902b980f21ccf3d7c68"],["/posts/52307.html","3fdc922294aa1cda46fa841aee007f6b"],["/posts/52812.html","cfdf3e6bba7ed622336051a1a840e4d4"],["/posts/53486.html","2731e87414410ca9015b66992fc6ab5e"],["/posts/53714.html","ea953018bc750415364b32e3687edc31"],["/posts/58565.html","f328321d836ca68ec7f1322e2e10fbc0"],["/posts/9968.html","8238cedfae78a2cc2f5f856873954037"],["/record/index.html","44c8f99b1a10b6f21f98fd7ad79f13ce"],["/record/photos/appointment/index.html","1683520c2c638fb80486efd876deca79"],["/record/photos/babyAndBabies/index.html","01279021a08d09f907602f0410e60003"],["/record/photos/game/index.html","db8c3fbb4a8990a7cb0ce952eeaded61"],["/record/photos/index.html","9591d7a91086a35e5040a3a4d64fce19"],["/record/photos/movie/index.html","aad5242007612c38f9e0dbf5865dd02d"],["/record/photos/ohmygirl/index.html","a4499f739242c35eddbaedf488a10a15"],["/record/photos/outside/index.html","06af5b05418c499983f2cca671eb4ff8"],["/sw-register.js","6dd18382cee73eec00ede4e7d3f1e47f"],["/tags/B站/index.html","070e2c39e0f719665220bbe69dad5f09"],["/tags/JAVA-工作总结/index.html","9f6d6f414dc42bae18a69fbffd49a919"],["/tags/Java-MYSQL/index.html","1c4b9c0b362249cd2b56c973a542a79b"],["/tags/Java-工具/index.html","5a0f299c600c483ba99d29345df52d52"],["/tags/Java-配置/index.html","a806fe886ae86386af7dd3e082e9f220"],["/tags/SQL-便捷/index.html","2ae7c432d8b67f78b96f91f03e739a87"],["/tags/index.html","3644edc0c9b1cb15331e083577b7c17b"],["/tags/java/index.html","093f9f2b5904d8d347440d7f9fd6e5e9"],["/tags/minio/index.html","45bf48f31d6cf942b4ba2743c938f9f5"],["/tags/定时任务/index.html","d8c22ebea72ade211e1cde73126f4496"],["/tags/工具/index.html","e612af2e9595482632ec9ce390c7951b"],["/tags/搜索/index.html","71682f54f108ce39d613d7f48e62c098"],["/tags/时间工具类/index.html","318b90825416928428dc597925c9a39e"],["/tags/虚拟机/index.html","930feab5150bd617375237e877d916d1"],["/tags/递归/index.html","607b61acf21b8a7c97fe7f8a59d7aa23"],["/tags/配置/index.html","853d2c08ae74ed37c80499a60a27a50f"],["/tags/阿里云/index.html","24e6af7b8d220502b41c82432d11576a"]];
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
