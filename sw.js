/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3897bf5f180d12c8683068b72a3f6c59"],["/about/index.html","c5910e8cd75d070f1c33da298ddb697b"],["/archives/2023/11/index.html","0607dad1206892671ef2c577d33143f3"],["/archives/2023/12/index.html","5855e03b50935552b616f5028e1474eb"],["/archives/2023/index.html","9b857ecfc8727d1ea03594ff91cc3a0d"],["/archives/2023/page/2/index.html","b2b1f179f5a51a9116610be09bb55e24"],["/archives/2024/01/index.html","b016cc776e5212dff761cb75fa8ea787"],["/archives/2024/02/index.html","71522a9529e665731c582f6a6e75df72"],["/archives/2024/03/index.html","9c73412327b976a425cb7238590dd677"],["/archives/2024/index.html","c5b3e8f9958f9da20c4c477583ff3b87"],["/archives/index.html","f44917656b7f2a0b6d346fa0ac25c6f2"],["/archives/page/2/index.html","186dccde3ba9a0c52b7c99052dbca76d"],["/archives/page/3/index.html","967a2b2af1f91b2382edd2823bfb9c2e"],["/categories/Docker/index.html","13f6c4684452fca72743f5ea20f02d9d"],["/categories/HuTool/index.html","f5ea89ce3b88e450ae76a92a1abe31b2"],["/categories/Java-MySQL/index.html","126b2d9d5a7334a165cce51491fe6ce0"],["/categories/Java-远程调用/index.html","71f293833e070fa2134888abfc359d75"],["/categories/Java/index.html","f0d20d4faa7691b1ed1bae75f4740fac"],["/categories/Java配置/index.html","6487ba327dec75100157eff429b7d82d"],["/categories/MYSQL/index.html","2a8b39e8b425b4743510de1296d4eeb0"],["/categories/Page/index.html","8e352d4c0535d187617ceffbce621a1b"],["/categories/Safe/index.html","a5709e2161a14b47a680ffcee56a50ec"],["/categories/Stream/index.html","14b857195f3255de238edd617da320d1"],["/categories/hexo配置/index.html","a84253da491232712c4296217de65f8c"],["/categories/index.html","dc8cdfe2971813f01ce7228d9498ec32"],["/categories/实用工具/index.html","fe1863a7821df296a0f321af0b396750"],["/categories/工具/index.html","55c2059e7588fe2cfe5c95a3843264e3"],["/categories/工具类/index.html","4a9de29611f0f17df09d375a1431fdf7"],["/categories/时间/index.html","1ba3fca6634faa1f2bb16d014afa28cc"],["/categories/配置/index.html","691ec432d3e6ffc9431473f68be03f7a"],["/categories/配置文件/index.html","198810f55e3f6de75245016443e6df32"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","4f0f99c21e53b43cd8c2578176380e52"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","891142910c8ae010a7d0472cd5b70a1b"],["/page/2/index.html","0108808c70e560c5fb2b61b8f2a55ea2"],["/page/3/index.html","3641eba04ce47299065501a6b1ecedbb"],["/photos/appointment/2023/index.html","efe2fe93b4273d0a9a42d830bd8723a9"],["/photos/appointment/2024/index.html","b950fb55d5e2a3670b1adffc4ac5c29f"],["/photos/appointment/index.html","c9f0c797bb569a1101f9ae8aa9b27f75"],["/photos/babyAndBabies/2023/index.html","c60142bb1b258c1d4df5f4114c41c3d6"],["/photos/babyAndBabies/2024/index.html","b3954e5ba159dee4477f351ec50a6b47"],["/photos/babyAndBabies/index.html","c98e78e15623f60fcbed07270b7f5901"],["/photos/game/dzpd/index.html","210086eb1d0d3c04f3824b9f9304dc94"],["/photos/game/gy/index.html","1bb30c2620d1dec0b100c6b8eb96b1bd"],["/photos/game/index.html","536595a0ed555405e50e580dcc1bba41"],["/photos/game/steam/index.html","251b41cfa035eaf2ac36fd9acb50d4f5"],["/photos/game/wzry/index.html","59cf8eb7ef2e9bd83f58cf4f863fd730"],["/photos/index.html","99e2de482b86ab14def24e63c572b5dd"],["/photos/movie/2023/index.html","72966e7d77c375404f20da4087a17e8b"],["/photos/movie/2024/index.html","d8e7c6b573d8abd5548aaf859ca6c86a"],["/photos/movie/index.html","7bdba5f8d201c6b553cfc70446b49e26"],["/photos/ohmygirl/2023/index.html","6eafbf7c22f628736c0908f6e92dc322"],["/photos/ohmygirl/2024/index.html","4591116505563e5be3a8ed6ab7268220"],["/photos/ohmygirl/index.html","707a6a1816556ecb5211fae9e905baa2"],["/photos/outside/NanJing/index.html","7573bbb28c73b2f651566bb390e7e688"],["/photos/outside/QingDao/index.html","0004a549ad9fb7515ec6a717b9a909e6"],["/photos/outside/index.html","320d20a192c7e9a6da97eacacc750743"],["/posts/17303.html","e5f86369e5001e463607a8e06c37706c"],["/posts/18206.html","ceff0eea91333b44ae4d85626e054b9d"],["/posts/21635.html","6af780ae0ecdfe07865a41cba637dfc9"],["/posts/22910.html","158f2e45bbb23b63e9f9e34565c3a54d"],["/posts/23407.html","45e5a937dc0e2a1966d7e18573427fa4"],["/posts/26185.html","896fe4dcbcd5c2e3c2e719746dcfca38"],["/posts/27699.html","94407477afc37f37af6b03d930ee3044"],["/posts/34134.html","b1082f32184f1f9bc66c714fcc53e904"],["/posts/38362.html","94c8d29af79215ce36a600cbad6350d9"],["/posts/4186.html","094f636b1a7f0dcb6aab07c2932b568b"],["/posts/42658.html","a84d461309b1ec4a667534f86ef578e4"],["/posts/43618.html","d8536bfffe1c2269a70bf3cef9858785"],["/posts/47374.html","a8178e266af75131f486c844e5c56a30"],["/posts/48428.html","7d6e129d348df6f8b4963c4e06353550"],["/posts/52307.html","4f177b8a39b2d496a6eb627912b94767"],["/posts/52812.html","c5baab30dbf0f9ef0036914a45a205a1"],["/posts/53486.html","95b56a81b7c01b67f0175a550999ceb7"],["/posts/53714.html","b45733f2e97142d105e7ea3658583824"],["/posts/54999.html","5bdfc79b1fadf39f40ed441bede69017"],["/posts/55564.html","ca5883419a9e778c4883a7fec1e84465"],["/posts/57395.html","f0839dca494dbfc2efc7507254c2ede3"],["/posts/58565.html","b38741e9c5ff73eaa04a3934ac263375"],["/posts/59743.html","23e0d7a0ff7d64dfda6dc69b3586f01c"],["/posts/62255.html","e1c8c65026ffc94036e0a1f3ffec75e0"],["/posts/62580.html","dbbe7b4917cfda8a574fd7f2b0b39cf4"],["/posts/64032.html","fd22714c0df249d259867517178e1f1d"],["/posts/64329.html","c39280c1faddbd5b665b97d3a67f4897"],["/posts/9968.html","0534f302fb75517d5ac88f110b399578"],["/record/completed/index.html","6534d7a7f249a0d1aeebfc7de065e52a"],["/record/emphasize/index.html","dadee2e3597fb0b6fef34a63e33f8ddd"],["/record/index.html","916143283bc8b6ee5172b81a0581115a"],["/record/period/index.html","ef9bad77918740dab75662899bb9ff20"],["/sw-register.js","7535f4e8e045869e1b55e0b59ec4cbe8"],["/tags/JAVA-工作总结/index.html","f97b65f0001adb4e4c8c1c67f85885ac"],["/tags/Java-Docker/index.html","56831fc9df81f04553143e504909480d"],["/tags/Java-EasyExcel/index.html","d7cbb3d89a29f4fbe2d6a3ce54300fde"],["/tags/Java-MYSQL/index.html","235a26f3492387fafd6ca383014081b8"],["/tags/Java-Page/index.html","bbc3a1ed5952bfda6f6dc6d82133c1ec"],["/tags/Java-RestTemplate/index.html","fbb98a1c967f1df7c84cb89f21c68976"],["/tags/Java-Stream/index.html","50d7051d3211f1f1de0dab6f414cef4d"],["/tags/Java-工具/index.html","ce5e23c7312f95fbfcafe17d3eb66d59"],["/tags/Java-常量/index.html","7e0b76c38129a46ba40f26e4e2d1449a"],["/tags/Java-校验/index.html","7296ee0d12aaf1e75f7cab2f1d76b496"],["/tags/Java-配置/index.html","6f1261007cdcd864702a33ee08393257"],["/tags/SQL-便捷/index.html","a629b8b785422ad0fb1aeb71a654d014"],["/tags/Safe/index.html","73d9f0212327160baa4fe9dcb804f863"],["/tags/index.html","141d0fe97da9105ad891de9942fb15b9"],["/tags/java/index.html","8572d9c2c93c7db0e60b045b56ca2f54"],["/tags/minio/index.html","9ab6f5c2502bb9318aeb86f91974006e"],["/tags/字符串/index.html","d7916558b157d4e5cd2747557376618f"],["/tags/定时任务/index.html","e54b2ad54af58e156aedc258bcd6ea7f"],["/tags/工具/index.html","c6991a8ac8ca3a99784f2d9ecf2f6504"],["/tags/搜索/index.html","27b2a13a6c433d40724930114b9bc61e"],["/tags/时间工具类/index.html","19c7c6cfa6ebaab9dd0d2ec440387bb5"],["/tags/虚拟机/index.html","29fc04965794470b639ffb5059302ae4"],["/tags/递归/index.html","1bc13cce0abb74ac7a34d8b3551c0433"],["/tags/配置/index.html","bd8f84d1fb46f21fe12604145dab6dba"],["/tags/阿里云/index.html","95f7d14a661dfec47226d8a408ce78aa"]];
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
