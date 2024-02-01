/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","13a9c6f04480a0804ca187f0b2260ddd"],["/archives/2023/11/index.html","519b62074401b754c2f32b6003eb694f"],["/archives/2023/11/page/2/index.html","943b965afcb22896d2dc83324cec090f"],["/archives/2023/12/index.html","6ba76317479b268181ce3be58e245cee"],["/archives/2023/index.html","97dd4009c1db434b222d6edd18719ad3"],["/archives/2023/page/2/index.html","dbaf0826b88e3d6a93cfe469fe405afa"],["/archives/2024/01/index.html","75d92fdfa7ae6f43b7e4061feeaeeaa9"],["/archives/2024/index.html","21e631278541c21357daf284adc27d39"],["/archives/index.html","f50fbf385b8d5910fbc1c3839b445a05"],["/archives/page/2/index.html","e5521b50f41b70833eac2382aeb7875d"],["/archives/page/3/index.html","ff5a41d3eb78081c3a175ee57592faf0"],["/categories/Docker/index.html","f8adb53348fa3b60f8471681f88850b7"],["/categories/HuTool/index.html","40f176a136e5c13afe59e4bdbb211f18"],["/categories/Java-MySQL/index.html","9f954a03ea653f6ae2d32b2dc017e500"],["/categories/Java-远程调用/index.html","550cc9fb32c7aed344fc7b7020ee1936"],["/categories/Java/index.html","c724a2dff0a5d70d954c86dcd9caf6e8"],["/categories/Java配置/index.html","79b983e4e2142547fe0ab73a1305e54d"],["/categories/MYSQL/index.html","e17ca9133d0a31b66144c7932e40e690"],["/categories/Page/index.html","7f454431d071981fbe83b95faa8778dc"],["/categories/Safe/index.html","f1c753ad94c50d83ba835880f26eba2f"],["/categories/hexo配置/index.html","dc8612088c7ba89229091ce7be67871a"],["/categories/index.html","9da47f1e3afb2c52a1ca5f43c809f5cd"],["/categories/实用工具/index.html","f183175691bdf09db8950cfab2d942cb"],["/categories/工具/index.html","36b9e8965da9d7cfa0641771e4f44157"],["/categories/工具类/index.html","5de3e9da0569d4e3f984b500b6684a4e"],["/categories/时间/index.html","b38988a8885ab4cd785ca38442300d52"],["/categories/视频/index.html","4c990c84b65e02f97afc26a372709545"],["/categories/配置/index.html","c3f123d86370666b87a8a1d90879a29a"],["/categories/配置文件/index.html","78b70e6fb0b2e6d2c9f5cc98b28f1d37"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","0fa37d2d6148c8019aeed65f1ae48380"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","bd78d0e9a05129d2361ecffe75e8656f"],["/page/2/index.html","840b5f3556e78ad6e7d2ecece5a518e4"],["/page/3/index.html","46c1b00731f0b18ff6d3de3f55f4b1f2"],["/photos/appointment/2023/index.html","70a89af486c28909df9431c906f2ef0e"],["/photos/appointment/2024/index.html","a22fdc181fc5ae84306d394165e13514"],["/photos/appointment/index.html","fe66c8a4d37760efd67460a8e3452833"],["/photos/babyAndBabies/2023/index.html","4f333d6d0a8cacaa45cffbcbeca471a0"],["/photos/babyAndBabies/2024/index.html","ae896d48d0be61ac2e241d2de0bafdde"],["/photos/babyAndBabies/index.html","f1acb05c4a735f1babb44f9e395b1e69"],["/photos/game/dzpd/index.html","2fc271473dcbf074f81988d5185e709a"],["/photos/game/gy/index.html","14589c41daeb91e6b074abe375b1472c"],["/photos/game/index.html","dd1305ed38e4d5a83a44bca9d9bf88cd"],["/photos/game/steam/index.html","4343cbda7591004c624c2b78331282dd"],["/photos/game/wzry/index.html","6fdc0dfdbd95acc69e4c967a24f24994"],["/photos/index.html","9ed70ea5fb66a2ec858a6758921e35e5"],["/photos/movie/2023/index.html","d54ace73ddf8b6f807fef9beb41eca20"],["/photos/movie/2024/index.html","050d407009e3c602a2ccc2c3dd3053d8"],["/photos/movie/index.html","f4fcf8d3f798551545b5cd03cbbfbcba"],["/photos/ohmygirl/2023/index.html","052f9ed2779b1dffd57739fdd8ea19ea"],["/photos/ohmygirl/2024/index.html","595e7402953c2d61c4abfa7ae30cd139"],["/photos/ohmygirl/index.html","7d476a4fbb007d6c39fac8e04885c06c"],["/photos/outside/NanJing/index.html","1c30736e4d3e655148d776cae09243f7"],["/photos/outside/QingDao/index.html","8e27f6f01bb4466481350c167dcbd2a4"],["/photos/outside/index.html","20c1e626519b677e5757f0e7406697ed"],["/posts/16888.html","2bb2cf2161665f80049d92278bd49afd"],["/posts/17303.html","dd70c93da440025b07598c898a75f662"],["/posts/18206.html","e9207bd97984aa63f32a883c078c131f"],["/posts/21635.html","2c7dbf74a3a111ddbaa09601d52c1257"],["/posts/22910.html","465d571bf64bc2f2e7e118368aae95e6"],["/posts/26185.html","5db31e84c17e9a96a5fea79981b3f3c4"],["/posts/27699.html","274965539e67601aba3a248acd18f087"],["/posts/34134.html","e9e5a3ba9058638a624d759c9696cebe"],["/posts/38362.html","0090e6a0ba4ed8a321798a69b7b00616"],["/posts/4186.html","1ca977502a167668019df4f46edeeab1"],["/posts/42658.html","e54139f2a0a37306fa890a242e8f89e9"],["/posts/43618.html","6259531bfd31e2972402bb3bd8c84ec7"],["/posts/47374.html","854240fa10fef266ad938ffad832feb1"],["/posts/48428.html","aeb5763af4d1c7477fb0cd5c723c7540"],["/posts/52307.html","d535094ae01314fc1be6ff7d7e9163f0"],["/posts/52812.html","bb1a1ac2dfeda847cb926037e1fcd73c"],["/posts/53486.html","04cff3037f456f2e58bd2ac712d59d13"],["/posts/53714.html","6b9a9fb01523ec9ba5552993eb0a7930"],["/posts/57395.html","89d67308ea1d9cf29da6be83107bc54d"],["/posts/58565.html","3d52d50b90667671ad26c18979b61975"],["/posts/59743.html","f6aa41d01c103dfc2d7449f4271764e5"],["/posts/62255.html","1c091db3497a4de6fa44bba7b169791d"],["/posts/62580.html","419df1693337154e6665029db5c7bc3d"],["/posts/64032.html","a268418b9136919faff90c2fe1f5c396"],["/posts/64329.html","3c16453c020878ed9c9c1dc9ea179cb9"],["/posts/9968.html","5ddeaf810f35603bb821fda8ae2b21a5"],["/record/completed/index.html","053c09b63d21f417ea05f33402369200"],["/record/emphasize/index.html","3c34269f50a606365e5ec98841d35d78"],["/record/index.html","60563011f4ee79352141e9e793f443ff"],["/record/period/index.html","4dba4202e32ac0cb96148658e44b253b"],["/sw-register.js","3de6de0dfe50e1933ca578934227cbd3"],["/tags/B站/index.html","c342d96e9238809f81cf1fc9fc88ea84"],["/tags/JAVA-工作总结/index.html","aa8b0d2f0d18befadfd147999c094629"],["/tags/Java-Docker/index.html","aa61400158274151fa03a2a510cfe669"],["/tags/Java-EasyExcel/index.html","5b28b08de7a702429f0e6308107bb2f6"],["/tags/Java-MYSQL/index.html","92ae2562af7bb02fcd133c388a36016c"],["/tags/Java-Page/index.html","f62dcc7945147989a9dd1d4b24846aa9"],["/tags/Java-RestTemplate/index.html","f503dcc4802623f9f1009880948123a9"],["/tags/Java-工具/index.html","845030cc53651eac2a8efed8bdc31243"],["/tags/Java-常量/index.html","cf99cd272151c64d273634f3eb7d3b21"],["/tags/Java-校验/index.html","d13b16498c672741693cd0533e2cc746"],["/tags/Java-配置/index.html","72384187822b2f7e42fc84e4da02c196"],["/tags/SQL-便捷/index.html","9d6ccee87014d2d5a03265caa71ec6fa"],["/tags/Safe/index.html","efa36c0d19bf70df4a951932e781e76b"],["/tags/index.html","b3a5f4d59669772d2def886c7e4f62b1"],["/tags/java/index.html","f82b5d8b8f99100ebb73db09932c8630"],["/tags/minio/index.html","31da5deb20dbbf4a01313f3097e0b4c1"],["/tags/定时任务/index.html","947d63ee120793c310d26c9f98732a7f"],["/tags/工具/index.html","95ed86c13a2dfb8c7ea86f432e087ef4"],["/tags/搜索/index.html","1a9aec2973af4a43ddfb4c3900dee078"],["/tags/时间工具类/index.html","2448509a1584ca40ad166f15e9a60520"],["/tags/虚拟机/index.html","92cbc24aca245360464e02a378c42c06"],["/tags/递归/index.html","0097023a914b78efc0229bc5e436100d"],["/tags/配置/index.html","4c7ee4cb2b45f669c82e3d2e726a26ac"],["/tags/阿里云/index.html","b759df1eeb7b848b06a5e54902a9d4e8"]];
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
