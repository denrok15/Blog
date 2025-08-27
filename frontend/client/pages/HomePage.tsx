import { Header } from "client/components";
import { useNavigate } from "react-router";
import { IconCalendar, IconUser } from "client/icons";

export function HomePage() {
  const navigate = useNavigate();
  const lets_start = () => {
    navigate("/login");
  };
  return (
    <div className={"animate-fadeIn bg-[#F9F9FB] "}>
      <Header />
      <div className={"mt-0 h-full"}>
        <div className={"flex justify-center mt-5"}>
          <span
            className={
              "px-5 py-1 mt-2 rounded-4xl border border-gray-300 text-center text-l"
            }
          >
            BlogSprout
          </span>
        </div>
        <h4 className={"mt-3 text-center text-5xl font-semibold"}>
          Узнавай интересные новости <br /> самым первым!
        </h4>
        <span className={"flex justify-center text-center mt-5 font-semibold"}>
          <IconUser />
          От Данила Жилина
          <IconCalendar />
          23 июля, 15 секунд назад
        </span>
        <div className={"flex justify-center"}>
          <img className={"mt-10 h-100 w-200"} src="/icons/Novost.png" alt="" />
        </div>
        <div className="flex justify-center gap-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <h3 className="font-bold text-xl mb-2">Молниеносные новости</h3>
            <p>Получай обновления раньше всех - наши авторы работают 24/7</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <h3 className="font-bold text-xl mb-2">Живое обсуждение</h3>
            <p>Делись мнением с тысячами единомышленников</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <h3 className="font-bold text-xl mb-2">
              Только качественный контент
            </h3>
            <p>Ручная модерация и авторские материалы</p>
          </div>
        </div>

        <div className={"flex justify-center"}>
          <button
            onClick={lets_start}
            className="py-3 mr-6 mt-2 px-8 border rounded-2xl bg-[#3328BF] text-3xl text-white font-semibold hover:bg-[#251D8F] transition"
          >
            Давай начнем!
          </button>
        </div>
        <h4 className={"mt-10 text-center text-5xl font-semibold"}>
          Оставляй комментарии и лайки
          <br /> тем кто понравится
        </h4>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl max-w-md mx-auto mt-10">
          <div className="flex items-center mb-4">
            <IconCalendar />
            <div>
              <h3 className="ml-2 font-bold text-xl">Елена К.</h3>
              <p className="ml-2 text-yellow-600 font-semibold">
                Топ-комментатор недели
              </p>
            </div>
          </div>
          <p className="italic mb-4">
            "Обожаю делиться своими мыслями и находить единомышленников здесь!"
          </p>
          <div className="flex justify-between text-sm">
            <span>🔹 124 комментария</span>
            <span>🔹 89 лайков</span>
            <span>🔹 3 топ-обсуждения</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 my-12">
          <div className="text-center max-w-xs">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="font-bold text-lg mb-2">Читай статью</h3>
            <p>Найди интересную тему в своей ленте</p>
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="font-bold text-lg mb-2">Реагируй</h3>
            <p>Ставь лайк или сохраняй в закладки</p>
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="font-bold text-lg mb-2">Обсуждай</h3>
            <p>Делись мнением с автором и другими читателями</p>
          </div>
        </div>
      </div>
    </div>
  );
}
