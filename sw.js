/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","45aa2888624589b61df752a5d108aef0"],["/about/index.html","c82e4dc4412eaaa99e6ce03caee9f578"],["/archives/2023/11/index.html","7aefe018f67f8e00ccb2687d817617d2"],["/archives/2023/12/index.html","9282e9973b005db3d09b48bae446e738"],["/archives/2023/index.html","9acbf48646aeae71c6a19c3a96516eab"],["/archives/2023/page/2/index.html","8c38283948f5655f32bec228e0fefad0"],["/archives/2024/01/index.html","a820a348186634bdda06af4385d84caf"],["/archives/2024/02/index.html","653670ba47a21be96ea284be2d742284"],["/archives/2024/03/index.html","63dd4e2a06e34f0e219eef79aa1a3912"],["/archives/2024/04/index.html","0c50b48d7d2a6846fb8069d7c372527b"],["/archives/2024/index.html","2e479f18d5001fc2e2601a0d1007be78"],["/archives/2024/page/2/index.html","caf824290c9b6db5111c4b40010cedd3"],["/archives/index.html","0f1021afd8c99d2bdf78de68ae253a14"],["/archives/page/2/index.html","72500cb1def50738be79b8e7b8565295"],["/archives/page/3/index.html","2d0ee3c62ff6a553bc711957397dd850"],["/archives/page/4/index.html","88cb2ac4b78f64844d3ff8dae798434c"],["/cat/2024/index.html","b63c3ea34af47cefc7e66de5eb4e109a"],["/cat/index.html","f9c865a8a019b9e7806556045522086d"],["/categories/Docker/index.html","dfa802aa831e849cb873e523405783d2"],["/categories/HuTool/index.html","9599605068c29902dada8c11adcccdc5"],["/categories/Java-MySQL/index.html","b2cccdc8d738b7c179f7db184e3d6318"],["/categories/Java-分享/index.html","4b4ee65cd3d19c65f549e0b0f56309b0"],["/categories/Java-远程调用/index.html","11d80321069c480589312b2b85171c11"],["/categories/Java/index.html","af99eff0932ffb03545a3212ed67bfb1"],["/categories/Java/page/2/index.html","a80c14476816365c6a23d49236a9ee2d"],["/categories/Java配置/index.html","d083ea0854a0f057cd1d14a0c7666d36"],["/categories/MYSQL/index.html","f5ebe358ef3b1413549ab7615be1ee7d"],["/categories/Page/index.html","a0404d155b7644dfbcffdfcdd8de1345"],["/categories/Safe/index.html","830fa793266af0a7d363316c53969b2e"],["/categories/Stream/index.html","3ca60e7a89a61d4f1f6a3b1517dd30d8"],["/categories/hexo配置/index.html","ab6521629a08f6883573a792f0dc586e"],["/categories/index.html","f8454ca3967b7e000f9470c7879ce253"],["/categories/实用工具/index.html","c8a6df8179bb4be4e8dfdf1f9dddf19c"],["/categories/工具/index.html","451eb5ff5f9d8fb5c897b92d52119bc5"],["/categories/工具类/index.html","934ad132c6d6e77ba0bf14bed91719ba"],["/categories/时间/index.html","d09eab5105f10e23c581b04615f65397"],["/categories/配置/index.html","a3b3e389c6cb9346d66690c6d8d95631"],["/categories/配置文件/index.html","f5aaaccb571a8d5fe0ed6482c311c8ff"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c27f2a17b236faa934db5c387eab75fc"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0bdffb47ecc47c8b919062f112a62de3"],["/page/2/index.html","af03eedef1aff2b9758a1c25ddabfd9c"],["/page/3/index.html","a9667086c76fce0fc06c6998f87a34e1"],["/page/4/index.html","eba4872d6a95b455b610b29f709408dc"],["/photos/appointment/2023/index.html","b00d046ac69d6879fccdc0ae6ef5d9af"],["/photos/appointment/2024/index.html","bde26cdfbe4e469b327e1e7a54584373"],["/photos/appointment/index.html","d15949540f218ffa8d2664f97607ef66"],["/photos/babyAndBabies/2023/index.html","c4b0ecd6be0145db73c35c41469695c1"],["/photos/babyAndBabies/2024/index.html","de796ade5ea2c7d8d43da3a394348195"],["/photos/babyAndBabies/index.html","3fee31727d42e3039ff06484aa36d9c5"],["/photos/game/dzpd/index.html","7a53be17fd10cc82c794af4c64d76fd3"],["/photos/game/gy/index.html","1a71c83411c71df8e0dd2503a0c07a83"],["/photos/game/index.html","204857c9a9be4314e26cfcd0795614df"],["/photos/game/steam/index.html","3e8b9c7e4a877af60743d9e2369170aa"],["/photos/game/wzry/index.html","12f57096c578f5dbfb87a66396b0907a"],["/photos/index.html","95968c820d366e14383cf30ca44411f6"],["/photos/movie/2023/index.html","7e63e8cff76cb4627d123f139a18ac60"],["/photos/movie/2024/index.html","b701a2ae19527f827a444cebb092059f"],["/photos/movie/index.html","d5a155fe64b8bcc9d23ea95fb4f75b67"],["/photos/ohmygirl/2023/index.html","b157dee735a71da36b7446dde603303a"],["/photos/ohmygirl/2024/index.html","1bbd0bbd5c596f365e9c5d1ad19e5a4e"],["/photos/ohmygirl/index.html","69cdd08fbcd1ff5f0dc20f68b87154dd"],["/photos/outside/NanJing/index.html","2b1e273a8a29ca7fb4525157b0ecf52a"],["/photos/outside/QingDao/index.html","2fc14152a3d0bacd71a0f605753c35f1"],["/photos/outside/index.html","68be1cd4da29501740019b2e49f68a74"],["/posts/12933.html","08e5cf60f90afbc99788d9bcb45e6d00"],["/posts/17303.html","fd7bf7bee17216d8123ea753d55a07ac"],["/posts/18206.html","5732b4d70cf36da95d67391f2dbfe3cf"],["/posts/20933.html","3d874ebb4e60aafecd8877cbb243e4dd"],["/posts/21635.html","0c046c2183386108b4de0e0f16107c95"],["/posts/22910.html","1299a8d2427514a737dd79a091598fe4"],["/posts/23407.html","ca130236c8ebf1ca631f51bd236a9745"],["/posts/26185.html","301cd194aa1a8f7c13df20972193b578"],["/posts/27699.html","c6cfa42f805518c6cf45ac69df1b9161"],["/posts/34134.html","600dd7e0404b220133d3ff93933677df"],["/posts/38362.html","f47753045c5aa4304b69e515920c7d76"],["/posts/4186.html","404aa42bf15d811e071770e95eb763c9"],["/posts/42658.html","a0fb80d6c961991bbbdf14135e37fdd8"],["/posts/43618.html","d629dd95a797806243460908a6c792a4"],["/posts/47374.html","523c41fedf3e933933137e6e1a6911e3"],["/posts/48428.html","9efcf68c6e738f0f4775fa4afbdd06b3"],["/posts/52307.html","939548903390477970411bab4072d45c"],["/posts/52812.html","d7e15849f432a04d657625f9832f78d5"],["/posts/53486.html","5b3385e68447fd91ed7686f92240ef09"],["/posts/53714.html","53e9dddb4304a5732c7556242042149b"],["/posts/54999.html","f861fabf9396da105b583d02c18d8142"],["/posts/55564.html","1d4fc5f1f1b81745a97d0169540ecf95"],["/posts/57395.html","88557a801e36d13cbc900a4d0b799dfc"],["/posts/58565.html","bee908a72839689358731a1b24973ced"],["/posts/59743.html","f2f55259d7eac4c04c7d14659cd58c88"],["/posts/62255.html","fbcb3fc54e4a3e94e4b8ff341635f514"],["/posts/62580.html","fc1ada2fe53602fd075d1d0a2dace026"],["/posts/64032.html","260828701fb913f755c69cac0bc2dd65"],["/posts/64329.html","1a750098480f132d44cff28591c88422"],["/posts/6594.html","406f7010acf0f100c22fe0e518128f00"],["/posts/9968.html","eda689bec4339b61319d287107642a84"],["/record/circle/index.html","6631a463a7bf29b3fbeb7c8ee4ebed76"],["/record/completed/index.html","7553e0d2174ab6f83fcf858c75bedb82"],["/record/emphasize/index.html","4307f29da35e28e8075b36d70ffcfa7e"],["/record/index.html","74fc8b1e4b57ad3f45544713d2539dbf"],["/record/period/index.html","9350d530234b331f1b19ac2d2f94c169"],["/sw-register.js","6ac8e22cb89fdac084abdae49fd460b3"],["/tags/JAVA-工作总结/index.html","c9b31ed78a2a6f4cc7360240458ee7f4"],["/tags/Java-Docker/index.html","081486e6c62a396b105bb83887ea0b16"],["/tags/Java-EasyExcel/index.html","d2245c0ee5cec6b7d40324cd0dbfa9fb"],["/tags/Java-List/index.html","2293b80ad46a2ec7d46284445c76e46b"],["/tags/Java-MYSQL/index.html","d1f8842e8acb65dc75fb71376ead1076"],["/tags/Java-Page/index.html","49079959ff27941697cced11572a3fbb"],["/tags/Java-RestTemplate/index.html","cbfb3144b243c39b6e06562404566991"],["/tags/Java-Stream/index.html","7f4cf389f091dcc4c4a289fba432a465"],["/tags/Java-工具/index.html","e2be3d8e80270e24d143f83dc0f9d513"],["/tags/Java-常量/index.html","2484ef620fcb386921ce7cb11a3ba4ee"],["/tags/Java-校验/index.html","b4953ae290143458fd22fd7c6c3a1433"],["/tags/Java-配置/index.html","62a7b3f6716b7f4bc2904efedf1bb312"],["/tags/SQL-便捷/index.html","bdc3715597538dbc98b9d8cda832dd4d"],["/tags/Safe/index.html","4527c3c57d5f2c167af705620d266528"],["/tags/index.html","f838afa8c0f2c1c59042ee567b13aa66"],["/tags/java/index.html","46b52409d1b38ef3c96e4db86d5613ae"],["/tags/minio/index.html","93cfb9a6ac10099e14b7d0aec88d3888"],["/tags/字符串/index.html","31ad5a9408f1560ef7cd32d4891b61e7"],["/tags/定时任务/index.html","cf9213143071bd358573d53fd6bd44ea"],["/tags/工具/index.html","2d78255f11cafc34b87b1224e5c46d01"],["/tags/搜索/index.html","e1afe8a61a57ea1590fffc46ca6c0eb1"],["/tags/时间工具类/index.html","e7a064474cfcd98133a56fa218abab15"],["/tags/虚拟机/index.html","fed5fad621e4fecb99a51e35e7226344"],["/tags/递归/index.html","49219c64bb2e19ff12d0610132f98174"],["/tags/配置/index.html","84cf958f08c702f3e16360e8a3aba574"],["/tags/阿里云/index.html","f17dd199f1bb7d7c08eaf823bf09a17f"]];
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
