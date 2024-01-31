/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3841b7d8989d794976ba4752fdfc2a90"],["/about/index.html","8a4f4d4c7e9a069fb2e8d9bcc09f594d"],["/archives/2023/11/index.html","8323db05f9051caf80a05cd7d3c335b2"],["/archives/2023/11/page/2/index.html","193298a75565092c58b277c455479a77"],["/archives/2023/12/index.html","c199fbabe25217a2c4e6f4c7fe33b213"],["/archives/2023/index.html","e20830f0c20aa7f269d166aec58c2a70"],["/archives/2023/page/2/index.html","4cc9c990c615ac1609d9306d1cb58621"],["/archives/2024/01/index.html","d8b3196a6aa7d258c771b36b9cb42f7a"],["/archives/2024/index.html","d6f5f0b599209a8b47b6f4eb292fc10b"],["/archives/index.html","5f571273022a881a8fc4b6e10738c6e2"],["/archives/page/2/index.html","8d303bd58b83215fc2647897eabbabf0"],["/archives/page/3/index.html","7deca7ee64b337c1e2cb7d7480220f69"],["/categories/Docker/index.html","3a26b3a8063e601bfd778febfb333d9d"],["/categories/HuTool/index.html","9b3dee55fc9adc4dc3ea6e5b9a4d596c"],["/categories/Java-MySQL/index.html","e584d889f173a06e8a1ec9068514630a"],["/categories/Java-远程调用/index.html","9a41925e245ff1b62b7525cf3d97893b"],["/categories/Java/index.html","c4b22aee6e7fdbbbff0cdbbfcb9c5bba"],["/categories/Java配置/index.html","7d528d0dfcc9321a510c77cc7f868f68"],["/categories/MYSQL/index.html","663783ea6b94790a83c63cce39794b63"],["/categories/Page/index.html","5eded88b26684fca1724a88c584d84c8"],["/categories/Safe/index.html","b2cad26ac68c61ef70d367152f8b0f10"],["/categories/hexo配置/index.html","8562d2e86888ecbba554468f6b90f4a4"],["/categories/index.html","acfec77a1b78808615497cc9f031b856"],["/categories/实用工具/index.html","55c71ecb5a242d1e13cd10452d29ed88"],["/categories/工具/index.html","6b3d7b01e505b2976d7e562c38bcdb79"],["/categories/工具类/index.html","89e45488dc4e1bd99d6f0df6f2167c7c"],["/categories/时间/index.html","8ec594367fa22169cdf9247bc712a166"],["/categories/视频/index.html","86532420c10a2fa1fc68ec6b3ee8e603"],["/categories/配置/index.html","3e256354922abc617a4338f54da5a100"],["/categories/配置文件/index.html","190f4654a99e43fda4c2395d89b2f3c1"],["/completed/2024/index.html","f9c5defba33aae1d4e27737ba1ff4e07"],["/completed/2025/index.html","26151a4b238cf5fbc88a04b2e1bb5e31"],["/completed/index.html","e3169c9ef7824eb0415e8fdd44e70b4f"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","7837cb0b117d7640a4be836af6dd6d2f"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f257fc66b9253367853bc6f1796e3e30"],["/page/2/index.html","a1cd5fad42bac6d5bb7d92ae0e6cc37e"],["/page/3/index.html","4b2e522f8621609e9ab0ca15df57a3d4"],["/photos/appointment/2023/index.html","b8eedc765ff2e6cb9d0794ddf1ae6b3b"],["/photos/appointment/2024/index.html","75f78a5d35a950a5258dfad016f41cf7"],["/photos/appointment/index.html","99e9a7fffe0c5a2888971813c005a582"],["/photos/babyAndBabies/2023/index.html","d29c19d06b2d8c3a789c1d0b8ee96848"],["/photos/babyAndBabies/2024/index.html","860d269e4cb45b5580042c4bf59b7a14"],["/photos/babyAndBabies/index.html","0f8add7b43b3aba380e4e20545be32a2"],["/photos/game/dzpd/index.html","934a66558299589f31702e3e42b6dbd4"],["/photos/game/gy/index.html","9999a852ef44fb759ed0ad16b05779f3"],["/photos/game/index.html","0233ab2a7b57d453a206abdc8e3f3df5"],["/photos/game/steam/index.html","ad3028aaf340ff55c0cff61895b82133"],["/photos/game/wzry/index.html","bb1f11b50768fdb5b7178d5d41d0933e"],["/photos/index.html","69712a5fa4e90209e8cdf673177008e3"],["/photos/movie/2023/index.html","b987562545a255f2eeb36bab950684e8"],["/photos/movie/2024/index.html","74ad60e63783911ff7c84966d78883bc"],["/photos/movie/index.html","218a382857151282eb6df89acda7eec6"],["/photos/ohmygirl/2023/index.html","4f001159474d53b6419cb2624c61a190"],["/photos/ohmygirl/2024/index.html","c435a51633a29abb7dacc9ed8cdea7ac"],["/photos/ohmygirl/index.html","b381825b902f9f39a4d38069a1a473f3"],["/photos/outside/NanJing/index.html","a30add93aeaa195f7d1ce52b7bd40c09"],["/photos/outside/QingDao/index.html","f8a8639b405590d032031a9e5ec5f436"],["/photos/outside/index.html","068d4eca24e352ccfdf6a2f5668af896"],["/posts/16888.html","67da43ae2497262f4be15399afb5ffd3"],["/posts/17303.html","bbcaefab9ad6b780f2b795b166f5b6b0"],["/posts/18206.html","8fa42cca35f1e62fb2d7fe47c1da2b1c"],["/posts/21635.html","80ee196efaae0e875b218250fae8b90c"],["/posts/22910.html","195f0ba198312061147dd0f858570c93"],["/posts/26185.html","7555d5c41b7f274b4727ed8c04982f47"],["/posts/27699.html","f370f635bda66e6d745acbc364cbeb6b"],["/posts/34134.html","7a8eabb0ee7ccc4fc461bc7b3c7aa2f3"],["/posts/38362.html","2006d3412e8c6cdcf957299f7291028b"],["/posts/4186.html","15f2ee2b59df2c4d245a82e0e0f8cecf"],["/posts/42658.html","3e33e18e538ae7eb38a47e23d59a5ee3"],["/posts/43618.html","f446ee9f1253f945df250a1c09425309"],["/posts/47374.html","63d85ba03e88e23fe1f9595a5651b89a"],["/posts/48428.html","871bb1186af03a190f0563b141a93a9e"],["/posts/52307.html","db8e5e3cce53055f2dfbd1d91edfac10"],["/posts/52812.html","9e440ec797636829b662e8a5cb7662fb"],["/posts/53486.html","b810415185288538c46e38be8cc582fd"],["/posts/53714.html","0505662e8aca140720f723447a4eb6e0"],["/posts/57395.html","438da2af8ce0036c739b292124d2cb5a"],["/posts/58565.html","d7316da734aab2f58debb8cb48f7c065"],["/posts/59743.html","a9838655f11f8f2478c25a098faeb417"],["/posts/62255.html","317d4d241b986c6a1f9f050dacf4edbd"],["/posts/62580.html","848a6dc106a7ce83e7a55e0ec616a329"],["/posts/64032.html","c6687e943d35f978cfd51ea7e06ace76"],["/posts/64329.html","86b9507d979ee3634ea663495df97ff7"],["/posts/9968.html","b049fac3f88dda3f65c552ab0bfa2db2"],["/record/2023/index.html","e48aa48d41737d90403bcfeb5f26526e"],["/record/2024/index.html","9acd6175da9cd90bc27d339a5eadcc3c"],["/record/index.html","37e2aeabb459a9451c271e66b9a93982"],["/sw-register.js","1101f2be422386a548c3179a9ef73bd6"],["/tags/B站/index.html","bc547dbf7e2e8384bbe3eff9e84bc725"],["/tags/JAVA-工作总结/index.html","be10d0152fcfe43a08bb6a81f64cbe87"],["/tags/Java-Docker/index.html","be018810ba968cb07338faa1b33920b6"],["/tags/Java-EasyExcel/index.html","22f0d58594830d010001ee3610b86751"],["/tags/Java-MYSQL/index.html","f941f91368b58dacd43896050610e9c3"],["/tags/Java-Page/index.html","21c671daa1e60c5d69777123546d30af"],["/tags/Java-RestTemplate/index.html","8312d2a9b6585bf375f954716f51f120"],["/tags/Java-工具/index.html","bf659bac816905dd1ac35b0a0657f3b1"],["/tags/Java-常量/index.html","cc9a9983da47f86fd93211014892229c"],["/tags/Java-校验/index.html","58e3be03118c7f06634a478eb46e68ba"],["/tags/Java-配置/index.html","5f51b2da3aebb4261de1aaa11d2c692f"],["/tags/SQL-便捷/index.html","9e9971f375fbca25347870a930b8e31d"],["/tags/Safe/index.html","8c1adf3bba4781860816031f4f3d9285"],["/tags/index.html","080f934f3801172d7e389d83eefbb6fe"],["/tags/java/index.html","482ce2ba217874e9999edbb7c71c5af5"],["/tags/minio/index.html","6ec88828b185392eeea85f7942033d99"],["/tags/定时任务/index.html","803d5c41dbf3b20c55fea8b1152f7e22"],["/tags/工具/index.html","c1fc0ca542cf65257bf9aa0a37d4ae1a"],["/tags/搜索/index.html","46413619c9c7ff9aa43994c019aee3d4"],["/tags/时间工具类/index.html","d53eee603f19e3bad64b1f8052924019"],["/tags/虚拟机/index.html","c6ba8810522b53df05e05e984afa286e"],["/tags/递归/index.html","88a2700520033d7a69807f2cb2122e94"],["/tags/配置/index.html","3ce3bdb96b33756c0d094f2f9beb8662"],["/tags/阿里云/index.html","b6a51360c3126e37957cea451da18afb"]];
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
