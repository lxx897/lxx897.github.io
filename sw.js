/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5abaf58f98ff60422e22abd49ded26d0"],["/archives/2023/11/index.html","52624cdc0c1b830f8793f71f0b1e9ddd"],["/archives/2023/11/page/2/index.html","3a016d546c76772a68a306f131d907e0"],["/archives/2023/12/index.html","809a8b889eca7f1b3e7bb19cc3950584"],["/archives/2023/index.html","64d0e356c4399ea12b92df6762bb6b1d"],["/archives/2023/page/2/index.html","08030324f5b0524a993ecfcf37088425"],["/archives/2024/01/index.html","9ee9b7cc6b60e2a813abed6397138203"],["/archives/2024/07/index.html","8601e90460cdced11699ff086d9a70bb"],["/archives/2024/09/index.html","972562056aa932713642871e672eb855"],["/archives/2024/index.html","d13adb33e4621ca4fddb5268e74402d2"],["/archives/index.html","88e1658f96de9d66fcb73f06a360093b"],["/archives/page/2/index.html","b5293252fa1585524fbfb6a3e8d5edaf"],["/archives/page/3/index.html","ab62c11e44b7af2217e9f04765e5079b"],["/cat/daily/index.html","1796735233700fab3f045ab2617d6700"],["/cat/food/index.html","44032285a48c40698bb4b2aa33af7c3d"],["/cat/health/index.html","80b29b8c4b44f8c60ecba6ba2c179699"],["/cat/index.html","c122a8fd3520637030086a6b35909c34"],["/cat/picture/index.html","be90574ac440e84669a2a03578894b62"],["/categories/Docker/index.html","a6d8d86e32020444e055606853dbeb10"],["/categories/HuTool/index.html","e5f56f7595822a290a57be9ab64804c1"],["/categories/Java-MySQL/index.html","fd9516000bc6f8603a3de5990f2f17a5"],["/categories/Java-远程调用/index.html","9e569afd318f58bc5b68abf610e56f5c"],["/categories/Java/index.html","ebf807b4314e469ebc57645ae266920e"],["/categories/Java配置/index.html","764b0eef822eb6ed7d0541b46e8c9db2"],["/categories/MYSQL/index.html","c61ec9b7bcaf9b75eb36fdb80e550338"],["/categories/Page/index.html","8255b6bf10bb268e757bd02b5d6735c7"],["/categories/Safe/index.html","7502ddb459ce0c601f1ac2496f6b0476"],["/categories/hexo配置/index.html","2d6e4925c0d078834b02a7d2af883723"],["/categories/index.html","d8a225bb5c0d2ae1912349fa6d130501"],["/categories/passWorld/index.html","c07d604f6727be7729f8b8ff508c84cb"],["/categories/实用工具/index.html","69b885c73270763383e3bfdc219963c3"],["/categories/工具/index.html","a50b80ee2c75ed267c6262e2e2125518"],["/categories/工具类/index.html","ae7368e751ef5cd241e256d6244ee7e8"],["/categories/招标/index.html","1d364ce6d0663a243fe07156b110ad92"],["/categories/时间/index.html","4f2ad4ef9794dd771e94a2914680963a"],["/categories/视频/index.html","4e7f6a6315fded5b74b5a6c64dd0917a"],["/categories/账号/index.html","b5f579c01c1cdaa6439e8deab2e5dfdb"],["/categories/配置/index.html","d0065b8247faaae5a02e0283d3020758"],["/categories/配置文件/index.html","27c455a03ac7268f2f06d820e97fa516"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","1791c772a822edc2c90845ca663fda0e"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","364034be0f877aedbb56b3f34a5e12f4"],["/page/2/index.html","df69fa5decd2755c18f238cbde6db796"],["/page/3/index.html","ba93162ff4f9d463f363d243e039f003"],["/photos/appointment/2023/index.html","384b237c3ce5e93f4450ecc94dee3cbe"],["/photos/appointment/2024/index.html","fdbc6ad49fff44b5fc688741d03fdbe6"],["/photos/appointment/index.html","0b15c7a9351521a5133ec0c9538ce523"],["/photos/babyAndBabies/2023/index.html","d3f4f11196b88b2b9c6a891e0f855548"],["/photos/babyAndBabies/2024/index.html","9bc72b286101c193f68f84b1b6b51312"],["/photos/babyAndBabies/index.html","4601a4c836d66dc1ed8200eb08fa831f"],["/photos/game/dzpd/index.html","5ce061b4e96aabf3df288e375a483fc2"],["/photos/game/gy/index.html","0cb8425728d83ce5acb6b6ab8ea26cc3"],["/photos/game/index.html","c646e550d29ad1237b6c363b3220e65a"],["/photos/game/steam/index.html","32b9c66371cec4ee62ae10dec02212bd"],["/photos/game/wzry/index.html","763e8698a516bb3e3818129f53aa0669"],["/photos/index.html","3cb3aef42cba7c9a8321407b6f4a7fa5"],["/photos/movie/2023/index.html","e957d52d09b9f687dabe19a3528469f3"],["/photos/movie/2024/index.html","5f4ec56fad897b6005d5ebd9948c9599"],["/photos/movie/index.html","d73b2cfe4f862b8c5d95489b7816e128"],["/photos/ohmygirl/2023/index.html","1b3f23f00b06d78f91a61fb6aa960749"],["/photos/ohmygirl/2024/index.html","acd0ffdbad8b368a3aa86502e37dd3c3"],["/photos/ohmygirl/index.html","f4987e274f882c24555361c640007b64"],["/photos/outside/NanJing/index.html","e9089b49803c7b6ff6a9904764fc4e71"],["/photos/outside/QingDao/index.html","b270e2199a3d7ffabc5e2d0634045009"],["/photos/outside/WuHan/index.html","af774bb0b9f84a6129b4c151d30e41e3"],["/photos/outside/index.html","a05f756f97f5c0f20859a730b51fb915"],["/posts/15940.html","6c301fdefccf327691afc2cc5021ee60"],["/posts/16888.html","5e49900c0eb3adf8cb1af90415ac5851"],["/posts/17303.html","0ba44fa5a4c047763bb2537435dff968"],["/posts/18206.html","b1a83b356671446336d6f39c626e56a9"],["/posts/21635.html","4ad3fb9ad4980da96de04083c9f89c5f"],["/posts/22910.html","e4914e4c897a295b8d0dba92dfb3a5ea"],["/posts/26185.html","476835de165e4821034ca2cbaefcbc10"],["/posts/27699.html","568b49cecefe63b94b3a64292bcb3ede"],["/posts/34134.html","c1f79175ef7752cb45575042d9b755c5"],["/posts/38362.html","bd0436070f76736b2f26393b3830af27"],["/posts/38878.html","9ed43e58835baedc954f99da735a328c"],["/posts/4186.html","7360200dff6fcbcabe73ffe0d14eb922"],["/posts/42658.html","e59b8993da675ec6d63fd36bcd6c44ea"],["/posts/43076.html","2d8a9bf1288fed325ce6293fc39ac2b7"],["/posts/43618.html","df25b4d3dfd385d8ebf080d33ac0afdf"],["/posts/47374.html","24db9a310d513618e4bf737f1fb57812"],["/posts/48428.html","d7949302c28d68cd66ad822fbfe8b5ff"],["/posts/52307.html","227d05e8f8cef5673edcb0761ecb2794"],["/posts/52812.html","3cafd721f74caf3c06e4094ebe635d46"],["/posts/53486.html","e92d7358114562d74e42cad6beb1b583"],["/posts/53714.html","8c43fd69c8456392f87a058cee567789"],["/posts/57395.html","56732dff116166e32b186674aa5aa8ad"],["/posts/58565.html","1d5867152b6b27621afcf13e38006cdb"],["/posts/59743.html","08aac71467ff7617da9e9ea63f1edeaf"],["/posts/62255.html","c8f76838d11297e4e21f6d2f7954165b"],["/posts/62580.html","7132073a59a000c24208cdc9e1444b4b"],["/posts/64032.html","3a952319b901dc7acda8049b4e0494bd"],["/posts/64329.html","828ca404981693e24dd7da23519858f9"],["/posts/9968.html","3647f1d591192b3c1aefec4015b84cfb"],["/record/completed/index.html","bc2410d9293e1dff90057a0f1272bcda"],["/record/emphasize/index.html","878c71c219a1912f926da8e14173f549"],["/record/index.html","885803287a15da61a1d99074cad2d88f"],["/record/period/index.html","f869a405b8d507764f393758a3f914b2"],["/sw-register.js","9819966613268307377c710b094f182e"],["/tags/B站/index.html","d9ce3a2d591e59eaf1c60938f88a47f4"],["/tags/JAVA-工作总结/index.html","72e0087964c25b71f31df0fe64fa98c7"],["/tags/Java-Docker/index.html","f816cefe0123c7d9795bd293dcbf7f45"],["/tags/Java-EasyExcel/index.html","6556fa0eefd23b1d0e08926172e75961"],["/tags/Java-MYSQL/index.html","85006cd9cd2d59d0de0c8db528d57371"],["/tags/Java-Page/index.html","7d87422a96f0758be0d74cd4cd42bae7"],["/tags/Java-RestTemplate/index.html","808ba9162ec83c8bd4fefcfe50f27cd5"],["/tags/Java-工具/index.html","b9a4e96bb808f9f7bfc5cc62a490f152"],["/tags/Java-常量/index.html","7820da142236caec3eb1b10e4df40aef"],["/tags/Java-校验/index.html","943280e4b56f3f5965e0efaa9c97b301"],["/tags/Java-配置/index.html","998a75051cd253745be990a9cc5de1be"],["/tags/SQL-便捷/index.html","003d63e0c7772c3f5b6e403e93db143a"],["/tags/Safe/index.html","66c86da6c2797148280a84e64b743fc2"],["/tags/index.html","c94b291fa0f505c875d8a0647f89336a"],["/tags/java/index.html","f7c87da0f77ec4399f98676e8a39aeef"],["/tags/minio/index.html","444abe120b02810ac0530d31d3d927ae"],["/tags/商务/index.html","763691e4c16f90b9d3d8add3169d881f"],["/tags/定时任务/index.html","a7e52f5e77ac8567264c9c1d2b1a48c7"],["/tags/工具/index.html","3a6e546608d6939bb65bb13f1c3760bd"],["/tags/招标/index.html","f7a59e893b2d176790dcd959d6d29d1a"],["/tags/搜索/index.html","e7b03f727a942e00065a25a549cd838e"],["/tags/时间工具类/index.html","639165c48b9e8e2082e558d84b5dbfe1"],["/tags/虚拟机/index.html","8bc9d250d37f084db70bf666bcbaa40b"],["/tags/账号/index.html","aa63df30b4dd4d045e7065dd6161cab8"],["/tags/递归/index.html","7be2631bf5d113c14de225d43beb6311"],["/tags/配置/index.html","49f2e809de9ff4c70b0245b3a7cf46a1"],["/tags/阿里云/index.html","e61a6c7ea7d96cdc1da7dfcf346eb41d"]];
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
