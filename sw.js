/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2966462c00c40f498c1e8d30909d70a8"],["/about/index.html","d18bd266c63e2af74e8b66382449ef07"],["/archives/2023/11/index.html","03b5fb9fa70e90f746f6618ca779b689"],["/archives/2023/11/page/2/index.html","35290c7ed9f37825e72d6a99057b38d9"],["/archives/2023/12/index.html","44c2219dd29e8373618eb89103c27ccb"],["/archives/2023/index.html","5690ced589dc9514a833ce004620a52c"],["/archives/2023/page/2/index.html","a7cba49d116443a8890a870097b2f9ac"],["/archives/2024/01/index.html","97b93f35fc00a896173bf68fc1537054"],["/archives/2024/index.html","54cd81abe6c79f5bb4d3690d70aaa3c5"],["/archives/index.html","01e1a3602dffb125fc7f0e105a4312bf"],["/archives/page/2/index.html","6afd8a1ae8adbfa38d9fb38c6970e2dd"],["/categories/Docker/index.html","da17e4da0837fbab3541ca496fbb22b2"],["/categories/HuTool/index.html","b43dd7bf80ba6a8345d72b7dc91e2a20"],["/categories/Java-MySQL/index.html","f9406a6832304f985bf16694ed2ebd8c"],["/categories/Java/index.html","ac812e80f6534c0f44ef24f90e33afb3"],["/categories/Java配置/index.html","7f409b89792bdaa5faffc863776468a5"],["/categories/hexo配置/index.html","58677d60a8ac1445f5113d38bf913600"],["/categories/index.html","ce18ad68b34c9ebbfdb5b227371d7a72"],["/categories/实用工具/index.html","eb17c09c1a5770f855500f1a92e752de"],["/categories/工具/index.html","13109abb3459352bc36c879c1f727cac"],["/categories/时间/index.html","4671dbaadebfa0f854359587a1fb6f21"],["/categories/视频/index.html","b32507724dd51e4aa0e197f846dbc8ea"],["/categories/配置/index.html","d5213912fab33850d6e0691ada5e1703"],["/categories/配置文件/index.html","315b43417b916a7f571b9d1a144caedb"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","27ffabd37981fbb1e6dc70f1bce1b2b8"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","efd8d4bbaab22b06277c3c91c65f73f7"],["/page/2/index.html","2db3174a1126ca2b6059cda3b0785694"],["/photos/appointment/index.html","ffc87008c734daa3816743b5e92e8646"],["/photos/babyAndBabies/index.html","e6d5b3788627179ae749eeb8781c9f0e"],["/photos/game/index.html","4f34d37f60dbae21a811e4ff92bbac75"],["/photos/index.html","c9450a39f5b0771be5bb16cb540a4215"],["/photos/movie/index.html","ac09b90bb920abfa93e2843ca4761b72"],["/photos/ohmygirl/index.html","fc6388771f62888ef34bf4e027ec039e"],["/photos/outside/index.html","0afac0777be30b02c2f89758ccf5e867"],["/posts/16888.html","4806294c0ccbbee0f14cc7c3ea5ce02f"],["/posts/18206.html","8f4d57a8c4a54045bbaa7656b6c20afe"],["/posts/21635.html","12a8649031cf63ba16d7c2bdc10800da"],["/posts/22910.html","6acce2acba2977ed8a45188ce4661537"],["/posts/26185.html","0df713d026cc1727fba097993bbae116"],["/posts/27699.html","2033a76a2566f0c95a18ca61a41464d7"],["/posts/34134.html","2958dbe4e76e499f749ae6c731968778"],["/posts/38362.html","232dcc0a025d1679cf223d3ef015d1ec"],["/posts/4186.html","8205b4b74e6cf36b821ebccaf358dc45"],["/posts/42658.html","bd2830e94b50383f09d53db6507954f0"],["/posts/47374.html","34911512a928854f9b4f1ee0213aa337"],["/posts/52307.html","857fddaa8c1bcbd6e223c51e6ceb55fd"],["/posts/52812.html","484a2b1dfdbad4a07eb931e8e130c7d3"],["/posts/53486.html","e877e88a573a5fe42992f7e824595fcb"],["/posts/53714.html","e7087e1ebc84204cb12c684dd2f6c7fb"],["/posts/57395.html","58fd62468f3f7a8baeacf7dcff6a014d"],["/posts/58565.html","44acb3c0f4535d918f423c786f4619db"],["/posts/62580.html","66ab742da05827fd51eddc3565949e51"],["/posts/64329.html","9e2f6bf9fe4f7d6aed93797d73bc7829"],["/posts/9968.html","1eabd2856634c38267defae650ef199c"],["/record/index.html","737129b6b42aa91352f0ac0ca4a6b153"],["/sw-register.js","f670535aac12e9d636f6734d1dfc8bec"],["/tags/B站/index.html","d366c1358156327e406a446be713bd62"],["/tags/JAVA-工作总结/index.html","009a033396c8c76d30e66e7a6fe8f39c"],["/tags/Java-Docker/index.html","66b1b347d0b352f92a8f8ba06bcd75cf"],["/tags/Java-EasyExcel/index.html","89e5af3061cdbb4d46ee34d3cd223298"],["/tags/Java-MYSQL/index.html","533c3c6654a975e7314857123b82bb1e"],["/tags/Java-工具/index.html","664ad262663d81066969685382e79478"],["/tags/Java-常量/index.html","6baf1ec2c825b921f90a4089a7f455ec"],["/tags/Java-配置/index.html","0ecf1d9df0ff3de751125f9b81ad1187"],["/tags/SQL-便捷/index.html","9d24ae6ecfc899f5175508164669c5e2"],["/tags/index.html","7e8a468c14f7f00b79ba02423ab349a0"],["/tags/java/index.html","b47b80fcf085b441109619d0dcf44618"],["/tags/minio/index.html","4e67c6e31088736f458cce8685f404b8"],["/tags/定时任务/index.html","3760219c5d313a7922a68bbb187b9dca"],["/tags/工具/index.html","5b22712316fa99f910dfc6b9329ab1d7"],["/tags/搜索/index.html","fbe53f9071a922011f26e1413b66cb09"],["/tags/时间工具类/index.html","710e09ca29399f5391b665021b14ec10"],["/tags/虚拟机/index.html","406b423b8aeb9336302bf483cb8a2f2c"],["/tags/递归/index.html","46d50c845420abb348b17366eb23b085"],["/tags/配置/index.html","c182b4118dc8bdfaa4aa62d8bdf3bb8f"],["/tags/阿里云/index.html","88769951814d3990f2a2a62767c7a86f"]];
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
