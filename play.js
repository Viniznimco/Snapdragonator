  if (command === "play") {
    if (args.length === 0 || !args.join(" ")) {
      return message.reply("Please provide a song name or keywords to search for.");
    }

    const query = args.join(" ");
    message.reply("CRISS-AI 🎧 Searching for the song...");

    try {
      const searchResults = await ytSearch(query);

      if (!searchResults.videos || searchResults.videos.length === 0) {
        return message.reply(`❌ No results found for "${query}".`);
      }

      const video = searchResults.videos[0];
      const videoUrl = video.url;

      const downloadUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
      const response = await axios.get(downloadUrl);

      if (!response.data.success) {
        return message.reply(`❌ Failed to fetch audio for "${query}".`);
      }

      const { title, download_url } = response.data.result;

      const audioMessage = {
        audio: { url: download_url },
        mimetype: "audio/mp4",
        ptt: false,
      };

      await sock.sendMessage(message.from, audioMessage, { quoted: message });
      message.reply(`*${title}*\n\n*POWERED BY CHRIST-AI*`);
    } catch (err) {
      console.error(err);
      message.reply("❌ An error occurred while processing your request.");
    }
  }
};
