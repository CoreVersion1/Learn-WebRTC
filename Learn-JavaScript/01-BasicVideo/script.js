// 获取本地音视频流并展示
async function start() {
  try {
    // 请求音频和视频流
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1280,
        height: 720,
      },
      audio: true,
    });

    // 获取 HTML 中的 video 元素
    const localVideo = document.getElementById("localVideo");

    // 将获取到的视频流绑定到 video 元素
    localVideo.srcObject = stream;

    console.log("Local video stream started");
  } catch (error) {
    console.error("Error accessing media devices.", error);
  }
}

// 启动 WebRTC
start();
