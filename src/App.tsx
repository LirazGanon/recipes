import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const recipes = [
  {
    id: 1,
    name: "פסטה קלאסית",
    image:
      "https://images.wcdn.co.il/f_auto,q_auto,w_1400/3/3/4/1/3341903-46.jpg",
    ingredients: ["100 גרם קמח דורום/לבן", "50 גרם מים או 1 ביצה", "קורט מלח"],
    instructions: [
      "ללוש את כל החומרים כמה דקות",
      "הבצק צריך להיות קשה, יש להוסיף קמחמים בהתאם למרקם הבצק.",
      "להניח מכוסה בניילון למשך חצי שעה - שעה או במקרר ליותר זמן.",
      "לעצב את הפסטה כרצוי, ניתן להשאיר בחוץ לייבוש.",
      "להרתיח הרבה מים בסיר מומלחים היטב.",
      "לבשל את הפסטה במים הרותחים 2-3 דקות.",
      "לסנן ולהגיש עם הרוטב הרצוי.",
    ],
  },
  {
    id: 2,
    name: "פסטה ביצים",
    image:
      "https://preppykitchen.com/wp-content/uploads/2022/05/Pasta-Dough-Blog1.jpg",
    ingredients: [
      "150 גרם קמח לבן",
      "1 ביצה",
      "1 חלמון",
      "קורט מלח",
      "זילוף מלח",
    ],
    instructions: [
      "ללוש את כל החומרים כמה דקות",
      "הבצק צריך להיות קשה, יש להוסיף קמחמים בהתאם למרקם הבצק.",
      "להניח מכוסה בניילון למשך חצי שעה - שעה או במקרר ליותר זמן.",
      "לעצב את הפסטה כרצוי, עודפים ניתן להקפיא.",
      "להרתיח הרבה מים בסיר מומלחים היטב.",
      "לבשל את הפסטה במים הרותחים 2-3 דקות.",
      "לסנן ולהגיש עם הרוטב הרצוי.",
    ],
  },
  {
    id: 3,
    name: "ריקוטה ביתית",
    image:
      "https://www.theclevercarrot.com/wp-content/uploads/2023/01/Fresh-homemade-ricotta-with-spoon.jpg",
    ingredients: [
      "1 ליטר חלב 3% או חלב מלא",
      "1 שמנת 38 להקצפה אחוז",
      "חצי כפית מלח",
      "4 כפות חומץ או מיץ לימון",
    ],
    instructions: [
      "לחמם בסיר את החלב, שמנת ומלח על אש בינונית לסף רתיחה.",
      "להוסיף את החומץ ולערבב בעדינות עד שנוצרות גבעות של גבינה.",
      "מכבים את האש ומכסים ל-10 דקות.",
      "שופכים למסננת עם בדמגבת דקה לסינון הנוזלים.",
      "ממתינים כשעה להגרת הנוזלים או יותר למרקם קשה יותר.",
    ],
  },
  {
    id: 4,
    name: "מלית גבינות",
    image:
      "https://ik.imagekit.io/smithfield/carando/d1f3eae5-7f30-008b-afc4-0ba68fe47f7f/c3c83121-2aee-46b5-9a63-99dccd6dc426/HomemadeRavioli_0726_web_1.jpg",
    ingredients: [
      "300 גרם מוצרלה גבינה קשה אחרת מגורדת",
      "150 גבינת ריקוטה  שמנת",
      "40 גרם פרמז'ן",
      "מלח פלפל",
    ],
    instructions: ["לערב את כל המרכיבים.", "למלא עם שקית זילוף או עם כפית."],
  },
  {
    id: 6,
    name: "מלית תרד וגבינות",
    image:
      "https://www.tastingtable.com/img/gallery/for-the-best-homemade-ravioli-focus-on-filling-flavors/intro-1683733398.webp",
    ingredients: [
      "חבילת תרד",
      "1 בצל",
      "1 שן שום",
      "חמאה",
      "מלח פלפל",
      "ריקוטה ופרמז'ן מגורד",
    ],
    instructions: [
      "לטגן את הבצל בחמאה.",
      "להוסיף שן שום ועלי תרד ולטגן עוד 2 דקות.",
      "לקרר מעט ולטחון.",
      "להוסיף גבינות מלח ופלפל לפי הטעם.",
    ],
  },
  {
    id: 7,
    name: "מלית דלעת",
    image:
      "https://vintagekitchennotes.com/wp-content/uploads/2021/09/Roasted-Pumpkin-1.1.jpg",
    ingredients: [
      "דלעת / דלורית",
      "ענף תימין",
      "שמן זית",
      "מעט סוכר חום",
      "מלח פלפל",
      "ריקוטה",
    ],
    instructions: [
      "מחממים תנור ל-200 מעלות.",
      "מנחים דלעת בתבנית מפזרים מעל סוכר, תימין, שמן זית ומלח.",
      "אופים כ45 דקות עד שהדלעת רכה.",
      "מוציאים את ליבת הדלעת ומועכים.",
      "מוסיפים ריקוטה ומתקנים תיבול.",
    ],
  },
  {
    id: 5,
    name: "רוטב עגבניות שרי",
    image:
      "https://i.pinimg.com/736x/97/e5/87/97e5874051e7ff08af8573ee1783f480.jpg",
    ingredients: [
      "עגבניות שרי במגוון צבעים",
      "3 שיני שום",
      "שמן זית",
      "עלי בזיליקום",
      "מלח פלפל",
      "פרמז'ן להגשה",
    ],
    instructions: [
      "לצלות קלות שום בשמן זית על אש בינונית.",
      "להוסיף שרי חצאים ולטגן כמה דק'.",
      "להוסיף מלח פלפל ועלי בזיליקום.",
      "להוסיף את הפסטה המוכנה עם מעט ממי הבישול לבשל יחד עוד כדקה שתיים.",
    ],
  },
  {
    id: 8,
    name: "אלפרדו קלאסי",
    image:
      "https://dorpeleg.recipes/wp-content/uploads/2021/05/d790d79cd7a4d7a8d793d795-d7a8d790d7a9d799.jpg",
    ingredients: [
      "250 גרם פסטה אחרי בישול",
      "125 גרם חמאה רכה",
      "125 גרם פרמז'ן",
      "פלפל שחור",
    ],
    instructions: [
      "שומרים ממי הבישול של הפסטה.",
      "בקערה שמים את החמאה ומוסיפים פנימה את הפסטה החמה.",
      "מערבבים בעדינות עד שכל החמאה נמסה.",
      "מוסיפים את הפרמז'ן המגורד ומעט ממי הבישול ומערבבים עד שהרוטב מסמיך.",
      "מוסיפים עוד ממי הבישול בעדינות לפי טעמכם.",
      "מגישים עם פלפל שחור.",
    ],
  },
  {
    id: 9,
    name: "חמאת מרווה",
    image:
      "https://static.wixstatic.com/media/ea4d13_2e835f7771594cad977796b3c0652df0~mv2.jpg",
    ingredients: [
      "250 גרם פסטה אחרי בישול",
      "50 גרם חמאה",
      "כמה עלי מרווה",
      "כחצי כוס מי בישול של הפסטה",
      "אופציונלי: עגביות מיובשות, פטריות...",
      "פרמז'ן מגורד וגרידת לימון להגשה (לא חובה)",
    ],
    instructions: [
      "שומרים ממי הבישול של הפסטה.",
      "שמים במחבת חמאה יחד עם מי הבישול מרווה ותוספות.",
      "מערבבים עד שהרוטב מסמיך.",
      "מתבלים במלח ופלפל.",
      "מוסיפים את הפסטה ומקפיצים יחד כדקה.",
      "מגישים עם פרמז'ן מגורד וגרידת לימון.",
    ],
  },
  {
    id: 10,
    name: "מתכון כנאפה פיסטוק",
    image:
      "https://i.ibb.co/H7sDPzY/Whats-App-Image-2024-11-27-at-13-48-50-transformed.jpg",
    ingredients: [
      "שיערות קדאיף מופרות",
      "פיסטוקים קצוצים",
      "גבינת מוצרלה מגורדת",
      "חמאה",
      "מי סוכר עם מעט מי ורדים (לא חובה)",
    ],
    instructions: [
      "לשמן מחבת היטב בחמאה.",
      "לסדר מעל את שיערות הקדאיף בשכבה דקה.",
      "לפזר פיסטוקים ומוצרלה.",
      "לפזר מעט שיערות קדאיף מעל.",
      "לטגן על אש בינונית עד שמשחים.",
      "מעבירים בזהירות לצלחת.",
      "מוסיפים חמאה למחבת ובזהירות הופכים על הצד השני.",
      "מטגנים עוד כמה דקות.",
      "מגישים חם עם מי סוכר מעל.",
    ],
  },
];

