/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6ce78b07cf4cf25b02f43576497b7d3b"],["/archives/2023/11/index.html","a6b45fedf0d6696bd14302aa0ffc6fb9"],["/archives/2023/11/page/2/index.html","426a8cad9342972f6b42e8f536ff15c0"],["/archives/2023/12/index.html","1b47afb62462f618edc743b9925ad850"],["/archives/2023/index.html","a78a079166bba342b3d7d9c2c76bfc5b"],["/archives/2023/page/2/index.html","f467bcfc955f2f7d0861c31b63afc489"],["/archives/2024/01/index.html","417f543616127292df2736147f268769"],["/archives/2024/07/index.html","980bbe387bf3de803b3286fd193fc938"],["/archives/2024/index.html","09b5fbddd39a061552200561faad5ad4"],["/archives/index.html","9ee67d801bd5f8e071828a3e88ee7c3f"],["/archives/page/2/index.html","a7ba538704bdb290e06118d27fea9ccb"],["/archives/page/3/index.html","a1962b5c600b92cc48467d815a718f5e"],["/cat/daily/index.html","06e734fdafbe6da548ce844338f44302"],["/cat/food/index.html","7c297311261dd66171d5ea11c86fdc5e"],["/cat/health/index.html","cb7358e0fce0afa8b685e1ac7b10b5d0"],["/cat/index.html","aea762f00394bb67698a6bcdee78b811"],["/cat/picture/index.html","09a5dc9f8af7e6a5a094b2decc355cc3"],["/categories/Docker/index.html","d7d59651efc3ebde0a4cd392ce6f6a0c"],["/categories/HuTool/index.html","354fc91859220a32b10424ee0ccca6b8"],["/categories/Java-MySQL/index.html","252f70399a6ffd72cbf436ec615dce7d"],["/categories/Java-远程调用/index.html","609b505e52ff8328ddd376765cd1de5f"],["/categories/Java/index.html","3fa192ab02099a45a2ab1dff9d0fe2b9"],["/categories/Java配置/index.html","f5e8c09cb47743a4c066c3533eca724a"],["/categories/MYSQL/index.html","4655ca8fc46cfff744d88eca88bd97a9"],["/categories/Page/index.html","268fcd454d57bf477cc6b7aa224a8eda"],["/categories/hexo配置/index.html","8a93a32dd8fea934e120cf0d5f6e1952"],["/categories/index.html","6a643304401ac7a23578c01c82b64180"],["/categories/passWorld/index.html","ab584675013a94e47be0f6ad460d54b9"],["/categories/实用工具/index.html","abe3ce0be33a13a71c8d4c2d85cc4093"],["/categories/工具/index.html","70f62c02c22ab5e5c74d90355d9f4d28"],["/categories/工具类/index.html","7bd2258dddd9be2305558a5229bf2541"],["/categories/时间/index.html","6c621a045c345aa5c1c70c8323598d91"],["/categories/视频/index.html","f39bb7f30358cb01e4768d23ba12928e"],["/categories/配置/index.html","b894f64bb4c174d9b46d04d9c7f21342"],["/categories/配置文件/index.html","5acc813195e8fb2335e8815e9d7fe77c"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","979c4c7e8b0bf365d8baf36f937f7cc7"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","83129d73127cba49f76681f539e88fa6"],["/page/2/index.html","5cca7069859bc4f79be90f8bbbf9b732"],["/page/3/index.html","67603ffa01683014ed4652ab5eac35ad"],["/photos/appointment/2023/index.html","74feb96374f3ca1d89327e4f1db6459e"],["/photos/appointment/2024/index.html","f629a24ab7fa350d8be9629f337c6b68"],["/photos/appointment/index.html","ae41304a1199c01ac6910ce15806ac76"],["/photos/babyAndBabies/2023/index.html","70c5fadc85d029bba9aeff4785404baa"],["/photos/babyAndBabies/2024/index.html","8a0df0c9067451a7b45efc0b940688ea"],["/photos/babyAndBabies/index.html","7d8497b72343f8dc3875cb0c6b93fc62"],["/photos/game/dzpd/index.html","e56d52b6a25a420f05478ccc5eb9d5fd"],["/photos/game/gy/index.html","9289974ce1e9c229e54bd9e09d85f0a9"],["/photos/game/index.html","4d5ea6f9a9be7cc55288d53df7efa40c"],["/photos/game/steam/index.html","c721eb307463fa872e85cae966c73aa2"],["/photos/game/wzry/index.html","3da98faa78688d6bb289438da9ff8fe5"],["/photos/index.html","45c24c09c6e9f373d583d2d9b556fac9"],["/photos/movie/2023/index.html","88e82862cd159c58a5e66f9bc474332d"],["/photos/movie/2024/index.html","0b3fae0f1f82e76cfcb5db7afad81d2b"],["/photos/movie/index.html","063511a6d32a73c71f57e3396b1aefa5"],["/photos/ohmygirl/2023/index.html","91692656e4ac20becdae8a75e916f31f"],["/photos/ohmygirl/2024/index.html","8cc6bb4782250c0abb66137fce68bae0"],["/photos/ohmygirl/index.html","aaaac21be903000f09e2db68611a964a"],["/photos/outside/NanJing/index.html","3de386cdc1b868a4763a04784ffcba69"],["/photos/outside/QingDao/index.html","7a679436bc631df40f6586a7ea25dfb2"],["/photos/outside/ShaoXing/index.html","07d52a835c716fc22c83a6582d22c958"],["/photos/outside/WuHan/index.html","82af6370dd950f0ce6ecd72e0b7010a1"],["/photos/outside/index.html","697de197fbc3e3b2558f9c9c76a72769"],["/posts/15940.html","a4e2ca6a1e5572c2d7ab8f14e1477e4b"],["/posts/16888.html","a80ab63f92b6114e25312a88ba020a96"],["/posts/17303.html","78d0ca016913d7d768ddc8a8d0874e5e"],["/posts/18206.html","3482a1a09a9daa3ce7845fda1bc3fca9"],["/posts/21635.html","8b385db73e17b2f08e432252c31de8fa"],["/posts/22910.html","7bc20f3d708d070d880e2f52f46be231"],["/posts/26185.html","0db5542aa524d4360df218277c659e7b"],["/posts/27699.html","4d435188e522e16efc71c8515e1bc667"],["/posts/34134.html","91b89c3883a7f28ebc38b66711c66b54"],["/posts/38362.html","58b27914394a9c373841cf9b055940bb"],["/posts/4186.html","6b8cdb47474f33be80125b2406f1dd6c"],["/posts/42658.html","e2d73343a6d49b19bb84b5173e89229a"],["/posts/43618.html","f26d5b6dd458d83eddd039a19f1d20c7"],["/posts/47374.html","7ce6bc6070dfb194ccbee3d49e5e9b6e"],["/posts/48428.html","32887da3724cf39e844cffce7d3018e8"],["/posts/52307.html","647771a58d270a18fc8fb7887a0a25d2"],["/posts/52812.html","8baec72b52ab79765475ad672ddd3595"],["/posts/53486.html","c4e6df87ad3533c3f749e36cbb76167b"],["/posts/53714.html","6f1c1870c26b77785acda23a68a22444"],["/posts/57395.html","42ce079011e16d0cc078f69ed1f5cc8d"],["/posts/58565.html","948955a7704aa7e503f32df64c55de29"],["/posts/62255.html","088ba3b4957e209e0f9e5a9f0cb26957"],["/posts/62580.html","ca31698ab6119497a4ead89e2afc93cd"],["/posts/64032.html","473657de7aaae108b696611cc31f110b"],["/posts/64329.html","db39355271d08c358030dd3fc0f31448"],["/posts/9968.html","99c1b1475fb43396784eb7745a86f9c4"],["/record/completed/index.html","7c7eee01daec0591206bd7dbd1178e88"],["/record/emphasize/index.html","68318b0319bcfc1adbac7a5686c26ad4"],["/record/index.html","7ec212c66b6424758e2029b4b41981d9"],["/record/period/index.html","746f78f87fbf6bb10bcd92bc34623a79"],["/sw-register.js","9481071575ea8593b9b4dbb07f61bb9d"],["/tags/B站/index.html","f2f884b517fe98719d34101b33d5456c"],["/tags/JAVA-工作总结/index.html","a1768cd078be58ac67ad253b84d11011"],["/tags/Java-Docker/index.html","651bcf53520b2e91461e8fa9a2e4cbfa"],["/tags/Java-EasyExcel/index.html","650951bf90fd0c52b8f5f65a75f6aafe"],["/tags/Java-MYSQL/index.html","62a3aa45a296c02dbbd265897d7263b4"],["/tags/Java-Page/index.html","ad75f60882f545c4801e8b561d078457"],["/tags/Java-RestTemplate/index.html","7a3ec62164f5861fc77fdeeaf7f96055"],["/tags/Java-工具/index.html","d57a7bc3e24ad5d5025bb54f96a813d8"],["/tags/Java-常量/index.html","82726119733ed83fbc1a39fc8e5ae8ec"],["/tags/Java-校验/index.html","8310f7c306efdb6efdec7c96cc105c5d"],["/tags/Java-配置/index.html","08ab10c22cf810d543b7edf1b4e718e9"],["/tags/SQL-便捷/index.html","c1d0e901124505b2dcf49d5faeaf6f02"],["/tags/index.html","1f2b90fe463d16391e1806f7b8c1ef19"],["/tags/java/index.html","bfff28d5bd1143021399746afbdbd0a7"],["/tags/minio/index.html","ead1b6d6010db0459effcd87a0b07d06"],["/tags/定时任务/index.html","cdec7d79218a5a45ec41e0d59ce4b914"],["/tags/工具/index.html","4ab2107fba2d84ebc91ad8c382323d54"],["/tags/搜索/index.html","cecbebf93e870583d4170db9e79888cf"],["/tags/时间工具类/index.html","2aa18f49243578d71f9aec0748bdddbe"],["/tags/虚拟机/index.html","7ef0d7225ba8c47d29ef55af3ef12daa"],["/tags/账号/index.html","a397b03a9558e171fc8f0fdec86f4089"],["/tags/递归/index.html","c66f46e170ca88697e534cd737c966d7"],["/tags/配置/index.html","74868fbed10ce49ae69c905e6794c2eb"],["/tags/阿里云/index.html","d8618c7ad294c52f27d899465537ea04"]];
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
