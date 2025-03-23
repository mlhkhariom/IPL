export default {
  async fetch(request) {
    return new Response(generateTVPage(), { headers: { "Content-Type": "text/html" } });
  }
};

function generateTVPage() {
  const channels = [
    { name: "Star Sports Select 1 HD", url: "http://anistv.com:80/292494436004083/1593574628/124743" },
    { name: "Star Sports Select 2 HD", url: "http://anistv.com:80/292494436004083/1593574628/124742" },
    { name: "Star Sports 1 Telugu", url: "http://anistv.com:80/292494436004083/1593574628/124841" },
    { name: "Star Sports 1 Hindi HD", url: "http://anistv.com:80/292494436004083/1593574628/124745" },
    { name: "Star Sports 1 HD", url: "http://anistv.com:80/292494436004083/1593574628/124746" },
    { name: "Star Sports 2 HD", url: "http://anistv.com:80/292494436004083/1593574628/124744" },
    { name: "Willow Cricket", url: "http://anistv.com:80/292494436004083/1593574628/131891" },
    { name: "Willow Cricket Xtra", url: "http://anistv.com:80/292494436004083/1593574628/131892" }
  ];

  let channelListHTML = channels.map((ch, index) => 
    `<button onclick="playStream('${ch.url}')">${ch.name}</button>`
  ).join("<br>");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Free IPL Streaming - MLHK HARIOM</title>
      <script src="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"></script>
      <style>
        body { font-family: Arial, sans-serif; background: #121212; color: white; text-align: center; padding: 20px; }
        h1 { font-size: 24px; margin-bottom: 10px; }
        #player { width: 90%; max-width: 800px; height: 450px; margin: auto; display: none; background: black; }
        button { padding: 10px; margin: 5px; width: 80%; max-width: 400px; background: #ff5722; color: white; border: none; cursor: pointer; }
        button:hover { background: #e64a19; }
      </style>
    </head>
    <body>
      <h1>Free IPL Live Streaming</h1>
      <div>${channelListHTML}</div>
      <div id="player"></div>

      <script>
        function playStream(url) {
          document.getElementById("player").style.display = "block";
          jwplayer("player").setup({
            file: url,
            width: "100%",
            height: "100%",
            autostart: true,
            skin: { name: "glow" },
            logo: { file: "https://your-logo-url.com/logo.png", position: "top-right" }
          });
        }
      </script>
    </body>
    </html>
  `;
}
