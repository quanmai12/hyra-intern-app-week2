import { initDataUnsafe, WebApp } from "@twa-dev/sdk";

// Khởi tạo WebApp Telegram
WebApp.ready();

// Đặt theme nền tối/sáng theo Telegram
WebApp.enableClosingConfirmation();

export default WebApp;
