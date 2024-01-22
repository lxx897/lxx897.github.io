/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9b94cedb61d888127500bb1ef9fbacc2"],["/about/index.html","546ed86960ab48d21d819dd7088edb86"],["/archives/2023/11/index.html","39f648da9f1c468fa8dad5b033603a41"],["/archives/2023/11/page/2/index.html","8e51b3bd0448e06f50113c84b777a069"],["/archives/2023/12/index.html","05eff5d9b2e9f3878f808cc27bb6b556"],["/archives/2023/index.html","aafcb1b62b7aa498e65737b17b3e0d36"],["/archives/2023/page/2/index.html","7fada7710978daa228991443ae6c41a7"],["/archives/2024/01/index.html","491eeaf0451f3cadf2536c565079e008"],["/archives/2024/index.html","19c80f15c83441bdaee70e55f69ab1f3"],["/archives/index.html","461e603463d5c6159e6efaa8b50fd849"],["/archives/page/2/index.html","df339b7209dd97639260f6ca73c06b78"],["/archives/page/3/index.html","62ccd3eb8058cc2a612031f7239502c3"],["/categories/Docker/index.html","d62f5a0732b4167008f5b583e17450e2"],["/categories/HuTool/index.html","e8fecff339906846181c8a3ad934194c"],["/categories/Java-MySQL/index.html","099289dead5e74427276a911634b03bc"],["/categories/Java-远程调用/index.html","849676dcfcd45dfbff472b004a7b04ad"],["/categories/Java/index.html","82045fc9d6fec6231457418137c5d550"],["/categories/Java配置/index.html","0ad568c5697fd57c067880c960bbd3ec"],["/categories/hexo配置/index.html","25fee00d21fb1f10c236ee96c5995683"],["/categories/index.html","1dac14760e76e917ee16bb2ef77e0425"],["/categories/实用工具/index.html","7e9fce22c81d579f2c94561a225d871d"],["/categories/工具/index.html","34c261cec67ffe7e0a5c4d645647e5a3"],["/categories/工具类/index.html","cbb531886d6c14867e83430e2ccfa146"],["/categories/时间/index.html","3cfaebdd5a64d367a2b6fd57fb765910"],["/categories/视频/index.html","f4cdc4dae40060686789c9d900158177"],["/categories/配置/index.html","246f5205135e898fb8a52250436fd30c"],["/categories/配置文件/index.html","8e32fe4e53b05930389c318317effe9a"],["/completed/index.html","5be76a965b4025d830030efc9aaff229"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","4769634246ba06155753e961cd73917d"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","9263f17994a43b18d0a03a5de72a390d"],["/page/2/index.html","2c2f94573649cd71479bc1547f7ea641"],["/page/3/index.html","57e9347a8fa7c631cf40162e75ae3d8b"],["/photos/appointment/index.html","74299bd9e3428f426a4bf1ece4065650"],["/photos/babyAndBabies/index.html","60caa6601bec8a1c1029fbc17c6832eb"],["/photos/game/index.html","634850d32db5f81c68a5589004de743b"],["/photos/index.html","8d9c51a8f076d243bf9cbb6d4ca585ed"],["/photos/movie/index.html","c53729657a25d0c5d0bc8bb7a73e415d"],["/photos/ohmygirl/index.html","a00f92c7d4cc1880eed0bdd37230676d"],["/photos/outside/index.html","1e24dd0a880d2e66aa6da98006e82ac8"],["/posts/16888.html","0992394986619c11f73f6b690c7b5c06"],["/posts/18206.html","47f16360d7ceaef740567a20e0fcaca2"],["/posts/21635.html","8c4c0519a2523472fb3e4503e1cef64e"],["/posts/22910.html","b8f9d649b3e39f5c504ddf0f45b03381"],["/posts/26185.html","3572d9c2a79400dc28d1a8fd2409c10a"],["/posts/27699.html","7fd2eadbc1c3462832968b46bb6b36e6"],["/posts/34134.html","6734ad718becd3d4d767c33af6f926ab"],["/posts/38362.html","51f816a0137a822f3687643c2a795175"],["/posts/4186.html","a82e005ac73bc4a19dddf14c7f1c65ad"],["/posts/42658.html","a7d94ff423262d4f46e69daf87bb11d9"],["/posts/47374.html","6cc1f548e5df12d84678ea79c8318cc7"],["/posts/48428.html","b3dacb7ef5db75bbb56253c0a867e95b"],["/posts/52307.html","af9227af2b63e07587b846eb49cc0d2f"],["/posts/52812.html","08157c3338f7c2010532e5453d5824af"],["/posts/53486.html","f3e7ce44edb8f611dc968ca02f98f59b"],["/posts/53714.html","9c1e37e69e0823370f351c9922d64436"],["/posts/57395.html","1a342bf71d284036e4a37bf7cc8a948f"],["/posts/58565.html","73eb32e8e7ae6c1141653076abef9858"],["/posts/62255.html","d4161a3b89a4cc5862b2491922af7f3c"],["/posts/62580.html","406a5c1f411681379c867eb0e751d928"],["/posts/64032.html","146de13a54782bb390e923deec57d6f7"],["/posts/64329.html","d0ea13d7e0ab125eeb4529a935509a13"],["/posts/9968.html","999f5fc7dc69e5aad16d22b5839aeb91"],["/record/index.html","b549da7a8b6c72a9faef3f9618ac2e93"],["/sw-register.js","ce96508337e0ddfbec0df795bb7059b5"],["/tags/B站/index.html","143a0f779635166bca72e7170d4ccf8d"],["/tags/JAVA-工作总结/index.html","c17e400b446d49457e4f5d290e88e7c9"],["/tags/Java-Docker/index.html","70fe4f6590a02738e64c090cb2ef5ae8"],["/tags/Java-EasyExcel/index.html","d82a98f4472c945d868c1c436ddb77b2"],["/tags/Java-MYSQL/index.html","32510cf96ae1e02318cdb29e6ffdc518"],["/tags/Java-RestTemplate/index.html","e6ef0b3cbd5e6fffc437ec7789df129e"],["/tags/Java-工具/index.html","1323dfb2b96f197dbdbfeb792a03b61e"],["/tags/Java-常量/index.html","1b717f6202c9fbc2718648105fc33d80"],["/tags/Java-校验/index.html","d17ad9f49d0ad48f67380edccda5e48b"],["/tags/Java-配置/index.html","c94bcee569fa71a68692460e418fa661"],["/tags/SQL-便捷/index.html","0e7fb64672542506f35bc68739c6e519"],["/tags/index.html","ede36a9ddda486e733b718f81bfa2bbe"],["/tags/java/index.html","6b40eddbe56d0ed64ef287d310ef54ba"],["/tags/minio/index.html","5ad75e017ab75a50ada18669aa007298"],["/tags/定时任务/index.html","fccd0c6fd1fd8d536b4f5c6b6451236f"],["/tags/工具/index.html","fc1b23f3941cf30c9e3b1ed49d2f32a5"],["/tags/搜索/index.html","e80b1271503a6f952953f534a71720b0"],["/tags/时间工具类/index.html","54b89833c4423858529be361899dd10f"],["/tags/虚拟机/index.html","edd5a2a6dd5dc5f8f6f7cb2b766e3453"],["/tags/递归/index.html","3fe08723c097a527c165eaa725f7cd4e"],["/tags/配置/index.html","03ed2862a688b6e3fc1e26ec054ad302"],["/tags/阿里云/index.html","084667e62f1e65ecbf8d7d565655e49d"]];
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
