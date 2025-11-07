const about = {
  title: "Về Tôi",
  intro: "Tôi là ",
  description: "Lập trình viên Fullstack với niềm đam mê về ",
  highlight1: "Thiết kế UX/UI",
  highlight2: "hiệu năng hệ thống",
  highlight3: "tích hợp AI",
  description2: ". Tôi yêu thích việc biến ý tưởng thành sản phẩm thực tế, và luôn tìm cách cải thiện trải nghiệm người dùng thông qua công nghệ.",
  skills_title: "Kỹ Năng",
  skills_description: "Các công nghệ tôi làm việc",
  experience_title: "Kinh Nghiệm Làm Việc",
  experience_present: "Hiện tại",
  experienceItems: [
    {
      year: "2021 - {{present}}",
      title: "Lập trình viên Fullstack",
      place: "Freelance / Từ xa",
      type: "work" as const,
      description: "Phát triển ứng dụng web sử dụng Next.js, NestJS và PostgreSQL. Tập trung vào tối ưu hóa UI/UX và hiệu suất hệ thống."
    },
    {
      year: "2018 - 2021",
      title: "Sinh viên CNTT",
      place: "Đại học Công nghệ Thông tin",
      type: "education" as const,
      description: "Học về lập trình hướng đối tượng, thuật toán, cấu trúc dữ liệu và phát triển web fullstack."
    }
  ]
} as const;

export default about;
