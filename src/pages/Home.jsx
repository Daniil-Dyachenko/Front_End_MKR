import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h1>Ми раді вас вітати у Mojangys</h1>

        <section className="about">
          <img src="/images/about.jpg" alt="About KPI-tter" className="about-image" />
          <div className="about-content">
            <h2>Про Mojangys</h2>
            <p>
            Mojangys — це сучасна соціальна платформа для мікроблогінгу, яка дозволяє користувачам ділитися короткими повідомленнями, думками та ідеями зі своєю аудиторією.
            Mojangys надає зручний інтерфейс, швидкі інструменти для публікацій і широкі можливості для взаємодії з іншими учасниками платформи. Це місце, де кожен голос може бути почутим!
            </p>
            <p>
            Це дозволяє користувачам залишатися в контакті з іншими учасниками та швидко обмінюватися ідеями та досвідом.
            </p>
          </div>
        </section>

        <section className="advantages">
          <h2>Які в нас переваги?</h2>
          <ul>
            <li>
              <img src="/images/advantage1.jpg" alt="Achievement" />
              <p>Діліться своїми досягненнями в професійній сфері.</p>
            </li>
            <li>
              <img src="/images/advantage2.jpg" alt="Connection" />
              <p>Залишайтеся в контакті з людьми, які поділяють ваші погляди та інтереси.</p>
            </li>
            <li>
              <img src="/images/advantage3.jpg" alt="Feedback" />
              <p>Отримуйте зворотний зв'язок щодо ваших ідей та проектів.</p>
            </li>
            <li>
              <img src="/images/advantage4.jpg" alt="Trends" />
              <p>
              Слідкуйте за новими тенденціями у сфері ваших інтересів.</p>
            </li>
            <li>
              <img src="/images/advantage5.jpg" alt="Knowledge Sharing" />
              <p>Обмінюйтеся цінними знаннями та досвідом з іншими , щоб разом досягати нових висот.</p>
            </li>
            <li>
              <img src="/images/advantage6.jpg" alt="Community" />
              <p>Приєднуйтесь до професійної спільноти та розширюйте своє коло знайомств.</p>
            </li>
          </ul>
        </section>

        <section className="how-it-works">
          <img src="/images/how-it-works.jpg" alt="How it works" className="how-it-works-image" />
          <p>
          Зареєструйтесь, створіть профіль та починайте публікувати свої думки, ідеї і контент! Ви можете ставити лайки, коментувати пости інших користувачів та ділитися своїми записами з мережею.
          Блогінг на платформі — це не тільки можливість висловити свої думки, а й шанс побудувати свою онлайн-презентацію, продемонструвати професійні досягнення та стати частиною активної спільноти. Від публікацій, 
          що стосуються вашої роботи, до поділу інсайтами з особистих проєктів — кожен пост може стати важливим кроком до побудови вашого особистого бренду.
          </p>
          <p>
          Це ідеальний спосіб залишатися на хвилі актуальних трендів, отримувати зворотний зв'язок від колег і підписників , 
          а також обмінюватися знаннями та досвідом, що може допомогти у вашій кар'єрі чи особистих проєктах.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;