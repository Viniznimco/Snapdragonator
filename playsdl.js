const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
zokou({
  'nomCom': "play",
  'aliases': ["song", "playdoc", "audio", "mp3"],
  'categorie': "Search",
  'reaction': '🎵'
}, async (_0x5bcaa9, _0x598fb1, _0x16be8b) => {
  const {
    arg: _0x5925ab,
    ms: _0x123ad7,
    repondre: _0x564c1e
  } = _0x16be8b;
  if (!_0x5925ab[0]) {
    return _0x564c1e("Please provide a video name.");
  }
  const _0x553f7e = _0x5925ab.join(" ");
  try {
    const _0x428fbf = await ytSearch(_0x553f7e);
    if (!_0x428fbf || !_0x428fbf.videos.length) {
      return _0x564c1e("No video found for the specified query.");
    }
    const _0x1f7eb5 = _0x428fbf.videos[0];
    const _0x5cb816 = _0x1f7eb5.url;
    const _0x229b2c = async _0x341d6e => {
      try {
        const _0x4862ba = await axios.get(_0x341d6e);
        return _0x4862ba.data;
      } catch (_0xbea1fa) {
        console.error("Error fetching data from API:", _0xbea1fa);
        return {
          'success': false
        };
      }
    };
    const _0x12f355 = ["https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x5cb816), "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x5cb816), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x5cb816), "https://api.giftedtech.web.id/api/download/dlmp3?url=" + encodeURIComponent(_0x5cb816) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x5cb816)];
    let _0x694fb7;
    for (const _0x4855c6 of _0x12f355) {
      _0x694fb7 = await _0x229b2c(_0x4855c6);
      if (_0x694fb7 && _0x694fb7.success) {
        break;
      }
    }
    if (!_0x694fb7 || !_0x694fb7.success) {
      return _0x564c1e("Failed to retrieve download URL from all sources. Please try again later.");
    }
    const _0x5c2132 = _0x694fb7.result.download_url;
    const _0x692f22 = _0x694fb7.result;
    const _0x27b466 = [{
      'audio': {
        'url': _0x5c2132
      },
      'mimetype': "audio/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x692f22.title,
          'body': _0x692f22.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x1f7eb5.thumbnail,
          'renderLargerThumbnail': true,
          'showAdAttribution': false
        }
      }
    }, {
      'document': {
        'url': _0x5c2132
      },
      'mimetype': "audio/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x692f22.title,
          'body': _0x692f22.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x1f7eb5.thumbnail,
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }];
    for (const _0x2de35a of _0x27b466) {
      await _0x598fb1.sendMessage(_0x5bcaa9, _0x2de35a, {
        'quoted': _0x123ad7
      });
    }
  } catch (_0xf1eb51) {
    console.error("Error during download process:", _0xf1eb51);
    return _0x564c1e("Download failed due to an error: " + (_0xf1eb51.message || _0xf1eb51));
  }
});
zokou({
  'nomCom': "video3",
  'aliases': ["videodoc", "film", "mp4"],
  'categorie': "Search",
  'reaction': '📺'
}, async (_0x5e6476, _0x5321c3, _0x6f2102) => {
  const {
    arg: _0x557191,
    ms: _0x482734,
    repondre: _0x5da619
  } = _0x6f2102;
  if (!_0x557191[0]) {
    return _0x5da619("Please provide a video name.");
  }
  const _0x91eca9 = _0x557191.join(" ");
  try {
    const _0x413ba9 = await ytSearch(_0x91eca9);
    if (!_0x413ba9 || !_0x413ba9.videos.length) {
      return _0x5da619("No video found for the specified query.");
    }
    const _0x2ba7a6 = _0x413ba9.videos[0];
    const _0x28c165 = _0x2ba7a6.url;
    const _0x122391 = async _0x54e210 => {
      try {
        const _0x4480eb = await axios.get(_0x54e210);
        return _0x4480eb.data;
      } catch (_0x864534) {
        console.error("Error fetching data from API:", _0x864534);
        return {
          'success': false
        };
      }
    };
    const _0x311497 = ["https://api-rin-tohsaka.vercel.app/download/ytmp4?url=" + encodeURIComponent(_0x28c165), "https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x28c165), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0x28c165), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0x28c165) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0x28c165)];
    let _0x3d0eb8;
    for (const _0x42b340 of _0x311497) {
      _0x3d0eb8 = await _0x122391(_0x42b340);
      if (_0x3d0eb8 && _0x3d0eb8.success) {
        break;
      }
    }
    if (!_0x3d0eb8 || !_0x3d0eb8.success) {
      return _0x5da619("Failed to retrieve download URL from all sources. Please try again later.");
    }
    const _0xa3a87d = _0x3d0eb8.result.download_url;
    const _0x2f296f = _0x3d0eb8.result;
    const _0x41c83f = [{
      'video': {
        'url': _0xa3a87d
      },
      'mimetype': "video/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x2f296f.title,
          'body': _0x2f296f.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x2ba7a6.thumbnail,
          'renderLargerThumbnail': true,
          'showAdAttribution': false
        }
      }
    }, {
      'document': {
        'url': _0xa3a87d
      },
      'mimetype': "video/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x2f296f.title,
          'body': _0x2f296f.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x2ba7a6.thumbnail,
          'renderLargerThumbnail': true,
          'showAdAttribution': false
        }
      }
    }];
    for (const _0x2a465c of _0x41c83f) {
      await _0x5321c3.sendMessage(_0x5e6476, _0x2a465c, {
        'quoted': _0x482734
      });
    }
  } catch (_0x34beea) {
    console.error("Error during download process:", _0x34beea);
    return _0x5da619("Download failed due to an error: " + (_0x34beea.message || _0x34beea));
  }
});
