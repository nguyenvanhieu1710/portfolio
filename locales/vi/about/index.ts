const about = {
  title: "Về Tôi",
  intro: "Tôi là ",
  description:
    "Vừa tốt nghiệp, nhưng không xa lạ gì với việc triển khai code. Tôi xây dựng ứng dụng web fullstack, chú trọng UI gọn gàng và luôn tìm cách để mọi thứ chạy tốt hơn.",
  highlight1: "",
  highlight2: "",
  highlight3: "",
  description2: "",
  skills_title: "Kỹ Năng",
  skills_description: "Các công nghệ tôi làm việc",
  experience_title: "Kinh Nghiệm",
  experience_present: "Hiện tại",
  info_title: "Thông Tin Cá Nhân",
  info_phone: "0984 605 263",
  info_dob: "17/10/2004",
  info_email: "hieunv.dev.work@gmail.com",
  info_website: "https://nvhieu.vercel.app",
  info_location: "Mỹ Hào, Hưng Yên",
  education_title: "Học Vấn",
  education_school: "Đại học Sư phạm Kỹ thuật Hưng Yên",
  education_period: "Tháng 9/2022 – Tháng 7/2026",
  education_major: "Chuyên ngành: Công nghệ Web",
  education_gpa: "GPA: 3.3 / 4.0",
  experienceItems: [
    {
      year: "2022 - {{present}}",
      title: "Sinh viên Công nghệ Web",
      place: "Đại học Sư phạm Kỹ thuật Hưng Yên",
      type: "education" as const,
      description:
        "Học chuyên ngành Công nghệ Web, tập trung vào lập trình fullstack, thiết kế UI/UX và kiến trúc hệ thống. GPA: 3.3 / 4.0.",
    },
    {
      year: "2021 - {{present}}",
      title: "Lập trình viên Fullstack",
      place: "Freelance / Từ xa",
      type: "work" as const,
      description:
        "Phát triển ứng dụng web sử dụng Next.js, NestJS và PostgreSQL. Tập trung vào tối ưu hóa UI/UX và hiệu suất hệ thống.",
    },
  ],
} as const;

export default about;
