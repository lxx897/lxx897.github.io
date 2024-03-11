/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","eebdace2eef8c2a46409b3b04991d546"],["/about/index.html","8a83d5895f299d5c87f430806e14f764"],["/archives/2023/11/index.html","b21fefe17b227cc68dcc4b2516c6bc72"],["/archives/2023/11/page/2/index.html","1f7392da8632436a151eefd663d867c9"],["/archives/2023/12/index.html","999d900c6bdbdfd9b0d4df3e6543b4b9"],["/archives/2023/index.html","cc419c5445d19a84b8c5129150100a8d"],["/archives/2023/page/2/index.html","fa8c29dbbb1b72143148a3e3f08e6e32"],["/archives/2024/01/index.html","89cf29d1ad63a1583dccb42cedaa15c6"],["/archives/2024/02/index.html","7124307e2deb5fcc6ec874a86ebb6ffd"],["/archives/2024/index.html","c419e87384a4ebe32f4862cc6fa01442"],["/archives/index.html","149d6afce28861273032e745df942fcc"],["/archives/page/2/index.html","5fe9c5875f3f2ea388b8f88317724986"],["/archives/page/3/index.html","294c24f9790788d8dd9541f9357a04fe"],["/categories/Docker/index.html","7a80afdac1b512121c2d081c8c13d155"],["/categories/HuTool/index.html","7f18d883c8b4a763ff349401216a376a"],["/categories/Java-MySQL/index.html","8979ae7a0817cc30cf7c939a7a1cd170"],["/categories/Java-远程调用/index.html","666669ce0b66641c4491db413c833193"],["/categories/Java/index.html","350231d679c8e28e7ae331479ea9c21c"],["/categories/Java配置/index.html","d7b14b02fda90ead197a7a1c5c8eed48"],["/categories/MYSQL/index.html","e8356a80a116f4dcc396ce9feca27d68"],["/categories/Page/index.html","f44ec87bafc8db22c1685cf1456c7739"],["/categories/Safe/index.html","36de71a7d30dffe3c9a3527f590078dd"],["/categories/Stream/index.html","a5fe718d05e8bb3affef0477ee096dc8"],["/categories/hexo配置/index.html","8090e7038a75ac29ae2ee1d2e448b49f"],["/categories/index.html","5b54cb31fb7eb83f7a3286ee9b518730"],["/categories/实用工具/index.html","033dc1de0b3024cde94f9165abdcbcea"],["/categories/工具/index.html","3d0f2e7948c6ead3cf82071c8041dfc2"],["/categories/工具类/index.html","5bc0dc9b7f5c2930b555402c41ea6f45"],["/categories/时间/index.html","8655aeb32648103425700dd164fa7cb2"],["/categories/视频/index.html","7b4b52636fc8cbf01092835e7f0abd7b"],["/categories/配置/index.html","97b1f81be241ff7fb1c8e753a640b8c2"],["/categories/配置文件/index.html","dae7a5a992c06854008d7a13843ce713"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","6ce9bdb1a9f72f840022d7eea9f20cb3"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","de1caa501757c354217a403aa14782aa"],["/page/2/index.html","416c0bcf46dc34220cc7b0504c8aadaf"],["/page/3/index.html","d633ddb1357274dc9df07b4cf829c40c"],["/photos/appointment/2023/index.html","d4983ac0f801805040e3a91f1e3d42f4"],["/photos/appointment/2024/index.html","af184dd9cbad9928446d8b5106978221"],["/photos/appointment/index.html","3eae70cfae5e9481fe90f8e876187097"],["/photos/babyAndBabies/2023/index.html","9885de8b4333e969b6cb9271d85aa3f8"],["/photos/babyAndBabies/2024/index.html","6aae17472ee7bb7f0a78dcfc9264c2d4"],["/photos/babyAndBabies/index.html","46b4f6856bb03e21140bc460c649db27"],["/photos/game/dzpd/index.html","8b8d4e42bf09a7cb0de9e1121d493154"],["/photos/game/gy/index.html","e659db163b76cc37bc67d18fb3a6a62f"],["/photos/game/index.html","063cc480495bfb97b63d84353406518d"],["/photos/game/steam/index.html","21584367e02ab7325379a022baa2ecbd"],["/photos/game/wzry/index.html","bd5fe71765e3a4388381441f858dbf3d"],["/photos/index.html","83d9e856b229d77b12f0793fb5f585ff"],["/photos/movie/2023/index.html","2b8f9ffd4b357df9902ee12f942ebe98"],["/photos/movie/2024/index.html","7ac8d07149922ac8fff5a776f9427c60"],["/photos/movie/index.html","b0e3540b3685f2dccb3f921ef0216373"],["/photos/ohmygirl/2023/index.html","160464b59e87d6946680ce558e27d380"],["/photos/ohmygirl/2024/index.html","61cf1f61f865f561f153011d3930c207"],["/photos/ohmygirl/index.html","50b43638cbc9fb84aec9d27f4303b895"],["/photos/outside/NanJing/index.html","1d31365636e1ec94a309293e932e7ecd"],["/photos/outside/QingDao/index.html","c7743a90ee190cb0cf2b407187f1c62f"],["/photos/outside/index.html","2df7453c1f94f98159a967bcba49f80e"],["/posts/16888.html","d43ea1e740b2aa780b6b449b076d1eaf"],["/posts/17303.html","f8622bef1d9c66a963fa8eeba59808be"],["/posts/18206.html","7f8c407305217a4050ed0c3c5e1582a6"],["/posts/21635.html","c17df0c0800a76671db6698b10bbfe79"],["/posts/22910.html","dae522ba3f0e71b8939700109095e08e"],["/posts/26185.html","527623b203c74ca6feb47fca6dc00cf4"],["/posts/27699.html","9274a52fa74869dd0078b9524168294d"],["/posts/34134.html","f1e411dc9959dde1a57655d683a3ae35"],["/posts/38362.html","2f6864b8d4d592c5da0a69796b5f37c5"],["/posts/4186.html","66a49ed04dc242cf0dde751ad6dab598"],["/posts/42658.html","516b8e2449c56adf95ac1abfa80b6a5c"],["/posts/43618.html","05cf8b335834ddaef5eb985bf36efa0c"],["/posts/47374.html","d7d6e23a3db651afc290a02d46bb0ff9"],["/posts/48428.html","d184565c6173cbcdd3cd7e81d741d417"],["/posts/52307.html","797aad3e73875c51b2a830c269303117"],["/posts/52812.html","9e56d76c1003ff3392bfa5036fb8d122"],["/posts/53486.html","143167072f20c44071fc0c218d353b82"],["/posts/53714.html","7851ae1c0c9de522969661ede1b3dc94"],["/posts/54999.html","9dc73d7a8c2bf43963fcfaccda110bbc"],["/posts/57395.html","97d4340b9afc47ba8378db3c92b397ad"],["/posts/58565.html","f1e72c774e0fbed50e237b68dc91cc8c"],["/posts/59743.html","708edffd812cdad78ac4bf8a04077b58"],["/posts/62255.html","aed76ddff3ae8c0f95034dadb413d244"],["/posts/62580.html","a69a5fcce405018b80a6845e5f240813"],["/posts/64032.html","94679d1c2bed0712e3500fab476dbc8d"],["/posts/64329.html","ca6cb161750fc2f511b4370b867876c5"],["/posts/9968.html","f4b7a4705bf039c67d0eabbccda61559"],["/record/completed/index.html","8ebf6b2981d3166493c35048df6e1cb3"],["/record/emphasize/index.html","d50fb08e0fc69aa50346cabf731b00d8"],["/record/index.html","9959ae2df598e73b1e2500d467539217"],["/record/period/index.html","0500b3ed608f2bb3fe8dd0050fb12aa8"],["/sw-register.js","6fa11b94172fe2a21f1b01c5f3a3fc64"],["/tags/B站/index.html","32d92fc28e55bb790f3ce963fa07704f"],["/tags/JAVA-工作总结/index.html","43bc00600cc8988e2b017f58c764a575"],["/tags/Java-Docker/index.html","ead424d256623f6d9b5f91e5a32e9791"],["/tags/Java-EasyExcel/index.html","2e77a36bf83a2f8acbed8004a32b86f4"],["/tags/Java-MYSQL/index.html","2909a7140545138c15885510ecd45f11"],["/tags/Java-Page/index.html","469152e50c4f39b2ae4a79f163890e50"],["/tags/Java-RestTemplate/index.html","21cd328ec7cd1fb323cee9bb028861b2"],["/tags/Java-Stream/index.html","0ab1270fcaed2b8898463cf8b29cef84"],["/tags/Java-工具/index.html","1b6048bdacbcff480ee900f9502e4985"],["/tags/Java-常量/index.html","7c814aed76591a421e0c59b2eca4369f"],["/tags/Java-校验/index.html","6ed6138ef4321a849ec700ae730dc5dd"],["/tags/Java-配置/index.html","4087ccc1946350e9bea8b4eec731dae0"],["/tags/Java/index.html","c60c978be60c213f027bccd092ff8729"],["/tags/SQL-便捷/index.html","1582bc9096b0593f3f037131fe43cc25"],["/tags/Safe/index.html","45429f0ecdacc81380e3f212cf05c451"],["/tags/index.html","0a54d0440158bcbd72e63a7ec242557e"],["/tags/minio/index.html","c01e6e5db546a85039c18889b08d0269"],["/tags/定时任务/index.html","a60b0bb5834fc160338f107c6f995c2a"],["/tags/工具/index.html","a00b954043f339bb4d77ee8eae79deb6"],["/tags/搜索/index.html","b33e3ec2b2ba9c21a991233ebda9c6ff"],["/tags/时间工具类/index.html","272983390662ae8adbd4a69a3589948a"],["/tags/虚拟机/index.html","04c45a95be4605273dc7a1f2626ed945"],["/tags/递归/index.html","c44ea19abf2cb391191618f37b692f54"],["/tags/配置/index.html","46151ea98b8e40ec2c4a71fc33a6c480"],["/tags/阿里云/index.html","3659b023afe5aa4b3191c06abd4e61ff"]];
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
