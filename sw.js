/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","41d8fb46ba5c3bea5448b8dab61e31dc"],["/about/index.html","f0a27de9d665a2de0acf68b06f567b00"],["/archives/2023/11/index.html","0802c4a590dab30cb6c8cc8ad51541d7"],["/archives/2023/12/index.html","cfca71d4f49a853df95345d2f4fc17b2"],["/archives/2023/index.html","4ffac0c5c8f92c337537ea05e84070da"],["/archives/2023/page/2/index.html","f1f4fdaa0f6fbaaa4f18d3bb731fa8f3"],["/archives/2024/01/index.html","ee12fea7172e1834a4a3a650e8e7993c"],["/archives/2024/02/index.html","4dbde7099192fb27ed0becad8ebe83bf"],["/archives/2024/03/index.html","50b6b5346167f04dba77b62495ea8b62"],["/archives/2024/04/index.html","5c66c7b46af0c126de330650f3752839"],["/archives/2024/index.html","2d4d427543f29f6f7e047f9260ad6a87"],["/archives/2024/page/2/index.html","1e9704944701bc61e3c2330515a7159b"],["/archives/index.html","b1ff51bef24bd34a0c1bcd6273a2c468"],["/archives/page/2/index.html","40dd21075446a02f16d385e060ed970b"],["/archives/page/3/index.html","66e5380983e8766730e5437169c28e1f"],["/archives/page/4/index.html","a5c5f63478e9c051c6c79a40af9aeadf"],["/cat/2024/index.html","44733fadd965ab68656ed7fe23488b75"],["/cat/index.html","307a45df8b81c49ec3b4ff4634f4e675"],["/categories/Docker/index.html","c9477b47bc1f929e8c5a330547fbdc56"],["/categories/HuTool/index.html","ef7bf5a3176f8eb3ae47ff090b5d840c"],["/categories/Java-MySQL/index.html","f2caae895ac860e4ef6f4353e8fdc8fa"],["/categories/Java-分享/index.html","0ebffd2e9d9cbe34c285114d38fa34d9"],["/categories/Java-远程调用/index.html","1fd01e4e1af82ca28e157cb87980d9bc"],["/categories/Java/index.html","a05cfb61ccb9828fb7246c74b3f282b4"],["/categories/Java/page/2/index.html","25bedb9bfbffc51b3639803392c959ac"],["/categories/Java配置/index.html","1763f31455940aa448811362f7bc7ee8"],["/categories/MYSQL/index.html","599f558c2c25d8530bee78c094447f27"],["/categories/Page/index.html","105af59dd9a7e475eef834e170ac8588"],["/categories/Safe/index.html","48e3b981ab05f681078a14372b71a098"],["/categories/Stream/index.html","09f2d8e7dcc95e1cf231b5c6cd3cb4a9"],["/categories/hexo配置/index.html","31ab09da97defd5e1df4e23255de9de7"],["/categories/index.html","c7e01b2d09d39c798480b438d8f6ba72"],["/categories/实用工具/index.html","338d13711288025ce2da407a56e86861"],["/categories/工具/index.html","32758528435f97550180752abd83e990"],["/categories/工具类/index.html","d27ef4d07e0c2b1655278eba7ab0e54f"],["/categories/时间/index.html","0bed234a02517fee998f381d6693b487"],["/categories/配置/index.html","e07aab0e0406788e9b9c49ba4dae683c"],["/categories/配置文件/index.html","2b9e5251433ea2e9c480c16447410922"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","9aada0dea011c4ec92a2df3bd328ecf8"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c4bceeff77eab844e3acd7bd7f9c09b6"],["/page/2/index.html","0280cac3a1b00f803999703f14882f35"],["/page/3/index.html","a10e86f87acc92acb0ab14b873fdce2d"],["/page/4/index.html","7aa8191e340f12fbdfdff83a29d5d423"],["/photos/appointment/2023/index.html","45b6550582b771e0051d7fb9cea10212"],["/photos/appointment/2024/index.html","11abd0b4671a326ff2242da89e3d2713"],["/photos/appointment/index.html","cbc462a3794bf1be09a417dee19902c8"],["/photos/babyAndBabies/2023/index.html","9d143216ec35055cb713a2e18572b17c"],["/photos/babyAndBabies/2024/index.html","31c94d5fc8ad1b64ec70fd58ffa3d61f"],["/photos/babyAndBabies/index.html","634d67cb9a672fba37417947c927c3eb"],["/photos/game/dzpd/index.html","f7fc3d9a966b8fefe76af6c31aa17d85"],["/photos/game/gy/index.html","bd86fb8e5e536abc68e1d8901ebf2dd7"],["/photos/game/index.html","9f078a6de6e56ea492e942546e73db21"],["/photos/game/steam/index.html","0c430476bc11d19906e38b993abc7399"],["/photos/game/wzry/index.html","14dfd48be39d8338418fb6f9c512f934"],["/photos/index.html","3f757410a9ab5d3c4be2ae0f7dc7fa47"],["/photos/movie/2023/index.html","4cddea5a237c73b80d7acaa840101dec"],["/photos/movie/2024/index.html","f4fedc443c0a967c41a0671fedb6ccb1"],["/photos/movie/index.html","8471b6f1a802340e55d6acd701432bab"],["/photos/ohmygirl/2023/index.html","a84517ebb2b951dd89711818c2e4250c"],["/photos/ohmygirl/2024/index.html","2bb0b61d994ba101c2aff542f3061287"],["/photos/ohmygirl/index.html","b29d738379cc9c37c4d8948a0792649b"],["/photos/outside/NanJing/index.html","f4cfc4a379769fac43d7769302ff787f"],["/photos/outside/QingDao/index.html","2d5972ce0792fe6a85b04871e060eebd"],["/photos/outside/index.html","8ee5fb0eb914d7d5b59c4f2cd7d7d7e9"],["/posts/12933.html","a42666d97f436f0b171c702d35d0516d"],["/posts/17303.html","93187d09ff96e3d0f6e9ce4de43972a7"],["/posts/18206.html","f2f73a58303481fb4ae6b44351dd14bc"],["/posts/20933.html","e90c70a417c553aa46a5d5d765ee8e04"],["/posts/21635.html","bc6efbb2a4223409f3087bca1eb6ecdd"],["/posts/22910.html","d53e1fa91188f8114c8cb0a4f8ad4f95"],["/posts/23407.html","6b4ad787551287bc0a61154d7c36bb65"],["/posts/26185.html","374d19b5c90d217d23448f2a5f6d25d8"],["/posts/27699.html","513160c2e0b1da2e52543bcbee72d8e5"],["/posts/34134.html","6f2aea602ac475d8a583c6f4093f502f"],["/posts/38362.html","e37b7b39c7dbc5ca9ee7edbb846d755e"],["/posts/4186.html","056316b07338c097785c3444c8331ca8"],["/posts/42658.html","a1884f406e3ea2cb3ffe2cd147f3dd23"],["/posts/43618.html","2fe90d19fc811497bab5bd8608bdabdf"],["/posts/47374.html","31aa85cb26e874861ba4a9a88730d8aa"],["/posts/48428.html","a211132b24976b070efad66442da431e"],["/posts/52307.html","60ae82a462b9db7ccac0a99a6f1dfee6"],["/posts/52812.html","045765334f44f904b7df13008947e338"],["/posts/53486.html","13f2637786673cc1913e253213ce0d03"],["/posts/53714.html","65a9335bd1d6dfc0dd86f8780d0cfbb7"],["/posts/54999.html","b9881cdb30550cbba23cf170d4a3ff16"],["/posts/55564.html","d304a4444a8c74dd5e84e78005a4666f"],["/posts/57395.html","5aecf2fd573fd845129680386c2d7683"],["/posts/58565.html","c0bfa4133a0ae11285b18e3665f25084"],["/posts/59743.html","6816a29453cccdfc8e453759ec662df7"],["/posts/62255.html","e877c24f3183774a9bedbcdeddfa4f7c"],["/posts/62580.html","3010f8511f9d1ad4db20f82016363b5b"],["/posts/64032.html","21813b838e5cf22e8303155b4f6b1844"],["/posts/64329.html","17c05a3b417537583dbd9e8eb5b611ad"],["/posts/6594.html","6062eac76026c3af9297deb002b17360"],["/posts/9968.html","7d19f6f0ed96e520cdcc4625f71a67e8"],["/record/circle/index.html","4001ed4e2908704d7fb7cf3db4cde19e"],["/record/completed/index.html","cf82a0a198023d3a5308dabb722f4e00"],["/record/emphasize/index.html","362f834846703e919b4dfe4af6e912f4"],["/record/index.html","cfd6bded0773e68e936c83533748a580"],["/record/period/index.html","3813ea053a555442c44f6199d191c091"],["/sw-register.js","252d7f7accd7dfc2ed8a3f14018da5da"],["/tags/JAVA-工作总结/index.html","259c827469fa34c6171e5aa85f6fc2df"],["/tags/Java-Docker/index.html","025155bc707dc09735323cf7a07b1c47"],["/tags/Java-EasyExcel/index.html","25906c1971bd85ab4b4d15e9caceae03"],["/tags/Java-List/index.html","e3dbe83009dc1e62a7a4320a747dfd8c"],["/tags/Java-MYSQL/index.html","fa8e08774d7394b1bf49c988e0bd36c6"],["/tags/Java-Page/index.html","20d04b45bfd41d7ad26d0290bb83acd2"],["/tags/Java-RestTemplate/index.html","7e24ff0d1a4c10007a4e538df0fcfba8"],["/tags/Java-Stream/index.html","c50c192dc3cd7ee516da15420bc5e0f8"],["/tags/Java-工具/index.html","4f4fb4ca2bc42dd19717f508bd77bbf3"],["/tags/Java-常量/index.html","978453d7029d32a6e732fd457f0025d2"],["/tags/Java-校验/index.html","8792d38f2bb67ad9ef47f43cf1fe5041"],["/tags/Java-配置/index.html","22c755894a25c6e7126da30cd6fce77a"],["/tags/SQL-便捷/index.html","d0aaf04c81c908c7b7d34a61512af013"],["/tags/Safe/index.html","82ae20b5b57330fb718572efa9f4b8ae"],["/tags/index.html","34acc091626c84137981e85a56ef5dcc"],["/tags/java/index.html","a1ab40e94c23d0b1a34b5e299ba7dcda"],["/tags/minio/index.html","fc2c90e063949aeb4915902af1456055"],["/tags/字符串/index.html","adad9261baa87571edf2cacc32c5fa78"],["/tags/定时任务/index.html","10ef783ce66c76646f1638ff51794a55"],["/tags/工具/index.html","9dcb35b113c0ccb9ec6d0f7667985faf"],["/tags/搜索/index.html","d0e7986015f6f0717455d95f308a9978"],["/tags/时间工具类/index.html","451e8bfab83bea943f4e85f9c9406df3"],["/tags/虚拟机/index.html","8e526f7622c3a27758a7dfc872cc9aec"],["/tags/递归/index.html","cf5d474783094c381d5f95fbc1fdcd33"],["/tags/配置/index.html","6f35c9410a1660b49bdd37baaecce2ad"],["/tags/阿里云/index.html","fbee4b974296f9628b9f1a6f59312e17"]];
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
