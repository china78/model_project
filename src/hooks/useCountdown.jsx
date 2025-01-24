import { useState, useEffect } from "react";

function useCountdown(endTime) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // 计算剩余时间函数
  function calculateTimeLeft() {
    const now = Date.now();
    const targetTime = new Date(endTime).getTime(); // 只要时间，不要年月日
    const diff = Math.max(targetTime - now, 0); // 防止出现负数

    const hours = Math.floor(diff / (1000 * 60 * 60)); // 剩余小时（不含天）
    const minutes = Math.floor((diff / (1000 * 60)) % 60); // 剩余分钟
    const seconds = Math.floor((diff / 1000) % 60); // 剩余秒

    return { hours, minutes, seconds };
  }

  // 启动倒计时
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // 组件卸载时清楚定时器
  }, [endTime])

  return timeLeft;
}


export default useCountdown;