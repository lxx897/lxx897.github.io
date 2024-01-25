/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3716ff67ad72809bcbb7004dab77950e"],["/about/index.html","2a5120929d278746212383de2cffa7ba"],["/archives/2023/11/index.html","694b003776bdab81fd19f2a4271d3b15"],["/archives/2023/11/page/2/index.html","57578108fc15a99496ebb594f556dae3"],["/archives/2023/12/index.html","9f9dab145f0ca54dd04ff8694ed37492"],["/archives/2023/index.html","a6020e838ae4b2489454202cab41c618"],["/archives/2023/page/2/index.html","1e4cbf37249c1e498ccc9b3b02941891"],["/archives/2024/01/index.html","8675552d3f2a69d07c60182ce443c4a8"],["/archives/2024/index.html","37e59846a7cc41b62b53877e9c8939f8"],["/archives/index.html","f701bfcf82e398210b9bf8439ab998d2"],["/archives/page/2/index.html","014a52c3c3466632c69f10ec499f8e7c"],["/archives/page/3/index.html","b9f6a4a815a48865dfe035784f35ad5d"],["/categories/Docker/index.html","781a0a72f069a10b59c0c88424781219"],["/categories/HuTool/index.html","89a780710a8e91d7dd3c7380bcbe00c5"],["/categories/Java-MySQL/index.html","edac8717a3323313bf3542c9cb2491d2"],["/categories/Java-远程调用/index.html","23df9d98565f38c04ccc00ed73c27b30"],["/categories/Java/index.html","a44721a5d13df9a9678bbf5f3106bba6"],["/categories/Java配置/index.html","21a9f1ad58e4efb372d44510bcf66a95"],["/categories/MYSQL/index.html","a7297a40f9552a622fbb70e7a22cb048"],["/categories/hexo配置/index.html","d80254d3a45a3fb3bdc737ee0c348d65"],["/categories/index.html","2a42a80e8ea90bbadbf5ce097991ce85"],["/categories/实用工具/index.html","1dc57ac337bfc7489091c37dc25726c8"],["/categories/工具/index.html","a9234ce02d42782b8a0cebe909f9c392"],["/categories/工具类/index.html","84e01b475fe8f07234024a21061fd1ae"],["/categories/时间/index.html","a59e074120c6141e1aded34e0ea93ed6"],["/categories/视频/index.html","f385489a370154b0fe324067a9907519"],["/categories/配置/index.html","a7d14e4743a206093d8b087bc7660a40"],["/categories/配置文件/index.html","ab6cd60055cc504b6e775a9168507b49"],["/completed/2024/index.html","5fbe2cd33382a14fe9f9cdc34f494d25"],["/completed/2025/index.html","5517432d86febe22fa1e039c2781b10a"],["/completed/index.html","684e6a3f773554ad4be726b606b040ba"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","de2cbebbe43e9f1991bb2dd2078fae2d"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","27df4b69507c423149302928a1d23be6"],["/page/2/index.html","99e98aafdb543fc405e3dc9891555d46"],["/page/3/index.html","07fa3533dc8774e7104b9df93b7e2a3b"],["/photos/appointment/2023/index.html","78a1a5a32a5b3cf32aa44f2cbb2f8f5a"],["/photos/appointment/2024/index.html","408cccf6e6fd28dfcda214bc9d0d548c"],["/photos/appointment/index.html","6b7fad7ca829347ec3ac4713bdbfd435"],["/photos/babyAndBabies/2023/index.html","8afa59858e73c2673e2ee1f3da3aa6c5"],["/photos/babyAndBabies/2024/index.html","5d623c344cdcc254a7ee63f1ee569317"],["/photos/babyAndBabies/index.html","bbe2eb8aaee4241afdea69dc876b1b4f"],["/photos/game/dzpd/index.html","7e45d85e2ab03eb94ab24822c3b6564b"],["/photos/game/gy/index.html","9ea52ea41e3a833323076c8b1fbc8f41"],["/photos/game/index.html","365579c8cb2642f01ab583ab9463268d"],["/photos/game/steam/index.html","ca5f5770a77289341d55398dc8945d14"],["/photos/game/wzry/index.html","19da175789d8b48c0c7692a8a83af300"],["/photos/index.html","f04a38fd0c166beb1d7f504f2b050fe1"],["/photos/movie/2023/index.html","1c729b6deb2ab62bdbea8a797579bc9a"],["/photos/movie/2024/index.html","d4497fa048f8a838aa910f43d6531ae5"],["/photos/movie/index.html","e05b96aa37feafed01773e1b791332cd"],["/photos/ohmygirl/2023/index.html","0ee7e957b66f7e24833e454947093957"],["/photos/ohmygirl/2024/index.html","4590a2eeb7ceec05c9ecdf840ec7e3a2"],["/photos/ohmygirl/index.html","8edf377fd9756bb813d6b80c69790515"],["/photos/outside/NanJing/index.html","ed526fe2d1dbcdd4538080ff76f50e9e"],["/photos/outside/QingDao/index.html","8240dfc3175904236f79a5a4f1126164"],["/photos/outside/index.html","8a2a3bca30cc23de298e0befcc91961c"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","c4263960da2065d3f7fffc70cf85f755"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","bee47ac056f550cb0e97a74f29f4bedd"],["/record/2024/index.html","6d3ccb0a7fc880919684b948a066b901"],["/record/index.html","3c2ddc219fb9843104fd19ca7e94a053"],["/sw-register.js","71d3b586da31a1313804ae3840d36c34"],["/tags/B站/index.html","dd9e821e33d0d629e5cc6e5935c62c97"],["/tags/JAVA-工作总结/index.html","cdc7beeedf996e3d7b969ca68ebd2871"],["/tags/Java-Docker/index.html","fc3f076171541e502910b7249784a288"],["/tags/Java-EasyExcel/index.html","9873d07f58b38887611b0ea61743ec74"],["/tags/Java-MYSQL/index.html","ec48cb85187b9543aa80d9f421c225fc"],["/tags/Java-RestTemplate/index.html","a6810acdedb3ab579f8e8b8549f17640"],["/tags/Java-工具/index.html","088d35881519418989f7c2f14e2474c6"],["/tags/Java-常量/index.html","b7b82cf7366c96b92fe10e7f2f9b54af"],["/tags/Java-校验/index.html","91153c80d1a8040487718b7a358b295f"],["/tags/Java-配置/index.html","39dc9870cbf319431da9527dbcf410ee"],["/tags/Java/index.html","5bdd19181ec8d077d6e568a8c604c1a4"],["/tags/SQL-便捷/index.html","337612acd5977172873fb641f12e64dc"],["/tags/index.html","21244c1669aa09599112cbfe28c88c00"],["/tags/minio/index.html","552b2e46106d99c3d6aaf56f5818b0a1"],["/tags/定时任务/index.html","4ba01a6b16e0c7bbca816d6566a08fd1"],["/tags/工具/index.html","1d2664387edea542022c5e5a5cd2af45"],["/tags/搜索/index.html","988c657ded9cfcca959dd867d035ca97"],["/tags/时间工具类/index.html","375ed4a4df90901bc0b05528dd8150a5"],["/tags/虚拟机/index.html","d7c77c60542a06a974fc310a00615ba9"],["/tags/递归/index.html","ff32215ae1f031d8583af0b3afc91dc5"],["/tags/配置/index.html","706b117c5c317dfe6924eb94148537ca"],["/tags/阿里云/index.html","633fbeb4aca4630689e0f6e25ed6fcca"]];
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
