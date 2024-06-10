'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8187e56642f3af2f4bfde3efbde18f7a",
".git/config": "bf64f5eade4607741f8246b3e99fda48",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3900c18ede81f14959d8c631deb4bf0e",
".git/HEAD": "c1e8049d43a32e61969a2f2140a89d20",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "853253b7d1f7200b64815c63473231e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9919bd4fb4cab1c81afdbf6dc9fbb37",
".git/logs/refs/heads/main": "9a09a147bd75ae4518cdace15d17b8ad",
".git/logs/refs/heads/v0.1.1": "d2cbc7a87346d1a6aaba0c340fbe540a",
".git/logs/refs/heads/v0.1.2": "5178b14d9c87e5bb7e05278d6f937acd",
".git/logs/refs/remotes/origin/main": "978a28ca0f403a12554961dc66986e01",
".git/logs/refs/remotes/origin/v0.1.1": "d1f77942f0809bf16d0919027d1678ab",
".git/logs/refs/stash": "13c5e770d3ddd239d4c25d7b2eb88af6",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/a6fa55d25212046646a0bde8347c77cf09ef31": "71f624d910c7a03447f86b2c3018c068",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/fa667fcc7e65bf2f00155a52462f7d7b15bc8c": "7ee8dd852752d6a428b84c1665e87b49",
".git/objects/0a/6c7ced3825702ef5672fbb041663d206403029": "5aa1b6906da3f096dc6337cb47a6fc21",
".git/objects/0c/09b4f33966652e0e348c7ed51ef2c36f02cd3b": "6d3f554882f8cc31986defb7a5b1c504",
".git/objects/0f/095bc68a1c4923d750fb6b08ab93ee73b416b5": "e51b37558f7064e1d9a7d71c4a0572d4",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/aea0c63ec4690b537082762d407b976d70cf0e": "76ff0a2be15677e5218eb414506df4d8",
".git/objects/13/48cbf8ec630d552e64a850ecfb54ce6a29865a": "79aca7a7d063a0f5699b9927af11cb8e",
".git/objects/14/e3fc13649a89f4898a4da00d36b034c3f94e77": "a25bb7e9db8d7cd390883f8feb76b2b1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/408a3cdf661c4e5c92449107a74125058d2e2f": "739490f4841c7b2a281fded02476d34f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/54b5c35f39571210de4af556b48687ed64b245": "a7678d74816ce07f621628be1af2530d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/f2494185de2264ddb3663bd10b49ea9c5c6b6d": "4f3a1cc3462486a357a75b74bcd04740",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/31415a16f8d9ae2593e886f0d2819e1d04c322": "ec15cb6ba80edfa5239a69ae373296e7",
".git/objects/33/eea8331359a29112bdc96dcac3c6e341c2d461": "421a064b12c7285fe406b20db313c5d5",
".git/objects/35/54c06d60c7912ea72a4e71e73501de56c09cca": "b66239023bc93ce80f41d5c8886e61f6",
".git/objects/37/c971798a7ea9f60d015b22c1fac0be89571174": "fde7ca2a13d9266989a7c84ff0c7cbaa",
".git/objects/39/500d8a43942596e4b5103ed743d9be6ac861dd": "f40418b1221580eee4c23cb768352777",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/b448499f2787e7a8fea7e41cccd4844bb5f8fe": "8c4affdd2807bf21082ddc7775d52ad2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/50/b8f2db3d50376e5a8fe88a0c29ed0dc09f38e8": "dd0b8ccd30162222621a9190a4f62b86",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/a6d726804db346a2154bd73f296c91397f6337": "5d4bc585847102ee7340978c071984dd",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/e78943becf155c67c4191852fdcd4a3bfd939c": "3db9d093d1e524eccfed6475c7984ce9",
".git/objects/5b/7c91d4be6caf9b0417c11830470f54f9c3cbd3": "70c2a69faf62ef424812fb2c50c4ddea",
".git/objects/5d/864ec128689b85bf25ecf2a68fd37ba8880b94": "c412f10b6a52c0edfbe665736002aaeb",
".git/objects/5d/b5aea3c0203cf085981efbb83efe10bdc852ee": "bcb6858e572cccc76820dd6142431389",
".git/objects/61/dbb5329429608eede23af88024373be2a774ee": "556b91f6f3f94352beac1ef18014b541",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/fc758c925a5878374a1d2ae7439ea615266244": "0672ed3555a4867d5e475b8ec19f91c0",
".git/objects/64/41a3eea840679339a7a92122d3f8c6156d7867": "e533da6327d56586ef632ffab19d5248",
".git/objects/68/167bfac043f4a02d181773a86ffdf5cd2966d5": "87fdc6069c02c5920b5fd29005a5196f",
".git/objects/70/f2d961ec84325cfdf7c8da172ad1b87ecf683c": "fe1a1b0bff35d92f23123e0143c1fd7c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/a605e66a567727364cd423a45ddc2bcb2b1d32": "84c2a3a1c7d80c0801e129cdfa960370",
".git/objects/7a/92ec9c95395a1d14571cd21f85372172a5b9b0": "1eb7ecab62f3a8dc1035359d9f7d6a67",
".git/objects/7d/6c6ff9d12a07747489023018185d62d8917f42": "b87a8469aaac34cd1ce6ad4edd1be1a1",
".git/objects/84/d6fc4917267dccd4245c532c76fb473f88a3ff": "da5e3f68f8a4e6ceeb0c388d811a66c1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8e0e87cef8050093c2f45ac4e897385df322d5": "ee93ebc779947e5d6b9df589c66ee2f8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2b512e6c6817325945d0bca8413c44e6c420e": "eb06f9b20cb5dc2d740d822bd5ad9a24",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/73ce14aec0aa85a8eaabeadc6402b3849f8f55": "bc2177c35270d1b10ef510f9a52b2517",
".git/objects/8f/ee78f2169f67422d0ceafec38e3d2d8d0b16b5": "f83a238ea562ea5bc410da1eadfd8d30",
".git/objects/90/8c9ab5145440f096b0f9a2d8dd6e50dae6b331": "55ba8c0283d4162ce6ca4d2321cf8a92",
".git/objects/91/2751b3ab4852877bcddc5f33e074f3e4a23e77": "e13d571604729a6d5343ea306283ae00",
".git/objects/91/84bb66e60e0c75d5ed55c545b664adcf39a0a0": "404bd1fbeff4a8351daace0a85e58a34",
".git/objects/93/d0b15ff4b2683081510a44bfaa4f74eb8e31ff": "1ecf38c6009ce4acc4d3abed42053997",
".git/objects/94/96980b3b6ad523635ff72f7b0cd8c1762198a9": "bf3b184c63c4475d030a38e21ad73d01",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/bb9c229a1a8bfb867822e7b7159102152f2aaf": "3af4506b39b0e694a4db07a88a461e3f",
".git/objects/9f/3d76d51b26f8b544a7b25d4c7cabc4aa172bdb": "b720aa1cbb45dafcf9bf67d0d125beaa",
".git/objects/a0/e4f56d43c1391d351cb16dfabb37b4bdecb5e4": "51f58f5e7a8b66ca99614276fe91d2cf",
".git/objects/a2/8e918311e3f1fb8d113efae6a96330fe561cf2": "5b1d9ede6211a58a4fb73a697f63d07c",
".git/objects/a3/7f26d1d5b22b787c2c0b1ce3835fd6f841229a": "32c19589a7b2ed6548e5f28b25693ce8",
".git/objects/a6/85075a581b505310ce0a4e0eaf8a16d1b7b46c": "eb477c513ed0b1aca653dff58105d106",
".git/objects/a9/26200a22de0388b413779853b222474622181d": "c46c67e215b2bdbe37438cb10dd9c2aa",
".git/objects/ab/475108c22866f0504c34f96b6f9859a7287545": "d052f919414498e6929c645bd0e37f47",
".git/objects/ac/a098581e8c4cf3c3fa0148564f8dcabdda910b": "5ed73434e388a8858937586059c06927",
".git/objects/b1/4948a4d2b0de6b8939f07ad4a77bb22443c24c": "0668e4208dc6242817d3ad69d8358433",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/35778d711321a140ebbd8217f8468fd03f130d": "f5eaca6289532b25ee89c111a6ece78b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/63ad94090ecf9770472ee3078080c43e9db969": "fc8f5f49cd55ff572a1806590dd7638d",
".git/objects/c3/1f49a91d91fdced3d58c45c45d0a2ba38a1a79": "f569fc95de0946b2f2a6be137feea184",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c7/395221d24538f6750f40aa896e5cf7852ebe9c": "c1ce75707f639d17de1920e6135cd352",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/2505abaf691c0449af04f567bce0ac7ae41011": "6cac03330cf38e01d559d8fdeae6f3c8",
".git/objects/d3/7a8a61d5d81c514862ee28b18bf6021bab3e19": "b05102f2f137f08cf289ce0b71e9504e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/61ce8bceb813cfbb0d25b8d8629722c614964f": "16315d2974378e498917b82b51a0bec1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/48bb8c3a570659bdd8b6fb34935a3168d70929": "33a850f3c3156dada80eb0943d2d29df",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/684c3de953f1b7a5080dc2028d5b1d1bd169ee": "1485d5e2245854e9119e100dbfb87015",
".git/objects/ed/06a125ce30aa7776857191061517b4c6857c81": "a4516445b6c6b04c06fd5361c5dfcabf",
".git/objects/ee/78e3b9f77b1cede6624dee116951a2dc901897": "828333dcafd22c9abfe2013d93633928",
".git/objects/ee/f6e0e871dfac46985d71471e03e5b532e6cd0b": "e3613be9cb2948aa7cb6d186a1fc4efa",
".git/objects/f1/c64d2c9d2c6adb4a7094060924e56b07fd9175": "9a349d3c4c74e399a0dbeb19d8f27513",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/1e80e8422bbdd5604d821fcafee7ebd811e702": "42d0a9c4a5fd5e61995a89b05fb18659",
".git/objects/f6/92cf21e4e3b2ddfca317344a263577bf61c120": "bca993d2a9d41ea40f9d8514cb5a50dd",
".git/objects/fa/17e224c8f6d90d42a555e1d628c84bde1fd0bf": "a640cce83c5dae8ee443ac34c7d71ef3",
".git/objects/fc/8a34fef2a34c09665390d18f0990ea7b7ca20c": "a37ed6cc523c7ba57b54ad612709b78a",
".git/objects/fd/af037e78418366208d21161490fe6a9be2dfb1": "e367c4ae5f3ef47a80e9a2b9f04b528e",
".git/ORIG_HEAD": "e500a82edd18d88963e82a78c3f4fa4c",
".git/refs/heads/main": "e1be1e6dd9ef669f69e23f64f1f17ab7",
".git/refs/heads/v0.1.1": "e500a82edd18d88963e82a78c3f4fa4c",
".git/refs/heads/v0.1.2": "e1be1e6dd9ef669f69e23f64f1f17ab7",
".git/refs/remotes/origin/main": "e1be1e6dd9ef669f69e23f64f1f17ab7",
".git/refs/remotes/origin/v0.1.1": "8aa789a37a21ff308dd1806225a53a64",
".git/refs/stash": "0444d384f58e5b9fa106a3a66c996017",
"assets/AssetManifest.bin": "a2c7ed0b3d19ab521aa832e345669cc2",
"assets/AssetManifest.bin.json": "e5876ea6fe7b810c63a0de4fe33dc446",
"assets/AssetManifest.json": "62649d10bdd3449e30ecffbe47b5f413",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "619c015cfe6cc00766f2d59b37aad09b",
"assets/lib/assets/logo.png": "4535d2b4ef4ef18642350f51a48e8838",
"assets/NOTICES": "7b610cff628bd06cac561555b4117ca9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "f78f0639da1f278ca3dd6e983a46a41b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cfabdb1d3f7076257c27df95378570dc",
"icons/android-icon-144x144.png": "c4bbe827001add7343eb0df12a88cad8",
"icons/android-icon-192x192.png": "acc504a1519b662dc9dce6685d98e2ff",
"icons/android-icon-36x36.png": "2a037d7fcb5f9b2460ccb85a0708cfbd",
"icons/android-icon-48x48.png": "87646639935fa1b1b03b2fc274e5ab42",
"icons/android-icon-72x72.png": "f62123024a677f073a09ebcea9754997",
"icons/android-icon-96x96.png": "ac823cba0ce7ae02394369152980a19b",
"icons/apple-icon-114x114.png": "245d7ab88be7bcda0d4cf7f45ce5a1b7",
"icons/apple-icon-120x120.png": "05008c65f9893e977aa7340973c8d167",
"icons/apple-icon-144x144.png": "c4bbe827001add7343eb0df12a88cad8",
"icons/apple-icon-152x152.png": "248c74394d743aa0314d6a2b90008908",
"icons/apple-icon-180x180.png": "9ef26457365de86c9f1361506f1fa20a",
"icons/apple-icon-57x57.png": "482ac31448ef049a1bdfb41b7a7954b4",
"icons/apple-icon-60x60.png": "dbdad2c89aae9d6000333af13977b1c5",
"icons/apple-icon-72x72.png": "f62123024a677f073a09ebcea9754997",
"icons/apple-icon-76x76.png": "7993f8563c0d69bbb0c709dd7c62d36b",
"icons/apple-icon-precomposed.png": "09e8275412a127be8c8437b79705a98b",
"icons/apple-icon.png": "09e8275412a127be8c8437b79705a98b",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-32x32.png": "1edfef14131878bdf6526ca390e4ce39",
"icons/favicon-96x96.png": "ac823cba0ce7ae02394369152980a19b",
"icons/favicon.ico": "f78f0639da1f278ca3dd6e983a46a41b",
"icons/favicon.png": "b76cb1d8aa0e3ad2fd28e5216d71bf55",
"icons/Icon-192.png": "acc504a1519b662dc9dce6685d98e2ff",
"icons/Icon-512.png": "db8c9ae967e977cb9fe9ad0f7138f177",
"icons/Icon-maskable-192.png": "acc504a1519b662dc9dce6685d98e2ff",
"icons/Icon-maskable-512.png": "db8c9ae967e977cb9fe9ad0f7138f177",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "c4bbe827001add7343eb0df12a88cad8",
"icons/ms-icon-150x150.png": "5ba8909ee3baaed103749852904a0b23",
"icons/ms-icon-310x310.png": "db8c9ae967e977cb9fe9ad0f7138f177",
"icons/ms-icon-70x70.png": "8842b8ed88b7b69b02543ec8a927920d",
"index.html": "56f3ad89ff9dc71ff104e85354e361a7",
"/": "56f3ad89ff9dc71ff104e85354e361a7",
"main.dart.js": "c3f7446d9b607a787228769f78bee170",
"manifest.json": "30dcea3c453a875704cde5165a530ce2",
"version.json": "ff889feb05b50b0c1ca68f3af70d4210"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
