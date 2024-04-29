/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","69a661304450b6b477e59feda2894192"],["/about/index.html","ec372c2064ad5d9038667be0e6ddb926"],["/archives/2023/11/index.html","f8add1570c394c31d77c61db7405e8f9"],["/archives/2023/12/index.html","a8eeb8991497db3971a9aa10428b55f0"],["/archives/2023/index.html","1649e151fc1acce9cd798e36f66ab48d"],["/archives/2023/page/2/index.html","6d1d13cad9784d84d6cd0d52b6823fcc"],["/archives/2024/01/index.html","2605f1ba78df6bb49d865600450cbad5"],["/archives/2024/02/index.html","f71f0869e5433329b4b825d0736c28a3"],["/archives/2024/03/index.html","f281d4a1f74b19ea58e472c1120f2c9d"],["/archives/2024/04/index.html","3fb9a716276dc6bd7d16b5770fdfe4bd"],["/archives/2024/index.html","4f1c0c82665f10bfe3981e21c6f8d0f5"],["/archives/2024/page/2/index.html","b479ea15fd717198ce6d1ed4f8384cb6"],["/archives/index.html","96b9fc656251a53fc7c63affd880cd9e"],["/archives/page/2/index.html","eb2c0d7368712326ba57c484675a225f"],["/archives/page/3/index.html","6c5566494617eb3ddefc6c942b397723"],["/archives/page/4/index.html","1f929f0bdcbcd8ba6053ceb91dc608d1"],["/cat/2024/index.html","9660b56d54aeb18705b19f0491eaf574"],["/cat/index.html","78fe43ae2333f988984f335530f3a8ef"],["/categories/Docker/index.html","594f352bd4284397b22b47b589321f1d"],["/categories/HuTool/index.html","9ac584b25e9b04fe195a6fb8d79464c2"],["/categories/Java-MySQL/index.html","3c76c8226cdcc08deb7bafcbb5f435fa"],["/categories/Java-分享/index.html","5ea8c3a50e6c791e6db187f851907c75"],["/categories/Java-远程调用/index.html","573e9dc62b1c22329409523faa7dd478"],["/categories/Java/index.html","ded70466b977e86066809fa16c12a64d"],["/categories/Java/page/2/index.html","58e957a66b635d63f8ff6ef0261fa9dc"],["/categories/Java配置/index.html","3117b150d4ac817dde8ca86cf7bac8af"],["/categories/MYSQL/index.html","f5589e69ffd83b447a6ab5046b74c09c"],["/categories/Page/index.html","f60e71ceeae67cb0629999644bf86241"],["/categories/Safe/index.html","1922b1da0f2d9b8a32b013a573558956"],["/categories/Stream/index.html","246b1c8c85ba75a02ef3e9edefed7d0d"],["/categories/hexo配置/index.html","cfc7724c6a53a320a557f26ffdcda008"],["/categories/index.html","d889aea294c79125569c7359738e5f87"],["/categories/实用工具/index.html","21d506414a55f1a9a693938658b8b79f"],["/categories/工具/index.html","bf655c68d1c7e3cb0d66240538686ef8"],["/categories/工具类/index.html","8eeb54c474b5378ba61f89a420ee3a42"],["/categories/时间/index.html","9462f0e6e04aa4e4b6e259e78536c1fa"],["/categories/配置/index.html","5846aa28bfb17190f825ef9d110cd57f"],["/categories/配置文件/index.html","f7b7681f4eb4b19c3eb74ec5b5371145"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","eba893c4a96330dda6df4e02377f07f1"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1994280687eecd98b987a2cf63567b97"],["/page/2/index.html","92d4d4f465390ca29b9ababa33fca0be"],["/page/3/index.html","d4c2c232690214604f8d525f0ecb55bf"],["/page/4/index.html","f0d105f534167ac09e2fcd6fa28996a5"],["/photos/appointment/2023/index.html","1bc591070a3cf140d09c901506aa7116"],["/photos/appointment/2024/index.html","29b970869847f3036e26570c5781e88a"],["/photos/appointment/index.html","29b72de06b43cc09a2335feeaa249d97"],["/photos/babyAndBabies/2023/index.html","93612aa2ced5ce2bf3b2e50ab92fb9c1"],["/photos/babyAndBabies/2024/index.html","a9c23bae1e720b29d2417a49e6b571e8"],["/photos/babyAndBabies/index.html","93d0a0343bda9e17d4d091a61dd0a89f"],["/photos/game/dzpd/index.html","74bbe01f89df48dd8edf1720824289c1"],["/photos/game/gy/index.html","23f6715b173775950f34f3d7c944fd1d"],["/photos/game/index.html","2184f34329015a164a49ec6c5fdf3245"],["/photos/game/steam/index.html","5874a5e871e0fb801e07f5b26f522aea"],["/photos/game/wzry/index.html","5d429a36fa8e858461004f0f903c9e68"],["/photos/index.html","586223459ad6bdcd715b6ec4615b6fa8"],["/photos/movie/2023/index.html","f4ffaf8a1d9d4aa4c5490de9348f4945"],["/photos/movie/2024/index.html","67b6caab3ab66d36681b29294a9dec03"],["/photos/movie/index.html","8a4683244074f6d6509cf7686deea627"],["/photos/ohmygirl/2023/index.html","fabc2a9f35cfd5d79787bd08530b84f4"],["/photos/ohmygirl/2024/index.html","f7268cd16f5a37adc1a8347454e3337d"],["/photos/ohmygirl/index.html","b4dc71e9dc44f3e9b4fb400f91afacfe"],["/photos/outside/NanJing/index.html","e96e51cb9135ddfe7d358aabeab6c2a6"],["/photos/outside/QingDao/index.html","845973bee12dd76f637d90ba7c0830e1"],["/photos/outside/index.html","fedb868c7c2f7d93b8868f803ffe9349"],["/posts/12933.html","08e5cf60f90afbc99788d9bcb45e6d00"],["/posts/17303.html","fd7bf7bee17216d8123ea753d55a07ac"],["/posts/18206.html","5732b4d70cf36da95d67391f2dbfe3cf"],["/posts/20933.html","3d874ebb4e60aafecd8877cbb243e4dd"],["/posts/21635.html","0c046c2183386108b4de0e0f16107c95"],["/posts/22910.html","1299a8d2427514a737dd79a091598fe4"],["/posts/23407.html","ca130236c8ebf1ca631f51bd236a9745"],["/posts/26185.html","301cd194aa1a8f7c13df20972193b578"],["/posts/27699.html","c6cfa42f805518c6cf45ac69df1b9161"],["/posts/34134.html","600dd7e0404b220133d3ff93933677df"],["/posts/38362.html","f47753045c5aa4304b69e515920c7d76"],["/posts/4186.html","404aa42bf15d811e071770e95eb763c9"],["/posts/42658.html","a0fb80d6c961991bbbdf14135e37fdd8"],["/posts/43618.html","d629dd95a797806243460908a6c792a4"],["/posts/47374.html","523c41fedf3e933933137e6e1a6911e3"],["/posts/48428.html","9efcf68c6e738f0f4775fa4afbdd06b3"],["/posts/52307.html","939548903390477970411bab4072d45c"],["/posts/52812.html","d7e15849f432a04d657625f9832f78d5"],["/posts/53486.html","5b3385e68447fd91ed7686f92240ef09"],["/posts/53714.html","53e9dddb4304a5732c7556242042149b"],["/posts/54999.html","f861fabf9396da105b583d02c18d8142"],["/posts/55564.html","1d4fc5f1f1b81745a97d0169540ecf95"],["/posts/57395.html","88557a801e36d13cbc900a4d0b799dfc"],["/posts/58565.html","bee908a72839689358731a1b24973ced"],["/posts/59743.html","f2f55259d7eac4c04c7d14659cd58c88"],["/posts/62255.html","fbcb3fc54e4a3e94e4b8ff341635f514"],["/posts/62580.html","fc1ada2fe53602fd075d1d0a2dace026"],["/posts/64032.html","260828701fb913f755c69cac0bc2dd65"],["/posts/64329.html","1a750098480f132d44cff28591c88422"],["/posts/6594.html","406f7010acf0f100c22fe0e518128f00"],["/posts/9968.html","eda689bec4339b61319d287107642a84"],["/record/circle/index.html","1d0c679748106f78b5e65648b83c871a"],["/record/completed/index.html","ac7408fbc58ca91253b4b879f4458ca1"],["/record/emphasize/index.html","ac4eb08cfe63bffd89c86c19eb5e44c2"],["/record/index.html","8b16a1d559680026f6e88ef7f7744301"],["/record/period/index.html","1481042c13c0ba0a4db15eba1505489a"],["/sw-register.js","4ec0f74e8c0c3ca9a5966c3588c454ba"],["/tags/JAVA-工作总结/index.html","b86653b2aba1c554db37f57777abd3a9"],["/tags/Java-Docker/index.html","f26b8b82049a116c863ff345646df917"],["/tags/Java-EasyExcel/index.html","9f65aab6a17fd1b1bd82c79936ac5576"],["/tags/Java-List/index.html","4bdf83e233417c3ed0b1a81f2b92d145"],["/tags/Java-MYSQL/index.html","bdcdb3282e6580898e46c6b49861bb36"],["/tags/Java-Page/index.html","edaea8ab202d3cd9142bc44b07c7a76b"],["/tags/Java-RestTemplate/index.html","87533a59fa080ce1eed0974b6b239115"],["/tags/Java-Stream/index.html","cfe5975a36307e3a0575fe39496aaf9c"],["/tags/Java-工具/index.html","8c6f74d28b90ac705e7e77ce328ec270"],["/tags/Java-常量/index.html","e1af2ce04f5255948b5fcf2f62abec19"],["/tags/Java-校验/index.html","fab09bcb41b55658e3431f0ec6b968eb"],["/tags/Java-配置/index.html","ed2c06d1a66c7621f73ce43501150b01"],["/tags/SQL-便捷/index.html","6eacf6e6f5d612aeca75e9b125f03154"],["/tags/Safe/index.html","f469f5792f5e7755979d1b7cbdc41b4e"],["/tags/index.html","12df2b9bcf84626344c328d58894b266"],["/tags/java/index.html","d539719d711cd914fcd65bed0af60e1c"],["/tags/minio/index.html","81783a31871658c1aeead16139205783"],["/tags/字符串/index.html","10f2a19c1b6f71cf72537f0ab52d160c"],["/tags/定时任务/index.html","20767850c4ca932aaf5e62f84181415a"],["/tags/工具/index.html","329a14af8a4d0b85bc93caeafd9ec4f7"],["/tags/搜索/index.html","e280bdefa70ddf411c51ea41fbf6ec66"],["/tags/时间工具类/index.html","282abd563eae7cf3c2a39148b54e1b9e"],["/tags/虚拟机/index.html","69ca601cb7337c5b0993baa4ccf644c4"],["/tags/递归/index.html","f42e92540679da5d86cdda059e11b23c"],["/tags/配置/index.html","24f5205da2c23b14d99f5964d947ff19"],["/tags/阿里云/index.html","7b8cd5a8a368b4b4b58eb0af8b846cd6"]];
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
