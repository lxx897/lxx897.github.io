/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","972e22589f08c48d0380985a4d420e52"],["/archives/2023/11/index.html","3b2ddc69d2a89939ea878bf26bc3204e"],["/archives/2023/11/page/2/index.html","f962f410d8093b4b2db212ffff50a3df"],["/archives/2023/12/index.html","300900c01567f7af14e16b2b7d182c11"],["/archives/2023/index.html","970c3462d4a266e7ba790fb55ab1dda4"],["/archives/2023/page/2/index.html","3eb929b1c59f21da9e7a3e12838c5c6b"],["/archives/2024/01/index.html","a04d4729822aca83e6775a253be605aa"],["/archives/2024/07/index.html","b080713b6f75dabd9036c49fee3c9ff5"],["/archives/2024/index.html","47a49c99ed4ac7977d193222cf923361"],["/archives/index.html","842eda66a0237027bfd54b59ff132dc2"],["/archives/page/2/index.html","ce70666e33945557daf6b8391580672b"],["/archives/page/3/index.html","d5f137a1931ab3103b6e0b2ec7312c40"],["/categories/Docker/index.html","a78d9bbbcba228504c9e62fa64bbb750"],["/categories/HuTool/index.html","fdb680ce7b504dd927f02f167deb1855"],["/categories/Java-MySQL/index.html","eaf3b8b67be62cc13d72e3f132980427"],["/categories/Java-远程调用/index.html","7c2445b55f9902b4e948bd8cf9c24415"],["/categories/Java/index.html","7f147a699fae492a669600c92e5ada8a"],["/categories/Java配置/index.html","56341b822ca2c992b6fd2f50b6fe3b34"],["/categories/MYSQL/index.html","25a15e116e6d9c80cdcbcb286531069b"],["/categories/Page/index.html","cf96ba1153301c4d5463ba9afb7fd49e"],["/categories/Safe/index.html","e428077d4f6aee844fe24bb7234791d3"],["/categories/hexo配置/index.html","821e90d246c5714471bcdd8a176ffeae"],["/categories/index.html","15b4470f24c604ab90fa31e3dee9ea8d"],["/categories/实用工具/index.html","8bd9379a0930b937a9815e5131684ca6"],["/categories/工具/index.html","6be939733d2495fd5fbe2fdc76513b9d"],["/categories/工具类/index.html","87cd0bb7a6b87cc3984d6d3a022ada81"],["/categories/招标/index.html","cbc3a400599f3611e602c6ae53c5c213"],["/categories/时间/index.html","ae1c85588b4d314a8271a139bdb5f22f"],["/categories/视频/index.html","42afbf564aa03915aadb4612629d5b55"],["/categories/配置/index.html","4eba4deb28183743f1bc6bc5956ef300"],["/categories/配置文件/index.html","73b408a1107394e5710e2eb7c79a3638"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","7bbaeaf719f6bfbde8e7882dc86a23e0"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","fac4356c6f4cbd61149f5a4d3de14a0a"],["/page/2/index.html","671e39354a85580152ab94273937b4eb"],["/page/3/index.html","cc33dc1c4e90d700b78e717d4a1634d1"],["/photos/appointment/2023/index.html","3278ddf06bfd77c54348cc6d5b1d4398"],["/photos/appointment/2024/index.html","c6e36e9d890203d8579d67dd44aaae8f"],["/photos/appointment/index.html","555f722a34be18fe124d13f0b22c9800"],["/photos/babyAndBabies/2023/index.html","8cdaebe05e2c80454d504f572ce1e987"],["/photos/babyAndBabies/2024/index.html","008feeb6f9cfc50e1d35cdfa4ec7ae94"],["/photos/babyAndBabies/index.html","e37ab2140db23e3a97e7bf3a83a8f7b7"],["/photos/game/dzpd/index.html","67a7591403a3037e71ed85878122d369"],["/photos/game/gy/index.html","ec71eae137ce7e764a0f6e0ac09531e8"],["/photos/game/index.html","dcca6b195ba8c7a447b7a2bebaca6f4e"],["/photos/game/steam/index.html","4eb2377dc5b0a4d2d86c29c568038eba"],["/photos/game/wzry/index.html","2bfdd059db8f32c89bed68e73cf1954d"],["/photos/index.html","061938ae67945cf687541877e899e81c"],["/photos/movie/2023/index.html","7a5ac9607a194f512888e00a25037ce1"],["/photos/movie/2024/index.html","0555469c5ed1069027c8e0ed5af7b34f"],["/photos/movie/index.html","207ecf9ebcf70843f2cb7774b9f41708"],["/photos/ohmygirl/2023/index.html","6dcd0c69881260d5e1690aefe048dda2"],["/photos/ohmygirl/2024/index.html","ec40334dbf6673a23d3750d5c7100281"],["/photos/ohmygirl/index.html","f931e6e16ae675b34e50d13f2a0d3e74"],["/photos/outside/NanJing/index.html","c36b62b23a0bcd6ab4a35408a1f80157"],["/photos/outside/QingDao/index.html","4b828e752c2cc1f9fb5c7d3870fefb1e"],["/photos/outside/index.html","e01a501b3a5cf604d1735db844adf4cd"],["/posts/16888.html","a6b3b2135ec5fdd0f5b2b50bfdea69b3"],["/posts/17303.html","ca6b6ddc64206feb9a0814a04698da28"],["/posts/18206.html","17f53c33d9203edcfa84f90be2d83876"],["/posts/21635.html","da74ac90cbe630c8429a1ee16e0fddfd"],["/posts/22910.html","ef58e9478dbb48b73fecd7a15a79db98"],["/posts/26185.html","0a3bb580e7356606be02d3fc88d7f66c"],["/posts/27699.html","7a668ebc9ba40e83d7b0f85b39372d6e"],["/posts/34134.html","67994ae6c47541d8cf92369a4a56152c"],["/posts/38362.html","0456a02135a6c704b13882612d2c25ed"],["/posts/4186.html","dc73668d3a3f054dddd893279293f362"],["/posts/42658.html","c852d5d833f3cbf083d51e5dc649a8d3"],["/posts/43076.html","5c9a2960dd8681918cb7ae8c2759e4ca"],["/posts/43618.html","abbbae58eceda529ca95b0d8f8d3ab77"],["/posts/47374.html","af7aeec7eb6818758848fef48d272642"],["/posts/48428.html","8e48da78eac5e051ae5ac4e26d048f1d"],["/posts/52307.html","16c6bfb35cfc3c3116f6a3db64f63db4"],["/posts/52812.html","b8dc557d2aba230dca95891497fd6d34"],["/posts/53486.html","4470eace77bfb01d240166ab7d4d2b1e"],["/posts/53714.html","f891cc5e43fe204462f3f9799300387c"],["/posts/57395.html","8f9a4063841232df1aac74a986ca2689"],["/posts/58565.html","959e37808939ce985398aadecbd37b76"],["/posts/59743.html","db28e0e53beb786f45a0416da918cd03"],["/posts/62255.html","4afc65221b17df37dc62386cd24006a9"],["/posts/62580.html","eb0be1b290f5df2dfc156237491cc373"],["/posts/64032.html","baec0fb0265c08db4f2f020c75ea9bf1"],["/posts/64329.html","fa63657fa0074dae65308f25cdd6e4d1"],["/posts/9968.html","3cc76003a4e31c00c035c9494b2e724b"],["/record/completed/index.html","2b4f988827f8a5ab401cc386c3dafeed"],["/record/emphasize/index.html","eee7e8708bf89b6fba3188364ce1a62e"],["/record/index.html","96810c7e854ce36fed46632d9b77352a"],["/record/period/index.html","9dfbb47a25ca9711359e9e2e9c52f070"],["/sw-register.js","9476d1b060bf652c6dcf64495d804950"],["/tags/B站/index.html","312e212378449e7ad73b2318c9af7411"],["/tags/JAVA-工作总结/index.html","bdf384c4a7fe7cf29555131006952b38"],["/tags/Java-Docker/index.html","4e1c686222bc8bd0c7a1b9fb124a5eb5"],["/tags/Java-EasyExcel/index.html","ccc624707bbfa08beffd68717c141577"],["/tags/Java-MYSQL/index.html","ff14f4505b2ebd67e2cef36cc39a1a03"],["/tags/Java-Page/index.html","b2809e40db2b6b985fdfb62431bf19cf"],["/tags/Java-RestTemplate/index.html","b2208076be6486e943e51addb353c9db"],["/tags/Java-工具/index.html","9e2532c467fc42a23b7f7c7b1c322934"],["/tags/Java-常量/index.html","3260ad03d1f07ab535d50f71fe3c7f22"],["/tags/Java-校验/index.html","9f751417ad381f4611c97f54d276c0e5"],["/tags/Java-配置/index.html","93cd679e3827be066f10e4c4b3ffe073"],["/tags/SQL-便捷/index.html","c202d042e01f01dbca1190c22f0cd282"],["/tags/Safe/index.html","0ca60b323722ee667ce93ec0edd1cde5"],["/tags/index.html","c4dcbc879ff47943d0720ee0655a1659"],["/tags/java/index.html","ea4285aed35485c828e8c52a3c3ffed3"],["/tags/minio/index.html","91ef9b4d490714f7e8b582072876b0c9"],["/tags/商务/index.html","8b7e758de11cc9d52efed5391021058e"],["/tags/定时任务/index.html","ac8654b3434b8f5e7effdef94f2a1c6f"],["/tags/工具/index.html","c7073d4af0a5d2366db9e1f70a04ebd3"],["/tags/搜索/index.html","e68dda4dce99fc2770af49e7606e2e5d"],["/tags/时间工具类/index.html","c6d159094415947dcdb6f52a5716a83d"],["/tags/虚拟机/index.html","5350339adf189d20cef054bfbf101543"],["/tags/递归/index.html","1492ef8b5e328d1c421e5f98d4bd989a"],["/tags/配置/index.html","cc336a5e7d1823134ce5fe19bbd64593"],["/tags/阿里云/index.html","378c839423ece8633e8ce9a431a67591"]];
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
