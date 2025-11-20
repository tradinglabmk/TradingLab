export interface MemberData {
  id: string;
  name: string;
  profileImage: string;
  memberSince: string;
  testimonial: string;
  profitText: string;
  modalData: {
    testimonialImages: string[];
    fullTestimonial?: string;
  };
}

export const members: MemberData[] = [
  {
    id: "martin_aleksovski",
    name: "Мартин Алексовски",
    profileImage: "/assets/testimonials/Martin_Aleksovski/profile.jpg",
    memberSince: "Октомври 2025",
    testimonial:
      "Немав никакво искуство и се ми изгледаше комплицирано. Академијата ми помогна чекор по чекор да разберам што правам. Сега трејдам смирено и со јасна стратегија.",
    profitText: "+31% профит за 2 месеци",
    modalData: {
      testimonialImages: [
        "/assets/testimonials/Martin_Aleksovski/image_1.jpg",
        "/assets/testimonials/Martin_Aleksovski/image_2.jpg",
        "/assets/testimonials/Martin_Aleksovski/image_3.jpg",
        "/assets/testimonials/Martin_Aleksovski/image_4.jpg",
      ],
      fullTestimonial: "Немав никакво искуство и се ми изгледаше комплицирано. Академијата ми помогна чекор по чекор да разберам што правам. Сега трејдам смирено и со јасна стратегија. Резултатите се видливи и се чувствувам многу посигурно во моите одлуки."
    }
  },
  {
    id: "goce_risteski",
    name: "Гоце Ристески",
    profileImage: "/assets/testimonials/Goce_Risteski/profile.jpg",
    memberSince: "Септември 2025",
    testimonial:
      "Психолошките видеа бел пресвртница за мене. Научив да не брзам и да контролирам емоции. Благодарение на тоа, денес трејдам со многу повеќе самодоверба.",
    profitText: "+29% профит за 3 месеци",
    modalData: {
      testimonialImages: [
        "/assets/testimonials/Goce_Risteski/image_1.jpg",
      ],
      fullTestimonial: "Психолошките видеа бел пресвртница за мене. Научив да не брзам и да контролирам емоции. Благодарение на тоа, денес трејдам со многу повеќе самодоверба. Сега можам да се фокусирам на долгорочните цели наместо на брзи профити."
    }
  },
  {
    id: "nikola_trajanovski",
    name: "Никола Трајановски",
    profileImage: "/assets/testimonials/Nikola_Trajanovski/profile.jpg",
    memberSince: "Август 2025",
    testimonial:
      "Пред TradingLabMK често правев грешки без да знам зошто. Со сигналите и образувањето конечно разбрав како размислува пазарот.",
    profitText: "+37% профит за 3 месеци",
    modalData: {
      testimonialImages: [
        "/assets/testimonials/Nikola_Trajanovski/image_1.jpg",
      ],
      fullTestimonial: "Пред TradingLabMK често правев грешки без да знам зошто. Со сигналите и образувањето конечно разбрав како размислува пазарот. Сега можам да направам подобри анализи и да донесам поинформирани одлуки."
    }
  },
  {
    id: "bibi_bullet",
    name: "Биби Булет",
    profileImage: "/assets/testimonials/Bibi_Bullet/image_1.jpg",
    memberSince: "Септември 2025",
    testimonial:
      "Започнав комплетен почетник, но благодарение на јасните објаснувања и практичните совети, денес трејдам со самодоверба.",
    profitText: "+42% профит за 2 месеци",
    modalData: {
      testimonialImages: [
        "/assets/testimonials/Bibi_Bullet/image_1.jpg",
        "/assets/testimonials/Bibi_Bullet/image_2.jpg",
        "/assets/testimonials/Bibi_Bullet/image_3.jpg",
      ],
      fullTestimonial: "Започнав комплетен почетник, но благодарение на јасните објаснувања и практичните совети, денес трејдам со самодоверба. Резултатите се одлични и се чувствувам дека сум на правилниот пат кон финансиска слобода."
    }
  },
  {
    id: "petar_sijakovski",
    name: "Петар Шијакоски",
    profileImage: "/assets/testimonials/Petar_Sijakovski/profile.jpg",
    memberSince: "Јули 2025",
    testimonial:
      "Најголемата промена за мене беше учењето на дисциплина. Сега не трејдам емоционално туку следам јасна стратегија.",
    profitText: "+28% профит за 4 месеци",
    modalData: {
      testimonialImages: [
        "/assets/testimonials/Petar_Sijakovski/image_1.jpg",
        "/assets/testimonials/Petar_Sijakovski/image_2.jpg",
        "/assets/testimonials/Petar_Sijakovski/image_3.jpg",
      ],
      fullTestimonial: "Најголемата промена за мене беше научувањето на дисциплина. Сега не трејдам емоционално туку следам јасна стратегија. Овој приод ми овозможи да остварам конзистентни профити и да ги намалам загубите."
    }
  }
];
