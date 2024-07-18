/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0fe21a40784759d1dbb146ea683d07a3"],["/archives/2023/11/index.html","592b338585f49320dbdc8e907d7440b9"],["/archives/2023/11/page/2/index.html","67c21f1e8d118a483a0f9051c9daf806"],["/archives/2023/12/index.html","2499565ef55d766aca67d7f4388323d7"],["/archives/2023/index.html","d564d4f3391fa07be2c853358ef033b1"],["/archives/2023/page/2/index.html","04ab40c6e00eb32b3e2fdd3b437d6c16"],["/archives/2024/01/index.html","5c9dae4a645bd43da0f9aea2cbcfd470"],["/archives/2024/07/index.html","411ca2bb3f4e2f6f498a9ae419e30995"],["/archives/2024/index.html","9f07a03773aac86724c3ec61759ce32a"],["/archives/index.html","ebd7ced87c792d21d60ada141946fa12"],["/archives/page/2/index.html","82dd3b4e72db44e7707ab4c7cdb31588"],["/archives/page/3/index.html","b7fee7b07f061864d54df6a59dd7e1ee"],["/categories/Docker/index.html","8338ddf67755d9d5c9dd0fce80c0b7d8"],["/categories/HuTool/index.html","89f46b657748fcfbde92009c55851587"],["/categories/Java-MySQL/index.html","d715a5cc80e03ace4b615870c2509c55"],["/categories/Java-远程调用/index.html","f84195b7306ea1cb3bd31bc84eda6e66"],["/categories/Java/index.html","55541bdc2f39290c30e8d3f99b3139f8"],["/categories/Java配置/index.html","6c967cabc41f07ec14b1bb837c47b453"],["/categories/MYSQL/index.html","140c6cad2a316d84e5d8ec0f7a2c1582"],["/categories/Page/index.html","ff26964b6d3016936e55c490c0cdb847"],["/categories/Safe/index.html","b7bd022df0ccfccaec08887dd29853c3"],["/categories/hexo配置/index.html","eb389aad9477d1d5f35350781b13b432"],["/categories/index.html","f80df339875540b987ca9f6388bfd411"],["/categories/实用工具/index.html","6fd40e51499e279a12b2bcafc245085e"],["/categories/工具/index.html","bb15a612fb1e19adee5eb783b285bf97"],["/categories/工具类/index.html","51d4335c0d22d767390ee04fdb831785"],["/categories/招标/index.html","7941b5ab803aa07f8204f92a858a06ea"],["/categories/时间/index.html","193a6a9ba1629e7c18b526595c128aa1"],["/categories/视频/index.html","fae6ce21ff2a3264593f1e4dfdd5feae"],["/categories/配置/index.html","4495890e812ea9066139f85710a718f1"],["/categories/配置文件/index.html","9e7ac30ed419f47e771e0ffc1f7ce3e6"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","7797c231dc3cee09ae53b14478f9d054"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1a2032de5c445da87443d8d111928a8f"],["/page/2/index.html","e0d98ba743a062b517803740c69f611c"],["/page/3/index.html","504e9c82c7d376ff4debb385e4195e42"],["/photos/appointment/2023/index.html","79f7e374596562c3b94d8885e07d2a32"],["/photos/appointment/2024/index.html","d209ed8f1fda5436d546c6efc5907ae1"],["/photos/appointment/index.html","22c11f0b771cf7a52ec768b6a3380f89"],["/photos/babyAndBabies/2023/index.html","7741d06e3097dbb38fccf2c69adbb434"],["/photos/babyAndBabies/2024/index.html","2b38867e092dd77ad8e5594ce1ff4728"],["/photos/babyAndBabies/index.html","70f4cb7be57542c7277fe25964632c0a"],["/photos/game/dzpd/index.html","f2ab6897f02cf1a96381fd82932594d6"],["/photos/game/gy/index.html","61b2fa68ce3363541956bae2295f740b"],["/photos/game/index.html","80fdbb29e747a06a27c601d9f867726d"],["/photos/game/steam/index.html","312f8fd00fa3cca68a909727a3f9947f"],["/photos/game/wzry/index.html","bf2489bf48c356134cab200fbbe5a456"],["/photos/index.html","8ba468e515a92c53beea917dc24f13e4"],["/photos/movie/2023/index.html","7078affd580bce017874e9465db020ea"],["/photos/movie/2024/index.html","46630560474ca7ee67d5b7fdd4be5c1f"],["/photos/movie/index.html","8010f1a199df76a646b3f55b0ee81f9f"],["/photos/ohmygirl/2023/index.html","47ac521764bcc29e33c8b344d4bbfd03"],["/photos/ohmygirl/2024/index.html","0e0765946bb891e430273a67ff6a18ff"],["/photos/ohmygirl/index.html","9e637bc1e16752489140eeeacd586ed8"],["/photos/outside/NanJing/index.html","0ca83ed84a0b97b61e0adbbdad0f4688"],["/photos/outside/QingDao/index.html","fc3f30a02ab2bb0794e4cc34d482b222"],["/photos/outside/index.html","8ed9cd660e3f62e1a17e7dac4c16535c"],["/posts/16888.html","a6b3b2135ec5fdd0f5b2b50bfdea69b3"],["/posts/17303.html","ca6b6ddc64206feb9a0814a04698da28"],["/posts/18206.html","17f53c33d9203edcfa84f90be2d83876"],["/posts/21635.html","da74ac90cbe630c8429a1ee16e0fddfd"],["/posts/22910.html","ef58e9478dbb48b73fecd7a15a79db98"],["/posts/26185.html","0a3bb580e7356606be02d3fc88d7f66c"],["/posts/27699.html","7a668ebc9ba40e83d7b0f85b39372d6e"],["/posts/34134.html","67994ae6c47541d8cf92369a4a56152c"],["/posts/38362.html","0456a02135a6c704b13882612d2c25ed"],["/posts/4186.html","dc73668d3a3f054dddd893279293f362"],["/posts/42658.html","c852d5d833f3cbf083d51e5dc649a8d3"],["/posts/43076.html","76e979f436b341b80ec917bd2f4514a3"],["/posts/43618.html","abbbae58eceda529ca95b0d8f8d3ab77"],["/posts/47374.html","af7aeec7eb6818758848fef48d272642"],["/posts/48428.html","8e48da78eac5e051ae5ac4e26d048f1d"],["/posts/52307.html","16c6bfb35cfc3c3116f6a3db64f63db4"],["/posts/52812.html","b8dc557d2aba230dca95891497fd6d34"],["/posts/53486.html","4470eace77bfb01d240166ab7d4d2b1e"],["/posts/53714.html","f891cc5e43fe204462f3f9799300387c"],["/posts/57395.html","8f9a4063841232df1aac74a986ca2689"],["/posts/58565.html","959e37808939ce985398aadecbd37b76"],["/posts/59743.html","db28e0e53beb786f45a0416da918cd03"],["/posts/62255.html","4afc65221b17df37dc62386cd24006a9"],["/posts/62580.html","eb0be1b290f5df2dfc156237491cc373"],["/posts/64032.html","baec0fb0265c08db4f2f020c75ea9bf1"],["/posts/64329.html","fa63657fa0074dae65308f25cdd6e4d1"],["/posts/9968.html","3cc76003a4e31c00c035c9494b2e724b"],["/record/completed/index.html","19808fed7dfa53d636143ebfb84b27c5"],["/record/emphasize/index.html","e59cf23539c9b6d6d022c9303787b50e"],["/record/index.html","03e89c690eabb7a23a603778eaf8b23d"],["/record/period/index.html","749be6eb3f19a4f56fae99d1e8a7f269"],["/sw-register.js","1c2995b09ac729ce5375254977426713"],["/tags/B站/index.html","ce0d2511d7416759e608a74f3acee702"],["/tags/JAVA-工作总结/index.html","aa8a3d64e361056648d0ca4528361368"],["/tags/Java-Docker/index.html","6c0037e505a7806271698c37509f4498"],["/tags/Java-EasyExcel/index.html","2afc3580b78e87117d8995fe7fce47e6"],["/tags/Java-MYSQL/index.html","23ddf114b9db5c6c1a169ae0e09f00e9"],["/tags/Java-Page/index.html","f6a660e2e9ed07c94c93e6f494c9056e"],["/tags/Java-RestTemplate/index.html","df7767367ce3962f33261c549721caa0"],["/tags/Java-工具/index.html","06a4f2f5503470cf19c814784f7d283e"],["/tags/Java-常量/index.html","1a3db8aeba67b4f9a6daacf8c8a6029e"],["/tags/Java-校验/index.html","6d1ee33c77cd391e4f9ea81bcea396ca"],["/tags/Java-配置/index.html","6c51ec54076deac10550abc32e32f81b"],["/tags/SQL-便捷/index.html","99b5f8999a7e0f20c2d4f13faeb22c59"],["/tags/Safe/index.html","fea06b75b20eea7874a96151f2d77284"],["/tags/index.html","8bc710c286ec7b3899e12b1b2e51648e"],["/tags/java/index.html","d13a46f47762056565889fcf1b82579b"],["/tags/minio/index.html","65b9586549cba55cdae622cc76dd34c8"],["/tags/商务/index.html","a0bee01cd41211cdb73f1ade55f2073e"],["/tags/定时任务/index.html","abc3298dd77050a97eea3e4746a69cc8"],["/tags/工具/index.html","ee820474fc1453eb4903ce3226848125"],["/tags/搜索/index.html","a2be59f73a79d4c5533adcffa0c17316"],["/tags/时间工具类/index.html","a5122385c60bbf88c1727e3b5343b428"],["/tags/虚拟机/index.html","039c977ed8fa4dc20a9550f6df36ae09"],["/tags/递归/index.html","ac97e25705da0670fd5b83de09113011"],["/tags/配置/index.html","08c903e57bd68206292d145eb425fc21"],["/tags/阿里云/index.html","03f3f1e114b9928256ce50c382911f49"]];
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
