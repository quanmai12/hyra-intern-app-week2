const WebApp = window.Telegram?.WebApp;

if (!WebApp) {
  console.error("🚨 Telegram WebApp SDK not found! Ứng dụng không chạy trong Telegram Mini App.");
} else {
  WebApp.ready();
}

export default WebApp;
