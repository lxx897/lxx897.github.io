/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","16d12d170d66d6a2b5445eaa287cdcec"],["/archives/2023/11/index.html","4a1fad94876395d973954fa07371c987"],["/archives/2023/11/page/2/index.html","a008d5d156a4e325bc12bdc89eb2316c"],["/archives/2023/12/index.html","e35b4913e7cb5eb04a1f5b31fe31de0a"],["/archives/2023/index.html","d8b01cb155979c5c0eaf574ff21574ed"],["/archives/2023/page/2/index.html","506ffdbad1748b824ca1911b7ef8ad24"],["/archives/2024/01/index.html","72f4bcbd1ac73cc02f3a171332cbaece"],["/archives/2024/index.html","4b7db06d84e4e1f596bcb3256b9c9f49"],["/archives/index.html","df56aef69addafc8cde450d12737dabb"],["/archives/page/2/index.html","671152f89526bd26c5e368a1d46ec051"],["/archives/page/3/index.html","f9673c986898bd7afe322d51dc3c6484"],["/categories/Docker/index.html","e50028b7ea4abcae35d4416a4b61560e"],["/categories/HuTool/index.html","6987f0a8cfde62530132b2b97f36aa4f"],["/categories/Java-MySQL/index.html","ce6ba2b2925cbcb86b8b827a762d8649"],["/categories/Java-远程调用/index.html","5810cb36d8d049130f61d0b8be001c89"],["/categories/Java/index.html","b938eb621e60582347677452fb904347"],["/categories/Java配置/index.html","b3e1824392054afad8b8a01f139c23a7"],["/categories/MYSQL/index.html","9bac1039ef0d7c37f10453cdf4cc573a"],["/categories/Page/index.html","1029455a9771bd53629a1bfc7ea40a43"],["/categories/Safe/index.html","c81e0b0d06c1a340723f364e14d2be89"],["/categories/hexo配置/index.html","9e003463180828b313bdd597554090a7"],["/categories/index.html","0571e38d49405e7bb78b2d7688cfcf9e"],["/categories/实用工具/index.html","38c162afd02bffbaa1ccf2201f1d64f1"],["/categories/工具/index.html","81b3c0cb71ef6a92e94a0c6d97926451"],["/categories/工具类/index.html","ec4f0677b0ba448edc068735011241fd"],["/categories/时间/index.html","123272cd31d0ad29330a79f4d215bc0a"],["/categories/视频/index.html","1d6f0c67474b79df69d72f9431ce2f96"],["/categories/配置/index.html","0297f63366fcd0ac6e856f90c334bbca"],["/categories/配置文件/index.html","1fed265851a30be0120e9c5a30672336"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","a6d1e46f4e3a673363b9394dbfff2ffb"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1497804db1246bad946a47fa2f83b6ef"],["/page/2/index.html","b11298475314e48c59e456206f36ef3b"],["/page/3/index.html","e893ce677b84d59ae5e237f10117c671"],["/photos/appointment/2023/index.html","e8a9de4dcda917c06491a7f3ef33fb25"],["/photos/appointment/2024/index.html","86d74a29b92a7490dc3a8fba6e8c0677"],["/photos/appointment/index.html","5f6507f652e4535bf9453d95fa833270"],["/photos/babyAndBabies/2023/index.html","155da83702d21023333168bc33a61829"],["/photos/babyAndBabies/2024/index.html","1d0791ce5df6ee1f984323e6b46c2257"],["/photos/babyAndBabies/index.html","e08f94650e29f7dda301717d9c37d1f3"],["/photos/game/dzpd/index.html","44fd23d65eb199d457cd146412c6b7b0"],["/photos/game/gy/index.html","97d1ad9a78bc6b02ea4e6c2d53297be6"],["/photos/game/index.html","162e60e06ea6a5835b2c6499d7e0a44a"],["/photos/game/steam/index.html","64b9d34942cc29eb0b7acd4cba551d3b"],["/photos/game/wzry/index.html","c744e7a01c92fc46fd0bfc7ef3897921"],["/photos/index.html","462f9eafa62e9a957919fea2ef4ff864"],["/photos/movie/2023/index.html","de1116c4a3fdc32e802d00d45de9f9ca"],["/photos/movie/2024/index.html","ee6a2489916becd2e25796d898274e4e"],["/photos/movie/index.html","b775b4a93fffd8d4d366a26950f2d13f"],["/photos/ohmygirl/2023/index.html","07450951c8998b1b1c45eeb41522b3e3"],["/photos/ohmygirl/2024/index.html","64e646495fb14a6917336af7961e63c7"],["/photos/ohmygirl/index.html","076268abf3096b2a82a01fb7d26ee5bc"],["/photos/outside/NanJing/index.html","daae13a30159d53f29bc25aa71aa3e44"],["/photos/outside/QingDao/index.html","af6293dfbee4ecd9a7c697cd786ca4aa"],["/photos/outside/index.html","cdce1520a4da1f5448e62b0be7d4de84"],["/posts/16888.html","2bb2cf2161665f80049d92278bd49afd"],["/posts/17303.html","dd70c93da440025b07598c898a75f662"],["/posts/18206.html","e9207bd97984aa63f32a883c078c131f"],["/posts/21635.html","2c7dbf74a3a111ddbaa09601d52c1257"],["/posts/22910.html","b298f246b8476b93ccdf3f8dbeae8915"],["/posts/26185.html","5db31e84c17e9a96a5fea79981b3f3c4"],["/posts/27699.html","274965539e67601aba3a248acd18f087"],["/posts/34134.html","e9e5a3ba9058638a624d759c9696cebe"],["/posts/38362.html","0090e6a0ba4ed8a321798a69b7b00616"],["/posts/4186.html","1ca977502a167668019df4f46edeeab1"],["/posts/42658.html","e54139f2a0a37306fa890a242e8f89e9"],["/posts/43618.html","6259531bfd31e2972402bb3bd8c84ec7"],["/posts/47374.html","854240fa10fef266ad938ffad832feb1"],["/posts/48428.html","aeb5763af4d1c7477fb0cd5c723c7540"],["/posts/52307.html","d535094ae01314fc1be6ff7d7e9163f0"],["/posts/52812.html","c1f7759984e3f54cf6a637b5a8a525f0"],["/posts/53486.html","04cff3037f456f2e58bd2ac712d59d13"],["/posts/53714.html","6b9a9fb01523ec9ba5552993eb0a7930"],["/posts/57395.html","89d67308ea1d9cf29da6be83107bc54d"],["/posts/58565.html","3d52d50b90667671ad26c18979b61975"],["/posts/59743.html","f6aa41d01c103dfc2d7449f4271764e5"],["/posts/62255.html","1c091db3497a4de6fa44bba7b169791d"],["/posts/62580.html","419df1693337154e6665029db5c7bc3d"],["/posts/64032.html","a268418b9136919faff90c2fe1f5c396"],["/posts/64329.html","3c16453c020878ed9c9c1dc9ea179cb9"],["/posts/9968.html","5ddeaf810f35603bb821fda8ae2b21a5"],["/record/completed/index.html","201bc96ae13feea5286374652d1085f7"],["/record/emphasize/index.html","323b52d3ce787d51fa7cb742d85d65b7"],["/record/index.html","8600167b47ae03911af04d23075cf37e"],["/record/period/index.html","27e01a3b13f0b921c303d51dc9ee3d83"],["/sw-register.js","dcf31c8653d1c1a7445d4293cef66373"],["/tags/B站/index.html","ea47ea32507eec97863484997fa369ba"],["/tags/JAVA-工作总结/index.html","265d81ad1a65488a6ce8a32cb94215bb"],["/tags/Java-Docker/index.html","40c0902cdb215bf17d4589d1fa157dbe"],["/tags/Java-EasyExcel/index.html","77faf9381e668007f67e1d8a8e65d60d"],["/tags/Java-MYSQL/index.html","42eae72fa48edaaaa3ad44665ed06b0c"],["/tags/Java-Page/index.html","45c5cff3de7ca4ce3ade17aa3e489b21"],["/tags/Java-RestTemplate/index.html","d715e0151c19c074b1406305c9a6b54b"],["/tags/Java-工具/index.html","a9cb9849cd63aec9727e914b7a03a61d"],["/tags/Java-常量/index.html","68072ed5dba1ab7c7bd8f0978d507a4a"],["/tags/Java-校验/index.html","9ccd920bcc5cc9436b1e04520e10cab1"],["/tags/Java-配置/index.html","1ea46b2ac200c72c71a9f3f2c9f34878"],["/tags/SQL-便捷/index.html","6d99da3af9c260766c38521e3ed5c31e"],["/tags/Safe/index.html","9323194c3fa5d26eab10974437a13019"],["/tags/index.html","a776b35819ed8a5136ceef65295339d9"],["/tags/java/index.html","b9a0a9737cd82c7b0d3e09065f91d813"],["/tags/minio/index.html","c0375c5334b82fcfdd5baa87358d35f7"],["/tags/定时任务/index.html","23181a80a56e1733eacb3eb2235866a6"],["/tags/工具/index.html","826aa0d9fd858c7058f8248a57548c0c"],["/tags/搜索/index.html","0d7706088895d81e064d3429089adda0"],["/tags/时间工具类/index.html","0f07e261eef63c73e13744b5e1558d0d"],["/tags/虚拟机/index.html","ace67e0ec44e06023a7980abe26cb568"],["/tags/递归/index.html","996dfc7ddd98add59914ba27441bf8d2"],["/tags/配置/index.html","4cfe1b2879cc5180b621b641a27679ec"],["/tags/阿里云/index.html","74f9e94c9367e8e99cd36e6980f82e62"]];
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