const APP = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // כאשר הקרוסלה נטענת, נשלח את המשתמש לשקופית הימנית ביותר
    if (swiperRef.current) {
      swiperRef.current.slideTo(recipes.length - 1, 0); // מעבר מיידי לשקופית האחרונה
    }
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        padding: "20px 15px",
        overflow: "hidden", // מונע גלילה של כל הדף
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://res.cloudinary.com/dt50t70wb/image/upload/v1732709592/download_pop8dl.png"
          alt="logo"
          style={{ height: "25px" }}
        />
        <Typography variant="h4" component="h1">
          מתכונים 360
        </Typography>
        <img
          src="https://res.cloudinary.com/dt50t70wb/image/upload/v1732710253/apple-icon-180-removebg-preview_ywoptc.png"
          alt="logo"
          style={{ height: "25px" }}
        />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{
          width: "100%",
          maxWidth: "600px",
          flex: 1,
          paddingBottom: "10px",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // אחסון הרפרנס לקרוסלה
      >
        {recipes
          .map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  textAlign: "right",
                  direction: "rtl",
                  overflow: "hidden", // מונע גלישה חיצונית
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={recipe.image}
                  alt={recipe.name}
                />
                <CardContent
                  sx={{
                    overflowY: "auto", // מאפשר גלילה פנימית רק לתוכן
                    flex: "1 1 auto", // מרחיב את התוכן לשאר הגובה
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ textAlign: "center", mb: 2 }}
                  >
                    {recipe.name}
                  </Typography>
                  {/* Ingredients */}
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    רכיבים:
                  </Typography>
                  <ul style={{ paddingRight: "1rem", margin: 0 }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <Typography variant="body2">{ingredient}</Typography>
                      </li>
                    ))}
                  </ul>
                  {/* Instructions */}
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{ mt: 2, fontWeight: 600 }}
                  >
                    הוראות הכנה:
                  </Typography>
                  <ol style={{ paddingRight: "1rem", margin: 0 }}>
                    {recipe.instructions.map((step, index) => (
                      <li key={index}>
                        <Typography variant="body2">{step}</Typography>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))
          .reverse()}
      </Swiper>
    </Box>
  );
};

export default APP;
