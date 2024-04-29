/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","166639a082f183197cf977131cb97170"],["/about/index.html","c2a634add721363a3511491c26d98c7f"],["/archives/2023/11/index.html","14f90b49694b3183f49b5c53d13dddf5"],["/archives/2023/12/index.html","368c944946559a18937173ebe733e577"],["/archives/2023/index.html","d883cc36cf6a96500afdf153e7358b8f"],["/archives/2023/page/2/index.html","0c81b8f9dd11071743356a2ff3df9335"],["/archives/2024/01/index.html","70b077b3013186c18221f0b694a05bbf"],["/archives/2024/02/index.html","a1c812dcd073c319d31d7eadaeb8fc8f"],["/archives/2024/03/index.html","d7c2e20a1dc753fb31271256db2ec6b4"],["/archives/2024/04/index.html","8433a48ffd38c43d7142ea69840401b8"],["/archives/2024/index.html","ba24950c95c55887633ecbfcf3452ff7"],["/archives/2024/page/2/index.html","c24dffe1393f61a814e4e1abc71dd471"],["/archives/index.html","c85c52d382412134afd74e0d2b432d37"],["/archives/page/2/index.html","d956146f143929f71b1cb20d67c5fd04"],["/archives/page/3/index.html","c7108d557d7d84d430d85c94b0b509bd"],["/archives/page/4/index.html","328203ac903983ab4c77172d795ffc54"],["/cat/2024/index.html","d44278c6989bb0b3a2cee3f2b1e57705"],["/cat/index.html","cee5af871a68da6ec77470fde605e739"],["/categories/Docker/index.html","3bc4d4c9b229428fd8b1a7bcb1c35b8c"],["/categories/HuTool/index.html","3e1f3ff3f9e4a36bba6125b7d294ce67"],["/categories/Java-MySQL/index.html","e4d44930495893d965c337ba3c970c54"],["/categories/Java-分享/index.html","4fe60d803aa09d855a0c8215dbe220dd"],["/categories/Java-远程调用/index.html","c8e4ec358e1d0b5dcdea68cbd1a68840"],["/categories/Java/index.html","34536e870bc4a40f65c8ad9db8381c4f"],["/categories/Java/page/2/index.html","8648c78d933681db31aabd02da4fdf7d"],["/categories/Java配置/index.html","729ce04ec0630b15fbb1ff9871b20a17"],["/categories/MYSQL/index.html","6ebb609d2a9e3d614d241319c3eadb5a"],["/categories/Page/index.html","601715fcfa38ab7a1a685ac0d62c4e23"],["/categories/Safe/index.html","cf00bd609a3739d6190c16258063ad93"],["/categories/Stream/index.html","218597d797890e3bd2b1a2e238b85732"],["/categories/hexo配置/index.html","1a12190d38294563459630f8e8fac551"],["/categories/index.html","28da38b37b20274e54a4b27481eb23a4"],["/categories/实用工具/index.html","a01d1a286aad3ddefa8a62e1e35e7608"],["/categories/工具/index.html","c6d9615211c43cd3bcf33ad9aa056580"],["/categories/工具类/index.html","919bfec0c9c40f1af3fe2a3021d1bd0d"],["/categories/时间/index.html","b4d59dc6c907766fb7bd3426e0141e1d"],["/categories/配置/index.html","2f01f44bf50d13d5fd2464045906b7dd"],["/categories/配置文件/index.html","c1022607f7fd1025d87e6054de99c38d"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","a7f0a4da3017fd5d11bfbd80e4f88bce"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f2fdde0579009151e85ef7fbb79c052d"],["/page/2/index.html","0f41e8ccf4c5ece9bd1516f91c52447d"],["/page/3/index.html","95b65fb71ef09978ca2a75306424542e"],["/page/4/index.html","afcb7f0728866ff5cf42f72b57f61dbe"],["/photos/appointment/2023/index.html","be26f8b3e44959b1a8552d25c43733ea"],["/photos/appointment/2024/index.html","3611f9452adc48d97274bf8c47c43888"],["/photos/appointment/index.html","65ef511336a22f0d7dffe1ebc2ea8063"],["/photos/babyAndBabies/2023/index.html","7a23315662f3a5091c184f83e439fe9f"],["/photos/babyAndBabies/2024/index.html","220fa23f2b5fea6f872e55b7236be6e8"],["/photos/babyAndBabies/index.html","334bcc0fc304d9dc93bd02750f47fd38"],["/photos/game/dzpd/index.html","e8e502faa862bd6ff76dec93c913f365"],["/photos/game/gy/index.html","77d7493dea5de3e70a013c3aa72d1a8e"],["/photos/game/index.html","41b530aa92b1e878a1b467f32e4bb9a0"],["/photos/game/steam/index.html","b2d3e6645da280f4a0a43ddd3c71f8fa"],["/photos/game/wzry/index.html","0f4e7ee5c8dd0179ca95ec65d6fd81a4"],["/photos/index.html","d38e43efaec9d8f015dd271d6ca0f2eb"],["/photos/movie/2023/index.html","bacc4c4aa85cc12141254ce222fc3e57"],["/photos/movie/2024/index.html","a6b22a1f7cdae6c9069e97370dac7405"],["/photos/movie/index.html","caccdf7f2471a5d28722fc81250c2b73"],["/photos/ohmygirl/2023/index.html","99a37a1271f7e70db9feac5669327ec5"],["/photos/ohmygirl/2024/index.html","c05a3b7c7669e9e718ce108685f0b5ee"],["/photos/ohmygirl/index.html","45b7fd92892259b57815d9430deda2af"],["/photos/outside/NanJing/index.html","dbec78433190b48fba10ee274cba06cb"],["/photos/outside/QingDao/index.html","f4a941b03d7d5dc5e8707479c44f5de0"],["/photos/outside/index.html","5dc0c59126779cbacf1a584dc41b9d38"],["/posts/12933.html","f383177c7fe996af0e3f164bb86ab670"],["/posts/17303.html","95b92921064bd1a1a4ad981783e7050d"],["/posts/18206.html","dffff0bf021062cf5f0deb49d3e34c9e"],["/posts/20933.html","e87d9c2e02272238f50f9088634e8c43"],["/posts/21635.html","3ef3e3dece17adda57ac53931e40cd8a"],["/posts/22910.html","5965d61abd084793ddb7722c03bf47a8"],["/posts/23407.html","6ab9f8fbb1e625178a650f02d317833f"],["/posts/26185.html","11c243f70dc1089ada52fe0d716336be"],["/posts/27699.html","85e1ec348347b6314636aa71c462ebe1"],["/posts/34134.html","4a55284e07e114f05ff04ac78b520046"],["/posts/38362.html","77526a58dcfa7ef32284a8cc861498d2"],["/posts/4186.html","fd136e331f198028dfc5f5c944270846"],["/posts/42658.html","6410b5c3b54363b0e967d5cd57ce3a75"],["/posts/43618.html","55245616ab6e2f156f0e1180ceeaa2f3"],["/posts/47374.html","a7096c219572eb02260b0254d95f6ff0"],["/posts/48428.html","6b3450be7536ce102444121322847a05"],["/posts/52307.html","7348fef6c4001c1c94c52b4c28f5e3eb"],["/posts/52812.html","2a1b36b9180bab16d0b25317bcb1eb8c"],["/posts/53486.html","bc2c3bf0662ac451077deeb0b7d6e2f4"],["/posts/53714.html","a82387203e1d41bff01a60d536cf993c"],["/posts/54999.html","b49cb1cef6f21af8e7f4b05e7a33ebfe"],["/posts/55564.html","82c34af50ab53801e8a1acb7c604849b"],["/posts/57395.html","90183596f33736b1363d71a9ee99f021"],["/posts/58565.html","6986d0ad3d7437c3a8a044051e0c2f48"],["/posts/59743.html","d1c7bfbb9f1c690b27657588bf0d819e"],["/posts/62255.html","fb6e2ef435a396a66881ffa4676d20a3"],["/posts/62580.html","b7f7112f1b5346677c6593869c663e14"],["/posts/64032.html","03f29906df929ea54dacbaa9aab44268"],["/posts/64329.html","aa6e98505cffb6005ba1b4f4c10b869e"],["/posts/6594.html","1b9896c74be6f8aef59f60c6043746ad"],["/posts/9968.html","643518e5f3bf09604f50680ffba3305c"],["/record/circle/index.html","9a987436dca1eaddfb3f2709ae2a82da"],["/record/completed/index.html","9307f2eadc738d1e558a829d8d9c59dc"],["/record/emphasize/index.html","a6b2f41cac1b9874aaf60b58646f4a15"],["/record/index.html","249d00e00257d9248bc08dcbf96c2c39"],["/record/period/index.html","a7ab6116960eca5d3e117368aa0a8374"],["/sw-register.js","56603fa465809a19134432573bc104ef"],["/tags/JAVA-工作总结/index.html","6261be998effdcd79e09e476df55db33"],["/tags/Java-Docker/index.html","beb61af5f1df89d7974b0ae562c8bc82"],["/tags/Java-EasyExcel/index.html","444a08c4a7db565b22f5910a36124b80"],["/tags/Java-List/index.html","b58f36a97d3f404e1d1c6407b40e06c1"],["/tags/Java-MYSQL/index.html","30cf8ce92d10e827a7ef8f0f3be94001"],["/tags/Java-Page/index.html","4ba1ee7fd4601d9b17dd9de989e55129"],["/tags/Java-RestTemplate/index.html","90dd089a87c8253d7d49e28d69c611cb"],["/tags/Java-Stream/index.html","ef82cb511ec84666c3258bf1e602593f"],["/tags/Java-工具/index.html","d1daa6a3d3e2841f8e4f398fe99c3039"],["/tags/Java-常量/index.html","646e30482dedb5d5b8596be437639409"],["/tags/Java-校验/index.html","5b3225071b22506c91f4ec597137c503"],["/tags/Java-配置/index.html","1282172ee2ec05dbdcaac66fe73fa824"],["/tags/Java/index.html","d5ea31f48ea44b5f0936da3fc9fd2d98"],["/tags/SQL-便捷/index.html","82091702723c6a80baa25d445a5cd826"],["/tags/Safe/index.html","082fee9fc71b3b1eaa813cb9a920a98f"],["/tags/index.html","5ff7f68e7d98644cc7d7806b656fc3c6"],["/tags/minio/index.html","c98e35fd89a580a17f408d44cd3e8173"],["/tags/字符串/index.html","07ca967ebae9294c4ecde9c60af234ae"],["/tags/定时任务/index.html","3c526c2a057d3064e3f6b91620b00388"],["/tags/工具/index.html","252b474eed224d44cbb6c4bea393c4c2"],["/tags/搜索/index.html","18afd84c059f3fb8a41247e572e765f3"],["/tags/时间工具类/index.html","e461bff3d60fbd91337a1f17af1cd3a0"],["/tags/虚拟机/index.html","ec22209117b488776d219824c5bb7981"],["/tags/递归/index.html","5254d1c43fef3bef7c58b9cb89710e16"],["/tags/配置/index.html","61f127bafaa9ab23604c50e847c293ec"],["/tags/阿里云/index.html","43b2ca109fe07eea05faa7cc43948291"]];
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
