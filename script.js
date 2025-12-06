// เริ่มต้น Icons
lucide.createIcons();

// ลงทะเบียน Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Header Animation (Load ปุ๊บขึ้นปั๊บ)
gsap.to(".header-content", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2,
});

// 2. Golden Line Animation (ยืดตามการ Scroll)
gsap.to(".golden-line", {
  scaleY: 1, // ยืดจนสุด
  ease: "none", // เส้นตรงตามการเลื่อน
  scrollTrigger: {
    trigger: ".timeline-container",
    start: "top center", // เริ่มเมื่อ timeline เข้ามากลางจอ
    end: "bottom center", // จบเมื่อ timeline หมด
    scrub: true, // ผูก animation กับ scrollbar (เลื่อนขึ้นลงเส้นก็หด/ยืด)
  },
});

// 3. Card Animations (Fade In ทีละใบ)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // เริ่ม animate เมื่อขอบบนการ์ดถึง 80% ของจอ
      toggleActions: "play none none reverse", // เลื่อนลงเล่น เลื่อนกลับเล่นถอยหลัง
    },
  });
});

// 4. Parallax Ingredients Effect (ของลอยๆ)
const ingredients = document.querySelectorAll(".ingredient");
ingredients.forEach((item) => {
  const speed = item.getAttribute("data-speed");
  gsap.to(item, {
    y: -200 * speed, // เคลื่อนที่ขึ้นด้านบน
    rotation: 360, // หมุนไปด้วย
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // มีความหน่วงนิดๆ ให้ดูนุ่มนวล
    },
  });
});
