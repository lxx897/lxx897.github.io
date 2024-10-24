/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","248e4279d1771181938b98e4bf416932"],["/archives/2023/11/index.html","ab48c5f1be4734d57be9e64cd95138cb"],["/archives/2023/11/page/2/index.html","1659d8bb03178f46364030e3ad637bf9"],["/archives/2023/12/index.html","6e37b768332f7335d172f6c7c89e4b7d"],["/archives/2023/index.html","df4dedc6f332fca2b1b903fee4b4f6d1"],["/archives/2023/page/2/index.html","f4963371ecf0e6966e164865ccdeabc7"],["/archives/2024/01/index.html","5761b71f1cee471034ff1d9e1fa575c3"],["/archives/2024/07/index.html","1a237c153aab64f9c5b35d0878c9ea0c"],["/archives/2024/index.html","0b8a00a9320f0b75a802939fd9b02c75"],["/archives/index.html","ca6399085b3ff4d5aa58824c7342d8ad"],["/archives/page/2/index.html","49c4d8adddec8e944b46b41194c81217"],["/archives/page/3/index.html","9a45e7b5e2e6c393328f3b2c37f647ae"],["/cat/daily/index.html","a0238cd75b5c7db2c2376cdd243cef68"],["/cat/food/index.html","439b8017af2b3505943254d8fa5f2874"],["/cat/health/index.html","6b90ec22e61bfeda2411871a44cbbe2a"],["/cat/index.html","8ccce6b55f30dab0f284bc595a4726c6"],["/cat/picture/index.html","51c9f99d2e17dc5431d44c2a41a9e6f7"],["/categories/Docker/index.html","2ddc88dcb5a081fe49d0ec7d5310fe50"],["/categories/HuTool/index.html","6804e304d8e159280f62e2a9ca7951c6"],["/categories/Java-MySQL/index.html","3fa6b2b054b545c2aa95430ea247ae9c"],["/categories/Java-远程调用/index.html","d2f1bda4639305c6a2c9b3f20d80f79b"],["/categories/Java/index.html","36be4c23293c7b5810fd917bf6fdc7dd"],["/categories/Java配置/index.html","b31a091abe79914cab92360f0e434e48"],["/categories/MYSQL/index.html","5620cac75478f10dbf8d2c4a1a8ae998"],["/categories/Page/index.html","916d108b2cb77c52fbfa1fe738f88c01"],["/categories/hexo配置/index.html","09c661cc69c775db78e10bff0e1764d1"],["/categories/index.html","ea41bfdfa6dbd65249cf07ab8572d76f"],["/categories/passWorld/index.html","49b17952e8a1ee7e943c9f9b9e838517"],["/categories/实用工具/index.html","21f78471b29864c39989f5836952ae7d"],["/categories/工具/index.html","370616913422c724792596bf520f1d44"],["/categories/工具类/index.html","237f4691474c03acbc400114e7871688"],["/categories/时间/index.html","f796e763a9f4580d30b63ff2a4e7c14b"],["/categories/视频/index.html","f2554a3baf4e16c46fcd526e87960a35"],["/categories/配置/index.html","0bf978f5a7178d4db3ba9e2fef9a7af5"],["/categories/配置文件/index.html","785ce4845e730b7c86fcb15ff3d5bbc0"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","b8dcf5cef0f063ededaa730ae2e406bc"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f2a7a2a0cdf9c82d253ed59e13fb5308"],["/page/2/index.html","a76599d78c1486ffbf807c011fefde43"],["/page/3/index.html","57589aa0981273b2496c0b42f7fb654c"],["/photos/appointment/2023/index.html","254bdb65d5f51ded04e41b7a0f8ec938"],["/photos/appointment/2024/index.html","424c828e5a4ebd19eef215adc1cfbe80"],["/photos/appointment/index.html","ea01c2e61ec7bba73c2cd8e236f1241d"],["/photos/babyAndBabies/2023/index.html","dde87037c76930364fa41e4a73ca0c69"],["/photos/babyAndBabies/2024/index.html","a058de5f68c5043ac95e7bcd682176e6"],["/photos/babyAndBabies/index.html","29eb7054c7024e93169ad07865071633"],["/photos/game/dzpd/index.html","3f83415d7db685be3638b3f34f4d3307"],["/photos/game/gy/index.html","4f9b2749351141006ba4a8159bb7c31c"],["/photos/game/index.html","e420151874fa36cac86fcfc6f946eaff"],["/photos/game/steam/index.html","3edff09f31ce580e32d4db0ad2523866"],["/photos/game/wzry/index.html","9d44f59288cf9c49bb7f1dcef9e81d87"],["/photos/index.html","8c4f3826e6f6db24b130a40d7d92e60b"],["/photos/movie/2023/index.html","91e965d879acecb9ccda71ea90a72f2a"],["/photos/movie/2024/index.html","8f6d356c9fb9e5d7e22d7f0b0e9b7ff4"],["/photos/movie/index.html","7d1afbb79d986147685a8c3ae36e4f08"],["/photos/ohmygirl/2023/index.html","148ac7c0766b9576d8f4d46b9873441e"],["/photos/ohmygirl/2024/index.html","8a871eb7fb7c348f9563fb551a34e515"],["/photos/ohmygirl/index.html","2298bbae26dc189c6f6b820e408de679"],["/photos/outside/NanJing/index.html","40a950b4e7e21612465994294b78d25e"],["/photos/outside/QingDao/index.html","48692eb5749670dae8a28fe893724aa8"],["/photos/outside/ShaoXing/index.html","a4932c8dad0824159b3665eed5bd8099"],["/photos/outside/WuHan/index.html","da6201d8c59529282fb2d25514f44532"],["/photos/outside/index.html","d48775b7583ea3f9589ccadba8a0da76"],["/posts/15940.html","e618740cc5322c4a9229658044aacc50"],["/posts/16888.html","af7edf81fc819d0952d64a1f61e8627f"],["/posts/17303.html","d8771971550e2e5245904b83aa9f8444"],["/posts/18206.html","fe30af9cd07457aa4af948f2bd4f7e29"],["/posts/21635.html","05ed49ac10d996de0f44ee7ebcbd433c"],["/posts/22910.html","eed62d0f85a005887d21d9bd0c06a99c"],["/posts/26185.html","1fd395c0981f731ad0f21d3a6c473bb1"],["/posts/27699.html","aa63fd8504e99e2ce82eca867216a18f"],["/posts/34134.html","2dd4c01ace9c382d90f1c1d324b5d4b3"],["/posts/38362.html","d35280168c6bd3980bbaf1f09e409a78"],["/posts/4186.html","372e470a3bc7eda22a91ab895f8dd69f"],["/posts/42658.html","6c68a671aecff9ccc33a80047222e098"],["/posts/43618.html","925025fe8a0239ba09e8e52d60702857"],["/posts/47374.html","e3ca38d175b567dc130131f18a215de9"],["/posts/48428.html","6c76e20ce06405614ba6c339f4c41213"],["/posts/52307.html","46d65e844edfe8594b4cbe7f20f7c681"],["/posts/52812.html","b751e46f099ef7200e164928a380a79f"],["/posts/53486.html","12e82641fbf03c4cb4d0f168579c9b4d"],["/posts/53714.html","8a846be8422afe20d08159dd761ebbe0"],["/posts/57395.html","a49de6adbf1a3e27a4efadb89e0a33ac"],["/posts/58565.html","cb2f2fdff979eba6e6b1950676c91973"],["/posts/62255.html","c77d36c86c62ac85e805dc027573281a"],["/posts/62580.html","e8a615a65d24d8886c67afefdea9ed5c"],["/posts/64032.html","66e99e8c23b1745bb2efdf93832c68a4"],["/posts/64329.html","4aa9d23bcf6c74d10aa947a435c57a72"],["/posts/9968.html","f662c238377891a77a70cfd82d793cbd"],["/record/completed/index.html","ee1b3c3d02647fa2ca0eef09ece592de"],["/record/emphasize/index.html","546f6f182e7cd201c52602dfa632b27d"],["/record/index.html","d977488d059257d9e1c00e7a4594687f"],["/record/period/index.html","9e3e8f64b571c5c49d86ebe9d68a091e"],["/sw-register.js","a397153c1342d7ce0a23d5c25bddd8e3"],["/tags/B站/index.html","febbc9d9a0af5895fe62681b3a760201"],["/tags/JAVA-工作总结/index.html","525b2cef6f4cdda118123592c7679561"],["/tags/Java-Docker/index.html","982208b5edfb3b352d9ecaf156b24a20"],["/tags/Java-EasyExcel/index.html","3c7c271963a2abb881780202c27b8e46"],["/tags/Java-MYSQL/index.html","30a2f9f3ea4c9715ec717e535760fe3a"],["/tags/Java-Page/index.html","ac51185261406e591877a9695705affe"],["/tags/Java-RestTemplate/index.html","35754e27dd3208391023213ac6bf0e13"],["/tags/Java-工具/index.html","483155f32d99583f429825a303e87d6e"],["/tags/Java-常量/index.html","82e3552f1137b5719f7d97eb980a015f"],["/tags/Java-校验/index.html","0b6fc4b0e03479a1cbb2f64a3b14bdd5"],["/tags/Java-配置/index.html","c01b6137e22d34abc02ace3038b0e800"],["/tags/SQL-便捷/index.html","1814656910c48c42571c17f090cfafc9"],["/tags/index.html","50b369fbc6caa81e4adc5da9230bba8e"],["/tags/java/index.html","261ca79d14d9d31921d3d864746ccc1c"],["/tags/minio/index.html","d60feeb8243f5bd66734b13fb18ba850"],["/tags/定时任务/index.html","a768afe4869a366df03c3d23113862d4"],["/tags/工具/index.html","83a1292da9cdbc72d392decd73c05b80"],["/tags/搜索/index.html","743633c49b313d3db190a179044b89b9"],["/tags/时间工具类/index.html","e2e94c61e62c6bf493e608133b570a9e"],["/tags/虚拟机/index.html","857067ba38ac4fa0dad0a865afbf4e17"],["/tags/账号/index.html","0ec50a5c9cfa7084715840c9575849b4"],["/tags/递归/index.html","c163bbb8984d744a872f60564d0007cb"],["/tags/配置/index.html","320a8e881fe2409213e644266b962e4a"],["/tags/阿里云/index.html","f74eae4a812d8d954a3b2ff551546907"]];
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
