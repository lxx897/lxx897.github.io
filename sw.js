/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3a9b74ce260d8701bb50b1aeb16a0b18"],["/about/index.html","bd310b5e70361c38a9fc583e538eee85"],["/archives/2023/11/index.html","2edf6e288c44672697aca3e2423a984f"],["/archives/2023/12/index.html","57f10aa58e8d7a51aaba6e78139f7a42"],["/archives/2023/index.html","0a485e6a93e7b38f09eca980e6b82c81"],["/archives/2023/page/2/index.html","e4689386aee77066ff7125968777ed40"],["/archives/2024/01/index.html","74fc7469f47e97b1591ff62fce4673ec"],["/archives/2024/02/index.html","e52f9c3259c281673bcf4773774676a7"],["/archives/2024/03/index.html","a54a8b825474b3decc1ff2e0e8d50bc8"],["/archives/2024/04/index.html","cc9ba3b5f49901ac15fe25504c2a8c59"],["/archives/2024/index.html","140567137afc36646f0167949d95cb07"],["/archives/2024/page/2/index.html","9e77994fe18354199189ae0aaf899ea4"],["/archives/index.html","3fc6c4e5c9990af603c8e080902bcd81"],["/archives/page/2/index.html","0d1c624136c8aa32717305040a2dd882"],["/archives/page/3/index.html","0433e9c631587538eedf1efb1673e9f0"],["/archives/page/4/index.html","a03e000cceb5e1c8237eef323b92075e"],["/categories/Docker/index.html","b24409d0cc323cbf2faf517b77ba60af"],["/categories/HuTool/index.html","890a3dbc77989f3e3b0f60e8e660620b"],["/categories/Java-MySQL/index.html","3da165f9221b96200b27bfb4f110abe3"],["/categories/Java-分享/index.html","3ef27c55ab70643534149847b68e030a"],["/categories/Java-远程调用/index.html","da774f49f2ff0b85cb0e91c852b0acee"],["/categories/Java/index.html","ab6783a890e3334fdb06fe40335bcfc0"],["/categories/Java/page/2/index.html","0d88cc70687ceb317eff700106927d8f"],["/categories/Java配置/index.html","50a87aa7d9d747a822c25f81fd92bfd4"],["/categories/MYSQL/index.html","a4503183b28f166f70b4e2a4c8be57be"],["/categories/Page/index.html","a33dafb3527116818d7b97362820e009"],["/categories/Safe/index.html","3255d73d25b464cb0069452b0c1f7477"],["/categories/Stream/index.html","1418c4edc2f797b484fa8892325991ae"],["/categories/hexo配置/index.html","71f7c2aa20429c6eee73c928847675d3"],["/categories/index.html","9cafee52bb53c6b5de18ea1f8d34952b"],["/categories/实用工具/index.html","f59a5b24c40057ecfcde3d69825abdda"],["/categories/工具/index.html","288104801b7621b4908d97821fdbef5a"],["/categories/工具类/index.html","d8782554fd5a3f00f5c05e5a0b80cbf7"],["/categories/时间/index.html","a56583cecf0380d58f0abe2116d9b99b"],["/categories/配置/index.html","ecdb2d46e82051455f6de0ab53925d3b"],["/categories/配置文件/index.html","8e39c5d69850264f838ed2001ac929db"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","753f2116af69f6fd88d38b2ff846194b"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","cc8c4a3f67f0974f5eb3eeb4dc8e1065"],["/page/2/index.html","72212cd0dce06503415b4113b3df69bd"],["/page/3/index.html","c9ba82c4dd9083c1f201cd9534098353"],["/page/4/index.html","c9a680c5e7c336baac1d17dfb0b63e9c"],["/photos/appointment/2023/index.html","af50d47b25c491adbf0a9c263056b740"],["/photos/appointment/2024/index.html","57d5f7c964ea9bba28e3a60de8236dc1"],["/photos/appointment/index.html","130745f18cd1f6b8c1863a8191b4c3c0"],["/photos/babyAndBabies/2023/index.html","3bbf0c5be1fcd7a9422d1c952b61e193"],["/photos/babyAndBabies/2024/index.html","3c6f75adedb59f101342005b42502881"],["/photos/babyAndBabies/index.html","421902897e5d6044071b5984c436beef"],["/photos/game/dzpd/index.html","76773c3b8068545ecc23fbcd0d357706"],["/photos/game/gy/index.html","087228c58074ee18f2f0a0d3128427a0"],["/photos/game/index.html","4ddff9c3870d7c3557317c3c4d5be2ee"],["/photos/game/steam/index.html","7d5f8be47435babc26183e2d3531c6d1"],["/photos/game/wzry/index.html","da074664d07f96bfc86903de7168a15b"],["/photos/index.html","9b28efe6048045be28a1693cd30da146"],["/photos/movie/2023/index.html","2214c5099612d2f022ca6a4d8baa4bee"],["/photos/movie/2024/index.html","a409c28468126084a809b83c4da7c7b1"],["/photos/movie/index.html","62106d079ac4ccd28fde61730ee0d38b"],["/photos/ohmygirl/2023/index.html","bdc21e416363d9357a616f6ec41161d7"],["/photos/ohmygirl/2024/index.html","b4f5f376bb04822e2a9916c60299bc0d"],["/photos/ohmygirl/index.html","2d082baaf5d8c5a671ab66e9a02c6f15"],["/photos/outside/NanJing/index.html","3f8d3d819ac6756835657973b4b94ff5"],["/photos/outside/QingDao/index.html","b6a8dfafd28c64991358426794a7b45c"],["/photos/outside/index.html","4e6dd32a5a0c6b0b22b263ac10e1435b"],["/posts/12933.html","645f53fb2fcb28a3446a11e710d51212"],["/posts/17303.html","627070a2a5ff4ad7bfa6d5276a4be4de"],["/posts/18206.html","b7d2ad319508133b59273a94707c219c"],["/posts/20933.html","6ee1f38756118255116036d345388a37"],["/posts/21635.html","e61940f1dcae8907f192381292e7c20f"],["/posts/22910.html","686ebac4a90f8645ee5f96b556cc1210"],["/posts/23407.html","f61a470f277f4b08a37b8d72ab78fcef"],["/posts/26185.html","fdb3ce36bf4cf6ed657035bd9b0839c6"],["/posts/27699.html","99464eb3a04e18b073856eb39bf644ce"],["/posts/34134.html","e5644556166049f630beebadebf6ee39"],["/posts/38362.html","f39dfab103935e8a5a6efe8e28c0792b"],["/posts/4186.html","416b8c0544c155caaa48beb923ed7d30"],["/posts/42658.html","97560d83b27a05a038927d7af9956861"],["/posts/43618.html","7e26d6d47deea6b07edfa8e07f44b0a3"],["/posts/47374.html","f13ad7fbc71082bab9ea46b1d5b57bd9"],["/posts/48428.html","dfab655ae533aa39f0dcbc8e5dace5df"],["/posts/52307.html","380fbf5798a9eba3c9887930453c3cd1"],["/posts/52812.html","172b2f7270260ea8454499096c3ce0f8"],["/posts/53486.html","159160740b19608e26ff077b1f5b0fbd"],["/posts/53714.html","352a037dc7850cefab3145c3e1a3b303"],["/posts/54999.html","073d2d423e971aa74e7fccb314aa9edf"],["/posts/55564.html","df144fedfd483d12e73aae3e09a57041"],["/posts/57395.html","bc2765edb441334f1d738c7ad32de275"],["/posts/58565.html","8393c5e07304d40c76213beec8801cf9"],["/posts/59743.html","dfaac195573c525c2b174a7cc7c4d2db"],["/posts/62255.html","3ee28e56d0612d81f8fb6ddf07454f4e"],["/posts/62580.html","5d1c04a2c272308c7b14fcc38a99883c"],["/posts/64032.html","e0904a3aacbd84493e2ea680de6a4ed3"],["/posts/64329.html","924c47637b52badaeb142e70535f9f89"],["/posts/6594.html","a5aa65b2d37648367da1e0659208ae2a"],["/posts/9968.html","3b4adfe16803ce807ed38792ed3b1e2b"],["/record/completed/index.html","58d3c29e7d0aa739aac79fc9c98dc3d7"],["/record/emphasize/index.html","e12382ff2de466594882c13da65c1b3a"],["/record/index.html","fbfdfe7e0d513c65447e7b8c66c5c211"],["/record/period/index.html","e1b1abc4e6a840acfbb8fe608dc5489a"],["/sw-register.js","effef23efd9271ad8cc6d40d1ba1b8e4"],["/tags/JAVA-工作总结/index.html","2df14872979f2b1ed751ff5f9e3bbbd6"],["/tags/Java-Docker/index.html","bd8e36132feb99d35e37ca9246359058"],["/tags/Java-EasyExcel/index.html","770ca6f760767c8abfeea54d8d3acb45"],["/tags/Java-List/index.html","c25c11ad67d85a21a5ca378a74f9b5b4"],["/tags/Java-MYSQL/index.html","311179063618f778fc70ac2296bfc948"],["/tags/Java-Page/index.html","e7be1406dfc9fe3914beaa9ab2bbfc95"],["/tags/Java-RestTemplate/index.html","191a1288779963c6e64ae1d7ef3cf703"],["/tags/Java-Stream/index.html","30b3000c5cf8c6afd8f8e39eb9a74194"],["/tags/Java-工具/index.html","3f3c44fa66e4fde13f7e0d61c671b0e9"],["/tags/Java-常量/index.html","23fc88960bc7e2293b4255c8f434afa1"],["/tags/Java-校验/index.html","68980dd0ef725905a6129ddd341f79a2"],["/tags/Java-配置/index.html","bd03ab46d942b08f9ab13c4cbffa7edf"],["/tags/SQL-便捷/index.html","d51473bfac525882a6d2eda573f8012e"],["/tags/Safe/index.html","ffe8edabc037e6ecf24653c4f46705a1"],["/tags/index.html","db2749b3d0c16006ffc1db3dd3ec9cc1"],["/tags/java/index.html","4bdf16e33d80f493d998892a3a4a8b9f"],["/tags/minio/index.html","1932ad40f411535b3295bbfb5192fd3c"],["/tags/字符串/index.html","3745fdeaa399289220991fb9221affbc"],["/tags/定时任务/index.html","79c72576ddcb43b959be96ab4716f8a6"],["/tags/工具/index.html","f1c9fe8d4f9690ae61411b6443ee0f57"],["/tags/搜索/index.html","f977e19210606713ffc436adbe194111"],["/tags/时间工具类/index.html","99a07401d282a259f5e295342f82c927"],["/tags/虚拟机/index.html","24c8f20fec32d3d482eaeb7703227862"],["/tags/递归/index.html","54f4a17398ae7903eb2483836b062186"],["/tags/配置/index.html","dfe7c5169d90d0f89e59f218ef293a18"],["/tags/阿里云/index.html","675ad6fcde9427a81d5f3abb7f861ee9"]];
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
